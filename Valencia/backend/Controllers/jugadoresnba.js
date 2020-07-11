'use strict'
var validation=require('validator');
var Jugador=require('../Models/jugadoresnba');
const { default: validator } = require('validator');
var controller={
    save:(req,res)=>{
        var param=req.body;
        try{
            var validar_nombre=validation.isEmpty(param.nombre);
            var validar_coach=validation.isEmpty(param.coach);
            var validar_presupuesto=validation.isEmpty(param.presupuesto);
        }catch(err){
            return res.status(404).send({
                message:"Rectifique los campos",
            })
        }
        var jugador=new Jugador;
        jugador.nombre=param.nombre;
        jugador.coach=param.coach;
        jugador.presupuesto=param.presupuesto;
        jugador.save((err,JugadorStored)=>{
            if(err || !JugadorStored){
                return res.status(405).send({
                    message:"Escriba bien",
                })
            }
            return res.status(200).send({
                status:"Operación exitosa",
                message:JugadorStored,
            })
        })
    },
    delete:(req,res)=>{
        //Recoger el id
        var id = req.params.id;
        Jugador.findOneAndDelete({_id:id},(err,JugadorRemove)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'No se pudo actualizar'
                })
            }
            if(!JugadorRemove){
                return res.status(500).send({
                    status: 'error',
                    message: 'Id erroneo, verifique'
                })
            }
            else{
                return res.status(200).send({
                    status: 'Se completo la eliminación',
                    message: JugadorRemove
                })
            }
        })
        //Find and Delete
    },
    update:(req,res)=>{

    },
    search:(req,rws)=>{
        var buscar= req.param.cosa;
        Jugador.find({"$or":[

        ]

        })
    },
}
module.exports=controller;