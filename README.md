# NOVAGE · Compras e Inventario

Producto especializado para inventario, proveedores, órdenes de compra y trazabilidad operacional NOVAGE.

## Responsabilidad única

Este repositorio responde **qué hay, qué falta, qué vence, qué se solicita, qué se aprueba y qué se recibe** en inventario/compras.

No es repositorio clínico, financiero general, jurídico, de RR.HH. ni de agentes productivos.

## Flujo operativo preservado

`acción → confirmación humana → cambio de estado → efecto autorizado → evento/auditoría`

Ejemplo actual de orden:

`Solicitada → Aprobada → Correo preparado → Recibida`

La compra efectiva, aprobación de proveedor y ajustes físicos sensibles no deben delegarse a un agente.

## Fronteras canónicas

- Gobierno, políticas, Event/Action/RBAC → `masteitak/NOVAGE_OS`.
- Action Center y agentes productivos → `masteitak/centrocomando`.
- Laboratorio de IA → `masteitak/novage-agentes-ia`.
- Código y lógica específica de inventario → **este repositorio**.
- Documentos/evidencia reales → Google Drive canónico según permisos.
- Datos estructurados compartidos → fuente operativa autorizada cuando sea definida; no asumir Drive/Sheets/Medilink como autoridad sin registry explícito.

## Estado actual

- App web estática con Functions en `api/`.
- Datos demo identificados como ficticios.
- Persistencia demostrativa local cuando no existe backend autorizado.
- Aprobación y recepción requieren interacción humana.
- Integraciones se reportan como configuradas/pendientes sin versionar secretos.

## Variables esperadas

Los nombres de variables pueden existir en configuración; sus valores nunca se versionan:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_DRIVE_FOLDER_ID`
- `GOOGLE_INVENTORY_SHEET_ID` o `GOOGLE_SHEET_ID`
- `SUPABASE_URL` y `SUPABASE_ANON_KEY`, si se aprueba esa persistencia.

No usar IDs reales hard-coded como fallback de producción.

## Estructura relevante

```text
novage-inventario/
├── api/
├── docs/
├── src/
│   ├── js/novage.js
│   └── styles/novage.css
├── 06_AGENTES_IA/          # legacy prompts de herramientas; no agentes productivos
├── index.html
├── SECURITY.md
├── design-qa.md
└── vercel.json
```

## Integración con Command Center

Ver `docs/COMMAND_CENTER_CONTRACT.md`. El producto debe publicar o exponer hechos no sensibles como eventos canónicos; el Command Center decide cómo convertirlos en `Action` y qué aprobaciones exige.

## Seguridad

- No almacenar pacientes, ficha clínica, RUT, credenciales, tokens ni secretos.
- Una fuente real read-only no debe convertirse accidentalmente en escritura.
- No persistir datos reales en `localStorage` por defecto.
- Toda integración real necesita fuente autorizada, permisos mínimos, health check y auditoría.
- No usar nombres de personas hard-coded como identidad de usuario; la identidad debe provenir de autenticación/configuración autorizada.

## Backlog histórico

Las ramas antiguas de integración o funciones fuera de alcance se conservan como historial, pero no son fuentes canónicas. Los PR legacy fueron cerrados para evitar evolución paralela.
