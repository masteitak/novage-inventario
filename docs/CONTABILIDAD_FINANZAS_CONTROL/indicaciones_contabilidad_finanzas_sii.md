# Indicaciones Codex: Contabilidad / Finanzas / SII

Version: 1.0  
Modulo: `CONTABILIDAD_FINANZAS_CONTROL`  
Area: `DAFCT_NOVAGE`

## Objetivo

Agregar al sistema NOVAGE un modulo contable-agentico, multiempresa, trazable y apto para operacion clinica boutique en Chile.

## Regla principal para Codex

Al trabajar en contabilidad, finanzas, SII o inventario, Codex debe actuar como arquitecto senior full-stack con criterio contable tributario chileno, sin romper funciones actuales, priorizando bajo consumo de tokens, codigo mantenible, GitHub Pages si aplica y compatibilidad futura con agentes.

## Empresas

| Codigo | Nombre operativo | Tipo | Regla |
|---|---|---|---|
| EMP_01_CZ_SALUD | C&Z Salud | Clinica / sociedad exenta | Servicios clinicos exentos, Medilink, Getnet, operacion sanitaria |
| EMP_02_DACEZ_COMERCIAL | DACEZ Comercial | Comercial afecta a IVA | Productos afectos, Mercado Pago, inventario comercial |
| EMP_03_SERVICIOS_MEDICOS_ISAMEDICA | DRA_CELEDON_SERVICIOS_MEDICOS_SPA | Empresa medica externa | Facturacion medica externa a Isa Medica |

## Centros de costo

### C&Z Salud

- CZ-01 Consulta Particular
- CZ-02 Oligocheck
- CZ-03 Sueroterapia
- CZ-04 Procedimientos
- CZ-05 Kinesiologia
- CZ-06 Enfermeria
- CZ-07 Insumos Clinicos
- CZ-08 REAS / Cumplimiento Sanitario
- CZ-09 Administracion Clinica
- CZ-10 Medilink / Getnet

### DACEZ Comercial

- DZ-01 Suplementos
- DZ-02 Cosmetica
- DZ-03 Retail Presencial
- DZ-04 Mercado Pago
- DZ-05 E-commerce
- DZ-06 Equipos
- DZ-07 Marketing Comercial
- DZ-08 Inventario Comercial

### Servicios Medicos Isa Medica

- DR-01 Isa Medica
- DR-02 Honorarios Medicos Externos
- DR-03 Convenios Clinicos
- DR-04 Gastos Profesionales
- DR-05 Administracion Medica

## Medios de pago permitidos

### C&Z

- POS_GETNET_MEDILINK
- TRANSFERENCIA_CZ
- PAGO_ONLINE_MEDILINK

Banco destino: solo cuenta C&Z.

### DACEZ

- MERCADO_PAGO_DACEZ
- TRANSFERENCIA_DACEZ
- PAGO_WEB_DACEZ

Banco destino: solo cuenta DACEZ.

### Empresa Medica Isa Medica

- TRANSFERENCIA_ISAMEDICA
- PAGO_CONVENIO_MEDICO

Banco destino: solo cuenta empresa medica.

## Documentos tributarios permitidos

### C&Z

- BOLETA_EXENTA_CZ
- FACTURA_EXENTA_CZ
- DOCUMENTO_CLINICO_ASOCIADO

### DACEZ

- BOLETA_AFECTA_DACEZ
- FACTURA_AFECTA_DACEZ
- VOUCHER_MERCADO_PAGO
- NOTA_CREDITO_DACEZ

### Empresa Medica

- FACTURA_SERVICIOS_MEDICOS
- BOLETA_SERVICIOS_MEDICOS
- DOCUMENTO_CONVENIO_ISAMEDICA

## Estados permitidos

- Estado_Conciliacion: `Pendiente`, `Conciliado`, `Diferencia`, `Revisar`, `Anulado`
- Estado_SII: `Emitido`, `Pendiente`, `Rechazado`, `No_Aplica`, `Revisar`
- Exento_Afecto: `Exento`, `Afecto`, `Mixto_Revisar`

## Auditoria

Nunca borrar. Solo anular con motivo. Todo cambio debe registrar antes, despues, usuario, rol, empresa, centro de costo, modulo e ID afectado.

## Agentes futuros

- Agente_Tesoreria
- Agente_SII
- Agente_IVA
- Agente_CZ
- Agente_DACEZ
- Agente_IsaMedica
- Agente_Inventario
- Agente_Gerencial
- Agente_Auditor
