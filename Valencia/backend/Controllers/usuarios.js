'use strict'
var validation=require('validator');
var Usuario=require('../Models/Usuarios');
const { default: validator } = require('validator');
const productos = require('../Models/productos');
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
    get_Usuarios:(req,res)=>{
        Usuario.find({},).exec((err,usuarios)=>{
            if(err){
                return res.status(404).send({
                    message:"Escriba bien",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                usuarios,
            })
        })
    },
    update:(req,res)=>{
        var id=req.params.id;
        var params=req.body;
        try{
            var validar_nombres=!validator.isEmpty(params.nombres);
            var validar_apellidos=!validator.isEmpty(params.apellidos);
            var validar_correo=!validator.isEmpty(params.correo);
            var validar_contrasenna=!validator.isEmpty(params.contrasenna);
        }catch(err){
            return res.status(303).send({
                status:'Error',
                message:'hay un error en los datos'
            })
        }

        if(validar_nombres && validar_apellidos && validar_correo && validar_contrasenna){
            Usuario.findOneAndUpdate({_id:id},params,{new:true},(err,UsuarioUpdate)=>{
                if(err){
                    return res.status(404).send({
                        status:'Error de Servidor',
                        message:"no se pudo procesar",
                    })
                }
                if(!UsuarioUpdate){
                    return res.status(500).send({
                        status:'Error',
                        message:"No existe el Usuario",
                    })
                }
    
                return res.status(200).send({
                    status:"Operación exitosa",
                    UsuarioUpdate,
                })
            })
        }
    },
    delete:(req,res)=>{
        var id=req.params.id;

        Usuario.findOneAndDelete({_id:id},(err,UsuarioDelete)=>{
            if(err){
                return res.status(404).send({
                    status:'Error de Servidor',
                    message:"no se pudo procesar",
                })
            }
            if(!UsuarioDelete){
                return res.status(500).send({
                    status:'Error',
                    message:"No existe el Usuario",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                UsuarioDelete,
            })
        })
    },
    get_usuario:(req,res)=>{
        var id=req.params.id;
        if(!id &&  id!=undefined){
            return res.status(404).send({
                status:'Error de Servidor',
                message:"No hay id",
            })
        }
        Usuario.findById(id,(err,Usuario1)=>{
            if(err){
                return res.status(404).send({
                    status:'Error de Servidor',
                    message:"no se pudo procesar",
                })
            }
            if(!Usuario1){
                return res.status(500).send({
                    status:'Error',
                    message:"No existe el Usuario",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                Usuario1,
            })
        })
    },
} 

module.exports=controller;