<template>
<div>
    <Slider texto="Editar"></Slider>
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
import Slider from './Slider';
import axios from 'axios';
import Global from '../Global';
import Usuario from './Models/Usuario';
export default {
    name: 'editarU',
    components:{
        Slider
    },
    methods:{
        save(){
            axios.put(this.url+'updateUsuarios/'+this.usuario._id,this.usuario).then(res=>{
                if(res){
                this.$router.push('/Usuarios');
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        getUsuario(id){
            axios.get(this.url+'obtenerU/'+id).then(res=>{
                if(res.data.status=='Operación exitosa'){
                    this.usuario=res.data.Usuario1;
                }
            })
        }
    },
    data(){
        return{
            url:Global.url,
            usuario:new Usuario('','','',''),
        }
    },
    mounted(){
        var usuarioid=this.$route.params.id;
        this.getUsuario(usuarioid);
        console.log(usuarioid);
    }
}
</script>