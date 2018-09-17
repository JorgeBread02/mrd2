//puerto
//================================================
process.env.PORT=process.env.PORT||3000;
//===============
//Entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
//DB
//===============
let urlDB;
if(process.env.NODE_ENV==='dev'){
  urlDB= 'mongodb://localhost:27017/Cafe';

}else{
    urlDB= 'mongodb://cafe-user:Jorge75432560@ds117539.mlab.com:17539/cafe'



}
process.env.URLDB=urlDB;

