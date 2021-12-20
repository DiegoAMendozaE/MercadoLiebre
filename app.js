const express= require ("express");
const app=express();
const path = require("path")

//definimos la ruta de los archivos publicos...__dirname hace referencia al lugar donde estamos parados
const publicPath= path.resolve(__dirname,'./public')
//definimos la carpeta de los archibos estaticos 
app.use(express.static(publicPath))


//habilitamos el puerto
app.listen(3000,()=>{console.log("Servidor arriba en puesto ")})
//definimos nuestro archibo de entrada 
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.post('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/register.html')))
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/login.html')))






