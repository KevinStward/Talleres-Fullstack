'use strict'
var express=require("express");
var bodyparser=require("body-parser");
const Usuarios = require("./Models/Usuarios");


var app=express();
var usuarioroute=require('./Routes/usuarios');
var productoroute=require('./Routes/productos');

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

//ruta prueba
app.use('/',usuarioroute);
app.use('/',productoroute);

app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        mensaje:'bienvenidos de nuevo',
        mensaje2 : 'prueba 2',
    
    })
})

module.exports=app;