'use strict'
var validation=require('validator');
var Producto=require('../Models/Producto');
const { default: validator } = require('validator');
var controller={
    save:(req,res)=>{
        var param=req.body;
        try{
            var validar_nombre=validation.isEmpty(param.nombre);
            var validar_cantidad=validation.isEmpty(param.cantidad);

        }catch(err){
            return res.status(404).send({
                message:"Rectifique los campos",
            })
        }
        var producto= new Producto; 
        producto.nombre=param.nombre;
        producto.cantidad=param.cantidad;
        
        producto.save((err,ProductoStored)=>{
            if(err || !ProductoStored){
                return res.status(405).send({
                    message:"Escriba bien",
                })
            }
            return res.status(200).send({
                status:"Operación exitosa",
                message:ProductoStored,
            })
        })
    },
    getAll:(req,res)=>{
        Producto.find({},'nombre cantidad').exec((err,productos)=>{
            if(err){
                return res.status(404).send({
                    message:"Escriba bien",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                message:productos,
            })
        })
    },
}
module.exports=controller;