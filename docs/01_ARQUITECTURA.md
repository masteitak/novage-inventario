# Arquitectura — Novage Inventario

## Estado actual

El sistema esta concentrado en `index.html` como artefacto unico HTML/CSS/JavaScript para facilitar publicacion directa en GitHub Pages.

## Capas logicas dentro del artefacto

1. **Interfaz**: navegacion, tablas, formularios, modales y paneles.
2. **Dominio**: productos, lotes, ventas, pedidos, servicios, insumos y cierre diario.
3. **Estado local**: `localStorage` para persistencia en navegador.
4. **Sincronizacion**: integraciones preparadas con Google Sheets / Apps Script donde corresponda.
5. **Roles operativos**: PIN de administracion y trabajo para separar acciones visibles.

## Riesgos tecnicos

- Archivo monolitico dificil de revisar si crece sin control.
- Persistencia local dependiente del navegador.
- PIN en frontend no debe tratarse como seguridad robusta.
- Sin pruebas automaticas de flujo completo en navegador dentro del repositorio.

## Arquitectura objetivo

```text
/
├── index.html
├── data/
│   └── catalogo.json
├── modules/
│   ├── auth.js
│   ├── inventory.js
│   ├── lots.js
│   ├── orders.js
│   ├── pos.js
│   ├── services.js
│   └── supplies.js
├── services/
│   ├── storage.js
│   └── sheets-sync.js
└── tests/
    └── syntax-checks
```

## Principio de migracion

Cada extraccion debe ser pequena, reversible y debe mantener funcionando la publicacion de GitHub Pages.
