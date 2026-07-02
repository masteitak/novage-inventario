# Estado Del Sistema

## Alcance actual

- inventario comercial
- gestion de productos
- lotes y vencimientos
- pedidos comerciales
- ventas de productos
- ventas de servicios
- insumos de sueroterapia

## Roles

- `2166`: administracion total
- `2162`: acceso operativo restringido

## Fuente de precios

- catalogo local en `index.html`
- precio de venta con sincronizacion preparada desde Google Sheet
- costo, stock, lotes y contabilidad siguen locales

## Publicacion

- repositorio: `https://github.com/masteitak/novage-inventario`
- sitio: `https://masteitak.github.io/novage-inventario/`

## Siguiente evolucion recomendada

1. mover logica a modulos
2. separar datos del artefacto
3. consolidar fuente maestra de catalogo
4. extender documentacion tecnica en `docs/`
