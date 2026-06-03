# Novage Inventario

Sistema operativo de inventario, ventas y control comercial para Novage, mantenido como pagina HTML publicada en GitHub Pages.

## Objetivo

Centralizar en un solo sistema:

- inventario comercial
- ventas de productos y servicios
- pedidos comerciales
- insumos de sueroterapia
- control basico contable por empresa

## Pagina principal

- Archivo publicado: `index.html`
- Sitio web: `https://masteitak.github.io/novage-inventario/`
- Repositorio: `https://github.com/masteitak/novage-inventario`

> Nota tecnica: `index.html` debe permanecer en la raiz mientras GitHub Pages publique este repositorio sin proceso de build.

## Estructura del repositorio

```text
/
├── index.html                     # Pagina final publicada
├── novage_sistema_inventario.html # HTML historico / referencia
├── README.md                      # Resumen del proyecto
├── PROJECT_CONTEXT.md             # Contexto operativo y alcance
├── SECURITY.md                    # Reglas de seguridad
├── CHANGELOG.md                   # Historial de cambios
├── .nojekyll                      # Publicacion directa en GitHub Pages
└── docs/                          # Documentacion tecnica
```

## Estado actual

- Proyecto preparado para publicacion en GitHub Pages.
- Panel dedicado de `Gestion Inventario`.
- Control de acceso operativo por roles:
  - `2166` administracion
  - `2162` trabajo
- Lotes y vencimientos multiples.
- Pedido comercial con detalle por item.
- Insumos clinicos para sueroterapia.
- Precio de venta preparado para sincronizacion desde Google Sheet.

## Capacidades implementadas

- inventario con stock por bodega y espacio
- edicion rapida de productos
- lotes por vencimiento
- ventas POS con descuento
- ventas de servicios
- control de pedidos con cantidad editable, costo y subtotal
- panel de gestion con fuente y ultima sincronizacion del precio

## Documentacion

- `PROJECT_CONTEXT.md`
- `SECURITY.md`
- `CHANGELOG.md`
- `docs/00_MAPA_MAESTRO.md`
- `docs/01_ARQUITECTURA.md`
- `docs/estado-sistema.md`
- `docs/arquitectura-modular.md`
- `docs/flujo-datos.md`
- Nota Obsidian: `NOVAGE/novage-inventario.md`

## Operacion basica

1. Abrir la pagina publicada en GitHub Pages.
2. Ingresar con el PIN operativo correspondiente.
3. Usar `Gestion Inventario` para administracion de productos.
4. Usar `Venta / Escaner` para ventas operativas.
5. Usar `Bodega / Traslados` para mover stock entre ubicaciones.
6. Usar `Cierre del Dia` para control diario.

## Proximos pasos recomendados

1. Validar en produccion la sincronizacion de precio de venta desde Google Sheet.
2. Separar HTML, estilos y logica en modulos.
3. Definir una fuente maestra estable para catalogo y precios.
4. Agregar pruebas automaticas minimas para sintaxis y datos.
5. Mantener documentacion tecnica actualizada en `docs/`.
