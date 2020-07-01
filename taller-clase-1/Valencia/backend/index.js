'use strict'
var mongoose=require('mongoose');
var app=require('./app');
var port=3900;

mongoose.connect('mongodb://localhost:27017/fullstack',{userNewUrlParser:true})
    .then(()=>{
        console.log(`CONEXIÓN EXITOSA! DB:fullstack`);
        
        app.listen(port,()=>{
            console.log('Servidor corriendo en http://localhost:'+port);
        })
    })