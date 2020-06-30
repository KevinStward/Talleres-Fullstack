'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ProductoSchema=Schema({
    nombre: String,
    cantidad: Number,
})
module.exports=mongoose.model('Producto',ProductoSchema);