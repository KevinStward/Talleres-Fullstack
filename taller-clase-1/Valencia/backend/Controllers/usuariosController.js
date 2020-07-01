'use strict'
var validation=require('validator');
var Usuario=require('../Models/Usuario')
const { default: validator } = require('validator');
var controller={
    datosUsuario:(req,res)=>{
        console.log('cualquier cosa');
        return res.status(200).send({

        })
    },
    save:(req,res)=>{
        var param=req.body;
        try{
            var validar_nombres=validation.isEmpty(param.nombres);
            var validar_apellidos=validation.isEmpty(param.apellidos);
            var validar_correo=validation.isEmpty(param.correo);
            var validar_contrasenna=validation.isEmpty(param.contrasenna);

        }catch(err){
            return res.status(404).send({
                message:"Rectifique los campos",
            })
        }
        var usuario= new Usuario; 
        usuario.nombres=param.nombres;
        usuario.apellidos=param.apellidos;
        usuario.correo=param.correo;
        usuario.contrasenna=param.contrasenna;
        usuario.save((err,UsuarioStored)=>{
            if(err || !UsuarioStored){
                return res.status(405).send({
                    message:"Escriba bien",
                })
            }
            return res.status(200).send({
                status:"Operación exitosa",
                message:UsuarioStored,
            })
        })
    },
    getAll:(req,res)=>{
        Usuario.find({},'nombres apellidos').exec((err,usuarios)=>{
            if(err){
                return res.status(404).send({
                    message:"Escriba bien",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                message:usuarios,
            })
        })
    },
    update: (req, res) => {
        //Recoger los parametros
        var params = req.body;
        //Validar los datos que nos envian
        try {
            var validar_nombres=validation.isEmpty(params.nombres);
            var validar_apellidos=validation.isEmpty(params.apellidos);
            var validar_correo=validation.isEmpty(params.correo);
            var validar_contrasenna=validation.isEmpty(params.contrasenna);
        }
        catch (err) {
            return res.status(400).send({
                status: 'error',
                message:"Rectifique los campos",
            });
        };
        //Validar si el id ingresado existe
        var id = req.params.id;
        console.log(id);
        if (!id || id == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No se ingreso ingun id',
            });
        }
        Usuario.findById(id, (err, userFound) => {
            if (err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se pudo procesar',
                });
            }
            if (!userFound) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No existe el estudiante con el id ' + id,
                })
            }
            Usuario.updateOne(userFound, params, (err, userUpdated) => {
                if (err) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se pudo procesar',
                    });
                }
                if (!userUpdated) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'No existe el estudiante con el id ' + id,
                    })
                }
                return res.status(200).send({
                    status: 'Registro actualizado con exito',
                    message: userUpdated,
                })
            })

        })
    },

    delete:(req,res) =>{
        var id = req.params.id;
        if (!id || id == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No se ingreso ingun id',
            });
        }
        //Buscar el id
        Usuario.findById(id, (err, userFound) => {
            console.log(userFound);
            if (err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se pudo procesar',
                });
            }
            if (!userFound) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No existe el estudiante con el id ' + id,
                })
            }
            Usuario.deleteOne(userFound, (err) => {
                if (err) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se pudo procesar',
                    });
                }
                return res.status(200).send({
                    status: 'Eliminación completa',
                })
            });
        });   
    },
} 

module.exports=controller;