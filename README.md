# novage-inventario

Inventario clínico y comercial, stock, vencimientos, lote y alertas NOVAGE

## Área

NOVAGE

## Objetivo

Ordenar información, procesos, agentes, reportes y automatizaciones de forma segura, trazable y escalable.

## Carpetas principales

- 00_META
- 01_ESTRATEGIA
- 02_PROCESOS
- 03_DATOS
- 04_LEGAL_COMPLIANCE
- 05_PLANTILLAS
- 06_AGENTES_IA
- 07_REPORTES
- 08_AUTOMATIZACIONES
- 09_ARCHIVO

## Regla de seguridad

No subir datos sensibles, documentos reales identificables, claves ni información privada sin anonimizar.

## Conexion NOVAGE OS y auditoria de trazabilidad

Actualizado: 2026-07-27

Este repositorio queda indexado desde NOVAGE OS como panel de inventario operativo.

Enlaces:
- Panel inventario: https://masteitak.github.io/novage-inventario/
- Panel NOVAGE OS: https://novage-command-center-git-claude-nov-690095-masteitaks-projects.vercel.app/dashboard
- Finanzas y control: https://novage-command-center-git-claude-nov-690095-masteitaks-projects.vercel.app/finanzas-control
- Drive inventario: https://drive.google.com/drive/folders/1L9qjehJJ8j3g52r71qyTE2f_s6wRz_IH
- Auditoria tecnica: https://github.com/masteitak/novage-command-center/blob/claude-nov-690095/docs/audits/2026-07-27_finanzas_inventario_trazabilidad.md

Estado de auditoria:
- Orden funcional: stock, lotes, vencimientos, ventas, traslados, alertas, pedidos, contabilidad y cierre diario.
- Trazabilidad actual: local/parcial.
- Riesgo alto: PIN visible en frontend y persistencia local como fuente maestra.
- Falta para certificacion interna: Supabase Auth, RLS por rol, bitacora inmutable, anulacion sin borrado, evidencia Drive por movimiento y cierre conciliado con finanzas.
- Regla de conexion: toda venta, compra, merma, traslado o ajuste debe terminar en finanzas/control con documento, responsable, evidencia y estado de conciliacion.
