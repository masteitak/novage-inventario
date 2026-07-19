// ═══ DATA ═══
const RAW = [{"barcode":"606110297004","name":"Cranberry Plus","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10500,"precio":12495,"pvp":18900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","descuento":0,"descripcion":"Antioxidante. Arandano rojo organico. 2 capsulas al dia. 60 capsulas. 30 dias de nutricion. Vegano. Origen Canada.","iva19":1995,"mayorista_sin_iva":10500,"mayorista_con_iva":12495,"wellplus_link":"https://wellplus.cl/producto/cranberry-plus-60-capsulas/"},{"barcode":"606110296991","name":"COGNI PRO","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":24900,"precio":29631,"pvp":44900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":4731,"mayorista_sin_iva":24900,"mayorista_con_iva":29631,"wellplus_link":"https://wellplus.cl/producto/cognipro-90-capsulas/"},{"barcode":"737186364875","name":"Neuro MAG PRO","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":24900,"precio":29631,"pvp":44900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":4731,"mayorista_sin_iva":24900,"mayorista_con_iva":29631,"wellplus_link":"https://wellplus.cl/producto/neuro-mag-pro-90-capsulas/"},{"barcode":"781718850001","name":"Triple Magnesio Quelado + Zinc","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":13500,"precio":16065,"pvp":24900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2565,"mayorista_sin_iva":13500,"mayorista_con_iva":16065,"wellplus_link":""},{"barcode":"781718850025","name":"Magnesio Citrato + L Glutamina","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"781718849999","name":"Derma Plus","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":18900,"precio":22491,"pvp":34900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","descuento":0,"descripcion":"Antioxidante con peptidos bioactivos y colageno. Incluye astaxantina, biotina, bisglicinato de magnesio, colageno bovino tipo I, zinc, selenio, vitamina C liposomal y vitamina D3. 6 capsulas al dia. 180 capsulas. 30 dias.","iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"wellplus_link":"https://wellplus.cl/producto/derma-plus-copia/"},{"barcode":"781718850018","name":"Osteo Plus (D3+K2 adicionado)","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":18900,"precio":22491,"pvp":34900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"wellplus_link":""},{"barcode":"606110295765","name":"Omega Plus 670","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":16500,"precio":19635,"pvp":25990,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"606110296915","name":"Omega Plus 670","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":29900,"precio":35581,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"614143258954","name":"Vegan Omega DHA 600","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":13900,"precio":16541,"pvp":25900,"stock_bodega":1,"stock_espacio":0,"minstock":2,"vencimiento":"2026-06-30","iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"wellplus_link":""},{"barcode":"658325429152","name":"Probiotic Plus 40B + Cranberry Mujer","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":21900,"precio":26061,"pvp":39900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"wellplus_link":""},{"barcode":"606110296939","name":"Probiotic Plus 50B","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":18500,"precio":22015,"pvp":33900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":3515,"mayorista_sin_iva":18500,"mayorista_con_iva":22015,"wellplus_link":""},{"barcode":"781718850063","name":"Vitamina B12 Plus Liposomal (Metilcobalamina)","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":12500,"precio":14875,"pvp":22900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2375,"mayorista_sin_iva":12500,"mayorista_con_iva":14875,"wellplus_link":""},{"barcode":"737186364854","name":"Vitamina B Complex Plus Liposomal","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":12500,"precio":14875,"pvp":22900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2375,"mayorista_sin_iva":12500,"mayorista_con_iva":14875,"wellplus_link":""},{"barcode":"658325429138","name":"Vitamina C Liposomal","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-07-15","descuento":0,"descripcion":"Vitamina C liposomal 1000 mg. Formula mejorada. Tecnologia liposomal Wellplus. 2 capsulas al dia. 60 capsulas. 30 dias de nutricion. Vegano. Antioxidante.","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":"https://wellplus.cl/producto/vitamina-c-plus-liposomal-60-capsulas/"},{"barcode":"781718849975","name":"Vitamina C Liposomal","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":13900,"precio":16541,"pvp":25900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","descuento":0,"descripcion":"Vitamina C liposomal 1000 mg. Formula mejorada. Tecnologia liposomal Wellplus. 2 capsulas al dia. 90 capsulas. 45 dias de nutricion. Vegano. Antioxidante.","iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"wellplus_link":"https://wellplus.cl/producto/vitamina-c-plus-liposomal-90-capsulas/"},{"barcode":"614143258992","name":"Vitamina D3+K2 Plus","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":13500,"precio":16065,"pvp":24900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","descuento":0,"descripcion":"Vitamina D3+K2 Plus. Vitamina D3 vegetal y K2 mena MK-7. 1 capsula al dia. 60 capsulas. 60 dias de nutricion. Vegano. Origen Estados Unidos.","iva19":2565,"mayorista_sin_iva":13500,"mayorista_con_iva":16065,"wellplus_link":"https://wellplus.cl/producto/vitamina-d3k2-plus-60-capsulas/"},{"barcode":"737186364908","name":"Yodo Plus L-Tirosina","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":14500,"precio":17255,"pvp":25900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2755,"mayorista_sin_iva":14500,"mayorista_con_iva":17255,"wellplus_link":""},{"barcode":"614143259029","name":"Zinc Plus","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":8900,"precio":10591,"pvp":15900,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2028-05-30","iva19":1691,"mayorista_sin_iva":8900,"mayorista_con_iva":10591,"wellplus_link":""},{"barcode":"737186364915","name":"Zinc /Selenio / Manganeso","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":12500,"precio":14875,"pvp":22900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2375,"mayorista_sin_iva":12500,"mayorista_con_iva":14875,"wellplus_link":""},{"barcode":"658325429190","name":"Cromo Plus Canela","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":4,"minstock":2,"vencimiento":"2027-01-31","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039530","name":"COPPER ONE","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":13500,"precio":16065,"pvp":24900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2565,"mayorista_sin_iva":13500,"mayorista_con_iva":16065,"wellplus_link":""},{"barcode":"745853039592","name":"MAGNESIO BISGLICINATO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039608","name":"MAGNESIO MALATO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039615","name":"MAGNESIO TAURINATO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"737186364892","name":"L- TRIPTOFANO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039622","name":"YODO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039677","name":"SELENIO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2028-01-22","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039684","name":"L-TIROSINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":10900,"precio":12971,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"745853039660","name":"SHISANDRA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":1,"stock_espacio":0,"minstock":2,"vencimiento":"2026-12-08","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"745853039585","name":"L-GLUTATION LIPOSOMAL 250 mg","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":16500,"precio":19635,"pvp":29900,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-04-30","iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"wellplus_link":""},{"barcode":"745853039646","name":"CoQ10 ACTIVA LIPOSOMAL (UBIQUINOL ACETATO)","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":18900,"precio":22491,"pvp":34900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"wellplus_link":""},{"barcode":"745853039578","name":"ENERGY CELL (Mitocondrial Activator)","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":24900,"precio":29631,"pvp":44900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":4731,"mayorista_sin_iva":24900,"mayorista_con_iva":29631,"wellplus_link":""},{"barcode":"745853039707","name":"VITAMINA E70 ( Tocotrienol y Tocoferol)","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":18900,"precio":22491,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"wellplus_link":""},{"barcode":"745853039714","name":"SOD 750 ZnSeMn","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2028-02-29","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"781718849982","name":"ARTIPLUS - Colágenos Tipo II","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":0,"precio":0,"pvp":35900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"799192351037","name":"COLINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":13900,"precio":16541,"pvp":25900,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2026-06-04","iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"wellplus_link":""},{"barcode":"799192351112","name":"PREBIOTICO N°2 ( Aerobic Bateria)","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":2,"stock_espacio":0,"minstock":2,"vencimiento":"2026-10-31","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"799192351075","name":"COLLAGEN PURE (Péptidos Bioactivos)","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2028-05-31","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"737186364861","name":"IRON Plus Liposomal","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":13900,"precio":16541,"pvp":25900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"wellplus_link":"https://wellplus.cl/producto/iron-plus-liposomal-60-capsulas/"},{"barcode":"737186364885","name":"Neuro Calm","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":14500,"precio":17255,"pvp":25900,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30","iva19":2755,"mayorista_sin_iva":14500,"mayorista_con_iva":17255,"wellplus_link":""},{"barcode":"7804637360048","name":"OMEGA 3 800EPA/400DHA","brand":"UP","cat":"Suplemento","pres":"120 cápsulas","costo":0,"precio":0,"pvp":34990,"stock_bodega":2,"stock_espacio":0,"minstock":2,"vencimiento":"2028-03-01","vendor_link":"https://newsciencestore.com/producto/omega-up-120-capsulas/"},{"barcode":"7804637360482","name":"OMEGA 3 800EPA/400DHA","brand":"UP","cat":"Suplemento","pres":"150 cápsulas","costo":0,"precio":0,"pvp":38990,"stock_bodega":1,"stock_espacio":0,"minstock":2,"vencimiento":"2028-03-01","vendor_link":"https://newsciencestore.com/producto/omega-up-ultrapure-150-capsulas/"},{"barcode":"745853039639","name":"L GLUTAMINA PURE 4100mg","brand":"WELL PLUS","cat":"Suplemento","pres":"150 cápsulas","costo":10900,"precio":12971,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"7804637361359","name":"D3 + K2 SPRAY","brand":"VITAMIN UP","cat":"Suplemento","pres":"10 ml","costo":0,"precio":0,"pvp":25490,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-11-30","vendor_link":"https://newsciencestore.com/producto/vitamina-d3k2-spray/"},{"barcode":"7804637360772","name":"Colágeno","brand":"UP","cat":"Suplemento","pres":"90 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-11-30"},{"barcode":"3701145600267","name":"LACTIBIANE Cnd","brand":"LACTIBIANE","cat":"Suplemento","pres":"30 cápsulas","costo":0,"precio":28990,"pvp":28990,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-06-30"},{"barcode":"3401560504828","name":"LACTIBIANE Referencia","brand":"LACTIBIANE","cat":"Suplemento","pres":"30 cápsulas","costo":0,"precio":25490,"pvp":25490,"stock_bodega":1,"stock_espacio":0,"minstock":2,"vencimiento":"2026-06-01"},{"barcode":"3401545503877","name":"LACTIBIANE Ito","brand":"LACTIBIANE","cat":"Suplemento","pres":"30 cápsulas","costo":0,"precio":25490,"pvp":25490,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-06-30"},{"barcode":"8436571631275","name":"Total Cream Cara y Cuerpo","brand":"BABBE","cat":"Dermocosmética","pres":"Crema","costo":0,"precio":45444,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-06-30"},{"barcode":"8436571630773","name":"Lip Corrector Ojos (Healthy Aging)","brand":"BABBE","cat":"Dermocosmética","pres":"Crema","costo":0,"precio":46143,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-06-30"},{"barcode":"8437011329165","name":"Hidro Nutri Protector","brand":"BABBE","cat":"Dermocosmética","pres":"Crema","costo":0,"precio":45474,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-06-30"},{"barcode":"8436571631367","name":"Spray Calmante","brand":"BABBE","cat":"Dermocosmética","pres":"Spray","costo":0,"precio":45597,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-06-30"},{"barcode":"7804672360041","name":"Jabón Repuesto Íntimo 40g","brand":"VULBE","cat":"Dermocosmética","pres":"40 gramos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-12-30"},{"barcode":"7730482001730","name":"V Fresh & Ready","brand":"BIOLUBE","cat":"Dermocosmética","pres":"35g","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-02-20"},{"barcode":"7730482001716","name":"V Happy Everyday","brand":"BIOLUBE","cat":"Dermocosmética","pres":"155g","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2027-02-22"},{"barcode":"7730482001723","name":"V Queen Serum Íntimo","brand":"BIOLUBE","cat":"Dermocosmética","pres":"32g","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":8,"minstock":2,"vencimiento":"2027-04-01"},{"barcode":"7730482001877","name":"Tiny Treasures Travel Kit","brand":"BIOLUBE","cat":"Dermocosmética","pres":"Kit","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":4,"minstock":2,"vencimiento":"2027-04-01"},{"barcode":"9829883782732","name":"L-Triptófano","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":9290,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-10-28","karun_link":"https://karunlife.cl/products/l-triptofano-100-mg-60-capsulas"},{"barcode":"8809663760496","name":"SIMFLE Bloqueador","brand":"MEDSTYLE","cat":"Dermocosmética","pres":"Crema","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-06-30"},{"barcode":"6787678767872","name":"Zinc","brand":"KARUN","cat":"Suplemento","pres":"90 cápsulas","costo":0,"precio":0,"pvp":8090,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-12-01","karun_link":"https://karunlife.cl/products/zinc-90-capsulas-450-mg"},{"barcode":"1782778899763","name":"Citrato de Magnesio","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":1,"stock_espacio":0,"minstock":2,"vencimiento":"2026-10-28"},{"barcode":"6597265716899","name":"Calcio + Magnesio + Vitamina D","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-11-11"},{"barcode":"6357498521444","name":"Vitamina E UI400","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-10-28"},{"barcode":"8899226743554","name":"Reishi (cápsulas)","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-12-01"},{"barcode":"2652768101475","name":"Shitake","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2026-09-12"},{"barcode":"4041940874081","name":"Pepa de Calabaza","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2026-11-11"},{"barcode":"6258978045699","name":"Kalanchoe","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-10-28"},{"barcode":"9810699948610","name":"Zeolita 500mg","brand":"KARUN","cat":"Suplemento","pres":"90 cápsulas","costo":0,"precio":0,"pvp":9290,"stock_bodega":3,"stock_espacio":0,"minstock":2,"vencimiento":"2027-03-11","karun_link":"https://karunlife.cl/products/zeolita"},{"barcode":"9596945323997","name":"Cardo Mariano","brand":"KARUN","cat":"Suplemento","pres":"90 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2027-03-07"},{"barcode":"9780697263483","name":"Sincol Life","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-11-11"},{"barcode":"9989837881116","name":"Reishi Líquido","brand":"KARUN","cat":"Suplemento","pres":"30 ml","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-12-01"},{"barcode":"3394451874936","name":"Alcachofa","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"2027-12-01"},{"barcode":"5796351451084","name":"Curcovit","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-11-11"},{"barcode":"1900357005989","name":"Clorofila Líquida","brand":"KARUN","cat":"Suplemento","pres":"Líquida","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2027-03-21"},{"barcode":"745853039653","name":"TRIPLE POTASIO QUELADO","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":10900,"precio":12971,"pvp":19900,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-02-02","iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"wellplus_link":""},{"barcode":"7804668560080","name":"Omega 800EPA/400DHA","brand":"NERTHUS","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2027-11-03"},{"barcode":"7762738788232","name":"Aloe Vera Matico","brand":"KARUN","cat":"Suplemento","pres":"Líquida","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-03-17"},{"barcode":"614143259005","name":"D3 PLUS 800UI","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2026-02-03"},{"barcode":"7804668560066","name":"M-PLUS MUJER","brand":"NERTHUS","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2027-11-04"},{"barcode":"7804668560066","name":"M- PLUS MUJER","brand":"NERTHUS","cat":"Suplemento","pres":"12 capsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2027-11-14"},{"barcode":"","name":"Z-PLUS NOCHE","brand":"NERTHUS","cat":"Suplemento","pres":"12 capsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2027-11-14"},{"barcode":"","name":"FERTYPLUS","brand":"NERTHUS","cat":"Suplemento","pres":"12 capsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2027-07-23"},{"barcode":"7809561401218","name":"NEUREXAN","brand":"","cat":"Suplemento","pres":"25 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":4,"minstock":2,"vencimiento":"2029-08-01"},{"barcode":"7809561401485","name":"Klimakt-heel","brand":"","cat":"Suplemento","pres":"50 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":2,"minstock":2,"vencimiento":"2029-12-01"},{"barcode":"7809561400082","name":"Nervoheel","brand":"","cat":"Suplemento","pres":"50 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2029-08-01"},{"barcode":"7809561401515","name":"Centreel","brand":"","cat":"Suplemento","pres":"25 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2029-07-01"},{"barcode":"7809561401201","name":"engystol","brand":"","cat":"Suplemento","pres":"25 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2030-10-01"},{"barcode":"7809561400983","name":"Traumeel","brand":"","cat":"Suplemento","pres":"25 comprimidos","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":4,"minstock":2,"vencimiento":"2029-08-01"},{"barcode":"2652768101475","name":"Shitake 90c","brand":"KARUN","cat":"Suplemento","pres":"90 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":3,"minstock":2,"vencimiento":"2027-02-10"},{"barcode":"9829883782732","name":"L-TRIPTOFANO 400MG","brand":"KARUN","cat":"Suplemento","pres":"60 capsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":6,"minstock":2,"vencimiento":"2026-11-04"},{"barcode":"8809663760496","name":"SUN PACK","brand":"","cat":"Suplemento","pres":"","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":7,"minstock":2,"vencimiento":"2028-11-01"},{"barcode":"606110296984","name":"Probiotic Plus 40B","brand":"WELLPLUS","cat":"Suplemento","pres":"60 capsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":1,"minstock":2,"vencimiento":"2026-03-14"},{"barcode":"658325429138","name":"Vitamina C Liposomal KARUN","brand":"KARUN","cat":"Suplemento","pres":"60 cápsulas","costo":0,"precio":0,"pvp":0,"stock_bodega":0,"stock_espacio":4,"minstock":2,"vencimiento":"2026-12-31","descuento":0},{"barcode":"","name":"AX Plus (Astaxantina)","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":12500,"precio":14875,"pvp":22900,"iva19":2375,"mayorista_sin_iva":12500,"mayorista_con_iva":14875,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Curcumin Plus MCT","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":14500,"precio":17255,"pvp":25900,"iva19":2755,"mayorista_sin_iva":14500,"mayorista_con_iva":17255,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Artiplus","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":19900,"precio":23681,"pvp":35900,"iva19":3781,"mayorista_sin_iva":19900,"mayorista_con_iva":23681,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Omega Plus 490","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":15500,"precio":18445,"pvp":27900,"iva19":2945,"mayorista_sin_iva":15500,"mayorista_con_iva":18445,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Omega Plus 490","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":40900,"precio":48671,"pvp":74900,"iva19":7771,"mayorista_sin_iva":40900,"mayorista_con_iva":48671,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Omega Plus 790 mg","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":18900,"precio":22491,"pvp":34900,"iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Omega Plus 790 mg","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":34900,"precio":41531,"pvp":63900,"iva19":6631,"mayorista_sin_iva":34900,"mayorista_con_iva":41531,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Omega Plus 790 mg","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":51900,"precio":61761,"pvp":93900,"iva19":9861,"mayorista_sin_iva":51900,"mayorista_con_iva":61761,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vegan Omega DHA 600","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":38500,"precio":45815,"pvp":71900,"iva19":7315,"mayorista_sin_iva":38500,"mayorista_con_iva":45815,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Keto Oil MCT Plus","brand":"WELL PLUS","cat":"Suplemento","pres":"480 ml","costo":12900,"precio":15351,"pvp":23900,"iva19":2451,"mayorista_sin_iva":12900,"mayorista_con_iva":15351,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Keto Golden Oil MCT Plus Curcumin","brand":"WELL PLUS","cat":"Suplemento","pres":"480 ml","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Caviar Protein Plus BCAA & Nucleotidos","brand":"WELL PLUS","cat":"Suplemento","pres":"360 cápsulas","costo":32500,"precio":38675,"pvp":59900,"iva19":6175,"mayorista_sin_iva":32500,"mayorista_con_iva":38675,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Caviar Protein PURE BCAA & Nucleotidos","brand":"WELL PLUS","cat":"Suplemento","pres":"360 cápsulas","costo":18900,"precio":22491,"pvp":34900,"iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Probiotic Plus 20B","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10500,"precio":12495,"pvp":18900,"iva19":1995,"mayorista_sin_iva":10500,"mayorista_con_iva":12495,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Probiotic Plus 40B Mujer","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Probiotic Plus 60B IMM","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":"https://wellplus.cl/producto/probiotic-plus-60b-imm-60-capsulas/"},{"barcode":"","name":"Probiotic Plus 80B","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":24500,"precio":29155,"pvp":44900,"iva19":4655,"mayorista_sin_iva":24500,"mayorista_con_iva":29155,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vitamina D3 Plus Vegana","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":8900,"precio":10591,"pvp":15900,"iva19":1691,"mayorista_sin_iva":8900,"mayorista_con_iva":10591,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vitamina D3 Plus No Vegana","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":8500,"precio":10115,"pvp":14900,"iva19":1615,"mayorista_sin_iva":8500,"mayorista_con_iva":10115,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vitamina K2 como MK-7","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vegan Derma","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Keratin Plus Biotin","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":12500,"precio":14875,"pvp":22900,"iva19":2375,"mayorista_sin_iva":12500,"mayorista_con_iva":14875,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Betanox","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":18900,"precio":22491,"pvp":34900,"iva19":3591,"mayorista_sin_iva":18900,"mayorista_con_iva":22491,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MCT Cromo Canela","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":7900,"precio":9401,"pvp":14900,"iva19":1501,"mayorista_sin_iva":7900,"mayorista_con_iva":9401,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MCT Astaxantina","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":7900,"precio":9401,"pvp":14900,"iva19":1501,"mayorista_sin_iva":7900,"mayorista_con_iva":9401,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MCT IMN+","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":7900,"precio":9401,"pvp":14900,"iva19":1501,"mayorista_sin_iva":7900,"mayorista_con_iva":9401,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MCT C8","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":8500,"precio":10115,"pvp":15900,"iva19":1615,"mayorista_sin_iva":8500,"mayorista_con_iva":10115,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MCT C8 PRO","brand":"WELL PLUS","cat":"Suplemento","pres":"150 ml","costo":13900,"precio":16541,"pvp":25900,"iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"L- GLUTAMINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"L-TIROSINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"ENDO ANTIOX","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"HYALURONIC PLUS Q10 + VIT E","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":18500,"precio":22015,"pvp":34900,"iva19":3515,"mayorista_sin_iva":18500,"mayorista_con_iva":22015,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"SMEN","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":127900,"precio":152201,"pvp":0,"iva19":24301,"mayorista_sin_iva":127900,"mayorista_con_iva":152201,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MAGTEIN PURE (MAGNESIO L-TREONATO )","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":17900,"precio":21301,"pvp":32900,"iva19":3401,"mayorista_sin_iva":17900,"mayorista_con_iva":21301,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"FOSFATIDILSERINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":13900,"precio":16541,"pvp":25900,"iva19":2641,"mayorista_sin_iva":13900,"mayorista_con_iva":16541,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MAGNESIO BUTIRATO PURE ( POST BIOTIC)","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"PREBIOTICO N°1 ( Anaerobic Bateria)","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"CROMO CANELA BUTIRATO","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"BUTYRIC PLUS (Endo & Exo Butirato)","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"NICOTINAMIDA RIBOSA (NAD PRECURSOR)","brand":"WELL PLUS","cat":"Suplemento","pres":"300 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"KIWI ACTIVE","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"ATA MaG PURE ( Magnesio Acetil Taurato)","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"BROCCOLI ACTIVE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"MALTOR, TAURiNA MALATO PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"FIBRO MAG","brand":"WELL PLUS","cat":"Suplemento","pres":"120 cápsulas","costo":19900,"precio":23681,"pvp":35900,"iva19":3781,"mayorista_sin_iva":19900,"mayorista_con_iva":23681,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"COLLAGEN PRO (Péptidos Bioactivos, Q10, SOD, BIOTINA )","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"TRIBUTIRINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"30 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"BIOTINA LIPOSOMAL","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"OMEGA PRO","brand":"WELL PLUS","cat":"Suplemento","pres":"60 cápsulas","costo":21900,"precio":26061,"pvp":39900,"iva19":4161,"mayorista_sin_iva":21900,"mayorista_con_iva":26061,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"OMEGA PRO","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":59900,"precio":71281,"pvp":109900,"iva19":11381,"mayorista_sin_iva":59900,"mayorista_con_iva":71281,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vitamina D3 Plus Vegana, 240 cap","brand":"WELL PLUS","cat":"Suplemento","pres":"240 cápsulas","costo":27900,"precio":33201,"pvp":49900,"iva19":5301,"mayorista_sin_iva":27900,"mayorista_con_iva":33201,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"Vitamina D3 Plus No Vegana","brand":"WELL PLUS","cat":"Suplemento","pres":"240 cápsulas","costo":27900,"precio":33201,"pvp":49900,"iva19":5301,"mayorista_sin_iva":27900,"mayorista_con_iva":33201,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"CREATINE PLUS","brand":"WELL PLUS","cat":"Suplemento","pres":"410gr.","costo":16500,"precio":19635,"pvp":29900,"iva19":3135,"mayorista_sin_iva":16500,"mayorista_con_iva":19635,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"GLICINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"180 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"LISINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""},{"barcode":"","name":"LEUCINA PURE","brand":"WELL PLUS","cat":"Suplemento","pres":"90 cápsulas","costo":10900,"precio":12971,"pvp":19900,"iva19":2071,"mayorista_sin_iva":10900,"mayorista_con_iva":12971,"stock_bodega":0,"stock_espacio":0,"minstock":2,"vencimiento":"","descuento":0,"descripcion":"","wellplus_link":""}];

let products = RAW.map((p,i)=>({...p,id:i,catalog_costo:p.costo||0,catalog_precio:p.precio||0,catalog_pvp:p.pvp||0,proximoPedido:false,lots:Array.isArray(p.lots)?p.lots:[]}));
const WELLPLUS_CATALOG_VERSION = '2026-05-29-wellplus-v2';
const LS_WELLPLUS_CATALOG_VERSION = 'nvg_wellplus_catalog_version';
const LS_WELLPLUS_PRICE_SYNC_TS = 'nvg_wellplus_price_sync_ts';
let cart = [];
let payMethod = 'redbank';
let ventas = [];
let serviceSales = [];
let transfers = [];
let supplies = [];
let supplyUsageLog = [];
let pendingServicePayload = null;
let selectedGestionProductId = null;
let posLocFilter = '';
let posCatFilter = '';

const TODAY = new Date();

function fmt(n){return '$'+(Math.round(n)||0).toLocaleString('es-CL')}
function fmtDate(s){if(!s)return'—';try{return new Date(s).toLocaleDateString('es-CL')}catch{return s}}
function salePrice(p){
  const pvp = Number(p?.pvp ?? 0) || 0;
  const precio = Number(p?.precio ?? 0) || 0;
  return pvp > 0 ? pvp : precio;
}
function netFromGross(gross){return Math.round((Number(gross)||0)/1.19)}
function ivaFromGross(gross){const total = Number(gross)||0; return total - netFromGross(total)}

function applyWellplusCatalogVersion(){
  try{
    const current = localStorage.getItem(LS_WELLPLUS_CATALOG_VERSION)||'';
    if(current === WELLPLUS_CATALOG_VERSION) return;
    products.forEach(p=>{
      const brand = ((p.brand||'').toUpperCase().replace(/\s+/g,''));
      if(brand !== 'WELLPLUS') return;
      if((p.catalog_costo||0) > 0) p.costo = p.catalog_costo;
      else if((p.mayorista_sin_iva||0) > 0) p.costo = p.mayorista_sin_iva;
      if((p.catalog_precio||0) > 0) p.precio = p.catalog_precio;
      else if((p.mayorista_con_iva||0) > 0) p.precio = p.mayorista_con_iva;
      if((p.catalog_pvp||0) > 0) p.pvp = p.catalog_pvp;
      else if((p.pvp||0) < 0) p.pvp = 0;
    });
    localStorage.setItem(LS_WELLPLUS_CATALOG_VERSION, WELLPLUS_CATALOG_VERSION);
  }catch(e){}
}

function vencStatus(v){
  if(!v||v==='—')return{badge:'badge-gray',label:'Sin fecha'};
  const d=new Date(v);
  if(isNaN(d))return{badge:'badge-gray',label:'Sin fecha'};
  const diff=Math.floor((d-TODAY)/864e5);
  if(diff<0)return{badge:'badge-vencido',label:'⚠️ Vencido'};
  if(diff<90)return{badge:'badge-proximo',label:`⚡ ${diff}d`};
  return{badge:'badge-vigente',label:'✅ Vigente'};
}

function makeLotId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function ensureLots(p){
  if(!Array.isArray(p.lots)) p.lots = [];
  if(!p.lots.length && ((p.stock_bodega||0)>0 || (p.stock_espacio||0)>0)){
    if((p.stock_bodega||0)>0) p.lots.push({id:makeLotId(),location:'Bodega',qty:p.stock_bodega,vencimiento:p.vencimiento||''});
    if((p.stock_espacio||0)>0) p.lots.push({id:makeLotId(),location:'Espacio',qty:p.stock_espacio,vencimiento:p.vencimiento||''});
  }
  return p.lots;
}
function syncLegacyFromLots(p){
  if(!Array.isArray(p.lots) || !p.lots.length) return;
  p.stock_bodega = p.lots.filter(l=>l.location==='Bodega').reduce((a,l)=>a+(Number(l.qty)||0),0);
  p.stock_espacio = p.lots.filter(l=>l.location==='Espacio').reduce((a,l)=>a+(Number(l.qty)||0),0);
  p.vencimiento = nextVencimiento(p);
}
function stockAt(p, location){
  if(Array.isArray(p.lots) && p.lots.length) return p.lots.filter(l=>l.location===location).reduce((a,l)=>a+(Number(l.qty)||0),0);
  return location==='Bodega' ? (p.stock_bodega||0) : (p.stock_espacio||0);
}
function totalStock(p){return stockAt(p,'Bodega') + stockAt(p,'Espacio')}
function nextVencimiento(p){
  const fechas = (Array.isArray(p.lots) && p.lots.length ? p.lots : [{vencimiento:p.vencimiento,qty:totalStock(p)}])
    .filter(l=>(Number(l.qty)||0)>0 && l.vencimiento)
    .map(l=>l.vencimiento)
    .filter(Boolean)
    .sort();
  return fechas[0] || p.vencimiento || '';
}
function nextVencimientoByLocation(p, location){
  const fechas = (Array.isArray(p.lots) && p.lots.length ? p.lots.filter(l=>l.location===location) : [{vencimiento:p.vencimiento,qty:location==='Bodega'?(p.stock_bodega||0):(p.stock_espacio||0)}])
    .filter(l=>(Number(l.qty)||0)>0 && l.vencimiento)
    .map(l=>l.vencimiento)
    .filter(Boolean)
    .sort();
  return fechas[0] || '';
}
function porVencer(p){
  const ref = nextVencimiento(p);
  if(!ref) return false;
  try{
    const d = new Date(ref);
    const diff = Math.floor((d - TODAY)/864e5);
    return diff >= 0 && diff <= 120;
  }catch{return false;}
}

function bootstrapLots(){
  products.forEach(p=>{ensureLots(p); syncLegacyFromLots(p);});
}

function toggleDesc(id){
  const el = document.getElementById('desc-'+id);
  if(el) el.style.display = el.style.display==='block'?'none':'block';
}

function previewOferta(){
  const pct = parseFloat(document.getElementById('mp-descuento').value)||0;
  const precio = parseFloat(document.getElementById('mp-precio').value)||0;
  const preview = document.getElementById('mp-precio-oferta-preview');
  if(!preview) return;
  if(pct>0 && precio>0){
    const oferta = Math.round(precio*(1-pct/100));
    preview.value = fmt(oferta) + ' (ahorro ' + fmt(precio - oferta) + ')';
  } else {
    preview.value = 'Sin oferta';
  }
}
function stockBadge(p){
  const t=totalStock(p);
  if(t===0)return'<span class="badge badge-out">Sin stock</span>';
  if(t<=p.minstock)return`<span class="badge badge-low">${t} bajo</span>`;
  return`<span class="badge badge-ok">${t}</span>`;
}

// ─── INVENTARIO ───
function renderInv(){
  const q=(document.getElementById('inv-q').value||'').toLowerCase();
  const cat=document.getElementById('inv-cat').value;
  const brand=document.getElementById('inv-brand').value;
  const loc=document.getElementById('inv-loc').value;
  const status=document.getElementById('inv-status').value;
  
  let list=products.filter(p=>{
    if(q&&!p.name.toLowerCase().includes(q)&&!(p.barcode||'').includes(q)&&!(p.brand||'').toLowerCase().includes(q))return false;
    if(cat&&p.cat!==cat)return false;
    if(brand&&p.brand!==brand)return false;
    if(loc){
      if(loc==='Bodega'&&stockAt(p,'Bodega')===0)return false;
      if(loc==='Espacio'&&stockAt(p,'Espacio')===0)return false;
    }
    if(status==='bajo'&&!(totalStock(p)>0&&totalStock(p)<=p.minstock))return false;
    if(status==='sin'&&totalStock(p)!==0)return false;
    if(status==='vencido'&&vencStatus(nextVencimiento(p)).badge!=='badge-vencido')return false;
    return true;
  });
  
  const tb=document.getElementById('inv-tbody');
  if(!list.length){tb.innerHTML='<tr><td colspan="13" style="text-align:center;padding:20px;color:var(--text3)">Sin resultados</td></tr>';renderInvMetrics();return;}
  
  tb.innerHTML=list.map(p=>{
    const vs=vencStatus(nextVencimiento(p));
    return`<tr>
      <td class="mono">${p.barcode||'—'}</td>
      <td style="font-weight:500;max-width:180px">${p.name}</td>
      <td><span class="badge badge-gray">${p.brand||'—'}</span></td>
      <td style="color:var(--text2)">${p.pres||'—'}</td>
      <td style="text-align:center">${stockAt(p,'Bodega')}</td>
      <td style="text-align:center">${stockAt(p,'Espacio')}</td>
      <td style="text-align:center">${stockBadge(p)}</td>
      <td>${salePrice(p)>0?fmt(salePrice(p)):'<span style="color:var(--text3)">Sin precio</span>'}</td>
      <td>${(p.descuento||0)>0 ? `<span class="badge badge-blue">-${p.descuento}%</span>` : `<span style="color:var(--text3)">Sin oferta</span>`}</td>
      <td style="font-size:11px">${fmtDate(nextVencimiento(p))}</td>
      <td><span class="badge ${vs.badge}">${vs.label}</span></td>
      <td style="text-align:center"><input type="checkbox" ${p.proximoPedido ? 'checked' : ''} onchange="toggleProximoPedido(${p.id}, this.checked)" ${currentRole !== 'admin' ? 'disabled' : ''}></td>
      <td style="display:flex;gap:4px">${currentRole === 'admin' ? `
        <button class="btn btn-sm" onclick="openAdj(${p.id})" title="Ajustar stock">±</button>
        <button class="btn btn-sm" onclick="openEditProduct(${p.id})" title="Editar / código">✎</button>
        <button class="btn btn-sm" onclick="openLots(${p.id})" title="Lotes">L</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})" title="Eliminar">🗑</button>
      ` : ''}</td>
    </tr>`;
  }).join('');
  renderInvMetrics();
}

function renderInvMetrics(){
  const total=products.length;
  const sinStock=products.filter(p=>totalStock(p)===0).length;
  const bajo=products.filter(p=>totalStock(p)>0&&totalStock(p)<=p.minstock).length;
  const vencidos=products.filter(p=>vencStatus(p.vencimiento).badge==='badge-vencido').length;
  const proximos=products.filter(p=>vencStatus(p.vencimiento).badge==='badge-proximo').length;
  const seleccionadosPedido=products.filter(p=>p.proximoPedido).length;
  document.getElementById('inv-metrics').innerHTML=`
    <div class="metric"><div class="metric-label">Total productos</div><div class="metric-value">${total}</div></div>
    <div class="metric"><div class="metric-label">Sin stock</div><div class="metric-value" style="color:var(--red)">${sinStock}</div></div>
    <div class="metric"><div class="metric-label">Stock bajo</div><div class="metric-value" style="color:var(--amber)">${bajo}</div></div>
    <div class="metric"><div class="metric-label">Vencidos</div><div class="metric-value" style="color:var(--red)">${vencidos}</div></div>
    <div class="metric"><div class="metric-label">Próx. vencer</div><div class="metric-value" style="color:var(--amber)">${proximos}</div></div>
    <div class="metric"><div class="metric-label">Próx. pedido</div><div class="metric-value" style="font-size:16px">${seleccionadosPedido}</div><div class="metric-sub">seleccionados</div></div>
  `;
}

function populateBrands(){
  const brands=[...new Set(products.map(p=>p.brand).filter(Boolean))].sort();
  const sel=document.getElementById('inv-brand');
  brands.forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;sel.appendChild(o);});
}

function renderGestionList(){
  const el = document.getElementById('gest-list');
  if(!el) return;
  const q = (document.getElementById('gest-q')?.value || '').toLowerCase();
  const list = products.filter(p=>!q || p.name.toLowerCase().includes(q) || (p.barcode||'').includes(q) || (p.brand||'').toLowerCase().includes(q));
  el.innerHTML = list.map(p=>`<button class="login-role ${selectedGestionProductId===p.id?'sel':''}" style="width:100%;text-align:left;display:block;margin:0;border-radius:0;border-left:none;border-right:none;border-top:none" onclick="selectGestionProduct(${p.id})"><div style="font-size:12px;font-weight:600">${p.name}</div><div style="font-size:10px;color:var(--text3)">${p.brand||'—'} · ${(p.barcode||'sin código')}</div><div style="font-size:10px;color:var(--text2);margin-top:2px">Stock ${totalStock(p)} · ${salePrice(p)>0?fmt(salePrice(p)):'Sin precio'}</div></button>`).join('') || '<div style="padding:14px;color:var(--text3);font-size:13px">Sin productos</div>';
}
function selectGestionProduct(id){
  if(!requireAdmin('Solo administración puede modificar inventario')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  selectedGestionProductId = id;
  document.getElementById('gest-empty').style.display='none';
  document.getElementById('gest-form').style.display='block';
  document.getElementById('gp-id').value = id;
  document.getElementById('gp-barcode').value = p.barcode||'';
  document.getElementById('gp-name').value = p.name||'';
  document.getElementById('gp-brand').value = p.brand||'';
  document.getElementById('gp-cat').value = p.cat||'Suplemento';
  document.getElementById('gp-pres').value = p.pres||'';
  document.getElementById('gp-bodega').value = stockAt(p,'Bodega')||0;
  document.getElementById('gp-espacio').value = stockAt(p,'Espacio')||0;
  document.getElementById('gp-costo').value = p.costo||0;
  document.getElementById('gp-precio').value = salePrice(p)||0;
  document.getElementById('gp-descuento').value = p.descuento||0;
  document.getElementById('gp-minstock').value = p.minstock||0;
  document.getElementById('gp-venc').value = nextVencimiento(p)||'';
  document.getElementById('gp-desc').value = p.descripcion||'';
  const priceSource = document.getElementById('gest-price-source');
  if(priceSource){
    const syncTs = localStorage.getItem(LS_WELLPLUS_PRICE_SYNC_TS)||'';
    const syncText = syncTs ? new Date(syncTs).toLocaleString('es-CL') : 'sin sincronizacion registrada';
    if(((p.brand||'').toUpperCase().replace(/\s+/g,'')) === 'WELLPLUS'){
      priceSource.style.display='block';
      priceSource.innerHTML = `Precio de venta sincronizable desde <b>Google Sheet</b>.<br>Fuente actual: <b>${p.price_source||'Catalogo local'}</b> · Ultima sincronizacion: <b>${syncText}</b>`;
    } else {
      priceSource.style.display='none';
      priceSource.innerHTML = '';
    }
  }
  const hint = document.getElementById('gest-lot-hint');
  if(hint){
    ensureLots(p);
    if((p.lots||[]).length > 1){
      hint.style.display='block';
      hint.innerHTML = `Este producto tiene <b>${p.lots.length} lotes</b>. Si cambias stock o vencimiento aqui, se reconstruira el stock rapido. Para conservar cada fecha de vencimiento por separado, usa <b>Lotes</b>.`;
    } else {
      hint.style.display='block';
      hint.innerHTML = 'Este producto tiene un solo lote o stock simple. Puedes editar aqui el stock rapido. Si luego recibes otra fecha de vencimiento, usa <b>Lotes</b>.';
    }
  }
  renderGestionList();
}
function clearGestionSelection(){
  selectedGestionProductId = null;
  const form = document.getElementById('gest-form');
  const empty = document.getElementById('gest-empty');
  const hint = document.getElementById('gest-lot-hint');
  const priceSource = document.getElementById('gest-price-source');
  if(form) form.style.display='none';
  if(empty) empty.style.display='block';
  if(hint) hint.style.display='none';
  if(priceSource){ priceSource.style.display='none'; priceSource.innerHTML=''; }
  renderGestionList();
}
function saveGestionProduct(){
  if(!requireAdmin('Solo administración puede modificar inventario')) return;
  const id = parseInt(document.getElementById('gp-id').value);
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const updated = {
    barcode: document.getElementById('gp-barcode').value.trim(),
    name: document.getElementById('gp-name').value.trim(),
    brand: document.getElementById('gp-brand').value.trim(),
    cat: document.getElementById('gp-cat').value,
    pres: document.getElementById('gp-pres').value.trim(),
    costo: parseFloat(document.getElementById('gp-costo').value)||0,
    precio: parseFloat(document.getElementById('gp-precio').value)||0,
    pvp: parseFloat(document.getElementById('gp-precio').value)||0,
    descuento: parseFloat(document.getElementById('gp-descuento').value)||0,
    minstock: parseInt(document.getElementById('gp-minstock').value)||0,
    descripcion: document.getElementById('gp-desc').value.trim(),
    vencimiento: document.getElementById('gp-venc').value.trim()
  };
  Object.assign(p, updated);
  const b = parseInt(document.getElementById('gp-bodega').value)||0;
  const e = parseInt(document.getElementById('gp-espacio').value)||0;
  if(Array.isArray(p.lots) && p.lots.length){
    p.lots = [];
    if(b>0) p.lots.push({id:makeLotId(),location:'Bodega',qty:b,vencimiento:updated.vencimiento||''});
    if(e>0) p.lots.push({id:makeLotId(),location:'Espacio',qty:e,vencimiento:updated.vencimiento||''});
    syncLegacyFromLots(p);
  } else {
    p.stock_bodega = b;
    p.stock_espacio = e;
    ensureLots(p);
    syncLegacyFromLots(p);
  }
  saveState();
  renderInv();renderPosGrid();renderBodega();renderAlertas();renderPedidos();renderGestionList();
  selectGestionProduct(id);
}
function openGestionLots(){
  if(selectedGestionProductId===null){ alert('Selecciona un producto primero'); return; }
  openLots(selectedGestionProductId);
}
function deleteGestionProduct(){
  if(selectedGestionProductId===null){ alert('Selecciona un producto primero'); return; }
  deleteProduct(selectedGestionProductId);
  clearGestionSelection();
}

// ─── POS ───
function setPosLoc(v,btn){
  posLocFilter=v;
  document.querySelectorAll('.loc-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderPosGrid();
}

function renderPosGrid(){
  const q=(document.getElementById('pos-q').value||'').toLowerCase();
  const cats=[...new Set(products.map(p=>p.cat))];
  document.getElementById('pos-chips').innerHTML=`<button class="chip ${!posCatFilter?'active':''}" onclick="setPosCat('',this)">Todo</button>`+cats.map(c=>`<button class="chip ${posCatFilter===c?'active':''}" onclick="setPosCat('${c}',this)">${c}</button>`).join('');
  
  let list=products.filter(p=>{
    if(q&&!p.name.toLowerCase().includes(q)&&!(p.barcode||'').includes(q))return false;
    if(posCatFilter&&p.cat!==posCatFilter)return false;
    return true;
  });

  document.getElementById('pos-grid').innerHTML=list.map(p=>{
    const tot=totalStock(p);
    const dis=tot===0;
    const precio=salePrice(p);
    const desc=p.descuento||0;
    const precioFinal=desc>0?Math.round(precio*(1-desc/100)):precio;
    const pvVenc=porVencer(p);
    const cardClass=`prod-card ${dis?'disabled':''} ${desc>0?'en-oferta':''} ${pvVenc&&!desc?'por-vencer':''}`;
    const descBtn=p.descripcion?`<button class="desc-btn" onclick="event.stopPropagation();toggleDesc(${p.id})">ℹ️ Ver beneficios</button>`:'';
    const precioHtml=desc>0
      ?`<div><div class="precio-normal">${fmt(precio)}</div><div class="precio-oferta">${fmt(precioFinal)} <span class="oferta-ribbon">-${desc}%</span></div></div>`
      :`<div class="prod-price">${precio>0?fmt(precio):'Sin precio'}</div>`;
    const vencTag=pvVenc?`<span class="por-vencer-tag">⚡ Vence pronto</span>`:'';
    return`<div class="${cardClass}" id="pc-${p.id}" onclick="${dis?'':'addToCart('+p.id+')'}">
      <div class="prod-barcode">${p.barcode||'—'} ${vencTag}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-brand">${p.brand||''} · ${p.pres||''}</div>
      <div class="prod-footer">
        ${precioHtml}
        <div class="prod-stock ${dis?'badge badge-out':'badge badge-ok'}">${dis?'Agotado':'Stk:'+tot}</div>
      </div>
      ${descBtn}
      <div class="desc-panel" id="desc-${p.id}">${p.descripcion||''}</div>
    </div>`;
  }).join('');
}

function setPosCat(c,btn){posCatFilter=c;renderPosGrid();}

function addToCart(id){
  const p=products.find(x=>x.id===id);
  if(!p||totalStock(p)===0)return;
  const ex=cart.find(c=>c.id===id);
  if(ex){if(ex.qty<totalStock(p))ex.qty++;}
  else cart.push({id,qty:1});
  renderCart();
  document.getElementById('scanner-input').focus();
}

function onScannerKey(e){
  if(e.key!=='Enter')return;
  const v=e.target.value.trim();
  if(!v)return;
  e.target.value='';
  const p=products.find(x=>x.barcode===v);
  if(p){addToCart(p.id);}
  else{
    const existing=document.getElementById('scan-notfound');
    if(existing)existing.remove();
    const msg=document.createElement('div');
    msg.id='scan-notfound';
    msg.style.cssText='background:var(--red-bg);color:var(--red);padding:6px 10px;border-radius:6px;font-size:12px;margin:4px 0';
    msg.textContent=`Código no encontrado: ${v}`;
    document.querySelector('.cart-scanner').appendChild(msg);
    setTimeout(()=>msg.remove(),3000);
  }
}

function renderCart(){
  const el=document.getElementById('cart-items');
  if(!cart.length){
    el.innerHTML='<div class="empty-cart"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 5M17 13l2.3 5M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"/></svg><div>Escanea o selecciona</div></div>';
    updTotals();return;
  }
  el.innerHTML=cart.map((c,ci)=>{
    const p=products.find(x=>x.id===c.id);
    const precio=salePrice(p);
    const d=p.descuento||0;
    const precioFinal=d>0?Math.round(precio*(1-d/100)):precio;
    return`<div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}${d>0?` <span style="background:#fee2e2;color:#b91c1c;font-size:9px;padding:1px 5px;border-radius:10px;font-weight:700">-${d}%</span>`:''}</div>
        <div class="cart-item-code">${p.barcode||'manual'}${d>0?` · antes ${fmt(precio)}`:''}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="chQty(${ci},-1)">−</button>
        <span class="qty-val">${c.qty}</span>
        <button class="qty-btn" onclick="chQty(${ci},1)">+</button>
      </div>
      <div class="cart-item-price" style="${d>0?'color:#b91c1c':''}">${fmt(precioFinal*c.qty)}</div>
    </div>`;
  }).join('');
  updTotals();
}

function chQty(ci,d){
  cart[ci].qty+=d;
  if(cart[ci].qty<=0)cart.splice(ci,1);
  renderCart();
}

function clearCart(){cart=[];renderCart();}

function updTotals(){
  const gross=cart.reduce((a,c)=>{
    const p=products.find(x=>x.id===c.id);
    const base=salePrice(p);
    const d=p.descuento||0;
    return a+(d>0?Math.round(base*(1-d/100)):base)*c.qty;
  },0);
  const sub=netFromGross(gross);
  const iva=ivaFromGross(gross);
  document.getElementById('c-sub').textContent=fmt(sub);
  document.getElementById('c-iva').textContent=fmt(iva);
  document.getElementById('c-total').textContent=fmt(gross);
  calcVuelto();
}

function selPay(m){
  payMethod=m;
  ['redbank','efectivo','transfer','mixto'].forEach(x=>document.getElementById('pay-'+x).classList.toggle('sel',x===m));
  document.getElementById('efectivo-box').style.display=m==='efectivo'?'block':'none';
}

function calcVuelto(){
  const gross=cart.reduce((a,c)=>{
    const p=products.find(x=>x.id===c.id);
    const base=salePrice(p);
    const d=p.descuento||0;
    return a+(d>0?Math.round(base*(1-d/100)):base)*c.qty;
  },0);
  const total=gross;
  const rec=parseFloat(document.getElementById('efectivo-in').value)||0;
  const v=rec-total;
  const el=document.getElementById('vuelto-val');
  if(el)el.textContent=v>=0?fmt(v):'Faltan '+fmt(Math.abs(v));
}

function procesarVenta(){
  if(!cart.length){alert('El carrito está vacío');return;}
  const gross=cart.reduce((a,c)=>{const p=products.find(x=>x.id===c.id);return a+salePrice(p)*c.qty;},0);
  const sub=netFromGross(gross);
  const iva=ivaFromGross(gross);
  const total=gross;
  const items=cart.map(c=>{
    const p=products.find(x=>x.id===c.id);
    const base=salePrice(p);
    const d=p.descuento||0;
    const precioFinal=d>0?Math.round(base*(1-d/100)):base;
    return{name:p.name,barcode:p.barcode,qty:c.qty,precio:precioFinal,descuento:d};
  });
  // Descontar stock (Espacio primero, luego Bodega)
  cart.forEach(c=>{
    const p=products.find(x=>x.id===c.id);
    let rem=c.qty;
    rem -= deductLots(p,'Espacio',rem);
    if(rem>0) rem -= deductLots(p,'Bodega',rem);
  });
  const payLabels={redbank:'Redbank BancoEstado',efectivo:'Efectivo',transfer:'Transferencia',mixto:'Pago mixto'};
  ventas.unshift({n:ventas.length+1,fecha:new Date().toLocaleString('es-CL'),items,metodo:payMethod,empresa:'Dacez SpA',tipo:'Producto',sub,iva,total});
  document.getElementById('ok-method').textContent=payLabels[payMethod];
  document.getElementById('ok-total').textContent=fmt(total);
  document.getElementById('ok-items').innerHTML=items.map(i=>`${i.qty}× ${i.name}`).join('<br>');
  document.getElementById('modal-ok').classList.add('open');
  cart=[];renderCart();renderPosGrid();renderInv();renderAlertas();renderContab();renderBodega();
}

function sortLotsByExpiry(lots){
  return [...lots].sort((a,b)=>{
    if(!a.vencimiento && !b.vencimiento) return 0;
    if(!a.vencimiento) return 1;
    if(!b.vencimiento) return -1;
    return a.vencimiento.localeCompare(b.vencimiento);
  });
}
function deductLots(p, location, qty){
  ensureLots(p);
  let rem = qty;
  const lots = sortLotsByExpiry(p.lots.filter(l=>l.location===location && (Number(l.qty)||0)>0));
  for(const lot of lots){
    if(rem<=0) break;
    const take = Math.min(Number(lot.qty)||0, rem);
    lot.qty = (Number(lot.qty)||0) - take;
    rem -= take;
  }
  p.lots = p.lots.filter(l=>(Number(l.qty)||0)>0);
  syncLegacyFromLots(p);
  return qty - rem;
}
function addLot(p, location, qty, vencimiento){
  ensureLots(p);
  const existing = p.lots.find(l=>l.location===location && (l.vencimiento||'')===(vencimiento||''));
  if(existing) existing.qty = (Number(existing.qty)||0) + qty;
  else p.lots.push({id:makeLotId(),location,qty,vencimiento:vencimiento||''});
  syncLegacyFromLots(p);
}
function moveLots(p, from, to, qty){
  ensureLots(p);
  let rem = qty;
  const lots = sortLotsByExpiry(p.lots.filter(l=>l.location===from && (Number(l.qty)||0)>0));
  for(const lot of lots){
    if(rem<=0) break;
    const take = Math.min(Number(lot.qty)||0, rem);
    lot.qty = (Number(lot.qty)||0) - take;
    addLot(p, to, take, lot.vencimiento||'');
    rem -= take;
  }
  p.lots = p.lots.filter(l=>(Number(l.qty)||0)>0);
  syncLegacyFromLots(p);
}

// ─── BODEGA ───
function renderBodega(){
  const bod=products.filter(p=>stockAt(p,'Bodega')>0).sort((a,b)=>a.name.localeCompare(b.name));
  const esp=products.filter(p=>stockAt(p,'Espacio')>0).sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById('bod-count').textContent=bod.length+' productos';
  document.getElementById('esp-count').textContent=esp.length+' productos';
  const mkRow=(p,loc)=>`<tr><td style="font-size:12px">${p.name}</td><td style="text-align:center;font-weight:500">${loc==='b'?stockAt(p,'Bodega'):stockAt(p,'Espacio')}</td><td style="font-size:11px">${fmtDate(loc==='b'?nextVencimientoByLocation(p,'Bodega'):nextVencimientoByLocation(p,'Espacio'))}</td></tr>`;
  document.getElementById('bod-tbody').innerHTML=bod.map(p=>mkRow(p,'b')).join('')||'<tr><td colspan="3" style="padding:12px;text-align:center;color:var(--text3)">Bodega vacía</td></tr>';
  document.getElementById('esp-tbody').innerHTML=esp.map(p=>mkRow(p,'e')).join('')||'<tr><td colspan="3" style="padding:12px;text-align:center;color:var(--text3)">Sin productos</td></tr>';
  // Fill transfer select
  const sel=document.getElementById('tr-product');
  sel.innerHTML='<option value="">Seleccionar...</option>';
  const bod2=products.filter(p=>stockAt(p,'Bodega')>0);
  bod2.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.name+' (Bodega: '+stockAt(p,'Bodega')+')';sel.appendChild(o);});
  sel.onchange=()=>{
    const p=products.find(x=>x.id===parseInt(sel.value));
    document.getElementById('tr-available').value=p?stockAt(p,'Bodega'):0;
  };
  // Transfer log
  const tl=document.getElementById('transfer-log');
  if(!transfers.length){tl.innerHTML='<tr><td colspan="5" style="text-align:center;padding:12px;color:var(--text3)">Sin traslados registrados</td></tr>';return;}
  tl.innerHTML=transfers.map(t=>`<tr><td style="font-size:11px">${t.fecha}</td><td>${t.name}</td><td style="text-align:center">${t.qty}</td><td><span class="badge badge-blue">Bodega</span></td><td><span class="badge badge-ok">Espacio</span></td></tr>`).join('');
}

function doTransfer(){
  if(!requireAdmin('Solo administración puede trasladar stock')) return;
  const pid=parseInt(document.getElementById('tr-product').value);
  const qty=parseInt(document.getElementById('tr-qty').value)||0;
  if(!pid||qty<=0){alert('Selecciona un producto y cantidad válida');return;}
  const p=products.find(x=>x.id===pid);
  if(!p||stockAt(p,'Bodega')<qty){alert('Stock insuficiente en bodega');return;}
  moveLots(p,'Bodega','Espacio',qty);
  transfers.unshift({fecha:new Date().toLocaleString('es-CL'),name:p.name,qty});
  document.getElementById('tr-qty').value='';
  renderBodega();renderInv();
  const log=document.getElementById('tr-log');
  log.innerHTML=`<div class="alert-row" style="background:var(--green-bg);color:var(--green);border:1px solid var(--green-light)">✅ Traslado exitoso: ${qty}u de "${p.name}" → Espacio Clínica</div>`;
  setTimeout(()=>{if(log)log.innerHTML='';},4000);
}

// ─── ALERTAS ───
function renderAlertas(){
  const today=new Date();
  const vencidos=products.filter(p=>{const s=vencStatus(nextVencimiento(p));return s.badge==='badge-vencido';});
  const proximos=products.filter(p=>{const s=vencStatus(nextVencimiento(p));return s.badge==='badge-proximo';});
  const sinStock=products.filter(p=>totalStock(p)===0);
  const bajo=products.filter(p=>totalStock(p)>0&&totalStock(p)<=p.minstock);
  const pvSinOf = products.filter(p=>porVencer(p)&&totalStock(p)>0&&!(p.descuento>0));
  document.getElementById('alert-metrics').innerHTML=`
    <div class="metric" style="${pvSinOf.length?'border-color:#fcd34d':''}" ><div class="metric-label">🏷️ Por vencer sin oferta</div><div class="metric-value" style="color:${pvSinOf.length?'#92400e':'var(--green)'}">${pvSinOf.length}</div><div class="metric-sub">en 4 meses</div></div>
    <div class="metric"><div class="metric-label">⚠️ Vencidos</div><div class="metric-value" style="color:var(--red)">${vencidos.length}</div></div>
    <div class="metric"><div class="metric-label">⚡ Próx. vencer (&lt;90d)</div><div class="metric-value" style="color:var(--amber)">${proximos.length}</div></div>
    <div class="metric"><div class="metric-label">📉 Sin stock</div><div class="metric-value" style="color:var(--red)">${sinStock.length}</div></div>
    <div class="metric"><div class="metric-label">🔻 Stock bajo</div><div class="metric-value" style="color:var(--amber)">${bajo.length}</div></div>
  `;
  const vEl=document.getElementById('alert-venc');
  const sEl=document.getElementById('alert-stock');
  if(!vencidos.length&&!proximos.length){vEl.innerHTML='<p style="color:var(--text3);font-size:13px">Sin alertas de vencimiento ✅</p>';}
  else{
    vEl.innerHTML=[...vencidos.map(p=>`<div class="alert-row alert-vencido"><span>⚠️</span><div><b>${p.name}</b><br><small>${p.brand} · ${fmtDate(nextVencimiento(p))}</small></div></div>`),
      ...proximos.map(p=>`<div class="alert-row alert-proximo"><span>⚡</span><div><b>${p.name}</b><br><small>${p.brand} · vence ${fmtDate(nextVencimiento(p))}</small></div></div>`)].join('');
  }
  // Alerta especial: por vencer SIN oferta activa → sugerir oferta
  const porVencerSinOferta = products.filter(p => porVencer(p) && totalStock(p)>0 && !(p.descuento>0));
  const vencConOferta = products.filter(p => porVencer(p) && totalStock(p)>0 && p.descuento>0);

  const pvEl = document.getElementById('alert-porvencer');
  if(pvEl){
    if(porVencerSinOferta.length){
      pvEl.innerHTML = '<div style="font-size:12px;font-weight:500;color:#92400e;margin-bottom:8px">⚡ Vencen en menos de 4 meses — sin oferta activa</div>'
        + porVencerSinOferta.map(p=>{
          const diff = Math.floor((new Date(nextVencimiento(p))-TODAY)/864e5);
          return`<div class="alert-row alert-proximo" style="justify-content:space-between">
            <div style="display:flex;align-items:center;gap:8px">
              <span>🏷️</span>
              <div><b>${p.name}</b><br><small>${p.brand} · ${totalStock(p)}u · vence en ${diff} días (${fmtDate(nextVencimiento(p))})</small></div>
            </div>
            <button class="btn btn-sm" style="white-space:nowrap;border-color:#fcd34d;color:#92400e" onclick="activarOfertaRapida(${p.id})">Activar oferta →</button>
          </div>`;
        }).join('');
    } else {
      pvEl.innerHTML = '<p style="color:var(--text3);font-size:13px">Sin productos próximos a vencer sin oferta ✅</p>';
    }
    if(vencConOferta.length){
      pvEl.innerHTML += '<div style="font-size:12px;font-weight:500;color:var(--green);margin:12px 0 6px">✅ Con oferta activa</div>'
        + vencConOferta.map(p=>`<div class="alert-row" style="background:var(--green-bg);border:1px solid var(--green-light)"><span>✅</span><div><b>${p.name}</b> <span class="oferta-ribbon">-${p.descuento}%</span><br><small>${p.brand} · ${totalStock(p)}u · vence ${fmtDate(nextVencimiento(p))}</small></div></div>`).join('');
    }
  }

  if(!sinStock.length&&!bajo.length){sEl.innerHTML='<p style="color:var(--text3);font-size:13px">Stock saludable ✅</p>';}
  else{
    sEl.innerHTML=[...sinStock.map(p=>`<div class="alert-row alert-vencido"><span>📦</span><div><b>${p.name}</b><br><small>${p.brand} — Sin stock</small></div></div>`),
      ...bajo.map(p=>`<div class="alert-row alert-proximo"><span>📉</span><div><b>${p.name}</b><br><small>${p.brand} — ${totalStock(p)} unidad(es)</small></div></div>`)].join('');
  }
  // Reponer
  const tb=document.getElementById('reponer-tbody');
  if(!sinStock.length){tb.innerHTML='<tr><td colspan="5" style="text-align:center;padding:12px;color:var(--text3)">Sin productos agotados</td></tr>';return;}
  tb.innerHTML=sinStock.map(p=>`<tr>
    <td class="mono">${p.barcode||'—'}</td>
    <td style="font-weight:500">${p.name}</td>
    <td><span class="badge badge-gray">${p.brand||'—'}</span></td>
    <td>${p.costo>0?fmt(p.costo):'—'}</td>
    <td>${salePrice(p)>0?fmt(salePrice(p)):'—'}</td>
  </tr>`).join('');
}

function renderPedidos(){
  const list = products.filter(p=>p.proximoPedido);
  const tbody = document.getElementById('pedido-tbody');
  const resumen = document.getElementById('pedido-resumen');
  if(!tbody || !resumen) return;
  if(!list.length){
    resumen.innerHTML = '<p style="color:var(--text3);font-size:13px">No hay productos seleccionados para el próximo pedido.</p>';
    tbody.innerHTML = '<tr><td colspan="13" style="text-align:center;padding:20px;color:var(--text3)">Sin productos seleccionados</td></tr>';
    return;
  }
  const enriched = list.map(p=>{
    const sugerido = Math.max((p.minstock||1)*2 - totalStock(p), 1);
    const qty = Math.max(parseInt(p.pedidoCantidad)||0, sugerido);
    const subtotal = qty * (Number(p.costo)||0);
    return {...p, pedidoCantidad: qty, sugerido, subtotal};
  });
  const totalUnidades = enriched.reduce((acc,p)=> acc + p.pedidoCantidad, 0);
  const totalCosto = enriched.reduce((acc,p)=> acc + p.subtotal, 0);
  resumen.innerHTML = `<div class="metrics" style="margin-bottom:0"><div class="metric"><div class="metric-label">Productos seleccionados</div><div class="metric-value">${enriched.length}</div></div><div class="metric"><div class="metric-label">Unidades a pedir</div><div class="metric-value">${totalUnidades}</div></div><div class="metric"><div class="metric-label">Costo estimado</div><div class="metric-value" style="font-size:18px">${fmt(totalCosto)}</div></div><div class="metric"><div class="metric-label">Empresa compra</div><div class="metric-value" style="font-size:16px">Dacez SpA</div><div class="metric-sub">inventario comercial</div></div></div>`;
  tbody.innerHTML = enriched.map(p=>{
    const link = p.wellplus_link ? `<a href="${p.wellplus_link}" target="_blank" rel="noopener noreferrer">Well Plus</a>` : '—';
    return `<tr>
      <td class="mono">${p.barcode||'—'}</td>
      <td style="font-weight:500">${p.name}</td>
      <td>${p.pres||'—'}</td>
      <td>${p.brand||'—'}</td>
      <td>${totalStock(p)}</td>
      <td>${p.minstock||0}</td>
      <td><input type="number" min="1" value="${p.pedidoCantidad}" onchange="updatePedidoCantidad(${p.id}, this.value)" style="width:88px"></td>
      <td>${p.costo>0?fmt(p.costo):'—'}</td>
      <td>${salePrice(p)>0?fmt(salePrice(p)):'—'}</td>
      <td style="font-weight:600">${p.costo>0?fmt(p.subtotal):'—'}</td>
      <td style="font-size:11px">${link}</td>
      <td><input type="text" value="${(p.pedidoObservacion||'').replace(/"/g,'&quot;')}" onchange="updatePedidoObservacion(${p.id}, this.value)" placeholder="Proveedor / nota" style="min-width:150px"></td>
      <td><span class="badge badge-gray">Dacez SpA</span></td>
    </tr>`;
  }).join('');
}

function toggleProximoPedido(id, checked){
  if(!requireAdmin('Solo administración puede armar el próximo pedido')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  p.proximoPedido = checked;
  if(checked){
    p.pedidoCantidad = Math.max(parseInt(p.pedidoCantidad)||0, Math.max((p.minstock||1)*2-totalStock(p),1));
  } else {
    p.pedidoCantidad = 0;
    p.pedidoObservacion = '';
  }
  saveState();
  renderInv();
  renderPedidos();
}

function updatePedidoCantidad(id, value){
  if(!requireAdmin('Solo administración puede armar el próximo pedido')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  p.pedidoCantidad = Math.max(parseInt(value)||1,1);
  saveState();
  renderPedidos();
}

function updatePedidoObservacion(id, value){
  if(!requireAdmin('Solo administración puede armar el próximo pedido')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  p.pedidoObservacion = value.trim();
  saveState();
}

function exportPedidosCSV(){
  const list = products.filter(p=>p.proximoPedido);
  const rows=[['Código','Producto','Presentación','Marca','Stock actual','Stock mínimo','Cantidad pedir','Costo','Precio venta','Subtotal costo','Link Well Plus','Observación','Empresa']];
  list.forEach(p=>{
    const qty = Math.max(parseInt(p.pedidoCantidad)||0, Math.max((p.minstock||1)*2-totalStock(p),1));
    rows.push([p.barcode||'',p.name,p.pres||'',p.brand||'',totalStock(p),p.minstock||0,qty,p.costo||0,salePrice(p)||0,(p.costo||0)*qty,p.wellplus_link||'',p.pedidoObservacion||'','Dacez SpA']);
  });
  const csv=rows.map(r=>r.map(x=>`"${x}"`).join(',')).join('\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,﻿'+encodeURIComponent(csv);
  a.download='novage_pedidos_'+new Date().toISOString().split('T')[0]+'.csv';
  a.click();
}
function finalizeServiceSale(payload, supplyItems=[]){
  const record = {
    n: serviceSales.length + 1,
    fecha: new Date().toLocaleString('es-CL'),
    empresa: payload.empresa,
    tipo: 'Servicio',
    servicio: payload.servicio,
    metodo: payload.metodo,
    nota: payload.nota,
    sub: payload.sub,
    iva: payload.iva,
    total: payload.total,
    supplyItems,
    clinicalCost: supplyItems.reduce((a,i)=>a+((i.qty||0)*(i.cost||0)),0)
  };
  serviceSales.unshift(record);
  if(supplyItems.length){
    supplyUsageLog.unshift({fecha:record.fecha, servicio:record.servicio, items:supplyItems, clinicalCost:record.clinicalCost});
  }
  document.getElementById('srv-monto').value='';
  document.getElementById('srv-nota').value='';
  saveState();
  renderServicios();
  renderContab();
  renderSupplies();
}

function registrarServicio(){
  const empresa = document.getElementById('srv-empresa').value;
  const servicio = document.getElementById('srv-servicio').value;
  const monto = parseFloat(document.getElementById('srv-monto').value)||0;
  const metodo = document.getElementById('srv-metodo').value;
  const nota = document.getElementById('srv-nota').value.trim();
  if(monto<=0){ alert('Ingresa un monto válido'); return; }
  const afectaIva = empresa === 'Dacez SpA';
  const sub = afectaIva ? monto/1.19 : monto;
  const iva = afectaIva ? monto-sub : 0;
  const payload = {empresa, servicio, metodo, nota, sub, iva, total:monto};
  if(servicio === 'Sueroterapia'){
    pendingServicePayload = payload;
    openSupplyUsageModal();
    return;
  }
  finalizeServiceSale(payload, []);
}

function renderServicios(){
  const tbody = document.getElementById('srv-tbody');
  if(!tbody) return;
  if(!serviceSales.length){
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--text3)">Sin servicios registrados</td></tr>';
    return;
  }
  tbody.innerHTML = serviceSales.map(s=>`<tr><td style="font-size:11px">${s.fecha}</td><td><span class="badge badge-gray">${s.empresa}</span></td><td>${s.servicio}</td><td>${s.metodo}</td><td>${fmt(s.iva||0)}</td><td style="font-weight:600">${fmt(s.total)}</td><td style="font-size:11px">${s.nota||'—'}${s.supplyItems&&s.supplyItems.length?` · insumos: ${s.supplyItems.map(i=>i.name+' x'+i.qty).join(', ')}`:''}</td></tr>`).join('');
}

// ─── CONTABILIDAD ───
function renderContab(){
  const mf=document.getElementById('acc-filter-pay').value;
  const allRecords = [
    ...ventas.map(v=>({...v, empresa:v.empresa||'Dacez SpA', tipo:v.tipo||'Producto', detalle:v.items.map(i=>i.qty+'× '+i.name).join(', ')})),
    ...serviceSales.map(s=>({...s, detalle:s.supplyItems&&s.supplyItems.length ? `${s.servicio} · ${s.supplyItems.map(i=>i.name+' x'+i.qty).join(', ')}` : s.servicio}))
  ].sort((a,b)=> new Date(b.fecha) - new Date(a.fecha));
  const list=mf?allRecords.filter(v=>v.metodo===mf):allRecords;
  const totalV=allRecords.reduce((a,v)=>a+v.total,0);
  const dacezV=allRecords.filter(v=>v.empresa==='Dacez SpA').reduce((a,v)=>a+v.total,0);
  const serviciosV=allRecords.filter(v=>v.empresa==='Servicios C&Z').reduce((a,v)=>a+v.total,0);
  const ivaTotal=allRecords.reduce((a,v)=>a+(v.iva||0),0);
  document.getElementById('acc-metrics').innerHTML=`
    <div class="metric"><div class="metric-label">Total consolidado</div><div class="metric-value" style="font-size:18px">${fmt(totalV)}</div><div class="metric-sub">${allRecords.length} registros</div></div>
    <div class="metric"><div class="metric-label">Dacez SpA</div><div class="metric-value" style="font-size:18px">${fmt(dacezV)}</div><div class="metric-sub">afecto a IVA</div></div>
    <div class="metric"><div class="metric-label">Servicios C&Z</div><div class="metric-value" style="font-size:18px">${fmt(serviciosV)}</div><div class="metric-sub">servicios</div></div>
    <div class="metric"><div class="metric-label">IVA acumulado</div><div class="metric-value" style="font-size:18px">${fmt(ivaTotal)}</div></div>
  `;
  const tb=document.getElementById('acc-tbody');
  const payLabel={redbank:'💳 Redbank',efectivo:'💵 Efectivo',transfer:'🏦 Transfer.',mixto:'🔀 Mixto'};
  if(!list.length){tb.innerHTML='<tr><td colspan="9" style="text-align:center;padding:20px;color:var(--text3)">Sin ventas registradas todavía</td></tr>';return;}
  tb.innerHTML=list.map(v=>`<tr>
    <td class="mono">#${String(v.n).padStart(4,'0')}</td>
    <td style="font-size:11px">${v.fecha}</td>
    <td><span class="badge badge-gray">${v.empresa}</span></td>
    <td><span class="badge badge-blue">${v.tipo}</span></td>
    <td style="font-size:11px;max-width:220px">${v.detalle}</td>
    <td>${payLabel[v.metodo]||v.metodo}</td>
    <td>${fmt(v.sub)}</td>
    <td>${fmt(v.iva||0)}</td>
    <td style="font-weight:600">${fmt(v.total)}</td>
  </tr>`).join('');
}

function supplyStatus(s){
  if((s.stock||0)===0) return '<span class="badge badge-out">Sin stock</span>';
  if((s.stock||0)<=(s.minstock||0)) return '<span class="badge badge-low">Bajo</span>';
  return '<span class="badge badge-ok">Disponible</span>';
}
function openAddSupply(){
  if(!requireAdmin('Solo administración puede gestionar insumos clínicos')) return;
  document.getElementById('modal-supply-title').textContent='Agregar insumo clínico';
  document.getElementById('ms-idx').value='';
  ['ms-name','ms-stock','ms-cost','ms-use'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('ms-cat').value='Ampolla';
  document.getElementById('ms-min').value='2';
  document.getElementById('modal-supply').classList.add('open');
}
function editSupply(id){
  if(!requireAdmin('Solo administración puede gestionar insumos clínicos')) return;
  const s = supplies.find(x=>x.id===id);
  if(!s) return;
  document.getElementById('modal-supply-title').textContent='Editar insumo clínico';
  document.getElementById('ms-idx').value=id;
  document.getElementById('ms-name').value=s.name;
  document.getElementById('ms-cat').value=s.cat;
  document.getElementById('ms-stock').value=s.stock||0;
  document.getElementById('ms-cost').value=s.cost||0;
  document.getElementById('ms-min').value=s.minstock||0;
  document.getElementById('ms-use').value=s.use||'';
  document.getElementById('modal-supply').classList.add('open');
}
function saveSupply(){
  if(!requireAdmin('Solo administración puede gestionar insumos clínicos')) return;
  const idx = document.getElementById('ms-idx').value;
  const data = {
    name: document.getElementById('ms-name').value.trim(),
    cat: document.getElementById('ms-cat').value,
    stock: parseInt(document.getElementById('ms-stock').value)||0,
    cost: parseFloat(document.getElementById('ms-cost').value)||0,
    minstock: parseInt(document.getElementById('ms-min').value)||0,
    use: document.getElementById('ms-use').value.trim()
  };
  if(!data.name){ alert('El nombre es obligatorio'); return; }
  if(idx!==''){
    const i = supplies.findIndex(x=>x.id===parseInt(idx));
    supplies[i] = {...supplies[i], ...data};
  } else {
    data.id = supplies.reduce((m,s)=>Math.max(m,s.id||0),-1)+1;
    supplies.push(data);
  }
  closeModal('modal-supply');
  saveState();
  renderSupplies();
}
function deleteSupply(id){
  if(!requireAdmin('Solo administración puede gestionar insumos clínicos')) return;
  const s = supplies.find(x=>x.id===id);
  if(!s) return;
  if(!confirm(`¿Eliminar el insumo "${s.name}"?`)) return;
  supplies = supplies.filter(x=>x.id!==id);
  saveState();
  renderSupplies();
}
function renderSupplies(){
  const tbody = document.getElementById('ins-tbody');
  const log = document.getElementById('ins-log-tbody');
  const metrics = document.getElementById('ins-metrics');
  if(!tbody || !log || !metrics) return;
  const low = supplies.filter(s=>(s.stock||0)>0 && (s.stock||0)<=(s.minstock||0)).length;
  const zero = supplies.filter(s=>(s.stock||0)===0).length;
  const rojos = supplies.filter(s=>supplySemaforo(s)==='Rojo').length;
  const amarillos = supplies.filter(s=>supplySemaforo(s)==='Amarillo').length;
  const totalCost = supplies.reduce((a,s)=>a+((s.stock||0)*(s.cost||0)),0);
  metrics.innerHTML = `<div class="metric"><div class="metric-label">Insumos clinicos</div><div class="metric-value">${supplies.length}</div></div><div class="metric" style="${rojos?'border-color:#fca5a5':''}"><div class="metric-label">🔴 Semáforo Rojo</div><div class="metric-value" style="color:${rojos?'var(--red)':'var(--green)'}">${rojos}</div></div><div class="metric" style="${amarillos?'border-color:#fcd34d':''}"><div class="metric-label">🟡 Semáforo Amarillo</div><div class="metric-value" style="color:${amarillos?'var(--amber)':'var(--green)'}">${amarillos}</div></div><div class="metric"><div class="metric-label">Stock bajo</div><div class="metric-value" style="color:var(--amber)">${low}</div></div><div class="metric"><div class="metric-label">Sin stock</div><div class="metric-value" style="color:var(--red)">${zero}</div></div><div class="metric"><div class="metric-label">Valor clinico</div><div class="metric-value" style="font-size:16px">${fmt(totalCost)}</div></div>`;
  tbody.innerHTML = supplies.length ? supplies.map(s=>`<tr><td style="font-weight:500">${s.name}${s.use?`<br><span style="font-size:10px;color:var(--text3)">${s.use}</span>`:''}</td><td>${s.cat}</td><td class="mono">${s.lote||'—'}</td><td>${s.stock||0}</td><td>${s.minstock||0}</td><td style="font-size:11px">${supplyVencBadge(s.vencimiento)}</td><td>${semaforoBadge(supplySemaforo(s))}</td><td>${fmt(s.cost||0)}</td><td><button class="btn btn-sm" onclick="editSupply(${s.id})">✎</button> <button class="btn btn-sm btn-danger" onclick="deleteSupply(${s.id})">🗑</button></td></tr>`).join('') : '<tr><td colspan="9" style="text-align:center;padding:20px;color:var(--text3)">Sin insumos clinicos registrados</td></tr>';
  log.innerHTML = supplyUsageLog.length ? supplyUsageLog.map(r=>`<tr><td style="font-size:11px">${r.fecha}</td><td>${r.servicio}</td><td style="font-size:11px">${r.items.map(i=>i.name+' x'+i.qty).join(', ')}</td><td style="font-weight:600">${fmt(r.clinicalCost||0)}</td></tr>`).join('') : '<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--text3)">Sin consumo clinico registrado</td></tr>';
}
function openSupplyUsageModal(){
  const wrap = document.getElementById('suero-uso-list');
  if(!wrap) return;
  if(!supplies.length){
    alert('No hay insumos clinicos cargados. Agregalos primero en Insumos Sueroterapia.');
    return;
  }
  wrap.innerHTML = supplies.map(s=>`<div class="form-row" style="margin-bottom:10px"><div class="form-group"><label class="form-label">${s.name} <span style="color:var(--text3)">(${s.stock||0} disp.)</span></label><input type="number" min="0" max="${s.stock||0}" value="0" id="su-qty-${s.id}"></div><div class="form-group"><label class="form-label">Uso</label><input type="text" value="${s.use||''}" readonly></div></div>`).join('');
  document.getElementById('modal-suero-uso').classList.add('open');
}
function confirmServiceSupplies(){
  if(!pendingServicePayload) return;
  const selected = [];
  for(const s of supplies){
    const el = document.getElementById(`su-qty-${s.id}`);
    const qty = el ? (parseInt(el.value)||0) : 0;
    if(qty>0){
      if(qty>(s.stock||0)){ alert(`Stock insuficiente para ${s.name}`); return; }
      s.stock = (s.stock||0) - qty;
      selected.push({id:s.id, name:s.name, qty, cost:s.cost||0, cat:s.cat});
    }
  }
  closeModal('modal-suero-uso');
  finalizeServiceSale(pendingServicePayload, selected);
  renderClinica();
  pendingServicePayload = null;
}

// ─── INVENTARIO MEDILINK (semilla consolidada 27-05-2026) ───
// Se agrega a `supplies` solo si el item (nombre+lote) no existe aún — idempotente.
// El stock vivo queda en localStorage/Sheets vía saveState(); la semilla no lo pisa.
const MEDILINK_SEED = [
  // Box Suero materiales (Insumo)
  {name:'Branula #20',lote:'4600002067',cat:'Insumo',stock:97,minstock:20,vencimiento:'2030-05-31',semaforo:'Verde',use:'punción venosa'},
  {name:'Branula #22',lote:'4600002067',cat:'Insumo',stock:64,minstock:20,vencimiento:'2030-05-31',semaforo:'Verde',use:'punción venosa'},
  {name:'Bajada de suero',lote:'4600002045',cat:'Insumo',stock:16,minstock:10,vencimiento:'2030-03-31',semaforo:'Verde',use:'infusión'},
  {name:'Suero 250cc',lote:'75WG0914',cat:'Insumo',stock:19,minstock:10,vencimiento:'2028-07-31',semaforo:'Verde',use:'sueroterapia'},
  {name:'Suero 500cc',lote:'75WC0260',cat:'Insumo',stock:26,minstock:10,vencimiento:'2028-03-31',semaforo:'Verde',use:'sueroterapia'},
  {name:'Gasa 7,5x7,5',lote:'4600001460',cat:'Insumo',stock:21,minstock:10,vencimiento:'2029-04-30',semaforo:'Verde',use:'curación'},
  {name:'Gasa 5x5',lote:'231222',cat:'Insumo',stock:177,minstock:20,vencimiento:'2029-03-31',semaforo:'Verde',use:'curación'},
  {name:'Tela adhesiva',lote:'4600001747',cat:'Insumo',stock:6,minstock:2,vencimiento:'2029-09-30',semaforo:'Verde',use:'fijación'},
  {name:'Jeringa 1ml',lote:'25D0601J',cat:'Insumo',stock:300,minstock:50,vencimiento:'2030-03-31',semaforo:'Verde',use:'preparación'},
  {name:'Jeringa 3ml',lote:'4600002154',cat:'Insumo',stock:76,minstock:20,vencimiento:'2030-05-31',semaforo:'Verde',use:'preparación'},
  {name:'Jeringa 10ml',lote:'4600002154',cat:'Insumo',stock:75,minstock:20,vencimiento:'2030-05-31',semaforo:'Verde',use:'preparación'},
  {name:'Jeringa 20ml',lote:'4600002316',cat:'Insumo',stock:5,minstock:5,vencimiento:'2030-09-30',semaforo:'Verde',use:'preparación'},
  {name:'Torulas de algodón',lote:'4600001851',cat:'Insumo',stock:30,minstock:20,vencimiento:'2029-10-31',semaforo:'Verde',use:'asepsia'},
  {name:'Alcohol Pad',lote:'SH25011',cat:'Insumo',stock:55,minstock:20,vencimiento:'2030-02-28',semaforo:'Verde',use:'asepsia'},
  {name:'Parche redondo',lote:'4600002154',cat:'Insumo',stock:102,minstock:20,vencimiento:'2030-05-30',semaforo:'Verde',use:'post punción'},
  {name:'Llave 3 pasos',lote:'4600001301',cat:'Insumo',stock:10,minstock:10,vencimiento:'2029-04-30',semaforo:'Verde',use:'infusión múltiple'},
  // Espacio Novage (Ampolla/Activo)
  {name:'L CARNITINA',lote:'24OCT039',cat:'Ampolla',stock:24,minstock:5,vencimiento:'2027-10-31',semaforo:'Verde',use:'metabolismo lipídico'},
  {name:'SILANOL',lote:'25MAR007',cat:'Ampolla',stock:10,minstock:10,vencimiento:'2028-03-26',semaforo:'Verde',use:'regeneración'},
  {name:'M complex plus',lote:'22dic112',cat:'Ampolla',stock:7,minstock:10,vencimiento:'2026-12-31',semaforo:'Verde',use:'complejo mineral'},
  {name:'B-complex',lote:'25JUN026',cat:'Ampolla',stock:1,minstock:1,vencimiento:'2027-06-30',semaforo:'Verde',use:'complejo B'},
  {name:'EDTA PLUS',lote:'24AGO034',cat:'Ampolla',stock:7,minstock:1,vencimiento:'2026-08-31',semaforo:'Amarillo',use:'quelación'},
  {name:'Vitamina C',lote:'25JUN027',cat:'Ampolla',stock:3,minstock:1,vencimiento:'2028-06-30',semaforo:'Verde',use:'antioxidante'},
  {name:'Vitamina C',lote:'25JUL042',cat:'Ampolla',stock:3,minstock:1,vencimiento:'2028-07-31',semaforo:'Verde',use:'antioxidante'},
  {name:'Calcio cloruro',lote:'93002280',cat:'Ampolla',stock:1,minstock:5,vencimiento:'',semaforo:'Rojo',use:'reposición calcio'},
  {name:'Fosfatidilcolina',lote:'93009801',cat:'Activo',stock:9,minstock:5,vencimiento:'',semaforo:'Rojo',use:'lipólisis'},
  {name:'G-PEEL (ac. retinoico 2%)',lote:'GPEEL-0126',cat:'Activo',stock:2,minstock:2,vencimiento:'2026-04-30',semaforo:'Rojo',use:'peeling'},
  {name:'G-PEEL (glicolico 10%)',lote:'GPEEL-0126',cat:'Activo',stock:9,minstock:5,vencimiento:'2026-04-30',semaforo:'Rojo',use:'peeling'},
  {name:'Md:complex',lote:'batch:241',cat:'Activo',stock:4,minstock:2,vencimiento:'2027-05-30',semaforo:'Verde',use:'mesoterapia'},
  {name:'Md:complex',lote:'241',cat:'Activo',stock:2,minstock:2,vencimiento:'2027-09-30',semaforo:'Verde',use:'mesoterapia'},
  {name:'Pink aging',lote:'25GO2',cat:'Activo',stock:3,minstock:3,vencimiento:'2028-07-13',semaforo:'Verde',use:'antiedad'},
  {name:'Md:peel intimate',lote:'231',cat:'Activo',stock:4,minstock:2,vencimiento:'2026-03-31',semaforo:'Rojo',use:'peeling íntimo'},
  {name:'Md:complex Firming-Regen',lote:'221',cat:'Activo',stock:3,minstock:2,vencimiento:'2027-08-31',semaforo:'Verde',use:'reafirmante'},
  {name:'Md:complex Antiage intensive',lote:'221',cat:'Activo',stock:4,minstock:2,vencimiento:'2027-11-30',semaforo:'Verde',use:'antiedad intensivo'},
  {name:'Carnosin Plus',lote:'25MAR007',cat:'Ampolla',stock:6,minstock:10,vencimiento:'2027-03-31',semaforo:'Verde',use:'antiglicación'},
  {name:'5-HTP Complex',lote:'24FEB002',cat:'Ampolla',stock:15,minstock:10,vencimiento:'2028-02-29',semaforo:'Verde',use:'serotonina'},
  {name:'H.M.B',lote:'24MAR008',cat:'Ampolla',stock:22,minstock:10,vencimiento:'2027-03-31',semaforo:'Verde',use:'masa muscular'},
  {name:'TIMOX',lote:'24MAR009',cat:'Ampolla',stock:16,minstock:10,vencimiento:'2028-03-31',semaforo:'Verde',use:'inmunomodulador'},
  {name:'GAG MESOGLI-K',lote:'22AGO077',cat:'Ampolla',stock:0,minstock:10,vencimiento:'2025-08-31',semaforo:'Rojo',use:'mesoterapia'},
  {name:'L-TEANINA',lote:'22DIC117',cat:'Ampolla',stock:30,minstock:10,vencimiento:'2026-12-31',semaforo:'Verde',use:'relajación'},
  {name:'SULFATO DE MAGNESIO',lote:'24OCT041',cat:'Ampolla',stock:5,minstock:10,vencimiento:'2026-10-31',semaforo:'Amarillo',use:'relajante muscular'},
  {name:'AMINOACID COMPLEX',lote:'24NOV054',cat:'Ampolla',stock:10,minstock:10,vencimiento:'2027-11-30',semaforo:'Verde',use:'aminoácidos'},
  {name:'AMINOACID COMPLEX',lote:'24SEP038',cat:'Ampolla',stock:5,minstock:10,vencimiento:'2027-09-30',semaforo:'Verde',use:'aminoácidos'},
  {name:'GLUTATION',lote:'24NOV049',cat:'Ampolla',stock:5,minstock:10,vencimiento:'2026-11-30',semaforo:'Verde',use:'detox/antioxidante'},
  {name:'GLUTATION',lote:'25JUL036',cat:'Ampolla',stock:8,minstock:10,vencimiento:'2027-07-31',semaforo:'Verde',use:'detox/antioxidante'},
  {name:'L-ARGININA',lote:'24AGO033',cat:'Ampolla',stock:16,minstock:10,vencimiento:'2027-08-31',semaforo:'Verde',use:'vasodilatador'},
];

function bootstrapSupplies(){
  let added = 0;
  MEDILINK_SEED.forEach(seed=>{
    const exists = supplies.find(s=>s.name===seed.name && (s.lote||'')===(seed.lote||''));
    if(exists){
      // completar metadatos Medilink en items ya guardados sin pisar stock vivo
      if(exists.vencimiento===undefined) exists.vencimiento = seed.vencimiento;
      if(exists.semaforo===undefined)    exists.semaforo    = seed.semaforo;
      if(!exists.lote)                   exists.lote        = seed.lote;
      return;
    }
    supplies.push({...seed, cost:0, id: supplies.reduce((m,s)=>Math.max(m,s.id||0),-1)+1});
    added++;
  });
  if(added) saveState();
}

function supplySemaforo(s){
  if(s.vencimiento){
    const diff = Math.floor((new Date(s.vencimiento)-TODAY)/864e5);
    if(!isNaN(diff) && diff < 0) return 'Rojo';
    if(!isNaN(diff) && diff < 90) return s.semaforo==='Rojo'?'Rojo':'Amarillo';
  } else if(s.semaforo==='Rojo') return 'Rojo';
  return s.semaforo || 'Verde';
}
function semaforoBadge(sem){
  if(sem==='Rojo') return '<span class="badge badge-out">🔴 Rojo</span>';
  if(sem==='Amarillo') return '<span class="badge badge-low">🟡 Amarillo</span>';
  return '<span class="badge badge-ok">🟢 Verde</span>';
}
function supplyVencBadge(v){
  if(!v) return '<span class="badge badge-gray">Sin fecha</span>';
  const diff = Math.floor((new Date(v)-TODAY)/864e5);
  if(isNaN(diff)) return '<span class="badge badge-gray">—</span>';
  if(diff<0) return '<span class="badge badge-vencido">⚠️ VENCIDO</span>';
  if(diff<90) return `<span class="badge badge-proximo">⚡ ${diff}d</span>`;
  return `<span class="badge badge-vigente">${fmtDate(v)}</span>`;
}

// ─── APLICAR SUERO A PACIENTE (descuenta kit + medicamentos automáticamente) ───
function normalizeSupplyName(name){
  return (name||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase();
}
function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, (char)=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[char]));
}
function findSupply(name){
  const normalized = normalizeSupplyName(name);
  return supplies.find(s=>normalizeSupplyName(s.name)===normalized);
}
function getSueroUI(){
  const legacy = !!document.getElementById('modal-suero');
  return legacy
    ? { modalId:'modal-suero', medsListId:'su-meds-list', pacienteId:'su-paciente', notasId:'su-notas', previewId:'su-preview', sueroId:'su-tipo', branulaId:'su-branula' }
    : { modalId:'modal-aplicar-suero', medsListId:'as-meds-list', pacienteId:'as-paciente', notasId:'as-notas', previewId:'as-preview', sueroId:'as-suero', branulaId:'as-branula' };
}
function getSelectedOptionLabel(selectId){
  const select = document.getElementById(selectId);
  return select?.options?.[select.selectedIndex]?.text?.trim() || select?.value || '';
}

function buildSueroKit(){
  const ui = getSueroUI();
  const suero = getSelectedOptionLabel(ui.sueroId);
  const branula = getSelectedOptionLabel(ui.branulaId);
  return [
    {name:suero, qty:1},{name:branula, qty:1},
    {name:'Bajada de suero', qty:1},{name:'Parche redondo', qty:1},
    {name:'Alcohol Pad', qty:2},{name:'Torulas de algodón', qty:1},
  ];
}

function openAplicarSuero(){
  const ui = getSueroUI();
  const meds = supplies.filter(s=>(s.cat==='Ampolla'||s.cat==='Activo') && (s.stock||0)>0);
  const list = document.getElementById(ui.medsListId);
  if(!list) return;
  list.innerHTML = meds.map(s=>
    `<label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer;padding:2px 4px">
      <input type="checkbox" value="${s.id}" onchange="previewSueroKit()" style="width:auto">
      <span><b>${s.name}</b>${s.lote?' · lote '+s.lote:''} · stock ${s.stock||0} ${supplySemaforo(s)!=='Verde'?semaforoBadge(supplySemaforo(s)):''}</span>
    </label>`).join('') || '<p style="font-size:12px;color:var(--text3)">Sin ampollas/activos con stock</p>';
  document.getElementById(ui.pacienteId).value='';
  document.getElementById(ui.notasId).value='';
  previewSueroKit();
  document.getElementById(ui.modalId).classList.add('open');
  setTimeout(()=>document.getElementById(ui.pacienteId).focus(),100);
}

function previewSueroKit(){
  const ui = getSueroUI();
  const kit = buildSueroKit();
  const meds = [...document.querySelectorAll(`#${ui.medsListId} input:checked`)].map(c=>supplies.find(s=>s.id===parseInt(c.value))).filter(Boolean);
  let html='';
  kit.forEach(k=>{
    const s = findSupply(k.name);
    const ok = s && (s.stock||0)>=k.qty;
    html += `<div style="display:flex;justify-content:space-between;font-size:12px;color:${ok?'var(--text)':'var(--red)'}"><span>${k.qty}× ${escapeHtml(k.name)}</span><span style="color:var(--text3)">stock: ${s?s.stock||0:'—'}${ok?'':' ⚠️'}</span></div>`;
  });
  meds.forEach(s=>{
    html += `<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--blue)"><span>1× ${escapeHtml(s.name)} (medicamento)</span><span style="color:var(--text3)">stock: ${s.stock||0}</span></div>`;
  });
  document.getElementById(ui.previewId).innerHTML = html;
}

function updateSueroPreview(){
  previewSueroKit();
}

function confirmarAplicarSuero(){
  const ui = getSueroUI();
  const paciente = document.getElementById(ui.pacienteId).value.trim();
  if(!paciente){ alert('Ingresa el nombre de la paciente'); return; }
  const kit = buildSueroKit();
  const medIds = [...document.querySelectorAll(`#${ui.medsListId} input:checked`)].map(c=>parseInt(c.value));
  const items = [];
  const faltantes = [];
  kit.forEach(k=>{
    const s = findSupply(k.name);
    if(!s || (s.stock||0) < k.qty) faltantes.push(k.name);
  });
  medIds.forEach(id=>{
    const s = supplies.find(x=>x.id===id);
    if(!s || (s.stock||0) < 1) faltantes.push(s?s.name:id);
  });
  if(faltantes.length && !confirm(`⚠️ Stock insuficiente en:
${faltantes.join(', ')}

¿Continuar igualmente?`)) return;
  kit.forEach(k=>{
    const s = findSupply(k.name);
    if(!s) return;
    s.stock = Math.max(0,(s.stock||0)-k.qty);
    items.push({id:s.id, name:s.name, qty:k.qty, cost:s.cost||0, cat:s.cat});
  });
  medIds.forEach(id=>{
    const s = supplies.find(x=>x.id===id);
    if(!s) return;
    s.stock = Math.max(0,(s.stock||0)-1);
    items.push({id:s.id, name:s.name, qty:1, cost:s.cost||0, cat:s.cat});
  });
  const clinicalCost = items.reduce((a,i)=>a+i.qty*(i.cost||0),0);
  supplyUsageLog.unshift({
    fecha: new Date().toLocaleString('es-CL'),
    servicio: 'Suero aplicado — ' + paciente,
    items, clinicalCost,
    nota: document.getElementById(ui.notasId).value.trim()
  });
  closeModal(ui.modalId);
  saveState();
  renderSupplies();
  renderClinica();
  renderClinicalAlerts();
  const msg=document.createElement('div');
  msg.style.cssText='position:fixed;bottom:20px;right:20px;background:var(--green);color:#fff;padding:12px 18px;border-radius:8px;font-size:13px;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,.2)';
  msg.textContent=`✅ Suero aplicado a ${paciente} — stock descontado y sincronizado`;
  document.body.appendChild(msg);
  setTimeout(()=>msg.remove(),4000);
}

function confirmarSuero(){
  confirmarAplicarSuero();
}

function getSueroApplications(){
  return supplyUsageLog.filter(r=>(r.servicio||'').startsWith('Suero aplicado — '));
}

function renderClinica(){
  const page = document.getElementById('page-clinica');
  if(!page) return;
  const insumos = supplies.filter(s=>s.cat==='Insumo');
  const meds = supplies.filter(s=>s.cat==='Ampolla' || s.cat==='Activo');
  const sueros = getSueroApplications();
  const alertaRojo = supplies.filter(s=>supplySemaforo(s)==='Rojo').length;
  const alertaAmar = supplies.filter(s=>supplySemaforo(s)==='Amarillo').length;
  const sinStock = supplies.filter(s=>(s.stock||0)===0).length;
  const bajosStock = supplies.filter(s=>(s.stock||0)>0 && (s.stock||0)<=(s.minstock||0)).length;
  const vencidos = supplies.filter(s=>{
    if(!s.vencimiento) return false;
    const diff = Math.floor((new Date(s.vencimiento)-TODAY)/864e5);
    return !isNaN(diff) && diff < 0;
  }).length;
  const metrics = document.getElementById('cl-metrics');
  if(metrics){
    metrics.innerHTML = `
      <div class="metric" style="${alertaRojo?'border-color:#fca5a5':''}">
        <div class="metric-label">🔴 Semáforo Rojo</div>
        <div class="metric-value" style="color:${alertaRojo?'var(--red)':'var(--green)'}">${alertaRojo}</div>
      </div>
      <div class="metric" style="${alertaAmar?'border-color:#fcd34d':''}">
        <div class="metric-label">🟡 Semáforo Amarillo</div>
        <div class="metric-value" style="color:${alertaAmar?'var(--amber)':'var(--green)'}">${alertaAmar}</div>
      </div>
      <div class="metric"><div class="metric-label">⚠️ Vencidos</div><div class="metric-value" style="color:var(--red)">${vencidos}</div></div>
      <div class="metric"><div class="metric-label">📉 Sin stock</div><div class="metric-value" style="color:var(--red)">${sinStock}</div></div>
      <div class="metric"><div class="metric-label">🔻 Stock bajo</div><div class="metric-value" style="color:var(--amber)">${bajosStock}</div></div>
      <div class="metric"><div class="metric-label">💉 Sueros aplicados</div><div class="metric-value">${sueros.length}</div></div>
    `;
  }
  const lastUpdate = document.getElementById('cl-last-update');
  if(lastUpdate) lastUpdate.textContent = 'Datos persistidos en localStorage del navegador';

  const alertas = supplies.filter(s=>{
    const sem = supplySemaforo(s);
    if(sem !== 'Verde') return true;
    if((s.stock||0) === 0) return true;
    if(s.vencimiento){
      const diff = Math.floor((new Date(s.vencimiento)-TODAY)/864e5);
      return !isNaN(diff) && diff < 0;
    }
    return false;
  });
  const alertasCard = document.getElementById('cl-alertas-card');
  const alertasBody = document.getElementById('cl-alertas-body');
  if(alertasCard && alertasBody){
    if(!alertas.length){
      alertasCard.style.borderColor = 'var(--border)';
      alertasCard.querySelector('.card-header').style.background = 'var(--surface2)';
      alertasBody.innerHTML = '<p style="color:var(--text3);font-size:13px">Sin alertas activas en Medilink ✅</p>';
    } else {
      alertasCard.style.borderColor = '#fca5a5';
      alertasCard.querySelector('.card-header').style.background = '#fff5f5';
      alertasBody.innerHTML = alertas.map(s=>{
        const sem = supplySemaforo(s);
        const diff = s.vencimiento ? Math.floor((new Date(s.vencimiento)-TODAY)/864e5) : null;
        const rojo = sem === 'Rojo' || ((s.stock||0) === 0) || (diff !== null && !isNaN(diff) && diff < 0);
        const vencMsg = diff === null || isNaN(diff) ? ' · Sin fecha vencimiento' : (diff < 0 ? ` · ⚠️ VENCIDO hace ${Math.abs(diff)} días` : ` · vence en ${diff} días`);
        return `<div class="alert-row ${rojo?'alert-vencido':'alert-proximo'}"><span>${rojo?'🔴':'🟡'}</span>
          <div><b>${escapeHtml(s.name)}</b> <span class="badge badge-gray">${escapeHtml(s.cat)}</span><br>
          <small>Lote: ${escapeHtml(s.lote||'—')} · Stock: ${s.stock||0} · Semáforo: ${sem}${vencMsg}</small></div></div>`;
      }).join('');
    }
  }

  const insumosCount = document.getElementById('cl-insumos-count');
  if(insumosCount) insumosCount.textContent = insumos.length + ' items';
  const insumosTbody = document.getElementById('cl-insumos-tbody');
  if(insumosTbody){
    insumosTbody.innerHTML = insumos.length ? insumos.map(s=>`<tr>
      <td style="font-weight:500;font-size:12px">${escapeHtml(s.name)}<br><span style="font-size:10px;color:var(--text3)">${escapeHtml(s.use||'')}</span></td>
      <td class="mono">${escapeHtml(s.lote||'—')}</td>
      <td style="text-align:center">${s.stock||0}</td>
      <td style="text-align:center;color:var(--text2);font-size:11px">${s.minstock||0}</td>
      <td style="font-size:11px">${supplyVencBadge(s.vencimiento)}</td>
      <td>${semaforoBadge(supplySemaforo(s))}</td>
    </tr>`).join('') : '<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--text3)">Sin insumos clínicos registrados</td></tr>';
  }

  const medsCount = document.getElementById('cl-meds-count');
  if(medsCount) medsCount.textContent = meds.length + ' items';
  const medsTbody = document.getElementById('cl-meds-tbody');
  if(medsTbody){
    medsTbody.innerHTML = meds.length ? meds.map(s=>`<tr>
      <td style="font-weight:500;font-size:12px">${escapeHtml(s.name)}<br><span style="font-size:10px;color:var(--text3)">${escapeHtml(s.use||'')}</span></td>
      <td class="mono">${escapeHtml(s.lote||'—')}</td>
      <td style="text-align:center">${s.stock||0}</td>
      <td style="text-align:center;color:var(--text2);font-size:11px">${s.minstock||0}</td>
      <td style="font-size:11px">${supplyVencBadge(s.vencimiento)}</td>
      <td>${semaforoBadge(supplySemaforo(s))}</td>
    </tr>`).join('') : '<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--text3)">Sin medicamentos registrados</td></tr>';
  }

  renderSueroLog();
}

function renderSueroLog(){
  const tb = document.getElementById('cl-suero-log');
  if(!tb) return;
  const sueros = getSueroApplications();
  if(!sueros.length){
    tb.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:16px;color:var(--text3)">Sin aplicaciones registradas</td></tr>';
    return;
  }
  tb.innerHTML = sueros.map((a,i)=>{
    const meds = (a.items||[]).filter(item=>item.cat==='Ampolla' || item.cat==='Activo');
    const insumos = (a.items||[]).filter(item=>item.cat!=='Ampolla' && item.cat!=='Activo');
    const suero = insumos.find(item=>normalizeSupplyName(item.name).includes('suero'))?.name || '—';
    const branula = insumos.find(item=>normalizeSupplyName(item.name).includes('branula'))?.name || '—';
    const paciente = (a.servicio||'').replace(/^Suero aplicado —\s*/, '') || '—';
    const medsHtml = meds.length ? meds.map(x=>escapeHtml(x.name)).join(', ') : '<span style="color:var(--text3)">Sin medicamentos</span>';
    const insumosHtml = insumos.map(x=>`${x.qty}× ${escapeHtml(x.name)}`).join(', ');
    return `<tr>
      <td class="mono">#${String(sueros.length - i).padStart(3,'0')}</td>
      <td style="font-size:11px">${escapeHtml(a.fecha)}</td>
      <td style="font-weight:500">${escapeHtml(paciente)}</td>
      <td><span class="badge badge-blue">${escapeHtml(suero)}</span></td>
      <td>${escapeHtml(branula)}</td>
      <td style="font-size:11px">${medsHtml}</td>
      <td style="font-size:11px">${insumosHtml}</td>
    </tr>`;
  }).join('');
}

function exportSuerosCSV(){
  const sueros = getSueroApplications();
  const rows = [['#','Fecha','Paciente','Suero','Bránula','Medicamentos','Insumos descontados','Notas']];
  sueros.forEach((a,i)=>{
    const meds = (a.items||[]).filter(item=>item.cat==='Ampolla' || item.cat==='Activo');
    const insumos = (a.items||[]).filter(item=>item.cat!=='Ampolla' && item.cat!=='Activo');
    rows.push([
      sueros.length - i,
      a.fecha || '',
      (a.servicio||'').replace(/^Suero aplicado —\s*/, ''),
      insumos.find(item=>normalizeSupplyName(item.name).includes('suero'))?.name || '',
      insumos.find(item=>normalizeSupplyName(item.name).includes('branula'))?.name || '',
      meds.map(item=>item.name).join('; '),
      insumos.map(item=>item.qty+'x '+item.name).join('; '),
      a.nota || ''
    ]);
  });
  const csv = rows.map(r => r.map(v=>`"${v ?? ''}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,﻿'+encodeURIComponent(csv);
  a.download = 'novage_sueros_'+new Date().toISOString().split('T')[0]+'.csv';
  a.click();
}

// ─── ALERTAS CLÍNICAS (Medilink) ───
function renderClinicalAlerts(){
  const body = document.getElementById('alert-clinico-body');
  if(!body) return;
  const alertas = supplies.filter(s=>{
    const sem = supplySemaforo(s);
    return sem!=='Verde' || (s.stock||0)===0 || (s.stock||0)<=(s.minstock||0);
  });
  if(!alertas.length){
    body.innerHTML='<p style="color:var(--text3);font-size:13px">Inventario clínico sin alertas ✅</p>';
    return;
  }
  body.innerHTML = alertas.map(s=>{
    const sem = supplySemaforo(s);
    const rojo = sem==='Rojo' || (s.stock||0)===0;
    const diff = s.vencimiento ? Math.floor((new Date(s.vencimiento)-TODAY)/864e5) : null;
    const venc = diff===null ? 'Sin fecha venc.' : (diff<0 ? `VENCIDO hace ${Math.abs(diff)}d` : `vence en ${diff}d`);
    return `<div class="alert-row ${rojo?'alert-vencido':'alert-proximo'}"><span>${rojo?'🔴':'🟡'}</span>
      <div><b>${s.name}</b>${s.lote?` <span class="badge badge-gray" style="font-size:10px">lote ${s.lote}</span>`:''}
      <br><small>Stock: ${s.stock||0} (mín ${s.minstock||0}) · ${venc} · ${s.cat}</small></div></div>`;
  }).join('');
}

function openLots(id){
  if(!requireAdmin('Solo administración puede gestionar lotes')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  ensureLots(p);
  syncLegacyFromLots(p);
  document.getElementById('lot-product-id').value = id;
  document.getElementById('lots-product-name').textContent = p.name;
  document.getElementById('lot-loc').value = 'Bodega';
  document.getElementById('lot-qty').value = '';
  document.getElementById('lot-venc').value = nextVencimiento(p)||'';
  renderLotsTable(id);
  document.getElementById('modal-lotes').classList.add('open');
}
function renderLotsTable(id){
  const p = products.find(x=>x.id===Number(id));
  const tbody = document.getElementById('lots-tbody');
  if(!p || !tbody) return;
  ensureLots(p);
  if(!p.lots.length){
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:16px;color:var(--text3)">Sin lotes cargados</td></tr>';
    return;
  }
  tbody.innerHTML = sortLotsByExpiry(p.lots).map(l=>`<tr><td>${l.location}</td><td>${l.qty}</td><td>${fmtDate(l.vencimiento)}</td><td><button class="btn btn-sm btn-danger" onclick="deleteLotFromProduct(${p.id}, '${l.id}')">Eliminar</button></td></tr>`).join('');
}
function addLotToProduct(){
  const id = Number(document.getElementById('lot-product-id').value);
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const location = document.getElementById('lot-loc').value;
  const qty = parseInt(document.getElementById('lot-qty').value)||0;
  const vencimiento = document.getElementById('lot-venc').value.trim();
  if(qty<=0){ alert('Ingresa una cantidad valida'); return; }
  addLot(p, location, qty, vencimiento);
  renderLotsTable(id);
  renderInv();renderBodega();renderAlertas();renderPedidos();renderPosGrid();
  saveState();
}
function deleteLotFromProduct(productId, lotId){
  const p = products.find(x=>x.id===Number(productId));
  if(!p) return;
  p.lots = (p.lots||[]).filter(l=>l.id!==lotId);
  syncLegacyFromLots(p);
  renderLotsTable(productId);
  renderInv();renderBodega();renderAlertas();renderPedidos();renderPosGrid();
  saveState();
}

// ─── MODALS ───
function openAddProduct(){
  if(!requireAdmin('Solo administración puede agregar productos')) return;
  document.getElementById('modal-prod-title').textContent='Agregar producto';
  document.getElementById('mp-idx').value='';
  ['mp-barcode','mp-name','mp-brand','mp-pres','mp-bodega','mp-espacio','mp-costo','mp-precio','mp-venc','mp-desc'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('mp-descuento').value='0';
  document.getElementById('mp-precio-oferta-preview').value='';
  document.getElementById('mp-minstock').value='2';
  document.getElementById('modal-prod').classList.add('open');
}

function openEditProduct(id){
  if(!requireAdmin('Solo administración puede modificar precios o productos')) return;
  const p=products.find(x=>x.id===id);
  document.getElementById('modal-prod-title').textContent='Editar producto';
  document.getElementById('mp-idx').value=id;
  document.getElementById('mp-barcode').value=p.barcode||'';
  document.getElementById('mp-name').value=p.name;
  document.getElementById('mp-brand').value=p.brand||'';
  document.getElementById('mp-cat').value=p.cat;
  document.getElementById('mp-pres').value=p.pres||'';
  document.getElementById('mp-bodega').value=stockAt(p,'Bodega')||0;
  document.getElementById('mp-espacio').value=stockAt(p,'Espacio')||0;
  document.getElementById('mp-costo').value=p.costo||0;
  document.getElementById('mp-precio').value=salePrice(p)||0;
  document.getElementById('mp-descuento').value=p.descuento||0;
  document.getElementById('mp-desc').value=p.descripcion||'';
  document.getElementById('mp-venc').value=nextVencimiento(p)||'';
  document.getElementById('mp-minstock').value=p.minstock||2;
  previewOferta();
  document.getElementById('modal-prod').classList.add('open');
}

function saveProduct(){
  if(!requireAdmin('Solo administración puede guardar cambios de producto')) return;
  const idx=document.getElementById('mp-idx').value;
  const data={
    barcode:document.getElementById('mp-barcode').value.trim(),
    name:document.getElementById('mp-name').value.trim(),
    brand:document.getElementById('mp-brand').value.trim(),
    cat:document.getElementById('mp-cat').value,
    pres:document.getElementById('mp-pres').value.trim(),
    stock_bodega:parseInt(document.getElementById('mp-bodega').value)||0,
    stock_espacio:parseInt(document.getElementById('mp-espacio').value)||0,
    costo:parseFloat(document.getElementById('mp-costo').value)||0,
    precio:parseFloat(document.getElementById('mp-precio').value)||0,
    pvp:parseFloat(document.getElementById('mp-precio').value)||0,
    descuento:parseFloat(document.getElementById('mp-descuento').value)||0,
    descripcion:document.getElementById('mp-desc').value.trim(),
    vencimiento:document.getElementById('mp-venc').value,
    minstock:parseInt(document.getElementById('mp-minstock').value)||2,
  };
  if(!data.name){alert('El nombre es obligatorio');return;}
  if(idx!==''){
    const i=products.findIndex(x=>x.id===parseInt(idx));
    const existing = products[i];
    const hasLots = Array.isArray(existing.lots) && existing.lots.length;
    products[i]={...existing,...data};
    if(hasLots){
      products[i].lots = existing.lots;
      syncLegacyFromLots(products[i]);
    } else {
      products[i].lots = [];
      if(data.stock_bodega>0) products[i].lots.push({id:makeLotId(),location:'Bodega',qty:data.stock_bodega,vencimiento:data.vencimiento||''});
      if(data.stock_espacio>0) products[i].lots.push({id:makeLotId(),location:'Espacio',qty:data.stock_espacio,vencimiento:data.vencimiento||''});
      syncLegacyFromLots(products[i]);
    }
  }else{
    data.id=products.reduce((max,p)=>Math.max(max,p.id||0),-1)+1;
    data.lots = [];
    if(data.stock_bodega>0) data.lots.push({id:makeLotId(),location:'Bodega',qty:data.stock_bodega,vencimiento:data.vencimiento||''});
    if(data.stock_espacio>0) data.lots.push({id:makeLotId(),location:'Espacio',qty:data.stock_espacio,vencimiento:data.vencimiento||''});
    products.push(data);
    syncLegacyFromLots(data);
  }
  closeModal('modal-prod');
  renderInv();renderPosGrid();renderBodega();renderAlertas();
}

function deleteProduct(id){
  if(!requireAdmin('Solo administración puede eliminar productos')) return;
  const p=products.find(x=>x.id===id);
  if(!p) return;
  if(!confirm(`¿Eliminar el producto "${p.name}"? Esta acción quita el registro de la matriz.`)) return;
  products = products.filter(x=>x.id!==id);
  cart = cart.filter(x=>x.id!==id);
  closeModal('modal-prod');
  renderInv();renderPosGrid();renderBodega();renderAlertas();renderPedidos();renderCart();
  saveState();
}

function openAdj(id){
  if(!requireAdmin('Solo administración puede ajustar cantidades')) return;
  const p=products.find(x=>x.id===id);
  document.getElementById('adj-product-name').textContent=p.name;
  document.getElementById('adj-idx').value=id;
  document.getElementById('adj-bodega').value='';
  document.getElementById('adj-espacio').value='';
  document.getElementById('modal-stock').classList.add('open');
}

function applyAdj(){
  if(!requireAdmin('Solo administración puede ajustar cantidades')) return;
  const id=parseInt(document.getElementById('adj-idx').value);
  const p=products.find(x=>x.id===id);
  if(Array.isArray(p.lots) && p.lots.length){ alert('Este producto ya usa lotes. Ajusta stock desde el boton L de la matriz.'); return; }
  const db=parseInt(document.getElementById('adj-bodega').value)||0;
  const de=parseInt(document.getElementById('adj-espacio').value)||0;
  p.stock_bodega=Math.max(0,(p.stock_bodega||0)+db);
  p.stock_espacio=Math.max(0,(p.stock_espacio||0)+de);
  closeModal('modal-stock');
  renderInv();renderBodega();renderPosGrid();renderAlertas();
}

function closeModal(id){document.getElementById(id).classList.remove('open');}

// ─── EXPORT ───
function exportCSV(){
  const rows=[['Código Barras','Nombre','Marca','Categoría','Presentación','Stock Bodega','Stock Espacio','Total Stock','Costo','Precio Venta','Vencimiento','Estado']];
  products.forEach(p=>rows.push([p.barcode,p.name,p.brand,p.cat,p.pres,stockAt(p,'Bodega'),stockAt(p,'Espacio'),totalStock(p),p.costo,salePrice(p),nextVencimiento(p),vencStatus(nextVencimiento(p)).label]));
  const csv=rows.map(r=>r.map(v=>`"${v}"`).join(',')).join('\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(csv);
  a.download='novage_inventario_'+new Date().toISOString().split('T')[0]+'.csv';
  a.click();
}

function exportVentasCSV(){
  const rows=[['#','Fecha','Empresa','Tipo','Detalle','Método','Subtotal','IVA','Total']];
  ventas.forEach(v=>rows.push([v.n,v.fecha,v.empresa||'Dacez SpA',v.tipo||'Producto',v.items.map(i=>i.qty+'x '+i.name).join('; '),v.metodo,v.sub,v.iva,v.total]));
  serviceSales.forEach(s=>rows.push([s.n,s.fecha,s.empresa,s.tipo,s.servicio,s.metodo,s.sub,s.iva||0,s.total]));
  const csv=rows.map(r=>r.map(x=>`"${x}"`).join(',')).join('\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(csv);
  a.download='novage_ventas_'+new Date().toISOString().split('T')[0]+'.csv';
  a.click();
}

// ─── CONFIGURACIÓN GOOGLE SHEETS ───
// ↓ Reemplaza esta URL con la de tu Web App publicada
const API_URL = 'https://script.google.com/macros/s/AKfycbzPZ_7UkYkNJj38o3rthJwK40xMR7_JS_vu04Smqhoas-AfFVFmKrbvDtqIoS4d0McB/exec';
const WELLPLUS_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1afTrveu4wh1FJ3bFgvwHD5OIumNk9kTZ/export?format=csv&gid=1322354912';
const WELLPLUS_SHEET_SYNC_ENABLED = true;
let syncEnabled = !!API_URL;

// ─── CAPA DE SINCRONIZACIÓN ───
// localStorage actúa como caché offline; Sheets es la fuente de verdad

const LS_STOCK    = 'nvg_stock_v3';
const LS_VENTAS   = 'nvg_ventas_v3';
const LS_TRANSFERS= 'nvg_transfers_v3';
const LS_SERVICES = 'nvg_services_v1';
const LS_SUPPLIES = 'nvg_supplies_v1';
const LS_SUPPLY_LOG = 'nvg_supply_log_v1';
const LS_HISTORY  = 'nvg_history_v3';
const LS_PENDING  = 'nvg_pending_v3'; // acciones pendientes si hay offline

let syncStatus = syncEnabled ? 'connecting' : 'local';
let pendingQueue = [];

function setSyncStatus(s, msg){
  syncStatus = s;
  const el = document.getElementById('sync-indicator');
  if(!el) return;
  const map = {
    ok:          {dot:'#2d6a4f', text:'Sincronizado ✓'},
    saving:      {dot:'#92400e', text:'Guardando…'},
    loading:     {dot:'#1d4ed8', text:'Cargando…'},
    error:       {dot:'#991b1b', text:'Error Sheets'},
    local:       {dot:'#6b6560', text:'Modo local'},
    connecting:  {dot:'#1d4ed8', text:'Conectando…'},
  };
  const s2 = map[s]||map.local;
  el.innerHTML = `<span style="width:7px;height:7px;border-radius:50%;background:${s2.dot};display:inline-block;margin-right:5px"></span>${msg||s2.text}`;
}

async function api(action, body={}){
  if(!syncEnabled) return null;
  try{
    const res = await fetch(API_URL, {
      method:'POST',
      body: JSON.stringify({action, ...body}),
    });
    const data = await res.json();
    if(data.error) throw new Error(data.error);
    return data;
  }catch(e){
    console.warn('Sheets API error:', e.message);
    setSyncStatus('error', 'Sin conexión — modo local');
    return null;
  }
}


function normalizeCatalogText(value){
  return (value||'').toString().trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/&/g,' y ')
    .replace(/[+]/g,' plus ')
    .replace(/[\/\-,\.]/g,' ')
    .replace(/\([^)]*\)/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}
function wellplusCatalogKey(name, pres){
  return `${normalizeCatalogText(name)}|${normalizeCatalogText(pres)}`;
}
function parseCsvLine(line){
  const out=[];
  let cur='';
  let q=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'){
      if(q && line[i+1]==='"'){ cur+='"'; i++; }
      else q=!q;
    } else if(ch===',' && !q){
      out.push(cur);
      cur='';
    } else cur+=ch;
  }
  out.push(cur);
  return out.map(v=>v.trim());
}
function parseCsvText(text){
  return text.split(/\r?\n/).filter(line=>line.trim()).map(parseCsvLine);
}
function parseMoneyValue(value){
  const clean = (value||'').toString().replace(/[^0-9,-]/g,'').replace(/\./g,'').replace(',', '.');
  const n = Number(clean);
  return Number.isFinite(n) ? Math.round(n) : 0;
}
function wellplusAliasKey(key){
  const aliases = {
    [wellplusCatalogKey('cogni pro','90 capsulas')]: wellplusCatalogKey('cogni pro','90 capsulas'),
    [wellplusCatalogKey('neuro calm','60 capsulas')]: wellplusCatalogKey('neuro calm','60 capsulas'),
    [wellplusCatalogKey('iron plus liposomal','60 capsulas')]: wellplusCatalogKey('iron plus liposomal','60 capsulas'),
    [wellplusCatalogKey('zinc selenio manganeso','60 capsulas')]: wellplusCatalogKey('zinc selenio manganeso','60 capsulas'),
    [wellplusCatalogKey('l triptofano pure','180 capsulas')]: wellplusCatalogKey('l triptofano pure','180 capsulas'),
    [wellplusCatalogKey('shisandra pure','180 capsulas')]: wellplusCatalogKey('shisandra pure','180 capsulas'),
    [wellplusCatalogKey('l glutation liposomal 250 mg','60 capsulas')]: wellplusCatalogKey('l glutation liposomal 250 mg','60 capsulas'),
    [wellplusCatalogKey('coq10 activa liposomal ubiquinol acetato','180 capsulas')]: wellplusCatalogKey('coq10 activa liposomal ubiquinol acetato','180 capsulas'),
    [wellplusCatalogKey('energy cell mitocondrial activator','30 capsulas')]: wellplusCatalogKey('energy cell mitocondrial activator','30 capsulas'),
    [wellplusCatalogKey('sod 750 znsemn','30 capsulas')]: wellplusCatalogKey('sod 750 znsemn','30 capsulas'),
    [wellplusCatalogKey('prebiotico n°2 aerobic bateria','60 capsulas')]: wellplusCatalogKey('prebiotico n°2 aerobic bateria','60 capsulas'),
    [wellplusCatalogKey('collagen pure peptidos bioactivos','90 capsulas')]: wellplusCatalogKey('collagen pure peptidos bioactivos','90 capsulas'),
    [wellplusCatalogKey('triple potasio quelado','120 capsulas')]: wellplusCatalogKey('triple potasio quelado','120 capsulas'),
  };
  return aliases[key] || key;
}
async function syncWellplusCatalogFromSheet(){
  if(!WELLPLUS_SHEET_SYNC_ENABLED || !WELLPLUS_SHEET_CSV_URL) return false;
  try{
    const res = await fetch(WELLPLUS_SHEET_CSV_URL, {cache:'no-store'});
    if(!res.ok) throw new Error(`CSV ${res.status}`);
    const csv = await res.text();
    const rows = parseCsvText(csv);
    if(rows.length < 2) return false;
    const headers = rows[0].map(normalizeCatalogText);
    const col = {
      producto: headers.findIndex(h=>h==='producto' || h==='product'),
      presentacion: headers.findIndex(h=>h==='presentacion' || h==='presentacion capsulas' || h==='formato'),
      mayoristaSinIva: headers.findIndex(h=>h.includes('mayorista sin iva') || h==='costo' || h==='mayorista neto'),
      iva19: headers.findIndex(h=>h.includes('iva 19')),
      mayoristaConIva: headers.findIndex(h=>h.includes('mayorista con iva') || h==='precio mayorista' || h==='precio con iva'),
      pvp: headers.findIndex(h=>h==='pvp' || h==='precio venta' || h==='precio web' || h==='venta web' || h==='well plus'),
      link: headers.findIndex(h=>h.includes('link well plus') || h==='link' || h==='url'),
    };
    if(col.producto < 0 || col.presentacion < 0) return false;
    const lookup = new Map();
    products.forEach(p=>{
      const brand = ((p.brand||'').toUpperCase().replace(/\s+/g,''));
      if(brand !== 'WELLPLUS') return;
      lookup.set(wellplusAliasKey(wellplusCatalogKey(p.name, p.pres)), p);
    });
    let touched = 0;
    rows.slice(1).forEach(row=>{
      const name = row[col.producto] || '';
      const pres = row[col.presentacion] || '';
      if(!name || !pres) return;
      const key = wellplusAliasKey(wellplusCatalogKey(name, pres));
      const pvp = col.pvp >= 0 ? parseMoneyValue(row[col.pvp]) : 0;
      const link = col.link >= 0 ? (row[col.link]||'').trim() : '';
      const existing = lookup.get(key);
      if(existing){
        if(pvp > 0) existing.pvp = pvp;
        if(link) existing.wellplus_link = link;
        existing.price_source = 'Google Sheet';
        touched++;
      }
    });
    if(touched){
      try{
        const sm={};
        products.forEach(p=>{ sm[p.id]={b:p.stock_bodega,e:p.stock_espacio,precio:p.precio,costo:p.costo,pvp:p.pvp,minstock:p.minstock,vencimiento:p.vencimiento,proximoPedido:!!p.proximoPedido,pedidoCantidad:p.pedidoCantidad||0,pedidoObservacion:p.pedidoObservacion||''}; });
        localStorage.setItem(LS_STOCK, JSON.stringify(sm));
        localStorage.setItem(LS_WELLPLUS_PRICE_SYNC_TS, new Date().toISOString());
      }catch(e){}
      renderAll();
    }
    return touched > 0;
  }catch(e){
    console.warn('Wellplus sheet sync error:', e.message);
    return false;
  }
}

// Guardar stock completo a Sheets + localStorage
async function saveState(){
  // Siempre guardar en localStorage primero (instantáneo)
  try{
    const sm={};
    products.forEach(p=>{ sm[p.id]={b:p.stock_bodega,e:p.stock_espacio,precio:p.precio,costo:p.costo,pvp:p.pvp,minstock:p.minstock,vencimiento:p.vencimiento,proximoPedido:!!p.proximoPedido,pedidoCantidad:p.pedidoCantidad||0,pedidoObservacion:p.pedidoObservacion||''}; });
    localStorage.setItem(LS_STOCK, JSON.stringify(sm));
    localStorage.setItem(LS_VENTAS, JSON.stringify(ventas));
    localStorage.setItem(LS_TRANSFERS, JSON.stringify(transfers));
    localStorage.setItem(LS_SERVICES, JSON.stringify(serviceSales));
    localStorage.setItem(LS_SUPPLIES, JSON.stringify(supplies));
    localStorage.setItem(LS_SUPPLY_LOG, JSON.stringify(supplyUsageLog));
  }catch(e){}

  if(!syncEnabled){ setSyncStatus('local'); return; }
  setSyncStatus('saving');
  const res = await api('saveStock', {products});
  setSyncStatus(res ? 'ok' : 'error');
}

// Cargar estado desde Sheets (prioridad) o localStorage (fallback)
async function loadState(){
  // Cargar localStorage primero para respuesta inmediata
  try{
    const sm = JSON.parse(localStorage.getItem(LS_STOCK)||'{}');
    products.forEach(p=>{
      if(sm[p.id]!==undefined){
        p.stock_bodega  = sm[p.id].b  ?? p.stock_bodega;
        p.stock_espacio = sm[p.id].e  ?? p.stock_espacio;
        if(sm[p.id].precio !== undefined)    p.precio    = sm[p.id].precio;
        if(sm[p.id].costo !== undefined)     p.costo     = sm[p.id].costo;
        if(sm[p.id].pvp !== undefined)       p.pvp       = sm[p.id].pvp;
        if(sm[p.id].vencimiento !== undefined) p.vencimiento = sm[p.id].vencimiento;
        if(sm[p.id].minstock !== undefined) p.minstock = sm[p.id].minstock;
        if(sm[p.id].proximoPedido !== undefined) p.proximoPedido = sm[p.id].proximoPedido;
        if(sm[p.id].pedidoCantidad !== undefined) p.pedidoCantidad = sm[p.id].pedidoCantidad;
        if(sm[p.id].pedidoObservacion !== undefined) p.pedidoObservacion = sm[p.id].pedidoObservacion;
      }
    });
    ventas    = JSON.parse(localStorage.getItem(LS_VENTAS)   ||'[]');
    transfers = JSON.parse(localStorage.getItem(LS_TRANSFERS)||'[]');
    serviceSales = JSON.parse(localStorage.getItem(LS_SERVICES)||'[]');
    supplies = JSON.parse(localStorage.getItem(LS_SUPPLIES)||'[]');
    supplyUsageLog = JSON.parse(localStorage.getItem(LS_SUPPLY_LOG)||'[]');
  }catch(e){}

  if(!syncEnabled){ applyWellplusCatalogVersion(); await syncWellplusCatalogFromSheet(); setSyncStatus('local'); renderAll(); return; }

  // Luego cargar desde Sheets (fuente de verdad)
  setSyncStatus('loading');
  const [rStock, rVentas, rTransfers] = await Promise.all([
    api('getStock'), api('getVentas'), api('getTraslados')
  ]);

  if(rStock && rStock.products && rStock.products.length){
    // Sheets tiene datos → reemplazar catálogo en memoria
    rStock.products.forEach(sp => {
      const local = products.find(p => p.id === sp.id);
      if(local){
        local.stock_bodega  = sp.stock_bodega;
        local.stock_espacio = sp.stock_espacio;
        if(sp.precio !== undefined)    local.precio    = sp.precio;
        if(sp.costo !== undefined)     local.costo     = sp.costo;
        if(sp.pvp !== undefined)       local.pvp       = sp.pvp;
        if(sp.minstock !== undefined)  local.minstock  = sp.minstock;
        if(sp.vencimiento !== undefined) local.vencimiento = sp.vencimiento;
      }
    });
  }
  if(rVentas && rVentas.ventas)   ventas    = rVentas.ventas;
  if(rTransfers && rTransfers.transfers) transfers = rTransfers.transfers;

  // Guardar en localStorage como caché
  try{
    const sm={};
    products.forEach(p=>{ sm[p.id]={b:p.stock_bodega,e:p.stock_espacio,precio:p.precio,costo:p.costo,pvp:p.pvp,minstock:p.minstock,vencimiento:p.vencimiento,proximoPedido:!!p.proximoPedido,pedidoCantidad:p.pedidoCantidad||0,pedidoObservacion:p.pedidoObservacion||''}; });
    localStorage.setItem(LS_STOCK,     JSON.stringify(sm));
    localStorage.setItem(LS_VENTAS,    JSON.stringify(ventas));
    localStorage.setItem(LS_TRANSFERS, JSON.stringify(transfers));
    localStorage.setItem(LS_SERVICES, JSON.stringify(serviceSales));
    localStorage.setItem(LS_SUPPLIES, JSON.stringify(supplies));
    localStorage.setItem(LS_SUPPLY_LOG, JSON.stringify(supplyUsageLog));
  }catch(e){}

  applyWellplusCatalogVersion();
  await syncWellplusCatalogFromSheet();
  setSyncStatus('ok');
  renderAll();
}

async function syncAddVenta(venta){
  if(!syncEnabled) return;
  setSyncStatus('saving');
  const res = await api('addVenta', {venta});
  setSyncStatus(res ? 'ok' : 'error');
}

async function syncAddTraslado(t){
  if(!syncEnabled) return;
  await api('addTraslado', {traslado: t});
}

async function syncAddCierre(c){
  if(!syncEnabled) return;
  const res = await api('addCierre', {cierre: c});
  let history = [];
  try{ history = JSON.parse(localStorage.getItem(LS_HISTORY)||'[]'); }catch{}
  history.unshift(c);
  localStorage.setItem(LS_HISTORY, JSON.stringify(history));
  return res;
}

function renderAll(){
  renderInv(); renderGestionList(); renderPosGrid(); renderAlertas(); renderClinicalAlerts(); renderContab(); renderBodega(); renderPedidos(); renderServicios(); renderSupplies(); renderClinica();
}

// Auto-save después de cada operación crítica

// ─── CIERRE DEL DÍA ───
const TODAY_STR = new Date().toLocaleDateString('es-CL',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

function ventasHoy(){
  const todayDate = new Date().toLocaleDateString('es-CL');
  return ventas.filter(v=>{
    try{ return v.fecha.split(',')[0] === todayDate || v.fecha.startsWith(todayDate); }
    catch{ return false; }
  });
}

function renderCierre(){
  const hoy = ventasHoy();
  const allV = hoy;
  document.getElementById('cierre-fecha').textContent = '📅 ' + TODAY_STR;
  document.getElementById('cierre-sub').textContent = allV.length + ' ventas registradas hoy · Guardado automáticamente en este navegador';

  // Métricas
  const total = allV.reduce((a,v)=>a+v.total,0);
  const sub = allV.reduce((a,v)=>a+v.sub,0);
  const iva = allV.reduce((a,v)=>a+v.iva,0);
  const redbank = allV.filter(v=>v.metodo==='redbank').reduce((a,v)=>a+v.total,0);
  const efectivo = allV.filter(v=>v.metodo==='efectivo').reduce((a,v)=>a+v.total,0);
  const transfer = allV.filter(v=>v.metodo==='transfer').reduce((a,v)=>a+v.total,0);

  document.getElementById('cierre-metrics').innerHTML=`
    <div class="metric"><div class="metric-label">💰 Total del día</div><div class="metric-value" style="font-size:20px;color:var(--green)">${fmt(total)}</div></div>
    <div class="metric"><div class="metric-label">🧾 Neto (sin IVA)</div><div class="metric-value" style="font-size:18px">${fmt(sub)}</div></div>
    <div class="metric"><div class="metric-label">🏛 IVA (19%)</div><div class="metric-value" style="font-size:18px">${fmt(iva)}</div></div>
    <div class="metric"><div class="metric-label">📊 N° ventas</div><div class="metric-value">${allV.length}</div></div>
    <div class="metric"><div class="metric-label">💳 Ticket prom.</div><div class="metric-value" style="font-size:16px">${allV.length?fmt(total/allV.length):'$0'}</div></div>
  `;

  // Métodos
  const payLabel={redbank:'💳 Redbank BancoEstado',efectivo:'💵 Efectivo',transfer:'🏦 Transferencia',mixto:'🔀 Mixto'};
  const metodoCounts={redbank:0,efectivo:0,transfer:0,mixto:0};
  const metodoTotals={redbank:0,efectivo:0,transfer:0,mixto:0};
  allV.forEach(v=>{metodoCounts[v.metodo]=(metodoCounts[v.metodo]||0)+1;metodoTotals[v.metodo]=(metodoTotals[v.metodo]||0)+v.total;});
  
  document.getElementById('cierre-metodos').innerHTML = Object.entries(metodoTotals)
    .filter(([,t])=>t>0)
    .map(([m,t])=>{
      const pct = total>0?Math.round(t/total*100):0;
      return`<div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
          <span>${payLabel[m]}</span><span style="font-weight:600">${fmt(t)}</span>
        </div>
        <div style="background:var(--surface2);border-radius:4px;height:6px;overflow:hidden">
          <div style="height:100%;background:var(--green);width:${pct}%;transition:width .3s"></div>
        </div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px">${metodoCounts[m]} venta(s) · ${pct}%</div>
      </div>`;
    }).join('') || '<p style="color:var(--text3);font-size:13px">Sin ventas hoy</p>';

  // Top productos
  const counts={};
  allV.forEach(v=>v.items.forEach(i=>{counts[i.name]=(counts[i.name]||0)+i.qty;}));
  const top = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,8);
  document.getElementById('cierre-top').innerHTML = top.length
    ? top.map(([name,qty],i)=>`<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:0.5px solid var(--border);font-size:13px">
        <span style="font-size:11px;color:var(--text3);min-width:16px">${i+1}</span>
        <span style="flex:1">${name}</span>
        <span style="font-weight:600;background:var(--green-bg);color:var(--green);padding:2px 8px;border-radius:20px;font-size:12px">${qty}u</span>
      </div>`).join('')
    : '<p style="color:var(--text3);font-size:13px">Sin ventas hoy</p>';

  // Tabla ventas del día
  const tb = document.getElementById('cierre-ventas');
  const payBadge={redbank:'<span class="badge badge-ok">💳 Redbank</span>',efectivo:'<span class="badge badge-blue">💵 Efectivo</span>',transfer:'<span class="badge badge-gray">🏦 Transfer.</span>',mixto:'<span class="badge badge-gray">🔀 Mixto</span>'};
  tb.innerHTML = allV.length
    ? allV.map(v=>`<tr>
        <td class="mono">#${String(v.n).padStart(4,'0')}</td>
        <td style="font-size:11px">${v.fecha.split(' ')[1]||v.fecha}</td>
        <td style="font-size:11px;max-width:200px">${v.items.map(i=>i.qty+'× '+i.name).join(', ')}</td>
        <td>${payBadge[v.metodo]||v.metodo}</td>
        <td style="font-weight:600">${fmt(v.total)}</td>
      </tr>`).join('')
    : '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text3)">Sin ventas registradas hoy</td></tr>';

  // Historial
  renderHistoria();
}

async function renderHistoria(){
  let history = [];
  try{ history = JSON.parse(localStorage.getItem(LS_HISTORY)||'[]'); }catch{}
  // Try to load from Sheets if connected
  if(syncEnabled){
    const r = await api('getCierre');
    if(r && r.history && r.history.length){
      history = r.history;
      localStorage.setItem(LS_HISTORY, JSON.stringify(history));
    }
  }
  const tb = document.getElementById('cierre-historia');
  if(!history.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--text3)">Sin días cerrados aún</td></tr>';
    return;
  }
  tb.innerHTML = history.map(h=>`<tr>
    <td style="font-weight:500">${h.fecha}</td>
    <td style="text-align:center">${h.nVentas}</td>
    <td>${fmt(h.redbank)}</td>
    <td>${fmt(h.efectivo)}</td>
    <td>${fmt(h.transfer)}</td>
    <td style="font-weight:600;color:var(--green)">${fmt(h.total)}</td>
  </tr>`).join('');
}

function cerrarDia(){
  const hoy = ventasHoy();
  if(!hoy.length){alert('No hay ventas registradas hoy para cerrar.');return;}
  if(!confirm('¿Cerrar el día y archivar las ventas de hoy?'))return;

  const total    = hoy.reduce((a,v)=>a+v.total,0);
  const redbank  = hoy.filter(v=>v.metodo==='redbank').reduce((a,v)=>a+v.total,0);
  const efectivo = hoy.filter(v=>v.metodo==='efectivo').reduce((a,v)=>a+v.total,0);
  const transfer = hoy.filter(v=>v.metodo==='transfer').reduce((a,v)=>a+v.total,0);
  const mixto    = hoy.filter(v=>v.metodo==='mixto').reduce((a,v)=>a+v.total,0);

  const cierre = {
    fecha: new Date().toLocaleDateString('es-CL'),
    nVentas: hoy.length, total, redbank, efectivo, transfer, mixto
  };

  // Guardar en localStorage
  let history = [];
  try{ history = JSON.parse(localStorage.getItem(LS_HISTORY)||'[]'); }catch{}
  history.unshift(cierre);
  localStorage.setItem(LS_HISTORY, JSON.stringify(history));

  // Sync a Sheets
  syncAddCierre(cierre);

  document.getElementById('cierre-ok-fecha').textContent = new Date().toLocaleDateString('es-CL',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  document.getElementById('cierre-ok-total').textContent = fmt(total);
  document.getElementById('cierre-ok-detail').innerHTML =
    `${hoy.length} ventas · Redbank: ${fmt(redbank)} · Efectivo: ${fmt(efectivo)} · Transfer.: ${fmt(transfer)}${mixto?` · Mixto: ${fmt(mixto)}`:''}`;
  document.getElementById('modal-cierre-ok').classList.add('open');
  renderHistoria();
}

function clearHistory(){
  localStorage.removeItem(LS_HISTORY);
  renderHistoria();
}

function activarOfertaRapida(id){
  if(!requireAdmin('Solo administración puede modificar precios u ofertas')) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const pct = prompt(`Activar oferta para:\n"${p.name}"\nPrecio actual: ${fmt(p.precio||p.pvp||0)}\n\n¿Qué % de descuento quieres aplicar?`, '15');
  if(pct === null) return;
  const n = parseFloat(pct);
  if(isNaN(n) || n<=0 || n>90){ alert('Ingresa un porcentaje válido entre 1 y 90'); return; }
  p.descuento = n;
  saveState();
  renderAlertas();
  renderPosGrid();
  renderInv();
  const precio = p.precio||p.pvp||0;
  alert(`✅ Oferta activada: ${p.name}\nDescuento: ${n}%\nPrecio oferta: ${fmt(Math.round(precio*(1-n/100)))}\n\nAhora aparece en rojo en la grilla de ventas.`);
}

function exportCierreCSV(){
  const hoy = ventasHoy();
  const fecha = new Date().toLocaleDateString('es-CL').replace(/\//g,'-');
  const rows=[['#','Hora','Productos','Método','Subtotal','IVA','Total']];
  hoy.forEach(v=>rows.push([v.n, v.fecha, v.items.map(i=>i.qty+'x '+i.name).join('; '), v.metodo, v.sub, v.iva, v.total]));
  // Totales
  rows.push([]);
  rows.push(['TOTAL DÍA','','','',
    hoy.reduce((a,v)=>a+v.sub,0),
    hoy.reduce((a,v)=>a+v.iva,0),
    hoy.reduce((a,v)=>a+v.total,0)
  ]);
  const csv = rows.map(r=>r.map(x=>`"${x||''}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(csv);
  a.download = 'novage_cierre_'+fecha+'.csv';
  a.click();
}

// ─── NAV ───
function goPage(id,btn){
  if(currentRole && !canAccessPage(id)){
    alert('Tu clave no tiene acceso a esta sección');
    const first = firstAllowedTab();
    if(first && first !== btn) first.click();
    return;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='gestion')renderGestionList();
  if(id==='bodega')renderBodega();
  if(id==='alertas'){renderAlertas();renderClinicalAlerts();}
  if(id==='pedidos')renderPedidos();
  if(id==='servicios')renderServicios();
  if(id==='insumos')renderSupplies();
  if(id==='clinica')renderClinica();
  if(id==='contab')renderContab();
  if(id==='cierre')renderCierre();
  if(id==='pos'){renderPosGrid();setTimeout(()=>document.getElementById('scanner-input').focus(),100);}
}

// Patch procesarVenta para auto-guardar + sync
const _orig_procesarVenta = procesarVenta;
procesarVenta = async function(){
  _orig_procesarVenta();
  const lastVenta = ventas[0];
  await syncAddVenta(lastVenta);
  saveState();
};

// Patch doTransfer para auto-guardar + sync
const _orig_doTransfer = doTransfer;
doTransfer = async function(){
  _orig_doTransfer();
  if(transfers.length) await syncAddTraslado(transfers[0]);
  saveState();
};

// Patch applyAdj para auto-guardar
const _orig_applyAdj = applyAdj;
applyAdj = function(){
  _orig_applyAdj();
  saveState();
};

// Patch saveProduct para auto-guardar
const _orig_saveProduct = saveProduct;
saveProduct = function(){
  _orig_saveProduct();
  saveState();
};


// ─── AUTENTICACION Y ROLES ───
const PINS = {
  admin: '2166',
  trabajo: '2162'
};

let currentRole = null;
const ROLE_ALLOWED_PAGES = {
  admin: null,
  trabajo: ['inventario','pos','servicios']
};

function allowedPagesForRole(){
  const allowed = ROLE_ALLOWED_PAGES[currentRole] || null;
  return allowed ? new Set(allowed) : null;
}
function canAccessPage(id){
  const allowed = allowedPagesForRole();
  return !allowed || allowed.has(id);
}
function firstAllowedTab(){
  return [...document.querySelectorAll('.tab')].find(tab=>{
    const m = (tab.getAttribute('onclick')||'').match(/goPage\('([^']+)'/);
    return m && canAccessPage(m[1]);
  }) || null;
}
function requireAdmin(message){
  if(currentRole === 'admin') return true;
  alert(message || 'Solo administración puede realizar esta acción');
  return false;
}

function doLogin(){
  const pinEl = document.getElementById('login-pin');
  const errEl = document.getElementById('login-error');
  const pin = pinEl.value.trim();
  if(pin === PINS.admin){
    currentRole = 'admin';
  }else if(pin === PINS.trabajo){
    currentRole = 'trabajo';
  }else{
    errEl.textContent = 'Clave incorrecta';
    pinEl.value = '';
    pinEl.focus();
    return;
  }
  errEl.textContent = '';
  sessionStorage.setItem('novage_role', currentRole);
  document.getElementById('login-overlay').style.display = 'none';
  applyRoleUI();
}

function restoreSession(){
  const saved = sessionStorage.getItem('novage_role');
  if(saved === 'admin' || saved === 'trabajo'){
    currentRole = saved;
    document.getElementById('login-overlay').style.display = 'none';
    applyRoleUI();
    return true;
  }
  document.getElementById('login-overlay').style.display = 'flex';
  return false;
}

function cerrarSesion(){
  sessionStorage.removeItem('novage_role');
  currentRole = null;
  document.getElementById('login-pin').value = '';
  document.getElementById('login-error').textContent = '';
  document.getElementById('login-overlay').style.display = 'flex';
  const badge = document.getElementById('role-badge');
  if(badge) badge.remove();
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn) logoutBtn.style.display = 'none';
  document.querySelectorAll('.tab').forEach(tab=>tab.classList.remove('admin-hidden'));
  document.getElementById('login-pin').focus();
}

function applyRoleUI(){
  document.querySelectorAll('[data-admin-only="true"]').forEach((el)=>{
    el.classList.toggle('admin-hidden', currentRole !== 'admin');
    if(el.tagName === 'BUTTON') el.disabled = currentRole !== 'admin';
  });
  document.querySelectorAll('.tab').forEach((tab)=>{
    const m = (tab.getAttribute('onclick')||'').match(/goPage\('([^']+)'/);
    if(!m) return;
    tab.classList.toggle('admin-hidden', !canAccessPage(m[1]));
  });

  let badge = document.getElementById('role-badge');
  if(!badge){
    badge = document.createElement('span');
    badge.id = 'role-badge';
    badge.className = 'role-badge';
    document.querySelector('.nav-brand').appendChild(badge);
  }
  if(currentRole === 'admin'){
    badge.className = 'role-badge admin';
    badge.textContent = 'Administración';
  }else{
    badge.className = 'role-badge trabajo';
    badge.textContent = 'Trabajo';
  }
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn) logoutBtn.style.display = currentRole ? 'inline-flex' : 'none';
  const activePage = document.querySelector('.page.active')?.id?.replace('page-','');
  if(activePage && !canAccessPage(activePage)){
    const first = firstAllowedTab();
    if(first) first.click();
  }
}

// ─── INIT ───
try{ supplies = JSON.parse(localStorage.getItem(LS_SUPPLIES)||'[]'); supplyUsageLog = JSON.parse(localStorage.getItem(LS_SUPPLY_LOG)||'[]'); }catch(e){}
bootstrapSupplies();
bootstrapLots();
populateBrands();
renderInv();
renderPosGrid();
renderAlertas();
renderContab();
renderBodega();
loadState(); // async — actualiza desde Sheets en background
restoreSession();
if(!currentRole){
  document.getElementById('login-pin').focus();
}
