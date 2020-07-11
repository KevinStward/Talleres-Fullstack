import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/js/bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Home from './components/Home.vue'
import Usuarios from './components/Usuarios.vue'
import Productos from './components/Productos.vue'
import SingUp from './components/SingUp.vue'
import CrearP from './components/crearProducto.vue'
import EditarP from './components/editarProducto.vue'
import EditarU from './components/editarU.vue'


Vue.config.productionTip = false
Vue.use(Router)
const routes=[
  {path:'/Home',component:Home},
  {path:'/Usuarios',component:Usuarios},
  {path:'/',component:Home},
  {path:'/Productos',component:Productos},
  {path:'/SingUp',component:SingUp},
  {path:'/crearProducto',component:CrearP},
  {path:'/editarProducto/:id',component:EditarP},
  {path:'/editarU/:id',component:EditarU},
];

const router=new Router({
  routes,
  mode:'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
