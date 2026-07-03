# CONTABILIDAD_FINANZAS_CONTROL

Area: `Dirección de Administración, Finanzas, Control y Tributación NOVAGE`  
Codigo interno: `DAFCT_NOVAGE`

Este modulo ordena contabilidad, finanzas, SII e inventarios para NOVAGE. Debe usarse como referencia obligatoria al levantar nuevas funciones o ingresar informacion contable/inventario.

## Carriles contables

### EMP_01_CZ_SALUD

Clinica / sociedad exenta. Operacion clinica propia NOVAGE.

Incluye: Medilink, POS Getnet/Medilink, boletas/facturas exentas, Oligocheck, Sueroterapia, Procedimientos, Kinesiologia, Enfermeria, Insumos clinicos, REAS y sala de procedimientos.

Regla: `C&Z = servicios clinicos exentos / operacion sanitaria / Medilink + Getnet.`

### EMP_02_DACEZ_COMERCIAL

Comercial afecta a IVA. Venta de productos.

Incluye: suplementos, cosmetica, retail, productos con codigo de barra, Mercado Pago DACEZ, inventario comercial, boletas/facturas afectas e IVA debito/credito.

Regla: `DACEZ = productos afectos / Mercado Pago / inventario comercial.`

### EMP_03_SERVICIOS_MEDICOS_ISAMEDICA

Empresa medica para facturar a Clinica Isa Medica.

Nombre sugerido: `DRA_CELEDON_SERVICIOS_MEDICOS_SPA`.

Incluye: facturacion a Isa Medica, honorarios medicos externos, convenios medicos, cuenta bancaria propia, documentos tributarios propios y gastos profesionales asociados.

Regla: `Nueva empresa = facturacion medica externa a Isa Medica.`

## Prohibiciones duras

- Movimiento sin empresa.
- Movimiento sin centro de costo.
- Venta sin documento tributario.
- Venta sin medio de pago.
- Pago de C&Z por Mercado Pago DACEZ.
- Pago de DACEZ por Getnet/Medilink C&Z.
- Ingreso Isa Medica en C&Z o DACEZ.
- Mezclar C&Z + DACEZ en una sola operacion.
- Eliminar movimientos: solo anular con motivo.
- Modificar cierre cerrado salvo ADMIN.
- Ajuste de stock sin motivo.
- Datos clinicos visibles para BODEGA.

## Modulos esperados

1. 01_Dashboard_Chief
2. 02_CZ_Salud_Exenta
3. 03_DACEZ_Afecta
4. 04_Empresa_Medica_IsaMedica
5. 05_Tesoreria
6. 06_Conciliacion
7. 07_Tributario_SII
8. 08_Inventario_Clinico
9. 09_Inventario_Comercial
10. 10_Compras
11. 11_Cierre_Diario
12. 12_Reportes
13. 13_Auditoria
14. 14_Agentes
15. 15_Config_Empresas_CC

## Archivos de este modulo

- `indicaciones_contabilidad_finanzas_sii.md`: reglas funcionales del modulo.
- `schemas/matriz_contable_novage.json`: campos obligatorios de matriz madre.
- `schemas/inventario_clinico.json`: schema inicial inventario clinico.
- `schemas/inventario_comercial.json`: schema inicial inventario comercial.
- `validaciones_movimiento.md`: reglas para `validateMovement(mov)`.
- `sync_drive_github.md`: contrato de sincronizacion Drive/GitHub.
