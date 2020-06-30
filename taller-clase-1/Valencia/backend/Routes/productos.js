'use strict'
var express=require('express');
var personaController=require('../Controllers/productos');
var router=express.Router();
//router.get('/usuarios',personaController.datosUsuario);
router.post('/guardarProductos',personaController.save);
router.get('/listarProductos',personaController.get_Productos);
module.exports=router;