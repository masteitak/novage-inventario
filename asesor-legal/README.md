# Asesor Legal Élite — Chile
App privada de asesoría legal con IA. Next.js + Anthropic API.

## Deploy en 5 pasos

### 1. Clonar / subir a GitHub
Sube esta carpeta a un repositorio privado en github.com

### 2. Conectar a Vercel
1. Ir a vercel.com → New Project
2. Importar el repositorio de GitHub
3. Framework: Next.js (lo detecta automáticamente)
4. Click "Deploy"

### 3. Configurar variable de entorno (OBLIGATORIO)
En Vercel → Settings → Environment Variables:
```
ANTHROPIC_API_KEY = sk-ant-api03-XXXXXXXX...
```
Opcional (para protección con PIN):
```
ACCESS_PIN = 2166
```

### 4. Re-deployar
Después de agregar las variables, haz re-deploy desde Vercel.

### 5. Listo
Tu URL será: https://asesor-legal-chile.vercel.app (o el nombre que elijas)

---

## Uso local (desarrollo)
```bash
cp .env.example .env.local
# Edita .env.local con tu API key real
npm install
npm run dev
# Abre http://localhost:3000
```

---

## Arquitectura de ahorro de tokens

El sistema detecta automáticamente el área legal de la consulta y carga
SOLO el módulo correspondiente (~800 tokens) en vez del compendio completo (~4.000 tokens).

Áreas detectadas:
- herencia: palabras como "falleci", "testamento", "heredero", "posesión efectiva"
- laboral: "despido", "finiquito", "cotizacion", "sueldo"
- familia: "alimento", "divorcio", "cuidado personal"
- seguros: "isapre", "reembolso", "licencia médica", "MetLife"
- civil: contratos, arriendo, deudas
- penal: "denuncia", "querella", "robo", "fiscal"
- administrativo: "recurso de protección", "SERNAC", "transparencia"
- propiedad: "terreno", "CBR", "inscripción", "hipoteca"

Ahorro estimado: 80% de tokens de sistema por consulta.

---

## Funciones soportadas
- Formulario guiado con detección automática de área
- Chat libre con historial de conversación
- Subir fotos de documentos físicos (JPG, PNG, HEIC)
- Subir capturas de pantalla (chats, correos, notificaciones)
- Subir PDFs
- Streaming en tiempo real (respuesta progresiva)
- Caché en memoria (consultas repetidas sin costo)
- Imprimir y copiar informe

---

## Estructura de archivos
```
asesor-legal/
├── pages/
│   ├── index.js          ← UI completa (formulario, chat, documentos)
│   └── api/
│       └── legal.js      ← API Route (API key segura, streaming, caché)
├── lib/
│   └── modulos-legales.js ← Compendio por área + detector automático
├── .env.example
├── next.config.js
└── package.json
```
