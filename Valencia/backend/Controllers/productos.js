'use strict'
var validation=require('validator');
var Producto=require('../Models/productos');
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
    get_Productos:(req,res)=>{
        Producto.find({},'nombre cantidad').exec((err,productos)=>{
            if(err){
                return res.status(404).send({
                    message:"Escriba bien",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                productos,
            })
        })
    },
    update:(req,res)=>{
        var id=req.params.id;
        var params=req.body;
        try{
            var validar_nombre=!validation.isEmpty(params.nombre);
            var validar_cantidad=!validation.isEmpty(params.cantidad);
        }catch(err){
            return res.status(303).send({
                status:'Error',
                message:'hay un error en los datos'
            })
        }

        if(validar_nombre && validar_cantidad){
            Producto.findOneAndUpdate({_id:id},params,{new:true},(err,ProductoUpdate)=>{
                
                if(err){
                    return res.status(404).send({
                        status:'Error de Servidor',
                        message:"no se pudo procesar",
                    })
                }
                if(!ProductoUpdate){
                    return res.status(500).send({
                        status:'Error',
                        message:"No existe el Usuario",
                    })
                }
    
                return res.status(200).send({
                    status:"Operación exitosa",
                    ProductoUpdate,
                })
            })
        }
    },
    delete:(req,res)=>{
        var id=req.params.id;

        Producto.findOneAndDelete({_id:id},(err,ProductoDelete)=>{
            if(err){
                return res.status(404).send({
                    status:'Error de Servidor',
                    message:"no se pudo procesar",
                })
            }
            if(!ProductoDelete){
                return res.status(500).send({
                    status:'Error',
                    message:"No existe el Producto",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                ProductoDelete,
            })
        })
    },
    get_producto:(req,res)=>{
        var id=req.params.id;
        if(!id &&  id!=undefined){
            return res.status(404).send({
                status:'Error de Servidor',
                message:"No hay id",
            })
        }
        Producto.findById(id,(err,Producto1)=>{
            if(err){
                return res.status(404).send({
                    status:'Error de Servidor',
                    message:"no se pudo procesar",
                })
            }
            if(!Producto1){
                return res.status(500).send({
                    status:'Error',
                    message:"No existe el Producto",
                })
            }

            return res.status(200).send({
                status:"Operación exitosa",
                Producto1,
            })
        })
    },
}
module.exports=controller;