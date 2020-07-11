'use strict'
var express=require('express');
var personaController=require('../Controllers/jugadoresnba');
var router=express.Router();
//router.get('/usuarios',personaController.datosUsuario);
router.post('/guardarJugadores',personaController.save);
//router.get('/listarProductos',personaController.get_Productos);


module.exports=router;