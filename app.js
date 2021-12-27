const express= require ("express");
const app=express();
const path = require("path")

//definimos la ruta de los archivos publicos...__dirname hace referencia al lugar donde estamos parados
const publicPath= path.resolve(__dirname,'./public')
const PORT=process.env.PORT || 3000;
//definimos la carpeta de los archibos estaticos 
app.use(express.static(publicPath))


//habilitamos el puerto 

//app.listen(3000,()=>{console.log("Servidor arriba en puesto ")})
//app.listen(proces.env.PORT || 3000, ()=>{console.log("Servidor arriba en puesto 3000")})
app.listen(PORT,() => console.log('servidor corriendo en el puerto ${PORT}'));
//como HEROKU nos asignoa un puerto si tenemos una variable de entorno si no lo abre en el puerto 3000

//definimos nuestro archibo de entrada 
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.post('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/register.html')))
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/login.html')))
app.get('/crearProducto',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/crearProducto.html')))





