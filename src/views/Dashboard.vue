<template>
    <div class="container my-4">
        <h2>Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p>

        <div v-if="user">T'ES CONNECTE !!!!</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>