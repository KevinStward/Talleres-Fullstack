<template>
<div>
    <Slider texto="Usuarios"></Slider>
    <form @submit.prevent="save()">
        <div class="form-group col-sm-4 mx-auto">
            <div>
                <label for="inputNombres">Nombres</label>
                <input type="text" class="form-control" placeholder="Ej: José Alejandro"
                required v-model="usuario.nombres">
                <br/>

                <label for="inputApellidos">Apellidos</label>
                <input type="text" class="form-control" placeholder="Ej: Ruiz Vega"
                required v-model="usuario.apellidos">
                <br/>
            </div>
            <div>
                <label for="inputCorreo">Correo</label>
                <input type="text" class="form-control" placeholder="Ej: jose.ruiz@email.com"
                required v-model="usuario.correo">
                <br/>

                <label for="inputContrasenna">Contraseña</label>
                <input type="password" class="form-control" 
                required v-model="usuario.contrasenna">
                <br/>
            </div>
            <div class="lead">
                <input type="submit" value="Guardar" class="btn btn-lg btn-secondary"/>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
import Slider from "./Slider";
import Global from '../Global';
import Usuario from './Models/Usuario';
export default {
    name: 'SingUp',
    components: {
        Slider
    },
    methods:{
        save(){
            axios.post(this.url+'guardarUsuarios',this.usuario).then(res=>{
                if(res){
                this.$router.push('/Usuarios');
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    data(){
        return{
            url:Global.url,
            usuario:new Usuario('','','',''),
        }
    }
}
</script>