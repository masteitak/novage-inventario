# Sincronizacion Drive / GitHub

## Drive

Carpeta raiz: `Medilink Inventario`  
ID: `1K7DgIsrJah2AtQkk0H9nwvwBe5eMgjaE`  
URL: https://drive.google.com/drive/folders/1K7DgIsrJah2AtQkk0H9nwvwBe5eMgjaE

## GitHub

Repositorio: `masteitak/novage-inventario`  
Ruta documental: `docs/CONTABILIDAD_FINANZAS_CONTROL/`

## Regla de sincronizacion

- GitHub guarda reglas, schemas, validaciones y documentacion versionable.
- Drive guarda carpetas operativas, archivos de trabajo, exportables y documentos compartibles.
- Todo nuevo modulo contable o inventario debe tener una referencia en ambos lados.
- Las hojas Google Sheets futuras deben usar nombres definidos en `indicaciones_contabilidad_finanzas_sii.md`.
- No se debe guardar informacion sensible clinica en carpetas visibles para rol BODEGA.

## Mapa Drive

| Drive | GitHub relacionado |
|---|---|
| 00_CONTROL_CENTER | `docs/CONTROL_CENTER/` |
| 01_CONTABILIDAD_FINANZAS_CONTROL | `docs/CONTABILIDAD_FINANZAS_CONTROL/` |
| 02_INVENTARIO_CLINICO | `docs/CONTABILIDAD_FINANZAS_CONTROL/schemas/inventario_clinico.json` |
| 03_INVENTARIO_COMERCIAL | `docs/CONTABILIDAD_FINANZAS_CONTROL/schemas/inventario_comercial.json` |
| 04_SII_TRIBUTARIO | `docs/CONTABILIDAD_FINANZAS_CONTROL/indicaciones_contabilidad_finanzas_sii.md` |
| 05_REPORTES | reportes exportables futuros |
| 06_AUDITORIA | schema de auditoria futuro |
| 07_AGENTES | agentes futuros |
| 99_CONFIG | empresas, roles, centros de costo, configuracion |

## Nota importante

Este archivo deja definida la sincronizacion documental y de estructura. La sincronizacion automatica de datos vivos debe implementarse despues con Google Sheets/App Script o API propia, sin mezclar empresas ni saltarse validaciones.
