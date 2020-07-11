<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HeaderComp from './components/HeaderComp'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    HeaderComp,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
