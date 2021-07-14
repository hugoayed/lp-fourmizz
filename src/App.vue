<template>
  <div id="app">
      <Navbar />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer,
    },
  }
</script>

<style>

#app {
  font-family: Inter, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: fit-content;
  min-width: 100vw;
}
</style>
