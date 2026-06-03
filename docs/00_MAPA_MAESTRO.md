# Mapa Maestro — Novage Inventario

## Proposito

Ordenar el repositorio para que la pagina HTML de inventario Novage sea facil de publicar, revisar, mantener y evolucionar.

## Estructura actual

```text
/
├── index.html                     # Pagina principal publicada en GitHub Pages
├── novage_sistema_inventario.html # Artefacto HTML historico / referencia local
├── README.md                      # Resumen operativo del repositorio
├── PROJECT_CONTEXT.md             # Contexto y alcance del proyecto
├── SECURITY.md                    # Reglas de seguridad operacional
├── CHANGELOG.md                   # Registro de cambios
└── docs/
    ├── 00_MAPA_MAESTRO.md
    ├── 01_ARQUITECTURA.md
    ├── arquitectura-modular.md
    ├── estado-sistema.md
    └── flujo-datos.md
```

## Fuente de verdad

- Tecnica: GitHub.
- Operativa tabular futura: Google Sheets, solo cuando este definida y documentada.
- Publicacion web: GitHub Pages desde `index.html` en la raiz.

## Regla de publicacion

No mover `index.html` fuera de la raiz mientras GitHub Pages publique desde este repositorio sin build step.

## Proximas mejoras recomendadas

1. Crear `data/` para catalogos si se separan del HTML.
2. Crear `modules/` cuando se extraiga JavaScript por dominios.
3. Crear `services/` para sincronizaciones externas.
4. Agregar pruebas automaticas minimas para validacion de sintaxis y datos.
