# OligoCheck — contrato con Inventario

Fecha: 2026-08-16

`novage-inventario` es autoridad de INVENTARIO, no de interpretación clínica OligoCheck.
Fuente técnica OligoCheck: `masteitak/novage-command-center`.

## Autoridad de Inventario
Puede gobernar: `product_id`, SKU/código, nombre de catálogo, stock, lote, vencimiento, ubicación, proveedor, costo autorizado, disponibilidad y movimientos de inventario según su modelo vigente.

## Integración permitida
OligoCheck puede consultar inventario DESPUÉS de producir una propuesta clínica no autorizada, usando identificadores estables de producto. Inventario responde disponibilidad/stock/lote/vencimiento; no decide indicación, dosis, vía ni compatibilidad clínica.

Una aprobación profesional puede originar una RESERVA/REQUERIMIENTO de inventario. El descuento definitivo debe ocurrir solo en el evento operacional autorizado correspondiente y quedar auditado.

## Reglas
- No duplicar matrices clínicas/Pineda en este repositorio como fuente ejecutable.
- No convertir falta de stock en sustitución clínica automática.
- No permitir que stock disponible determine una indicación.
- No guardar identidad de paciente si basta `case_id/episode_id` pseudonimizado.
- Eventos hacia Command Center deben ser idempotentes y trazables.

## Legacy
La lógica histórica de “aplicar suero” integrada directamente en inventario no constituye autoridad clínica. Debe migrarse gradualmente al flujo canónico antes de uso productivo.
