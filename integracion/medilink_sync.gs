// ═══════════════════════════════════════════════════════════════
// SINCRONIZACIÓN MEDILINK → GOOGLE SHEETS — Novage
// ═══════════════════════════════════════════════════════════════
// Pega este archivo completo en tu proyecto de Google Apps Script
// (el mismo que ya usa tu app para sincronizar con Sheets).
//
// PASOS DE INSTALACIÓN:
// 1. script.google.com → abre tu proyecto existente
// 2. Configuración del proyecto (⚙️) → Propiedades del script →
//    Agregar propiedad:  clave: MEDILINK_TOKEN   valor: tu token
//    (así el token nunca queda visible en el código ni en el HTML)
// 3. Archivo → Nuevo → Script → pega este contenido
// 4. Ejecuta primero probeMedilinkEndpoints() y revisa el registro
//    (Ver → Registros) para confirmar qué endpoints tiene tu plan
// 5. Ajusta ENDPOINT_INSUMOS abajo si tu endpoint es otro
// 6. Ejecuta syncMedilink() manualmente una vez para probar
// 7. Activadores (⏰) → Agregar activador → syncMedilink →
//    Basado en tiempo → Cada 30 minutos
// ═══════════════════════════════════════════════════════════════

const MEDILINK_BASE = 'https://api.medilink.healthatom.com/api/v1';
const MEDILINK_SHEET = 'Medilink';          // hoja donde se escribe el stock
const ENDPOINT_INSUMOS = '/insumos';        // ajustar según probeMedilinkEndpoints()

function medilinkToken_() {
  const t = PropertiesService.getScriptProperties().getProperty('MEDILINK_TOKEN');
  if (!t) throw new Error('Falta la propiedad MEDILINK_TOKEN en Propiedades del script');
  return t;
}

function medilinkFetch_(path) {
  const res = UrlFetchApp.fetch(MEDILINK_BASE + path, {
    headers: { Authorization: 'Token ' + medilinkToken_() },
    muteHttpExceptions: true,
  });
  return { code: res.getResponseCode(), body: res.getContentText() };
}

// ── PASO 1: descubrir qué endpoints expone tu plan ──
function probeMedilinkEndpoints() {
  const candidatos = [
    '/insumos', '/productos', '/stock', '/bodegas', '/inventario',
    '/sucursales', '/pacientes', '/citas', '/profesionales',
  ];
  candidatos.forEach(ep => {
    try {
      const r = medilinkFetch_(ep + '?limit=1');
      Logger.log('%s → HTTP %s %s', ep, r.code,
        r.code === 200 ? '✅ DISPONIBLE' : (r.code === 404 ? '— no existe' : r.body.slice(0, 120)));
    } catch (e) {
      Logger.log('%s → ERROR %s', ep, e.message);
    }
  });
  Logger.log('Revisa cuáles dieron 200 y ajusta ENDPOINT_INSUMOS.');
}

// ── PASO 2: sincronizar inventario Medilink → hoja "Medilink" ──
function syncMedilink() {
  const filas = [];
  let path = ENDPOINT_INSUMOS + '?limit=100';
  // La API de Health Atom pagina con links.next
  while (path) {
    const r = medilinkFetch_(path);
    if (r.code !== 200) throw new Error('Medilink HTTP ' + r.code + ': ' + r.body.slice(0, 200));
    const json = JSON.parse(r.body);
    (json.data || []).forEach(i => filas.push([
      i.nombre || i.name || '',
      i.lote || '',
      i.cantidad ?? i.stock ?? 0,
      i.fecha_vencimiento || i.vencimiento || '',
      i.semaforizacion || i.semaforo || '',
      i.bodega || i.sucursal || '',
      i.tipo || i.tipo_producto || '',
      i.stock_seguridad ?? i.stock_minimo ?? '',
      new Date().toISOString(),
    ]));
    const next = json.links && json.links.next;
    path = next ? next.replace(MEDILINK_BASE, '') : null;
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(MEDILINK_SHEET);
  if (!sheet) sheet = ss.insertSheet(MEDILINK_SHEET);
  sheet.clearContents();
  sheet.appendRow(['nombre','lote','cantidad','vencimiento','semaforo','bodega','tipo','stock_min','actualizado']);
  if (filas.length) sheet.getRange(2, 1, filas.length, filas[0].length).setValues(filas);
  Logger.log('✅ Sincronizados %s items desde Medilink', filas.length);
}

// ── PASO 3: exponer los datos a la app (agregar al doPost existente) ──
// Dentro del switch/if de acciones de tu doPost actual, agrega:
//
//   if (action === 'getMedilink') return jsonOut_(getMedilinkData_());
//
function getMedilinkData_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(MEDILINK_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return { medilink: [] };
  const values = sheet.getDataRange().getValues();
  const head = values.shift();
  return { medilink: values.map(row => Object.fromEntries(head.map((h, i) => [h, row[i]]))) };
}
