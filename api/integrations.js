export default function handler(_request,response){
  const present=(...names)=>names.some(name=>Boolean(process.env[name]));
  const integrations=[
    {name:'Vercel',configured:true,detail:'Aplicación disponible'},
    {name:'Gmail',configured:present('GOOGLE_CLIENT_ID','GMAIL_CLIENT_ID'),detail:present('GOOGLE_CLIENT_ID','GMAIL_CLIENT_ID')?'Configuración disponible; autorización de usuario requerida':'Configuración pendiente'},
    {name:'Google Drive',configured:present('GOOGLE_CLIENT_ID','GOOGLE_DRIVE_FOLDER_ID'),detail:present('GOOGLE_CLIENT_ID','GOOGLE_DRIVE_FOLDER_ID')?'Configuración disponible; acceso sujeto a autorización':'Configuración pendiente'},
    {name:'Google Sheets',configured:present('GOOGLE_SHEET_ID','GOOGLE_INVENTORY_SHEET_ID')&&present('GOOGLE_CLIENT_ID','GOOGLE_SERVICE_ACCOUNT_EMAIL'),detail:present('GOOGLE_SHEET_ID','GOOGLE_INVENTORY_SHEET_ID')?'Configuración disponible; credencial requerida':'Configuración pendiente'},
    {name:'Persistencia',configured:present('SUPABASE_URL','NEXT_PUBLIC_SUPABASE_URL')&&present('SUPABASE_ANON_KEY','NEXT_PUBLIC_SUPABASE_ANON_KEY'),detail:present('SUPABASE_URL','NEXT_PUBLIC_SUPABASE_URL')?'Persistencia configurada; controles de acceso deben verificarse':'Modo demostrativo'}
  ];
  response.setHeader('Cache-Control','no-store, max-age=0');
  response.setHeader('X-Content-Type-Options','nosniff');
  response.status(200).json({checkedAt:new Date().toISOString(),integrations});
}
