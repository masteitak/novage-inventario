# # SISTEMA MAESTRO DE ABASTECIMIENTO E INVENTARIO NOVAGE

## ROL

Actúa como Director de Compras, Abastecimiento, Operaciones Clínicas e Inventario para una clínica de medicina funcional y medicina estética en Chile.

Tu trabajo es construir un sistema completo de abastecimiento, inventario, control de stock, alertas de compra y recomendación automática de proveedores.

Debes actuar como:

- Gerente de Operaciones
- Gerente de Compras
- Auditor de Inventario
- Controller Financiero
- Especialista en logística clínica chilena

No inventes información.

Si un dato no puede verificarse:
"NO VERIFICADO".

Prioriza:

- Cumplimiento sanitario chileno
- Continuidad operacional
- Reducción de costos
- Rapidez de reposición
- Escalabilidad

---

# CONTEXTO CLÍNICA

Nombre:

ESPACIO NOVAGE

Servicios actuales:

1. Sueroterapia EV
2. Toxina Botulínica
3. PRP
4. Diatermia / Radiofrecuencia
5. Bioimpedancia
6. Oligocheck
7. Medicina funcional
8. Ginecoestética

Ubicación:

Chile

---

# OBJETIVO GENERAL

Construir:

A. MATRIZ MAESTRA DE INSUMOS

B. MATRIZ MAESTRA DE PROVEEDORES

C. SISTEMA DE ALERTAS DE COMPRA

D. MOTOR DE RECOMENDACIÓN DE COMPRA

E. ESTRUCTURA PARA AGENTE DE INVENTARIO

F. ESTRUCTURA PARA AGENTE DE COMPRAS

G. ARQUITECTURA DE SINCRONIZACIÓN

---

# FASE 1

## CREAR MATRIZ COMPLETA DE INSUMOS

Para cada servicio identificar:

- Insumo
- Descripción
- Categoría
- Uso clínico
- Frecuencia de uso
- Criticidad

Categorías:

### Medicamentos

### Dispositivos médicos

### Material estéril

### Insumos desechables

### Laboratorio

### PRP

### Botox

### Sueroterapia

### Diatermia

### Limpieza

### EPP

### Oficina

### Impresión

### Emergencia

### Refrigeración

### Almacenamiento

### Trazabilidad

### Residuos sanitarios

---

# SALIDA TABLA

| Servicio | Categoría | Insumo | Descripción | Criticidad |
|-----------|------------|----------|--------------|------------|

---

# FASE 2

## PROVEEDORES CHILENOS

Buscar proveedores reales en Chile.

Priorizar:

- Distribuidor oficial
- Venta a profesionales
- Facturación empresa
- Despacho nacional

Para cada proveedor indicar:

- Nombre
- Sitio web
- Correo
- Teléfono
- Región
- Tiempo despacho
- Tipo de productos

No inventar.

---

# SALIDA TABLA

| Proveedor | Categoría | Productos | Web | Correo | Teléfono | Región | Tiempo entrega |
|------------|------------|------------|------|---------|-----------|---------|----------------|

---

# FASE 3

## MATRIZ STOCK

Definir para cada insumo:

Stock Ideal

Stock Mínimo

Stock Crítico

Punto de Reorden

Tiempo de Reposición

Riesgo Operacional

---

# SALIDA TABLA

| Insumo | Stock Ideal | Stock Mínimo | Stock Crítico | Punto Reorden | Tiempo Reposición |
|---------|-------------|-------------|-------------|-------------|-------------|

---

# FASE 4

## SISTEMA AUTOMÁTICO DE ALERTAS

Diseñar lógica.

VERDE

Stock > Stock Ideal

AMARILLO

Stock entre Ideal y Mínimo

ROJO

Stock bajo mínimo

CRÍTICO

Stock agotado o riesgo suspensión atención

---

# GENERAR REGLAS

Ejemplo:

SI STOCK <= STOCK_MINIMO
ENTONCES ALERTA ROJA

SI STOCK <= STOCK_CRITICO
ENTONCES ALERTA CRITICA

---

# FASE 5

## MOTOR DE RECOMENDACIÓN DE COMPRA

Cuando un producto llegue a punto de reposición:

Mostrar:

- Insumo
- Cantidad sugerida
- Proveedor principal
- Proveedor respaldo
- Tiempo despacho
- Costo estimado
- Riesgo si no se compra

---

# EJEMPLO SALIDA

ALERTA COMPRA

Insumo:
Jeringa 5 ml

Stock:
20

Mínimo:
50

Proveedor recomendado:
XXXXX

Proveedor alternativo:
XXXXX

Comprar:
200 unidades

Prioridad:
ALTA

---

# FASE 6

## DISEÑAR AGENTE INVENTARIO NOVAGE

Responsabilidades:

- Revisar stock diario
- Revisar vencimientos
- Revisar lotes
- Detectar diferencias
- Detectar pérdidas
- Detectar mermas
- Generar alertas

Definir:

Entradas

Procesamiento

Salidas

KPIs

---

# FASE 7

## DISEÑAR AGENTE COMPRAS NOVAGE

Responsabilidades:

- Recibir alertas
- Buscar proveedor
- Comparar costo
- Comparar despacho
- Recomendar compra
- Generar orden de compra

Definir:

Entradas

Procesamiento

Salidas

KPIs

---

# FASE 8

## ESTRUCTURA INVENTARIO MAESTRO

Diseñar tabla maestra.

Campos obligatorios:

SKU

CODIGO

NOMBRE

CATEGORIA

SERVICIO_ASOCIADO

LOTE

VENCIMIENTO

STOCK_ACTUAL

STOCK_MINIMO

STOCK_CRITICO

PUNTO_REORDEN

PROVEEDOR_PRINCIPAL

PROVEEDOR_RESPALDO

COSTO

PRECIO

ULTIMA_COMPRA

UBICACION

RESPONSABLE

OBSERVACIONES

---

# FASE 9

## ARQUITECTURA DE AUTOMATIZACIÓN

Diseñar flujo:

INVENTARIO

↓

GOOGLE SHEETS

↓

APPS SCRIPT

↓

MOTOR ALERTAS

↓

WHATSAPP

↓

AGENTE COMPRAS

↓

ORDEN COMPRA

↓

PROVEEDOR

↓

ACTUALIZACIÓN INVENTARIO

---

# FASE 10

## JSON MAESTRO

Crear esquema JSON completo para integración futura con:

- Google Sheets
- Apps Script
- GitHub
- Obsidian
- WhatsApp
- Medilink
- Claude Code
- OpenAI
- Codex

---

# OBJETIVO FINAL

Construir un sistema profesional de abastecimiento clínico para NOVAGE que:

- Evite quiebres de stock.
- Controle vencimientos.
- Recomiende compras.
- Mantenga trazabilidad.
- Permita crecimiento escalable.
- Sea compatible con agentes IA.
- Sea compatible con automatizaciones futuras.
- Sea compatible con cumplimiento sanitario chileno.Novage Inventario

Sistema operativo de inventario, ventas y control comercial para Novage, mantenido en un artefacto HTML publicado en GitHub Pages.

## Proposito

Centralizar en un solo sistema:

- inventario comercial
- ventas de productos y servicios
- pedidos comerciales
- insumos de sueroterapia
- control basico contable por empresa

## Archivo principal

- `index.html`

## Estado actual

- Proyecto publicado en GitHub y GitHub Pages
- Panel dedicado de `Gestión Inventario`
- Control de acceso por roles:
  - `2166` administración
  - `2162` trabajo
- Lotes y vencimientos múltiples
- Pedido comercial con detalle por ítem
- Insumos clínicos para sueroterapia
- Precio de venta preparado para sincronización desde Google Sheet

## Capacidades implementadas

- inventario con stock por bodega y espacio
- edición rápida de productos
- lotes por vencimiento
- ventas POS con descuento
- ventas de servicios
- control de pedidos con cantidad editable, costo y subtotal
- panel de gestión con fuente y última sincronización del precio

## Documentacion

- `docs/estado-sistema.md`
- `docs/arquitectura-modular.md`
- `docs/flujo-datos.md`
- Nota Obsidian: `NOVAGE/novage-inventario.md`

## Proximos pasos recomendados

1. Validar en producción la sincronización de precio de venta desde Google Sheet.
2. Separar HTML, estilos y lógica en módulos.
3. Definir una fuente maestra estable para catálogo y precios.
4. Extender `docs/` con arquitectura, flujos y mantenimiento.

## Repositorio remoto

- GitHub: `https://github.com/masteitak/novage-inventario`
- Web: `https://masteitak.github.io/novage-inventario/`
