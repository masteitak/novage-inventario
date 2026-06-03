# Project Context — Novage Inventario

## Objetivo

Mantener publicada una pagina HTML operativa para el control de inventario Novage en GitHub Pages, con una estructura de repositorio clara, auditable y facil de evolucionar.

## Alcance actual

- Inventario comercial.
- Gestion de productos, stock, bodegas y espacios.
- Ventas POS y ventas de servicios.
- Pedidos comerciales.
- Insumos de sueroterapia.
- Control contable basico y cierre diario.

## Fuente de verdad tecnica

- Repositorio GitHub: `https://github.com/masteitak/novage-inventario`.
- Pagina publicada: `https://masteitak.github.io/novage-inventario/`.
- Archivo publicado principal: `index.html`.

## Criterio operativo

Mientras no exista una migracion modular completa, `index.html` debe mantenerse en la raiz del repositorio para que GitHub Pages lo publique directamente.

## Limites conocidos

- El sistema es una aplicacion estatica HTML/JS/CSS.
- El estado operativo se apoya en `localStorage` y sincronizaciones disponibles.
- El control de PIN es una separacion operativa basica, no un mecanismo de seguridad fuerte de produccion.
- No se deben subir secretos, credenciales, bases sensibles ni archivos `.env` reales.
