'use strict'
var express=require("express");
var bodyparser=require("body-parser");
const path= require('path');
const Usuarios = require("./Models/Usuarios");
const passport = require('passport');
const flash = require("connect-flash");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
//Inicializar App and routes
var app=express();
var usuarioroute=require('./Routes/usuarios');
var productoroute=require('./Routes/productos');
//var jugadoresroute=require('./Routes/jugadoresnba');
//var inicioroute=require('./Routes/inicio');

//require('./passport')(passport);

//app.set('views',path.join(__dirname,'views'));
//app.set('view engine', 'html');


app.use(bodyparser.urlencoded({extended:false}));
/*app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
    secret:'ValenciaApp',
    resave: false,
    saveUninitialized: false
}));*/
app.use(bodyparser.json());
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(flash());

//app.use('/',jugadoresroute);
//app.use('/',inicioroute);


//cores
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//ruta prueba
app.use('/',usuarioroute);
app.use('/',productoroute);
/*app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        mensaje:'bienvenidos de nuevo',
        mensaje2 : 'prueba 2',
    
    })
})*/


module.exports=app;