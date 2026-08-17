# Inventario — autoridad dentro del harness NOVAGE

Fecha: 2026-08-16

Estado: `MIGRATION_SOURCE_ONLY`

Este repositorio conserva lógica y antecedentes especializados de inventario durante la migración. **No es un control plane y su UI independiente no es autoridad productiva.**

Centro de Comando canónico: `masteitak/centrocomando`.
Frontend operacional único: `masteitak/centrocomando/apps/command-center-next` (React/Next.js).
Ruta objetivo: `/panel/inventario`.

## Regla

- No agregar nuevas pantallas productivas aquí.
- No crear workflows empresariales paralelos.
- Stock, lotes, vencimientos, movimientos, proveedores, compras y recepciones deben migrar al Core Engine/React con contratos Event / Action / Artifact / Approval.
- Supabase mantiene el estado operacional autorizado; Drive conserva evidencia/documentos cuando corresponda.
- El sitio HTML/GitHub Pages/Vercel de este repositorio se retira cuando exista equivalencia funcional y evidencia de migración.
- Toda integración nueva se registra primero en `centrocomando/config/enterprise-topology-registry.v1.json`.
