<template>
  <nav class="navbar navbar-expand-xl sticky-top border-bottom " id="navbar">
    <div class="container">
      <img src="@/assets/img/Frame.png" alt="Logo Compost All" class="me-5" style="max-width: 150px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"> </span> -->
        <img src="@/assets/img/menu.svg" alt="" style="max-width: 30px;"> 
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item mx-3">
            <router-link to="/#hero" class="nav-link text-dark">Accueil</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/#projet" class="nav-link text-dark">Le Projet</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/#about" class="nav-link text-dark">À Propos</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="#footer" class="nav-link text-dark">Contact</router-link>
          </li>
          <li class="nav-item mx-3" v-if="loggedIn"><router-link to="/dashboard" class="nav-link text-dark">Dashboard</router-link></li>
        </ul>

        <button v-if="loggedIn" @click="signOut">Log out</button>
        <router-link to="/login"><button class="btn btn-light me-3" type="submit">Login</button></router-link>
        <router-link to="/sign-up"><button class="btn btn-sign-up text-white" type="submit">Sign up</button></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
// import { mapGetters } from "vuex";
import firebase from "firebase";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
      // if(user) {
      //   this.loggedIn = true;
      // }
      // else 
      //   this.loggedIn = false;
    })
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({name: "Login"});
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>

  #navbar {
    background-color: white !important;
  }

  .nav-link {
    margin: 1.5% 0;
    color: black;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
  }

  .nav-link:hover {
    margin: 1.5% 0;
    border-bottom: 2px solid #96e6b3;
  }

  .btn-light {
      background-color: rgb(216, 216, 216);
      font-weight: bold;
  }

  .btn-sign-up{
      background-color: #96e6b3;
      font-weight: bold;
  }

  .btn-sign-up:hover{
      background-color: #21e468;
  }
</style>
