'use strict'
var express=require('express');
var usuarioController=require('../Controllers/usuariosController');
var router=express.Router();

/*Llamados a las funiones del Controlador*/
//router.get('/usuarios',personaController.datosUsuario);
router.get('/listar',usuarioController.getAll);
router.post('/guardar',usuarioController.save);
router.put('/actualizar/:id',usuarioController.update);
router.delete('/borrar/:id',usuarioController.delete);

module.exports=router;