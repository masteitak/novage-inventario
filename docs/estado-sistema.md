# Estado Del Sistema

## Alcance actual

- inventario comercial
- gestion de productos
- lotes y vencimientos
- pedidos comerciales
- ventas de productos
- ventas de servicios
- insumos de sueroterapia

## Acceso

- Los PIN heredados fueron retirados por seguridad.
- La autorización productiva debe implementarse con identidad federada, roles verificables y auditoría.

## Fuente de datos

- Catálogo ficticio local para validar el flujo.
- Google y persistencia se informan como pendientes mientras falten variables y autorización.

## Publicacion

- repositorio: `https://github.com/masteitak/novage-inventario`
- sitio: `https://masteitak.github.io/novage-inventario/`

## Siguiente evolucion recomendada

1. mover logica a modulos
2. separar datos del artefacto
3. consolidar fuente maestra de catalogo
4. extender documentacion tecnica en `docs/`
