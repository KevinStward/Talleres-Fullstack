<template>
<div>
    <Slider texto="Insertar producto"></Slider>
    <form @submit.prevent="save()">
        <div class="form-group col-sm-4 mx-auto">
            <div>
                <label for="inputNombre">Nombre Producto</label>
                <input type="text" class="form-control" placeholder="Ej: Kilo de arroz"
                required v-model="producto.nombre">
                <br/>

                <label for="inputCantidad">Cantidad de producto</label>
                <input type="number" class="form-control" placeholder="Ej: 1"
                required v-model="producto.cantidad">
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
import axios from 'axios'
import Slider from './Slider'
import Global from '../Global';
import Producto from './Models/Producto';
export default {
    name: 'EditarP',
    components:{
        Slider,
    },
    methods:{
        save(){
            axios.put(this.url+'updateProductos/'+this.producto._id,this.producto).then(res=>{
                if(res.data){
                this.$router.push('/Productos');
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        getProducto(id){
            axios.get(this.url+'obtenerProducto/'+id).then(res=>{
                if(res.data.status=='Operación exitosa'){
                    this.producto=res.data.Producto1;
                }
            })
        }
    },
    
    data(){
        return{
            url:Global.url,
            //TODO Poner el modelo de los Productos
            producto:new Producto('',),
        }
    },
    mounted(){
        var productoid=this.$route.params.id;
        this.getProducto(productoid);
        console.log(productoid);
    }
}
</script>