'use strict'
var express=require('express');
var personaController=require('../Controllers/usuarios');
var router=express.Router();
//router.get('/usuarios',personaController.datosUsuario);
router.post('/guardarUsuarios',personaController.save);
router.get('/listarUsuarios',personaController.get_Usuarios);
router.put('/actualizarUsuario/:id',personaController.update);
router.delete('/borrarUsuario/:id',personaController.delete);

module.exports=router;