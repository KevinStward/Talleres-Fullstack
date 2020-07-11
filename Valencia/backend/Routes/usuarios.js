'use strict'
var express=require('express');
var personaController=require('../Controllers/usuarios');
var router=express.Router();
//router.get('/usuarios',personaController.datosUsuario);
router.post('/guardarUsuarios',personaController.save);
router.get('/listarUsuarios',personaController.get_Usuarios);
router.get('/obtenerU/:id',personaController.get_usuario);
router.put('/updateUsuarios/:id?',personaController.update);
router.delete('/deleteUsuarios/:id?',personaController.delete);
module.exports=router;