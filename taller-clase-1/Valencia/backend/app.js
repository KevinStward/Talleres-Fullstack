'use strict'
var express=require("express");
var bodyparser=require("body-parser");
/*Los modelos SOLO se importan a los controladores*/
//const Usuarios = require("./Models/Usuarios");


var app=express();

//Importar las RUTAS
var usuarioRoute=require('./Routes/usuarioRoutes');
var productoRoute=require('./Routes/productoRoutes');

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

//Usar las ruta Importadas.
app.use('/usuario',usuarioRoute);
app.use('/producto',productoRoute);


/* Prueba de coneccion con el servidor
app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        mensaje:'bienvenidos de nuevo',
        mensaje2 : 'prueba 2',
    })
})*/

module.exports=app;