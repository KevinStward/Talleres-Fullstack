'use strict'
var mongoose=require('mongose');

mongoose.connect('mongodb://localhost:27017/fullstack',{userNewUrlParser:true})
    .then(()=>{
        console.log(`la Conexión a la base de datos se ha realizado de manera correcta!!`);
    })