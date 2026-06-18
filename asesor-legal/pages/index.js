// pages/index.js
import { useState, useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';

// ——— Constantes ———
const AREAS_LABEL = {
  herencia: '📜 Herencia',
  laboral: '💼 Laboral',
  familia: '👨‍👩‍👧 Familia',
  seguros: '🏥 Seguros/Salud',
  civil: '📋 Civil',
  penal: '⚖️ Penal',
  administrativo: '🏛️ Administrativo',
  propiedad: '🏠 Propiedad',
};

const AREAS_OPTIONS = [
  { value: '', label: 'Detectar automáticamente...' },
  { value: 'herencia', label: '📜 Herencia y posesión efectiva' },
  { value: 'laboral', label: '💼 Laboral — despido, finiquito, cobros' },
  { value: 'familia', label: '👨‍👩‍👧 Familia — alimentos, divorcio, cuidado' },
  { value: 'seguros', label: '🏥 Seguros, Isapre, salud' },
  { value: 'civil', label: '📋 Civil y contratos' },
  { value: 'penal', label: '🛡️ Penal — denuncia, querella' },
  { value: 'administrativo', label: '🏛️ Administrativo y reclamos' },
  { value: 'propiedad', label: '🏠 Propiedad y bienes raíces' },
];

const ACCEPT_FILES = '.pdf,.png,.jpg,.jpeg,.webp,.heic,.gif,.txt';

export default function Home() {
  const [tab, setTab] = useState('form');
  const [area, setArea] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [problema, setProblema] = useState('');
  const [docs, setDocs] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [docPregunta, setDocPregunta] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hola 👋 Cuéntame tu situación con todo el detalle que necesites. Mientras más me expliques, más preciso será el análisis.' }
  ]);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState('');
  const [informe, setInforme] = useState('');
  const [areaDetectada, setAreaDetectada] = useState('');
  const [dragging, setDragging] = useState(false);
  const [cacheHit, setCacheHit] = useState(false);
  const fileInputRef = useRef(null);
  const informeRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, streaming]);

  // ——— Procesar archivo ———
  const processFile = useCallback((f) => {
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const b64 = e.target.result.split(',')[1];
      setFile({ name: f.name, type: f.type || 'application/octet-stream', data: b64, size: f.size });
      if (f.type.startsWith('image/')) {
        setFilePreview(e.target.result);
      } else {
        setFilePreview(null);
      }
    };
    reader.readAsDataURL(f);
  }, []);

  // ——— Llamada al backend con streaming ———
  const llamarAPI = useCallback(async ({ messages, areaForzada, fileData, fileType, fileName }) => {
    setLoading(true);
    setStreaming('');
    setInforme('');
    setCacheHit(false);

    try {
      const res = await fetch('/api/legal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages,
          area: areaForzada || area || undefined,
          fileData: fileData || undefined,
          fileType: fileType || undefined,
          fileName: fileName || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Error del servidor');
      }

      // Detectar caché hit
      if (res.headers.get('X-Cache') === 'HIT') setCacheHit(true);
      const detectedArea = res.headers.get('X-Legal-Area');
      if (detectedArea) setAreaDetectada(detectedArea);

      const contentType = res.headers.get('Content-Type') || '';

      // Si no es streaming (caché hit), leer JSON directamente
      if (!contentType.includes('text/event-stream')) {
        const data = await res.json();
        setInforme(data.content || '');
        setLoading(false);
        return data.content || '';
      }

      // Streaming SSE
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        for (const line of chunk.split('\n')) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                full += data.text;
                setStreaming(prev => prev + data.text);
              }
              if (data.done) {
                setInforme(full);
                setStreaming('');
                if (data.area) setAreaDetectada(data.area);
              }
            } catch {}
          }
        }
      }

      setLoading(false);
      return full;

    } catch (err) {
      setLoading(false);
      setStreaming('');
      alert('Error: ' + err.message);
      return null;
    }
  }, [area]);

  // ——— Analizar formulario ———
  const analizarForm = async () => {
    if (!problema.trim()) { alert('Describe el problema primero.'); return; }
    const prompt = `ÁREA: ${area || 'Detectar automáticamente'}\nURGENCIA: ${urgencia || 'No especificada'}\nSITUACIÓN:\n${problema}${docs ? '\n\nDOCUMENTOS DISPONIBLES: ' + docs : ''}${objetivo ? '\n\nQUÉ QUIERO LOGRAR: ' + objetivo : ''}`;
    await llamarAPI({ messages: [{ role: 'user', content: prompt }] });
    setTimeout(() => informeRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  // ——— Enviar chat ———
  const enviarChat = async () => {
    const txt = chatInput.trim();
    if (!txt && !file) return;
    setChatInput('');

    const newMsg = { role: 'user', content: txt, file: file?.name };
    const newHistory = [...chatHistory, newMsg];
    setChatHistory(newHistory);

    // Construir mensajes para API (sin el primer mensaje del assistant que es bienvenida)
    const apiMessages = newHistory
      .filter(m => m.role !== 'assistant' || chatHistory.indexOf(m) > 0)
      .map(m => ({ role: m.role, content: m.content || '' }));

    const result = await llamarAPI({
      messages: apiMessages,
      fileData: file?.data,
      fileType: file?.type,
      fileName: file?.name,
    });

    if (result) {
      const isInforme = result.includes('## ') && result.includes('DIAGNÓSTICO');
      if (isInforme) {
        setChatHistory(prev => [...prev, { role: 'assistant', content: '✅ Tu informe jurídico está listo abajo.' }]);
        setTimeout(() => informeRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
      } else {
        setChatHistory(prev => [...prev, { role: 'assistant', content: result }]);
      }
    }
    setFile(null);
    setFilePreview(null);
  };

  // ——— Analizar documento ———
  const analizarDoc = async () => {
    if (!file && !docPregunta.trim()) { alert('Sube un archivo y escribe tu pregunta.'); return; }
    const prompt = docPregunta.trim() || 'Analiza este documento jurídicamente bajo la ley chilena. Extrae primero el texto visible si es una imagen, luego genera un informe completo con plan de acción.';
    await llamarAPI({
      messages: [{ role: 'user', content: prompt }],
      fileData: file?.data,
      fileType: file?.type,
      fileName: file?.name,
    });
    setTimeout(() => informeRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  // ——— Render secciones del informe ———
  const renderInforme = (texto) => {
    if (!texto) return null;
    const secciones = texto.split(/\n## /).map(s => s.replace(/^## /, ''));
    const CONFIG = {
      'DIAGNÓSTICO': { color: '#1a3260', tag: 'Diagnóstico', tagBg: '#e8edf7', tagColor: '#1a3260' },
      'PLAZOS': { color: '#dc2626', tag: '⚠️ Urgente', tagBg: '#fee2e2', tagColor: '#dc2626' },
      'ESTRATEGIA': { color: '#16a34a', tag: 'Estrategia', tagBg: '#dcfce7', tagColor: '#16a34a' },
      'PLAN': { color: '#d97706', tag: 'Acción', tagBg: '#fef3c7', tagColor: '#d97706' },
      'DOCUMENTOS': { color: '#1d4ed8', tag: 'Docs', tagBg: '#dbeafe', tagColor: '#1d4ed8' },
      'SITIOS': { color: '#1d4ed8', tag: 'Links', tagBg: '#dbeafe', tagColor: '#1d4ed8' },
      'NOTA': { color: '#d97706', tag: 'Aviso', tagBg: '#fef3c7', tagColor: '#d97706' },
    };
    return secciones.map((sec, i) => {
      if (!sec.trim()) return null;
      const lines = sec.split('\n');
      const titulo = lines[0].trim();
      const cuerpo = lines.slice(1).join('\n').trim();
      const key = Object.keys(CONFIG).find(k => titulo.toUpperCase().includes(k));
      const cfg = key ? CONFIG[key] : { color: '#374151', tag: '', tagBg: '', tagColor: '' };
      const cuerpoHtml = cuerpo
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/(https?:\/\/[^\s<>"]+)/g, u => `<a href="${u}" target="_blank" rel="noopener" style="color:#1d4ed8;text-decoration:none;border-bottom:1px solid #bfdbfe">${u}</a>`)
        .replace(/\n/g, '<br>');
      return (
        <div key={i} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: i < secciones.length - 2 ? '1px solid #f3f4f6' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: cfg.color }}>{titulo}</span>
            {cfg.tag && <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', background: cfg.tagBg, color: cfg.tagColor }}>{cfg.tag}</span>}
          </div>
          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#374151', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: cuerpoHtml }} />
        </div>
      );
    });
  };

  const textoInforme = informe || streaming;

  return (
    <>
      <Head>
        <title>Asesor Legal Chile — Privado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.10.0/dist/tabler-icons.min.css" />
      </Head>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: #f8f6f1; color: #1f2937; min-height: 100vh; }
        input, select, textarea { font-family: inherit; font-size: 13px; width: 100%; padding: 9px 11px; border: 1px solid #e5e7eb; border-radius: 6px; background: white; color: #1f2937; outline: none; transition: border-color .15s; }
        input:focus, select:focus, textarea:focus { border-color: #0f1f3d; }
        .btn-primary { display: flex; align-items: center; justify-content: center; gap: 7px; width: 100%; padding: 12px; font-size: 14px; font-weight: 600; background: #0f1f3d; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 1rem; transition: background .15s; font-family: inherit; }
        .btn-primary:hover { background: #1a3260; }
        .btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }
        .card { background: white; border: 1px solid #e5e7eb; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.25rem; }
        .field { margin-bottom: 1rem; }
        .lbl { font-size: 11px; font-weight: 700; color: #4b5563; text-transform: uppercase; letter-spacing: .05em; display: block; margin-bottom: 5px; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media(max-width:600px){ .g2 { grid-template-columns: 1fr; } }
        .chip { font-size: 11px; padding: 3px 10px; border-radius: 20px; background: white; border: 1px solid #e5e7eb; color: #4b5563; display: inline-flex; align-items: center; gap: 3px; }
        .drop { border: 2px dashed #e5e7eb; border-radius: 10px; padding: 1.75rem; text-align: center; cursor: pointer; color: #9ca3af; font-size: 13px; transition: all .15s; }
        .drop:hover, .drop.drag { border-color: #0f1f3d; background: #eff6ff; }
        .msg-user { background: #0f1f3d; color: white; align-self: flex-end; padding: 9px 13px; border-radius: 10px; font-size: 13px; line-height: 1.6; max-width: 85%; }
        .msg-bot { background: #f3f4f6; color: #1f2937; border: 1px solid #e5e7eb; align-self: flex-start; padding: 9px 13px; border-radius: 10px; font-size: 13px; line-height: 1.6; max-width: 85%; }
        .spinner { display: inline-block; width: 14px; height: 14px; border: 2px solid rgba(255,255,255,.3); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .cursor-blink::after { content: '▍'; animation: blink 1s steps(1) infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        a { color: #1d4ed8; }
      `}</style>

      {/* HEADER */}
      <header style={{ background: '#0f1f3d', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,.25)' }}>
        <h1 style={{ color: 'white', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-gavel" style={{ color: '#c9a84c', fontSize: '20px' }} />
          Asesor Legal Élite — Chile
        </h1>
        <span style={{ background: '#c9a84c', color: '#0f1f3d', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px' }}>🔒 Privado</span>
      </header>

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '1.5rem 1rem' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f1f3d', marginBottom: '.4rem' }}>¿Cuál es tu situación legal?</h2>
          <p style={{ fontSize: '13px', color: '#4b5563', maxWidth: '540px', margin: '0 auto' }}>Describe tu problema y recibirás un análisis jurídico completo con normas chilenas, plazos exactos y plan de acción paso a paso.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginTop: '.75rem' }}>
            {['📜 Herencias', '💼 Laboral', '👨‍👩‍👧 Familia', '🏥 Seguros', '📋 Civil', '⚖️ Penal', '🏛️ Reclamos', '🏠 Propiedad'].map(a => (
              <span key={a} className="chip">{a}</span>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.25rem' }}>
          {[['form', 'ti-forms', 'Formulario'], ['chat', 'ti-message-2', 'Chat libre'], ['doc', 'ti-file-upload', 'Foto / Doc']].map(([id, icon, label]) => (
            <button key={id} onClick={() => setTab(id)} style={{ flex: 1, padding: '11px 6px', fontSize: '12px', fontWeight: 600, background: tab === id ? '#0f1f3d' : 'transparent', color: tab === id ? 'white' : '#9ca3af', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', borderRight: id !== 'doc' ? '1px solid #e5e7eb' : 'none', fontFamily: 'inherit' }}>
              <i className={`ti ${icon}`} style={{ fontSize: '15px' }} />
              {label}
            </button>
          ))}
        </div>

        {/* ——— FORMULARIO ——— */}
        {tab === 'form' && (
          <div className="card">
            <div className="g2">
              <div className="field">
                <label className="lbl">Área del problema</label>
                <select value={area} onChange={e => setArea(e.target.value)}>
                  {AREAS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div className="field">
                <label className="lbl">Urgencia</label>
                <select value={urgencia} onChange={e => setUrgencia(e.target.value)}>
                  <option value="">Selecciona...</option>
                  <option>🔴 Urgente — esta semana</option>
                  <option>🟠 Alta — menos de un mes</option>
                  <option>🟡 Media — tengo tiempo</option>
                  <option>🟢 Sin urgencia — quiero informarme</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="lbl">Describe qué pasó (con el mayor detalle posible)</label>
              <textarea rows={6} value={problema} onChange={e => setProblema(e.target.value)} placeholder="Ej: Mi padre falleció en enero 2026. Somos 3 hermanos. Hay una casa y una cuenta bancaria. Mi hermano dice que tiene un testamento pero nunca lo hemos visto. Él vive en la casa y no quiere salir..." />
            </div>
            <div className="g2">
              <div className="field">
                <label className="lbl">Documentos que tienes</label>
                <input type="text" value={docs} onChange={e => setDocs(e.target.value)} placeholder="Ej: certificado defunción, escrituras..." />
              </div>
              <div className="field">
                <label className="lbl">¿Qué quieres lograr?</label>
                <input type="text" value={objetivo} onChange={e => setObjetivo(e.target.value)} placeholder="Ej: reclamar mi parte, recuperar dinero..." />
              </div>
            </div>
            <button className="btn-primary" onClick={analizarForm} disabled={loading}>
              {loading ? <><span className="spinner" />&nbsp;Analizando...</> : <><i className="ti ti-search" /> Analizar y generar informe jurídico</>}
            </button>
          </div>
        )}

        {/* ——— CHAT ——— */}
        {tab === 'chat' && (
          <div className="card">
            <div style={{ minHeight: '160px', maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem', padding: '2px 0' }}>
              {chatHistory.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'msg-user' : 'msg-bot'} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  {m.content}
                  {m.file && <div style={{ fontSize: '11px', marginTop: '4px', opacity: .7 }}>📎 {m.file}</div>}
                </div>
              ))}
              {loading && streaming && (
                <div className="msg-bot" style={{ alignSelf: 'flex-start' }}>
                  <span className="cursor-blink">{streaming.slice(-200)}</span>
                </div>
              )}
              {loading && !streaming && <div className="msg-bot" style={{ alignSelf: 'flex-start', color: '#9ca3af' }}>Analizando...</div>}
              <div ref={chatEndRef} />
            </div>
            {/* Adjunto en chat */}
            {file && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '12px', color: '#16a34a', background: '#dcfce7', padding: '6px 10px', borderRadius: '6px' }}>
                <i className="ti ti-paperclip" />
                {file.name}
                <button onClick={() => { setFile(null); setFilePreview(null); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', fontSize: '16px' }}>×</button>
              </div>
            )}
            <div style={{ display: 'flex', gap: '8px' }}>
              <textarea rows={3} value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarChat(); } }} placeholder="Escribe tu situación... (Enter para enviar, Shift+Enter para nueva línea)" style={{ flex: 1, resize: 'none', minHeight: '56px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <button onClick={() => fileInputRef.current?.click()} title="Adjuntar foto o documento" style={{ padding: '8px', background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '6px', cursor: 'pointer', fontSize: '18px' }}>
                  <i className="ti ti-paperclip" style={{ color: '#4b5563' }} />
                </button>
                <button onClick={enviarChat} disabled={loading} style={{ padding: '8px 14px', background: '#0f1f3d', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '17px' }}>
                  <i className="ti ti-send" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ——— DOCUMENTO / FOTO ——— */}
        {tab === 'doc' && (
          <div className="card">
            <div className={`drop${dragging ? ' drag' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) processFile(f); }}>
              <i className="ti ti-file-upload" style={{ fontSize: '32px', display: 'block', marginBottom: '10px', color: '#c9a84c' }} />
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Arrastra o haz clic para subir</div>
              <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                📷 Fotos de documentos físicos · 📸 Capturas de pantalla (chats, correos, notificaciones)<br />
                📄 PDFs · 📝 Archivos de texto · JPG, PNG, WEBP, HEIC
              </div>
              {file && (
                <div style={{ marginTop: '10px', color: '#16a34a', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <i className="ti ti-circle-check" /> {file.name} ({(file.size / 1024).toFixed(0)} KB)
                </div>
              )}
            </div>
            {/* Preview de imagen */}
            {filePreview && (
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img src={filePreview} alt="Preview" style={{ maxHeight: '200px', maxWidth: '100%', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              </div>
            )}
            <div className="field">
              <label className="lbl">¿Qué necesitas saber sobre este archivo?</label>
              <textarea rows={3} value={docPregunta} onChange={e => setDocPregunta(e.target.value)} placeholder="Ej: ¿Este testamento es válido? ¿Tiene cláusulas abusivas? ¿Qué debo hacer con esta notificación? ¿Qué dice este chat de WhatsApp y qué implica legalmente?" />
            </div>
            <button className="btn-primary" onClick={analizarDoc} disabled={loading}>
              {loading ? <><span className="spinner" />&nbsp;Analizando...</> : <><i className="ti ti-file-search" /> Analizar archivo</>}
            </button>
          </div>
        )}

        {/* Input file oculto global */}
        <input ref={fileInputRef} type="file" accept={ACCEPT_FILES} style={{ display: 'none' }}
          onChange={e => { if (e.target.files[0]) processFile(e.target.files[0]); e.target.value = ''; }} />

        {/* ——— STREAMING EN TIEMPO REAL ——— */}
        {loading && streaming && tab === 'form' && (
          <div className="card" style={{ borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <div style={{ fontSize: '12px', color: '#1d4ed8', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="spinner" style={{ borderColor: 'rgba(29,78,216,.3)', borderTopColor: '#1d4ed8' }} />
              Generando informe...
              {areaDetectada && <span style={{ marginLeft: '4px', color: '#4b5563', fontWeight: 400 }}>Área detectada: {AREAS_LABEL[areaDetectada] || areaDetectada}</span>}
            </div>
            <div style={{ fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre-wrap', color: '#374151' }} className="cursor-blink">
              {streaming}
            </div>
          </div>
        )}

        {/* ——— INFORME FINAL ——— */}
        {textoInforme && !loading && (
          <div ref={informeRef} className="card" style={{ borderTop: '3px solid #0f1f3d' }}>
            <div style={{ background: '#0f1f3d', margin: '-1.25rem -1.25rem 1.25rem', padding: '.9rem 1.25rem', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ color: 'white', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }}>
                <i className="ti ti-file-description" style={{ color: '#c9a84c' }} />
                Informe jurídico completo
                {areaDetectada && <span style={{ fontSize: '11px', background: 'rgba(255,255,255,.15)', padding: '2px 8px', borderRadius: '20px' }}>{AREAS_LABEL[areaDetectada]}</span>}
                {cacheHit && <span style={{ fontSize: '10px', background: '#16a34a', padding: '2px 6px', borderRadius: '20px' }}>⚡ Caché</span>}
              </h2>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button onClick={() => window.print()} style={{ padding: '5px 10px', fontSize: '11px', fontWeight: 500, background: 'rgba(255,255,255,.12)', color: 'white', border: '1px solid rgba(255,255,255,.25)', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'inherit' }}>
                  <i className="ti ti-printer" /> Imprimir
                </button>
                <button onClick={() => { navigator.clipboard.writeText(textoInforme); alert('Copiado ✓'); }} style={{ padding: '5px 10px', fontSize: '11px', fontWeight: 500, background: 'rgba(255,255,255,.12)', color: 'white', border: '1px solid rgba(255,255,255,.25)', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'inherit' }}>
                  <i className="ti ti-copy" /> Copiar
                </button>
              </div>
            </div>
            {renderInforme(textoInforme)}
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '6px', padding: '9px 13px', fontSize: '11px', color: '#d97706', display: 'flex', gap: '7px', alignItems: 'flex-start', marginTop: '1rem' }}>
              <i className="ti ti-alert-triangle" style={{ flexShrink: 0, marginTop: '2px' }} />
              Este análisis es orientación jurídica informativa. Para representación judicial y actos que requieren patrocinio, consulta a un abogado habilitado ante la Corte de Apelaciones.
            </div>
          </div>
        )}

      </div>
    </>
  );
}
