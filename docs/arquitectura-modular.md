# Arquitectura Modular Propuesta

## Objetivo

Evolucionar `index.html` sin perder el artefacto actual, separando por capas estables.

## Fases

1. mantener `index.html` como artefacto operativo
2. extraer datos y configuracion
3. extraer logica por modulos
4. separar capa visual y servicios

## Estructura objetivo

- `index.html`: shell principal y montaje
- `docs/`: arquitectura y operacion
- `data/`: catalogos y configuracion
- `modules/`: inventario, ventas, pedidos, servicios, auth
- `services/`: sync sheet, storage, apps script
- `state/`: estado global y helpers

## Modulos sugeridos

- `modules/auth.js`
- `modules/inventory.js`
- `modules/lots.js`
- `modules/orders.js`
- `modules/pos.js`
- `modules/services.js`
- `modules/supplies.js`
- `modules/accounting.js`

## Principio de migracion

Cada extraccion debe dejar el sistema funcionando en GitHub Pages en todo momento.
