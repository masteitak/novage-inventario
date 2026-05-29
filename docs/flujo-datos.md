# Flujo De Datos

## Fuente actual

- catalogo local en `index.html`
- precio de venta sincronizable desde Google Sheet
- stock, lotes y pedidos guardados en `localStorage`
- Apps Script para operaciones ya integradas en el artefacto

## Flujo operativo

1. cargar catalogo local
2. restaurar estado local
3. sincronizar precio de venta externo si la sheet responde
4. renderizar inventario, gestion, pedidos y ventas
5. guardar cambios locales y sincronizaciones disponibles

## Datos locales clave

- stock por ubicacion
- lotes y vencimientos
- pedido comercial
- ventas de productos
- ventas de servicios
- insumos clinicos

## Fuente externa actual

- Google Sheet: precio de venta WELL PLUS

## Fuente externa recomendada futura

- endpoint estable de catalogo
- hoja maestra para precios y presentaciones
- sincronizacion trazable con timestamp
