// ═══════════════════════════════════════════════════════════════
// SINCRONIZACIÓN MEDILINK → GOOGLE SHEETS — Novage
// ═══════════════════════════════════════════════════════════════
//
// DIAGNÓSTICO CONFIRMADO (probeMedilinkEndpoints ejecutado 2026-07-02):
//   /sucursales, /pacientes, /citas, /profesionales  → EXISTEN (HTTP 400,
//     falta el formato de parámetros, no el endpoint)
//   /insumos, /productos, /stock, /bodegas, /inventario → NO EXISTEN (404)
//
// Esto coincide con la documentación pública de la misma plataforma
// (Dentalink, que comparte motor con Medilink): la API de Health Atom
// solo documenta citas, sucursales, pacientes y profesionales — el
// módulo de inventario/insumos NO tiene endpoint público conocido.
//
// → Antes de descartarlo del todo, escribe a soporte@healthatom.com
//   o a tu asesora (daniela.cetrone@healthatom.com) preguntando
//   textualmente: "¿Existe un endpoint de API para el módulo de
//   inventario/insumos (stock, bodegas, lotes, vencimientos)?"
//   Si confirman uno, avísame el nombre y ajusto ENDPOINT_INSUMOS abajo
//   y ya queda funcionando en minutos.
//
// → Mientras tanto, este archivo trae LISTO el Plan B (Sección 2), que
//   SÍ funciona hoy: importa automáticamente el archivo de inventario
//   que exportas desde Medilink, sin necesitar el endpoint que falta.
//
// PASOS DE INSTALACIÓN:
// 1. script.google.com → abre tu proyecto existente
// 2. Configuración del proyecto (⚙️) → Propiedades del script →
//    Agregar propiedad:  clave: MEDILINK_TOKEN   valor: tu token
//    (así el token nunca queda visible en el código ni en el HTML)
// 3. Archivo → Nuevo → Script → pega este contenido
// 4. Ve a la SECCIÓN 2 (Plan B) para la puesta en marcha real
// ═══════════════════════════════════════════════════════════════


// ═══ SECCIÓN 1: API directa (usar solo si soporte confirma endpoint) ═══

const MEDILINK_BASE = 'https://api.medilink.healthatom.com/api/v1';
const MEDILINK_SHEET = 'Medilink';
const ENDPOINT_INSUMOS = '/insumos'; // ← reemplazar cuando soporte confirme el nombre real

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

// Descubre qué endpoints expone tu cuenta (ya ejecutado, ver diagnóstico arriba)
function probeMedilinkEndpoints() {
  const candidatos = [
    '/insumos', '/productos', '/stock', '/bodegas', '/inventario',
    '/existencias', '/movimientos', '/movimientos_stock', '/insumos_stock',
    '/sucursales', '/pacientes', '/citas', '/profesionales',
  ];
  candidatos.forEach(ep => {
    try {
      const r = medilinkFetch_(ep + '?q=%7B%7D'); // q={} — formato JSON vacío requerido
      Logger.log('%s → HTTP %s %s', ep, r.code,
        r.code === 200 ? '✅ DISPONIBLE: ' + r.body.slice(0, 200) :
        (r.code === 404 ? '— no existe' : r.body.slice(0, 200)));
    } catch (e) {
      Logger.log('%s → ERROR %s', ep, e.message);
    }
  });
}

// Confirma conectividad real con un endpoint que SÍ existe (prueba de token/formato)
function probeConfirmedEndpoints() {
  ['/sucursales', '/profesionales'].forEach(ep => {
    const r = medilinkFetch_(ep + '?q=%7B%7D');
    Logger.log('%s → HTTP %s: %s', ep, r.code, r.body.slice(0, 300));
  });
}

// Sincroniza inventario Medilink → hoja "Medilink" (SOLO funcionará si
// soporte confirma un endpoint real y lo pones en ENDPOINT_INSUMOS)
function syncMedilink() {
  const filas = [];
  let path = ENDPOINT_INSUMOS + '?q=%7B%7D';
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
  writeMedilinkSheet_(filas);
  Logger.log('✅ Sincronizados %s items desde la API de Medilink', filas.length);
}


// ═══ SECCIÓN 2: Plan B — importación automática del export de Medilink ═══
// FUNCIONA HOY, sin depender de ningún endpoint de API.
//
// PUESTA EN MARCHA:
// 1. En Google Drive, crea una carpeta llamada "Medilink Inventario"
//    (o el nombre que quieras) y copia su ID desde la URL
//    (drive.google.com/drive/folders/ESTE_ES_EL_ID)
// 2. Pega ese ID abajo en DRIVE_FOLDER_ID
// 3. Cada vez que quieras actualizar el stock: entra a Medilink →
//    Inventario → Exportar/Buscar en Inventario → descarga el archivo →
//    súbelo (arrástralo) a esa carpeta de Drive, sin cambiarle el nombre
// 4. Ejecuta importMedilinkExport() una vez para probar
// 5. Activadores (⏰) → Agregar activador → importMedilinkExport →
//    Basado en tiempo → Cada hora (revisa si hay un archivo más nuevo
//    y lo importa solo; si no hay archivo nuevo, no hace nada)

const DRIVE_FOLDER_ID = 'PEGA_AQUI_EL_ID_DE_LA_CARPETA'; // ← completar

function importMedilinkExport() {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const files = folder.getFiles();
  let latest = null;
  while (files.hasNext()) {
    const f = files.next();
    if (!latest || f.getLastUpdated() > latest.getLastUpdated()) latest = f;
  }
  if (!latest) { Logger.log('No hay archivos en la carpeta.'); return; }

  const props = PropertiesService.getScriptProperties();
  const lastProcessed = props.getProperty('MEDILINK_LAST_FILE_ID');
  const lastProcessedTime = props.getProperty('MEDILINK_LAST_FILE_TIME');
  if (lastProcessed === latest.getId() &&
      lastProcessedTime === String(latest.getLastUpdated().getTime())) {
    Logger.log('Sin cambios: "%s" ya fue importado.', latest.getName());
    return;
  }

  const blob = latest.getBlob();
  // El export de Medilink viene como texto tabulado en UTF-16LE
  // (aunque el archivo se llame .xls, no es un binario XLS real).
  let text;
  try { text = blob.getDataAsString('UTF-16LE'); }
  catch (e) { text = blob.getDataAsString('UTF-8'); }
  // Quitar BOM si viene incluido
  text = text.replace(/^﻿/, '');

  const lines = text.split(/\r?\n/).filter(l => l.trim().length);
  if (lines.length < 2) { Logger.log('Archivo vacío o formato no reconocido.'); return; }

  const headers = lines[0].split('\t').map(h => h.trim());
  const idx = name => headers.indexOf(name);
  const iNombre = idx('Nombre Producto');
  const iLote = idx('Lote');
  const iCantidad = idx('Cantidad');
  const iVenc = idx('Fecha vencimiento');
  const iSem = idx('Semaforización');
  const iBodega = idx('Bodega');
  const iTipo = idx('Tipo Producto');
  const iStockSeg = idx('Stock Seguridad');

  if (iNombre === -1) {
    Logger.log('⚠️ No se reconocen las columnas esperadas. Encabezados encontrados: %s', headers.join(' | '));
    return;
  }

  const clean = v => (v || '').replace(/^"|"$/g, '').trim();
  const filas = [];
  for (let r = 1; r < lines.length; r++) {
    const cols = lines[r].split('\t');
    const nombre = clean(cols[iNombre]);
    if (!nombre) continue;
    filas.push([
      nombre,
      clean(cols[iLote]),
      parseFloat(clean(cols[iCantidad])) || 0,
      clean(cols[iVenc]),
      clean(cols[iSem]),
      clean(cols[iBodega]),
      clean(cols[iTipo]),
      parseFloat(clean(cols[iStockSeg])) || '',
      new Date().toISOString(),
    ]);
  }

  writeMedilinkSheet_(filas);
  props.setProperty('MEDILINK_LAST_FILE_ID', latest.getId());
  props.setProperty('MEDILINK_LAST_FILE_TIME', String(latest.getLastUpdated().getTime()));
  Logger.log('✅ Importados %s items desde "%s" (subido %s)',
    filas.length, latest.getName(), latest.getLastUpdated());
}


// ═══ SECCIÓN 3: común — escribir hoja + exponer a la app ═══

function writeMedilinkSheet_(filas) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(MEDILINK_SHEET);
  if (!sheet) sheet = ss.insertSheet(MEDILINK_SHEET);
  sheet.clearContents();
  sheet.appendRow(['nombre','lote','cantidad','vencimiento','semaforo','bodega','tipo','stock_min','actualizado']);
  if (filas.length) sheet.getRange(2, 1, filas.length, filas[0].length).setValues(filas);
}

// Agrega esta línea dentro del switch/if de acciones de tu doPost existente:
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
