# NOVAGE_CONTROL_CENTER

Este directorio registra la estructura de control para el inventario y el modulo contable-financiero NOVAGE.

## Drive raiz

Carpeta principal: Medilink Inventario  
ID: `1K7DgIsrJah2AtQkk0H9nwvwBe5eMgjaE`  
URL: https://drive.google.com/drive/folders/1K7DgIsrJah2AtQkk0H9nwvwBe5eMgjaE

## Estructura Drive sincronizada

| Area | Drive folder ID | Uso |
|---|---|---|
| 00_CONTROL_CENTER | `1ijPWwkJnTmP9eo8llaImm3H-cCDNRjBb` | Mapa maestro, decisiones, control general |
| 01_CONTABILIDAD_FINANZAS_CONTROL | `1lU8w5qPsoEdDrSOk8lndkZrdrcR32RAK` | DAFCT_NOVAGE y matriz contable |
| 02_INVENTARIO_CLINICO | `1z0or5N2bc_Y_zyCCFGL3Ce4zBfVx3pRH` | Inventario clinico C&Z |
| 03_INVENTARIO_COMERCIAL | `1qiXVIJhV47tQ9mfbPN0t9-_xlPBfkgwu` | Inventario comercial DACEZ |
| 04_SII_TRIBUTARIO | `15rDNGkTToCbvsdpXFCdsPNnU4AhX7N3z` | SII, documentos tributarios, estados |
| 05_REPORTES | `1wKkEJngsMXirXeJWDbYFarmUnGbAyjef` | Reportes CSV/MD/PDF |
| 06_AUDITORIA | `18iM29IkvzmQZ1r5nSM7zHIuZDvokyzAC` | Auditoria y anulaciones |
| 07_AGENTES | `15dVmBukWYUoAfgAGCGJgh19_OAHlexRJ` | Agentes futuros |
| 99_CONFIG | `1KaoGcHdQdz6Ctlz5XGo4Nob6vwYLHxiC` | Configuracion, empresas, roles, centros de costo |

## Regla operacional

Todo nuevo trabajo de contabilidad, finanzas, SII e inventario debe respetar las reglas del modulo `CONTABILIDAD_FINANZAS_CONTROL`.

No mezclar empresas en una sola operacion. No borrar movimientos: solo anular con motivo.
