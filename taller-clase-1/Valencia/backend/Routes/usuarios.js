'use strict'
var express=require('express');
var personaController=require('../Controllers/usuarios');
var router=express.Router();
//router.get('/usuarios',personaController.datosUsuario);
router.post('/guardarUsuarios',personaController.save);
router.get('/listarUsuarios',personaController.get_Usuarios);
module.exports=router;