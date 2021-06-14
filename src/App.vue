<template>
  <div id="app">
    <Navigation />
    <Home />
    <LeProjet />
    <APropos />
    <Footer />
    
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import LeProjet from './components/LeProjet.vue'
import APropos from './components/APropos.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    LeProjet,
    APropos,
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
  min-width: fit-content;
}
</style>
