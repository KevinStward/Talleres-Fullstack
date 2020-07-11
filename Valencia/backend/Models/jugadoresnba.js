'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var JugadorSchema=Schema({
    nombre: String,
    coach: String,
    presupuesto: Number,
})
module.exports=mongoose.model('Jugador',JugadorSchema);