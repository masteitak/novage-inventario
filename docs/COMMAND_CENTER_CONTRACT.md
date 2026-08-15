# Contrato Inventario → Command Center v1

Objetivo: conectar `novage-inventario` con `centrocomando` sin duplicar la lógica del producto ni copiar datos sensibles.

## Regla

`novage-inventario` es dueño del estado específico de inventario/compras. El Command Center consume eventos y administra acciones transversales, aprobaciones y visibilidad ejecutiva.

## Eventos mínimos

| Hecho del producto | Event canónico | Riesgo | Action esperable |
|---|---|---:|---|
| stock cruza mínimo | `inventory.low_stock` | MEDIUM | `replenish` |
| lote próximo a vencer | `inventory.expiring` | MEDIUM/HIGH | `verify` / `replenish` |
| orden creada y requiere aprobación | `purchase_order.approval_requested` | MEDIUM/HIGH | `approve` |
| orden recibida por humano | `purchase_order.received` | MEDIUM | cerrar acción / actualizar métricas |
| evidencia de proveedor faltante | `evidence.missing` | MEDIUM | `document` / `verify` |
| integración falla | `integration.failed` | HIGH según impacto | `investigate` |

Todo payload usa IDs técnicos/referencias. No incluye secretos ni datos personales innecesarios.

## Ejemplo Event

```json
{
  "id": "evt_inventory_001",
  "type": "inventory.low_stock",
  "domain": "inventory",
  "occurred_at": "2026-08-15T17:00:00-04:00",
  "source_system": "novage-inventario",
  "entity_type": "inventory_item",
  "entity_ref": "INS-002",
  "actor_type": "SYSTEM",
  "risk_level": "MEDIUM",
  "audit_required": true,
  "metadata": {"threshold_crossed": true}
}
```

## Ejemplo Action

```json
{
  "id": "act_inventory_001",
  "type": "replenish",
  "domain": "inventory",
  "title": "Revisar reposición de insumo bajo mínimo",
  "priority": "HIGH",
  "status": "OPEN",
  "entity_type": "inventory_item",
  "entity_ref": "INS-002",
  "owner_role": "INVENTARIO",
  "created_at": "2026-08-15T17:00:05-04:00",
  "source_event_id": "evt_inventory_001",
  "human_approval": true,
  "suggested_action": "Preparar solicitud de compra"
}
```

## Aprobaciones

El agente `INVENTORY_MONITOR` puede detectar, comparar consumo y preparar una solicitud. No puede:

- comprar;
- aprobar proveedor;
- aprobar una orden;
- cambiar cantidad física;
- aprobar ajuste de inventario.

Esas acciones conservan autoridad humana según RBAC/approval policy.

## Integraciones reales

Una integración con Drive, Sheets, Medilink, Supabase u otra fuente necesita antes:

1. `source_registry` que declare autoridad y clase de dato;
2. permisos mínimos;
3. lectura vs escritura explícita;
4. esquema validado;
5. health check;
6. idempotencia si sincroniza;
7. eventos de éxito/fallo;
8. auditoría y rollback cuando aplique.

No usar un ID de archivo real hard-coded como fallback. Una fuente read-only debe permanecer read-only hasta que exista una operación de escritura autorizada y auditada.

## Contratos fuente

- Política Event: `masteitak/NOVAGE_OS/04_REGISTRIES/event-registry.yaml`
- Política Action: `masteitak/NOVAGE_OS/04_REGISTRIES/action-registry.yaml`
- Agente: `masteitak/NOVAGE_OS/04_REGISTRIES/agent-registry.yaml`
- Esquemas runtime: `masteitak/centrocomando/data/schemas/`
