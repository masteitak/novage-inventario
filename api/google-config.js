export default function handler(_request,response){
  const clientId=process.env.GOOGLE_CLIENT_ID||process.env.GMAIL_CLIENT_ID||'';
  const fileId=process.env.GOOGLE_INVENTORY_FILE_ID||'1PKbIlTcGn_F1dfJ9AfCY5bgvE7QCjTyx';
  response.setHeader('Cache-Control','no-store');
  response.status(200).json({configured:Boolean(clientId),clientId,fileId,scope:'https://www.googleapis.com/auth/drive.readonly',sheetName:'Base Inventario'});
}
