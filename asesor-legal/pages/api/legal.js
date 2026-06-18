// pages/api/legal.js
// API Route de Next.js — corre en el servidor, API key segura
// Soporta: texto, PDF (base64), imágenes (base64), streaming

import { SYSTEM_BASE, MODULOS, detectarArea } from '../../lib/modulos-legales';

// Caché simple en memoria (se resetea con cada deploy, suficiente para uso personal)
const cache = new Map();
const CACHE_TTL = 1000 * 60 * 60; // 1 hora

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // permite imágenes y PDFs pesados
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Verificar API key configurada
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key no configurada en variables de entorno' });
  }

  // PIN de acceso opcional (privado)
  const accessPin = process.env.ACCESS_PIN;
  if (accessPin && req.headers['x-access-pin'] !== accessPin) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    const { messages, area, fileData, fileType, fileName } = req.body;

    // Extraer el texto de la última consulta para detectar área
    const ultimaConsulta = messages?.findLast(m => m.role === 'user')?.content || '';
    const textoParaDetectar = typeof ultimaConsulta === 'string'
      ? ultimaConsulta
      : ultimaConsulta.find?.(c => c.type === 'text')?.text || '';

    // Detectar área automáticamente si no viene del frontend
    const areaDetectada = area || detectarArea(textoParaDetectar);
    const moduloLegal = MODULOS[areaDetectada] || MODULOS.civil;

    // System prompt = base + solo el módulo del área detectada (~800 tokens total)
    const systemPrompt = `${SYSTEM_BASE}\n\n${moduloLegal}`;

    // Cache key: hash simple de consulta + área (solo para consultas de texto)
    const cacheKey = !fileData ? `${areaDetectada}:${textoParaDetectar.slice(0, 100)}` : null;
    if (cacheKey && cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      if (Date.now() - cached.ts < CACHE_TTL) {
        res.setHeader('X-Cache', 'HIT');
        return res.status(200).json({ content: cached.content, area: areaDetectada });
      }
    }

    // Construir mensajes para Anthropic
    // Si hay archivo adjunto, lo añadimos al último mensaje del usuario
    let anthropicMessages = [...(messages || [])];

    if (fileData && anthropicMessages.length > 0) {
      const lastIdx = anthropicMessages.length - 1;
      const lastMsg = anthropicMessages[lastIdx];

      // Construir contenido multimodal
      let content = [];

      // Añadir el archivo (imagen o PDF)
      if (fileType === 'application/pdf') {
        content.push({
          type: 'document',
          source: {
            type: 'base64',
            media_type: 'application/pdf',
            data: fileData
          }
        });
      } else if (fileType.startsWith('image/')) {
        content.push({
          type: 'image',
          source: {
            type: 'base64',
            media_type: fileType,
            data: fileData
          }
        });
      }

      // Añadir el texto
      const textoActual = typeof lastMsg.content === 'string'
        ? lastMsg.content
        : lastMsg.content?.find?.(c => c.type === 'text')?.text || '';

      // Instrucción especial para capturas de pantalla y documentos físicos
      const instruccionImagen = fileType.startsWith('image/')
        ? `\n\n[INSTRUCCIÓN: Si la imagen contiene texto (documento, captura de pantalla, correo, chat, notificación), primero extrae y transcribe el texto visible completo, luego analiza jurídicamente su contenido. Archivo: ${fileName || 'imagen adjunta'}]`
        : `\n\n[Documento adjunto: ${fileName || 'documento'}]`;

      content.push({
        type: 'text',
        text: textoActual + instruccionImagen
      });

      anthropicMessages[lastIdx] = {
        role: 'user',
        content
      };
    }

    // Llamada a Anthropic API con streaming
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: systemPrompt,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!anthropicRes.ok) {
      const err = await anthropicRes.json();
      return res.status(500).json({ error: err.error?.message || 'Error de API' });
    }

    // Streaming: enviar tokens al cliente en tiempo real
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Legal-Area', areaDetectada);

    let fullContent = '';
    const reader = anthropicRes.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === 'content_block_delta' && data.delta?.text) {
              fullContent += data.delta.text;
              res.write(`data: ${JSON.stringify({ text: data.delta.text })}\n\n`);
            }
            if (data.type === 'message_stop') {
              // Guardar en caché si no tiene archivo
              if (cacheKey && fullContent) {
                cache.set(cacheKey, { content: fullContent, ts: Date.now() });
              }
              res.write(`data: ${JSON.stringify({ done: true, area: areaDetectada })}\n\n`);
            }
          } catch {}
        }
      }
    }

    res.end();

  } catch (error) {
    console.error('Error en API route:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}
