# Validaciones de movimiento

Funcion objetivo futura:

```js
validateMovement(mov)
```

## Campos obligatorios

La funcion debe rechazar todo movimiento que no tenga:

- Empresa
- Centro_Costo
- Tipo_Operacion
- Exento_Afecto
- Medio_Pago
- Banco_Destino
- Documento_Tributario
- Responsable
- Estado_Conciliacion

## Reglas por empresa

### EMP_01_CZ_SALUD

- `Medio_Pago` permitido:
  - `POS_GETNET_MEDILINK`
  - `TRANSFERENCIA_CZ`
  - `PAGO_ONLINE_MEDILINK`
- `Banco_Destino`: solo cuenta C&Z.
- `Exento_Afecto`: `Exento` o `Mixto_Revisar`.
- Documento permitido:
  - `BOLETA_EXENTA_CZ`
  - `FACTURA_EXENTA_CZ`
  - `DOCUMENTO_CLINICO_ASOCIADO`
- Centro de costo debe comenzar con `CZ-`.

### EMP_02_DACEZ_COMERCIAL

- `Medio_Pago` permitido:
  - `MERCADO_PAGO_DACEZ`
  - `TRANSFERENCIA_DACEZ`
  - `PAGO_WEB_DACEZ`
- `Banco_Destino`: solo cuenta DACEZ.
- `Exento_Afecto`: `Afecto`.
- Documento permitido:
  - `BOLETA_AFECTA_DACEZ`
  - `FACTURA_AFECTA_DACEZ`
  - `VOUCHER_MERCADO_PAGO`
  - `NOTA_CREDITO_DACEZ`
- Centro de costo debe comenzar con `DZ-`.

### EMP_03_SERVICIOS_MEDICOS_ISAMEDICA

- `Medio_Pago` permitido:
  - `TRANSFERENCIA_ISAMEDICA`
  - `PAGO_CONVENIO_MEDICO`
- `Banco_Destino`: solo cuenta empresa medica.
- Cliente esperado: Clinica Isa Medica.
- Documento permitido:
  - `FACTURA_SERVICIOS_MEDICOS`
  - `BOLETA_SERVICIOS_MEDICOS`
  - `DOCUMENTO_CONVENIO_ISAMEDICA`
- Centro de costo debe comenzar con `DR-`.

## Reglas duras

- No mezclar C&Z + DACEZ en una sola operacion.
- No registrar pago de C&Z por Mercado Pago DACEZ.
- No registrar pago de DACEZ por Getnet/Medilink C&Z.
- No registrar ingreso Isa Medica en C&Z o DACEZ.
- No eliminar movimientos. Solo anular con motivo.
- No modificar cierre cerrado salvo ADMIN.
- No ajustar stock sin motivo.

## Resultado esperado

`validateMovement(mov)` debe devolver una estructura como:

```js
{
  ok: false,
  errors: ["Empresa es obligatoria"],
  warnings: []
}
```

No debe guardar ni sincronizar movimientos invalidos.
