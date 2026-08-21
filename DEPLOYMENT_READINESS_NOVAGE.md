# NOVAGE Inventario — Deployment Readiness

Estado actual: REVIEW.

## Clasificación
- Tipo: APP ESTÁTICA + VERCEL FUNCTIONS
- Frontend: HTML/CSS/JavaScript estático
- Backend ligero: `api/*.js`
- Destino: Vercel
- Build framework: no requerido en el estado actual

## Gates

### G0 Clasificación — PASS
No se debe forzar React/Vite solo para desplegar. La arquitectura actual es válida para Vercel.

### G1 Reproducibilidad — PASS CONDICIONAL
No existe `package.json`; por tanto no hay resolución de dependencias npm que congelar. Si se incorpora un bundler o framework en el futuro, package manager, runtime y lockfile pasan a ser obligatorios.

### G2 Calidad — REVIEW
CI debe validar:
- JSON válido;
- sintaxis de funciones `api/*.js`;
- sintaxis JavaScript local;
- presencia de `index.html`, `vercel.json`, `SECURITY.md`, `.env.example`;
- ausencia de secretos versionados.

### G3 Seguridad — REVIEW
- headers Vercel endurecidos;
- `frame-ancestors`/anti-clickjacking;
- HSTS;
- CSP compatible con fuentes externas actuales;
- endpoint de integraciones no debe revelar nombres de variables internas ni credenciales.

### G4 Entornos — REVIEW
Mantener variables reales únicamente en Vercel. Preview no debe recibir secretos de producción innecesarios.

### G5 Datos/Privacidad — REQUIRED
La app no debe usar pacientes reales, datos clínicos ni credenciales reales en Preview. Logs y analytics tampoco deben contener PII/PHI.

### G6 Preview — REQUIRED
Cada cambio visual/funcional debe desplegarse como Preview antes de producción.

### G7 Producción — REQUIRED
Registrar commit SHA y deployment. Ejecutar `/api/health` y smoke test del panel después de promover.

### G8 Rollback — REQUIRED
Conservar un deployment previamente validado y procedimiento de rollback.

## Configuración Vercel
- Framework Preset: Other / estático, salvo que Vercel detecte correctamente el proyecto sin override.
- Root Directory: raíz del repositorio.
- Build Command: ninguno mientras siga siendo HTML/CSS/JS sin bundler.
- Output Directory: raíz/estático según configuración del proyecto; no inventar `dist` si no existe.

## Regla futura
Si el repositorio migra a React/Vite/Next:
1. agregar `package.json`;
2. fijar Node y package manager;
3. generar lockfile;
4. agregar lint/typecheck/tests/build;
5. actualizar esta clasificación antes de producción.
