<template>
  <nav class="navbar navbar-expand-xl sticky-top border-bottom " id="navbar">
    <div class="container">
      <img src="@/assets/img/Frame.png" alt="Logo Compost All" class="me-5" style="max-width: 150px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
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
          <li class="nav-item mx-3"><router-link to="/dashboard" class="nav-link text-dark">Dashboard</router-link></li>
          <li class="nav-item mx-3"><button @click="logout">Log out</button></li>
        </ul>

        <router-link to="/login"><button class="btn btn-light me-3" type="submit">Login</button></router-link>
        <router-link to="/sign-up"><button class="btn btn-sign-up text-white" type="submit">Sign up</button></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase';
  import "firebase/auth";
  export default {
    name: 'Header',
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
      },
    },
  }
</script>

<style scoped>

  #navbar {
    background-color: white !important;
  }

  .nav-link {
    margin: 1.5% 0;
    color: black;
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
