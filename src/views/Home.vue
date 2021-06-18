<template>
    <section id="content">
      <router-view></router-view>
      <Hero />
      <LeProjet />
      <APropos />
    </section>
</template>

<script>
  import Hero from '@/components/Hero.vue'
  import LeProjet from '@/components/LeProjet.vue'
  import APropos from '@/components/APropos.vue'

  export default {
    name: 'Home',
    components: {
      Hero,
      LeProjet,
      APropos
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
