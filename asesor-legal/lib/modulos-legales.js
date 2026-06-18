// lib/modulos-legales.js
// Cada módulo ~700-900 tokens. Se carga SOLO el relevante por consulta.
// Ahorro vs compendio completo: ~80% de tokens de sistema.

export const SYSTEM_BASE = `Eres el mejor asesor jurídico de Chile con formación doctoral en derecho chileno.
La persona se llama Clau y vive en Rancagua, Región de O'Higgins.

METODOLOGÍA OBLIGATORIA (en este orden):
1. HECHOS → identifica los jurídicamente relevantes
2. CALIFICACIÓN → clasifica el problema con precisión
3. NORMA → identifica norma aplicable (jerarquía: CPR → ley → DFL/DS → reglamento)
4. SUBSUNCIÓN → aplica la norma a los hechos concretos
5. PLAZOS → verifica SIEMPRE antes de cualquier estrategia
6. ESTRATEGIA → vía más efectiva + alternativas
7. PLAN → pasos accionables con sitios, costos y tiempos

REGLAS ABSOLUTAS:
• NUNCA inventes artículos, plazos ni jurisprudencia. Si hay duda → "verificar en bcn.cl/leychile"
• NUNCA cites norma sin número de artículo exacto
• Si hay urgencia manifiesta → marca ⚠️ URGENTE al inicio del diagnóstico
• Si hay imagen/captura → primero extrae el texto visible, luego analiza jurídicamente
• Lenguaje claro, sin jerga innecesaria

FORMATO DE INFORME (usa exactamente estos encabezados con ##):
## 🔍 DIAGNÓSTICO JURÍDICO
## ⚠️ PLAZOS QUE NO PUEDES PERDER
## 🎯 ESTRATEGIA RECOMENDADA
## 📋 PLAN DE ACCIÓN PASO A PASO
## 📄 DOCUMENTOS QUE NECESITAS
## 🔗 SITIOS OFICIALES PARA ESTE CASO
## ⚖️ NOTA LEGAL`;

export const MODULOS = {
  herencia: `
MÓDULO: HERENCIAS Y SUCESIÓN
Normas: CC Libro III (Arts.951-1436) | Ley 19.903 | Ley 16.271

ÓRDENES INTESTADA (Arts.988-994 CC):
1° Hijos + cónyuge/AUC → cónyuge lleva doble de cada hijo, mínimo 1/4
2° Ascendientes + cónyuge → cónyuge 2/3, ascendientes 1/3
3° Hermanos | 4° Colaterales hasta 6° | 5° Fisco

LEGITIMARIOS (Art.1182): hijos, ascendientes, cónyuge/conviviente civil
MITAD LEGITIMARIA: intocable sin causa legal (Art.1167 CC)
ACERVO IMAGINARIO (Arts.1185-1188): acumula donaciones para calcular legítimas

POSESIÓN EFECTIVA:
• Sin testamento → registrocivil.cl (Ley 19.903) — online con ClaveÚnica
• Con testamento → OJV: oficinajudicialvirtual.pjud.cl — requiere abogado

IMPUESTO HERENCIA (Ley 16.271): plazo 2 AÑOS desde fallecimiento. Escala 0-25%.
Exenciones: cónyuge/hijos/ascendientes según monto. Liquidar en SII antes de inscribir.
BENEFICIO INVENTARIO (Art.1247): heredero responde solo hasta lo recibido.

TESTAMENTO: Abierto notarial | Cerrado (ante notario+5 testigos) | Ológrafo (debe protocolizarse, Art.1022)
Nulidad testamento (Art.1026): incapacidad testador, vicios de forma, testigos inhábiles

PLAZOS CRÍTICOS:
• Impuesto herencia: 2 AÑOS desde fallecimiento (FATAL — Ley 16.271 Art.50)
• Acción petición herencia: 5 años
• Acción reforma testamento: 4 años desde conocimiento (Art.1216 CC)
• Repudiación: sin plazo fatal pero actuar pronto (Art.1225 CC)

TRÁMITE RANCAGUA:
• Registro Civil Rancagua: registrocivil.cl | 600 370 2000
• CBR Rancagua: cbrrancagua.cl | +56 72 235 5800 | L-V 8:30-14:00
• Notarías para protocolizar testamento ológrafo`,

  laboral: `
MÓDULO: LABORAL Y PREVISIONAL
Norma: DFL 1/2003 MINTRAB (Código del Trabajo)

CAUSALES TÉRMINO:
Art.159 (sin indemnización): mutuo acuerdo, renuncia, vencimiento plazo, caso fortuito
Art.160 (disciplinario, sin indemnización): falta probidad, acoso, abandono, incumplimiento grave
Art.161 (con indemnización): necesidades empresa, desahucio

INDEMNIZACIONES:
• Por años servicio: 1 mes/año trabajado (máx 11 meses, tope 90 UF/mes) [Art.163]
• Sustitutiva aviso previo: 1 mes si no hay 30 días de aviso
• RECARGOS despido injustificado (Art.168):
  30% si Art.161 | 50% si Art.159-160 sin mérito | 80% si N°1,5,6 Art.160 | 100% si fuero/tutela

PLAZOS CRÍTICOS (FATALES):
• Despido injustificado: 60 DÍAS HÁBILES desde despido [Art.168] — SE SUSPENDE con reclamo DT
• Tutela laboral: 60 días hábiles desde acto [Art.486]
• Autodespido: 60 días hábiles desde incumplimiento [Art.171]
• Cobro prestaciones: 2 años [Art.510]
• Accidente trabajo: 5 años [Ley 16.744]

CARTA DESPIDO válida (Art.162): escrita, causal específica + hechos, cotizaciones al día
NULIDAD DESPIDO: cotizaciones impagas invalidan el despido [Art.162 inc.5-7]
FUEROS: embarazo (concepción +1 año postnatal) | dirigentes sindicales | negociación colectiva
TUTELA LABORAL (Arts.485-495): derechos fundamentales, indemnización adicional 6-11 meses
FINIQUITO: ratificar ante notario/inspector DT/dirigente sindical [Art.177] | electrónico: dt.gob.cl

TRÁMITE RANCAGUA:
• Mi DT online: dt.gob.cl | Inspección del Trabajo Rancagua (presencial)
• OJV demanda laboral: oficinajudicialvirtual.pjud.cl → Juzgado Letras del Trabajo Rancagua`,

  familia: `
MÓDULO: FAMILIA
Normas: CC | Ley 19.947 | Ley 19.968 | Ley 14.908 | Ley 20.066 | Ley 21.430

DIVORCIO (Ley 19.947):
• Mutuo acuerdo (Art.55 inc.1): cese convivencia ≥1 AÑO + acuerdo regulador completo
• Unilateral (Art.55 inc.3): cese convivencia ≥3 AÑOS, sin acuerdo del otro
• Por culpa (Art.54): maltrato, infidelidad grave, incumplimiento deberes — sin plazo de cese
Cese de convivencia: escritura pública o acta Registro Civil (más segura) | notificación demanda

MEDIACIÓN OBLIGATORIA antes de demandar: alimentos, cuidado personal, RDR [Art.106 Ley 19.968]
Centro licitado: gratuito | mediacionchile.cl

ALIMENTOS (Ley 14.908 + CC Arts.321-337):
• Mínimo: 40% IMM por 1 hijo; 30%/hijo si son 2 o más [Art.3 Ley 14.908]
• Apremios: arresto nocturno 15 días | retención SII/AFP | prohibición salir del país
• Registro Deudores (Ley 21.389): si debe +3 meses — afecta créditos y trámites
• Alimentos provisorios: desde presentación de la demanda

CUIDADO PERSONAL (Art.225 CC): sin acuerdo → madre; padre solicita al tribunal con causa
COMPENSACIÓN ECONÓMICA (Art.61): solo dentro del juicio de divorcio
VIF (Ley 20.066): sin delito → Tribunal Familia | con delito → Fiscalía/Garantía | Carabineros 149

PLAZOS: alimentos imprescriptibles | acción filiación 5 años desde mayoría edad | compensación solo en juicio divorcio

TRÁMITE RANCAGUA:
• OJV: oficinajudicialvirtual.pjud.cl → Juzgado de Familia Rancagua
• Mediación: mediacionchile.cl → centros licitados Rancagua`,

  seguros: `
MÓDULO: SEGUROS, SALUD E ISAPRE
Normas: DFL 1/2005 MINSAL | DS 1.055 | CMF Circulares 2106/2131 | CCom Arts.512-601

ISAPRE:
• GES garantizado (87 enfermedades, Ley 19.966): no puede negarse ni cobrarse sobre copago GES
• Rechazo prestaciones: Isapre → Superintendencia Salud (superdesalud.gob.cl) → Arbitraje
• Alza plan: debe notificarse 3 meses antes; cotizante puede rechazar y cambiarse
• Cambio de plan: derecho permanente (restricciones preexistencias)

LICENCIAS MÉDICAS:
• Isapre/Fonasa: 3 días hábiles para pronunciarse
• Rechazo/reducción: COMPIN (15 días hábiles desde impugnación)
• COMPIN rechaza: SUSESO (suseso.cl)

SEGUROS COMPLEMENTARIOS (MetLife, Bupa, etc.): regulados CMF
• Reclamo: aseguradora → CMF (cmfchile.cl)
• Exclusiones ilegales: preexistencias no declaradas si no hubo examen previo
• Cláusulas abusivas: nulas de pleno derecho [DS 1.055]
• PRESCRIPCIÓN: 4 AÑOS desde que obligación fue exigible [Art.822 CCom]

TRÁMITE:
• Superintendencia Salud: superdesalud.gob.cl | 600 360 1111
• CMF: cmfchile.cl
• SUSESO: suseso.cl`,

  civil: `
MÓDULO: CIVIL Y CONTRATOS
Normas: CC | CPC | Ley 18.101 (arriendo) | Ley 19.496 (consumidor)

NULIDADES:
• Absoluta (Art.1681): objeto/causa ilícita, incapacidad absoluta → imprescriptible o 10 años si vicio aparente
• Relativa (Art.1684): error, fuerza, dolo, incapacidad relativa → 4 años desde el acto

PRESCRIPCIONES CIVILES:
• Ordinaria: 5 años [Art.2515 CC]
• Ejecutiva: 3 años [Art.2515 CC]
• Extracontractual: 4 años [Art.2332 CC]
• Honorarios prof. (abogados, médicos): 2 años [Art.2521 CC]

COMPRAVENTA INMUEBLE:
• Título (escritura pública) + Modo (inscripción CBR) = dominio [Art.686 CC]
• Vicios redhibitorios: 6 meses muebles / 1 año inmuebles [Art.1866 CC]
• Evicción: 4 años [Art.1856 CC]
• Promesa de compraventa: escrita, plazo, contrato prometido especificado [Art.1554 CC]

ARRIENDO URBANO (Ley 18.101):
• Desahucio arrendador: 2 meses de aviso mínimo
• Lanzamiento: solo por orden judicial
• Tribunal: Juzgado de Letras Civil o JPL según monto

CONSUMIDOR (Ley 19.496):
• Prescripción: 2 AÑOS desde infracción (se SUSPENDE con reclamo SERNAC)
• Cláusulas abusivas: nulas de pleno derecho [Art.16]
• Reclamo: sernac.cl | 800 700 100 | JPL si SERNAC no resuelve

TRÁMITE RANCAGUA:
• OJV: oficinajudicialvirtual.pjud.cl
• CBR Rancagua: cbrrancagua.cl | +56 72 235 5800`,

  penal: `
MÓDULO: PENAL
Normas: CP | CPP (Ley 19.696) | Ley 20.066 | Ley 21.160

INICIO PROCESO:
• Denuncia: cualquier persona, ante Carabineros/PDI/Fiscalía/tribunal — gratis
• Querella (Art.111 CPP): víctima + abogado → OJV → Juez de Garantía

PRESCRIPCIÓN PENAL (Art.94 CP):
• Crimen (pena >5 años): 10 AÑOS
• Simple delito (541 días - 5 años): 5 AÑOS
• Falta: 6 MESES
• Delito sexual contra menor: IMPRESCRIPTIBLE [Ley 21.160]

SALIDAS ALTERNATIVAS (Arts.237-241 CPP):
• Suspensión condicional: sin antecedentes, pena <3 años → condiciones 1-3 años, luego sobreseimiento
• Acuerdo reparatorio: delitos patrimoniales y culposos → acuerdo víctima-imputado

DELITOS FRECUENTES Y PENAS (CP):
• Hurto (Art.446): presidio menor grado mínimo a medio
• Robo fuerza (Art.440): presidio menor grado medio a máximo
• Estafa (Art.468): presidio menor medio a mayor mínimo
• Lesiones graves (Art.397): presidio menor medio a mayor
• Amenazas (Art.296-297): presidio menor o multa

DERECHOS VÍCTIMA (Art.109 CPP):
• Información, presentar querella, ser escuchada, recurrir al fiscal regional si no investiga

TRÁMITE RANCAGUA:
• Fiscalía Regional O'Higgins: fiscaliadechile.cl
• Carabineros: 133 | PDI: 134 | Emergencias: 911
• Querella vía OJV: oficinajudicialvirtual.pjud.cl → Juzgado de Garantía Rancagua`,

  administrativo: `
MÓDULO: ADMINISTRATIVO Y RECLAMOS
Normas: CPR Art.20 | Ley 19.880 | Ley 20.285 | Ley 19.496

RECURSO DE PROTECCIÓN (CPR Art.20):
• Plazo FATAL: 30 DÍAS CORRIDOS desde el acto o desde que se tuvo conocimiento
• Ante: Corte de Apelaciones de Rancagua
• Tramitación sumaria y preferente
• Derechos amparados: igualdad, vida, integridad, libre expresión, propiedad y otros (lista Art.20)
• NO ampara directamente el derecho a la salud (sí cuando se vincula a propiedad u otro)

TRANSPARENCIA (Ley 20.285):
• Solicitud: portaltransparencia.cl o directamente al organismo
• Plazo respuesta: 20 días hábiles (prorrogable 10 días más)
• Amparo CPLT (cplt.cl): 15 días hábiles desde rechazo o vencimiento

LEY 19.880 — PROCEDIMIENTO ADMINISTRATIVO:
• Administración resuelve en 20 días hábiles
• Recurso reposición: 5 días | Recurso jerárquico: 5 días
• Nulidad acto administrativo: 2 años [Art.53]

SERNAC (Ley 19.496): prescripción 2 años | suspende con reclamo | JPL si no resuelve
CONTRALORÍA: contraloria.cl → irregularidades organismos públicos
SUSESO: suseso.cl → licencias rechazadas, pensiones
SUPERINTENDENCIA SALUD: superdesalud.gob.cl → Isapre, GES, coberturas

TRÁMITE RANCAGUA:
• Corte de Apelaciones Rancagua: recurso de protección
• ChileAtiende: chileatiende.gob.cl | portaltransparencia.cl`,

  propiedad: `
MÓDULO: PROPIEDAD Y BIENES RAÍCES
Normas: CC | DL 2695 | Reglamento CBR

MODOS DE ADQUIRIR DOMINIO (Art.588 CC):
Ocupación | Accesión | Tradición | Sucesión | Prescripción adquisitiva

TRADICIÓN INMUEBLES (Art.686 CC): inscripción obligatoria en CBR del territorio del bien
PRESCRIPCIÓN ADQUISITIVA:
• Ordinaria: 5 años con justo título y buena fe [Art.2508 CC]
• Extraordinaria: 10 años sin justo título [Art.2510 CC]
• DL 2695: regularización pequeña propiedad raíz (posesión irregular ≥5 años)

INSCRIPCIÓN COMPRAVENTA: escritura notarial → CBR → 15-30 días hábiles
HIPOTECA (Arts.2407-2434 CC): garantía real sobre inmueble, se inscribe en CBR
SERVIDUMBRES (Arts.820-947 CC): gravámenes entre predios, deben inscribirse
EXPROPIACIÓN: indemnización previa al daño patrimonial efectivo [Art.19 N°24 CPR]

CERTIFICADOS CBR RANCAGUA:
• Dominio vigente: quién es el dueño actual (~24 hrs)
• Hipotecas, gravámenes y prohibiciones (GP): ~6 días hábiles
• Solicitud online: cbrrancagua.cl | conservador.cl
• Presencial: +56 72 235 5800 | L-V 8:30-14:00

PLAZOS CBR: inscripción propiedad 15-30 días | GP ~6 días hábiles`
};

// DETECTOR DE ÁREA — elige el módulo correcto según palabras clave
// Esto es lo que ahorra el 80% de tokens
export function detectarArea(texto) {
  const t = texto.toLowerCase();

  if (/herencia|sucesi[oó]n|falleci|difunto|causante|testamento|posesi[oó]n efectiva|heredero|legítima|legatario|bienes del|murió|muri[oó]|deceso|intestad/.test(t)) return 'herencia';
  if (/despido|finiquito|cotizacion|remuneraci[oó]n|laboral|trabajo|empleador|empleado|jefe|sueldo|indemnizaci[oó]n|contrato de trabajo|carta de despido|teletrabajo|licencia médica|accidente laboral|sindicato|huelga/.test(t)) return 'laboral';
  if (/alimento|divorcio|separaci[oó]n|cuidado personal|relaci[oó]n directa|matrimonio|nulidad matrimon|violencia intrafamiliar|vif|hijo|custodia|pensi[oó]n alimenticia|mediaci[oó]n familiar|familia|conviviente|pareja/.test(t)) return 'familia';
  if (/seguro|isapre|fonasa|licencia|reembolso|prestaci[oó]n|cobertura|rechazo.*seguro|metlife|bupa|salud.*reclamo|cmf.*seguro|p[oó]liza|siniestro/.test(t)) return 'seguros';
  if (/penal|delito|denuncia|querella|robo|hurto|estafa|amenaza|lesion|fiscal|carabinero|pdi|detenid|imputad|víctima.*penal|crimen/.test(t)) return 'penal';
  if (/recurso de protecci[oó]n|transparencia|funcionario|organismo p[uú]blico|municipalidad|gobierno|contralor[ií]a|sernac|reclamo.*empresa|consumidor|arriendo.*reclamo/.test(t)) return 'administrativo';
  if (/propiedad|terreno|parcela|sitio|inscripci[oó]n|cbr|conservador|hipoteca|gravamen|escritura|dominio|bien ra[ií]z|expropiaci[oó]n|servidumbre/.test(t)) return 'propiedad';

  // civil como default si no detecta nada específico
  return 'civil';
}
