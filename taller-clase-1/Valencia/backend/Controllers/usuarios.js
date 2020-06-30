'use strict'
var validation=require('validator');
var Usuario=require('../Models/Usuarios');
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
    get_Usuarios:(req,res)=>{
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
} 

module.exports=controller;