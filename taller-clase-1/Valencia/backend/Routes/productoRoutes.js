'use strict'
var express=require('express');
var personaController=require('../Controllers/productoController');
var router=express.Router();

//router.get('/usuarios',personaController.datosUsuario);
router.get('/listar',personaController.getAll);
router.post('/guardar',personaController.save);

module.exports=router;