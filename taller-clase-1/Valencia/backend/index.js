'use strict'
var mongoose=require('mongoose');
var app=require('./app');
var port=3900;

mongoose.connect('mongodb://localhost:27017/fullstack',{userNewUrlParser:true})
    .then(()=>{
        console.log(`la Conexión a la base de datos se ha realizado de manera correcta gonorrea home!!!!!`);
        
        app.listen(port,()=>{
            console.log('Servidor corriendo en http://localhost:'+port);
        })
    })