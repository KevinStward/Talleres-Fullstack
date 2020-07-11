<template>
  <div>
    <Slider texto="Usuarios"></Slider>
    <div class="row">
      <div class="col">
        </div>
      <div class="col-5">
        <h1>La lista de nuestros usuarios</h1>
      </div>
      <div class="col">
      </div>
    </div>
    <br />
    <table class="table table-dark col-sm-4 mx-auto table-hover">
      <thead>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Correo</th>
        <th scope="col">Editar</th>
        <th scope="col">Aplicarle corona-virus</th>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>
            {{usuario.nombres}}
          </td>
          <td>
            {{usuario.apellidos}}
          </td>
          <td>
            {{usuario.correo}}
          </td>
          <td>
            <router-link :to="'/editarU/'+usuario._id" class="btn btn-info"><i class="fa fa-edit"></i></router-link>
          </td>
          <td>
            <a @click="deleteUsuario(usuario._id)" class="btn btn-danger"><i class="fas fa-virus-slash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Slider from "./Slider";
import axios from "axios";
import Global from "../Global";
import swal from "sweetalert"
export default {
  name: "Usuarios",
  components: {
    Slider
  },
  methods: {
    getUsuario() {
      axios
        .get(this.url + "listarUsuarios")
        .then(res => {
          this.usuarios = res.data.usuarios;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUsuario(id) {
      swal({
        title: "¿Estas seguro de aplicarle COVID-19 a este usuario?",
        text: "Una vez eliminado no podras recuperar este usuario! Solo estará en la morgue",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "deleteUsuarios/" + id).then(res => {
            if (res.data) {
              swal("Se ha eliminado el usuario con éxito!, eres severo asesino", {
                icon: "success"
              });
              this.$router.push("/Home");
            }
          });
        } else {
          swal("Tu usuario está a salvo!");
        }
      });
    },
  },
  mounted() {
    this.getUsuario();
  },
  data() {
    return {
      usuarios: null,
      url: Global.url
    };
  }
};
</script>

<style>
/*.btn{
  color: white;
  transition: 600ms;
}
.btn:hover{
  color: rgb(165, 165, 165);
}*/
</style>