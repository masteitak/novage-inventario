# NOVAGE · Compras e Inventario

Aplicación web controlada para inventario, proveedores, órdenes de compra y trazabilidad. El panel replica la dirección visual crema/verde aprobada, sin elementos decorativos ajenos a la operación.

## Controles

- Los datos iniciales son ficticios y se identifican en pantalla.
- Una orden comienza como `Solicitada`; aprobar y recibir exige acción humana.
- La recepción actualiza inventario y genera un evento de auditoría.
- Gmail, Drive, Sheets y persistencia se reportan desde `/api/integrations`; una variable ausente queda `Pendiente`.
- No se almacenan PIN, secretos OAuth, pacientes ni datos clínicos en el repositorio.

## Vercel

El sitio es estático y usa Functions en `api/`. Las variables esperadas son nombres de configuración; nunca se versionan valores:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_DRIVE_FOLDER_ID`
- `GOOGLE_INVENTORY_SHEET_ID` o `GOOGLE_SHEET_ID`
- `SUPABASE_URL` y `SUPABASE_ANON_KEY` (si se autoriza persistencia compartida)

Sin esas variables, la aplicación permanece en modo demostrativo local y lo indica explícitamente.

Inventario clínico y comercial, stock, vencimientos, lote y alertas NOVAGE

## Área

NOVAGE

## Objetivo

Ordenar información, procesos, agentes, reportes y automatizaciones de forma segura, trazable y escalable.

## URL pública

https://masteitak.github.io/novage-inventario/

## Estructura del proyecto

```
novage-inventario/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── js/
│   │   └── novage.js
│   └── styles/
│       └── novage.css
├── 00_META/
├── 06_AGENTES_IA/
├── docs/
├── index.html
├── novage_sistema_inventario.html
├── README.md
└── SECURITY.md
```

## Cómo correr localmente

Abre `index.html` directamente desde la raíz del proyecto en tu navegador.

## Carpetas principales

- 00_META
- 01_ESTRATEGIA
- 02_PROCESOS
- 03_DATOS
- 04_LEGAL_COMPLIANCE
- 05_PLANTILLAS
- 06_AGENTES_IA
- 07_REPORTES
- 08_AUTOMATIZACIONES
- 09_ARCHIVO

## Regla de seguridad

No subir datos sensibles, documentos reales identificables, claves ni información privada sin anonimizar.
