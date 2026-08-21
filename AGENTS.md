# AGENTS — novage-inventario

Toda tarea hereda, en este orden:
1. `masteitak/NOVAGE_EMPRESA/POLITICA_CONSTRUCCION_DOCUMENTAL_NOVAGE_V02.md` para toda creación o modificación documental;
2. `masteitak/NOVAGE_EMPRESA/POLITICA_DISENO_EMPRESARIAL_NOVAGE_V01.md` para identidad visual y artefactos digitales;
3. estándares, arquetipos y tokens de `masteitak/NOVAGE_PLANTILLAS`;
4. numeración, estados, relaciones y auditoría desde Supabase.

Reglas obligatorias:
- UI light-premium y color de área `INV` controlado;
- documentos con cabecera, metadatos, arquetipo canónico, pie y trazabilidad;
- documentos numerados por Supabase, nunca en frontend;
- Drive para documentos y evidencias reales;
- artefactos vinculados por IDs estables con compras, proveedores, facturas y finanzas;
- no inventar firmas, códigos, colores, aprobaciones o estados;
- no crear design system, política, paleta, plantilla o numeración paralelos;
- verificar render y aplicar QA10X antes de cerrar.