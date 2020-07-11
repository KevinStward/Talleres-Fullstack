<template>
  <div>
    <Slider texto="Productos"></Slider>
    <div class="row">
      <div class="col">
      </div>
      <div class="col-5">
        <h1>Lista de Productos de Valencia App</h1>
      </div>
      <div class="col">
      </div>
    </div>
    <br />
    <router-link to="/crearProducto" class="btn btn-success btn-crear">Crear Producto <i class="fa fa-plus-circle"></i></router-link>
    <table class="table table-dark col-sm-4 mx-auto table-hover">
      <thead>
        <th scope="col">Nombre</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Elimina</th>
        <th scope="col">Eliminar</th>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>
            {{producto.nombre}}
          </td>
          <td>
            {{producto.cantidad}}
          </td>
          <td>
            <router-link :to="'/editarProducto/'+producto._id" class="btn btn-info">
              <i class="fa fa-edit"></i>
            </router-link>
          </td>
          <td>
            <a @click="deleteProducto(producto._id)" class="btn btn-danger"><i class="fas fa-virus-slash"></i></a>
          </td>
        </tr>
      </tbody>
      <!--<tbody>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">{{productos.nombre}}</article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">{{productos.cantidad}}</article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            <router-link :to="'/editarProducto/'+productos._id">Editar</router-link>
          </article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            <a @click="deleteProducto(productos._id)">Eliminar</a>
          </article>
        </th>
      </tbody>-->
    </table>
  </div>
</template>

<script>
import Slider from "./Slider";
import axios from "axios";
import Global from "../Global";
import swal from "sweetalert";
export default {
  name: "Productos",
  components: {
    Slider
  },
  methods: {
    getProductos() {
      axios
        .get(this.url + "listarProductos")
        .then(res => {
          this.productos = res.data.productos;
          console.log(this.productos);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteProducto(id) {
      swal({
        title: "¿Estas seguro de eliminar este producto?",
        text: "Una vez eliminado no podras recuperar este producto!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "deleteProductos/" + id).then(res => {
            if (res.data) {
              swal("Se ha eliminado el producto con éxito!", {
                icon: "success"
              });
              this.$router.push("/Home");
            } 
          });
        }else {
              swal("Tu producto está a salvo!");
            }
      });
    }
  },
  mounted() {
    this.getProductos();
  },
  data() {
    return {
      productos: null,
      url: Global.url
    };
  }
};
</script>

<style>
.btn-crear{
  background-color: #243B55;
  border-color: #243B55;
  font-weight: 700;
  margin: 20px 0px 40px 0px
}
.btn-crear:hover{
  background-color: #141E30;
  border-color: #141E30;
}
</style>