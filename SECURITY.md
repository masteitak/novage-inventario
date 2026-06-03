# Seguridad — Novage Inventario

## Politica basica

Este repositorio no debe contener secretos ni datos sensibles reales.

## No subir

- Claves API.
- Tokens.
- Contrasenas.
- Archivos `.env` reales.
- Credenciales de Google.
- Datos clinicos identificables.
- Correos o telefonos privados.
- Informacion financiera sensible no autorizada.

## Riesgos actuales

- `index.html` es una aplicacion estatica visible desde GitHub Pages.
- Los PIN operativos definidos en cliente no equivalen a autenticacion segura de backend.
- `localStorage` depende del navegador y puede perderse si se limpia el perfil local.

## Recomendaciones

1. Mantener GitHub como fuente tecnica de verdad.
2. Usar GitHub Secrets para cualquier integracion futura que requiera credenciales.
3. Separar datos operativos reales de la pagina publicada cuando el sistema escale.
4. Migrar autenticacion y escritura de datos sensibles a servicios backend si se requiere seguridad fuerte.
