# Novage Inventario

Sistema operativo de inventario, ventas y control comercial para Novage, mantenido en un artefacto HTML publicado en GitHub Pages.

## Proposito

Centralizar en un solo sistema:

- inventario comercial
- ventas de productos y servicios
- pedidos comerciales
- insumos de sueroterapia
- control basico contable por empresa

## Archivo principal

- `index.html`

## Estado actual

- Proyecto publicado en GitHub y GitHub Pages
- Panel dedicado de `Gestión Inventario`
- Control de acceso por roles:
  - `2166` administración
  - `2162` trabajo
- Lotes y vencimientos múltiples
- Pedido comercial con detalle por ítem
- Insumos clínicos para sueroterapia
- Precio de venta preparado para sincronización desde Google Sheet

## Capacidades implementadas

- inventario con stock por bodega y espacio
- edición rápida de productos
- lotes por vencimiento
- ventas POS con descuento
- ventas de servicios
- control de pedidos con cantidad editable, costo y subtotal
- panel de gestión con fuente y última sincronización del precio

## Documentacion

- `docs/estado-sistema.md`
- `docs/arquitectura-modular.md`
- `docs/flujo-datos.md`
- Nota Obsidian: `NOVAGE/novage-inventario.md`

## Proximos pasos recomendados

1. Validar en producción la sincronización de precio de venta desde Google Sheet.
2. Separar HTML, estilos y lógica en módulos.
3. Definir una fuente maestra estable para catálogo y precios.
4. Extender `docs/` con arquitectura, flujos y mantenimiento.

## Repositorio remoto

- GitHub: `https://github.com/masteitak/novage-inventario`
- Web: `https://masteitak.github.io/novage-inventario/`
