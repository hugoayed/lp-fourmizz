<template>
  <nav class="navbar navbar-expand-xl sticky-top border-bottom " id="navbar">
    <div class="container">
      <router-link to="/">
        <img
          src="@/assets/img/drive/Logo-header.png"
          alt="Logo Compost All"
          class="me-5"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"> </span> -->
        <img src="@/assets/img/menu.svg" alt="menu hamburger" style="max-width: 30px;" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item mx-3">
            <router-link to="/#hero" class="nav-link text-dark"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link to="/#projet" class="nav-link text-dark"
              >Le Projet</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link to="/#about" class="nav-link text-dark"
              >À Propos</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link to="#footer" class="nav-link text-dark"
              >Contact</router-link
            >
          </li>
          <!-- <li class="nav-item mx-3" v-if="loggedIn"><router-link to="/dashboard" class="nav-link text-dark">Dashboard</router-link></li> -->
          <li class="nav-item mx-3" v-if="loggedIn">
            <a
              href="https://www.dashboard.compostall.fr"
              target="blank"
              class="nav-link text-dark"
              title="Tableau de bord"
            >
              Dashboard
            </a>
          </li>

          <li class="nav-item mx-3" v-if="loggedIn">
            <button class="btn btn-light me-3" @click="signOut">
              Déconnexion
            </button>
          </li>

          <span v-else style="display: flex">
            <li class="nav-item mx-3">
              <router-link to="/login"
                ><button class="btn btn-light me-3" type="submit">
                  Connexion
                </button></router-link
              >
            </li>
            <li class="nav-item mx-3">
              <router-link to="/register"
                ><button class="btn btn-sign-up text-white fw-bold" type="submit">
                  Inscription
                </button></router-link
              >
            </li>
          </span>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.$router.replace({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
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
  background-color: #fbfbfb;
}

.btn-light:hover{
  background-color: #d4d4d4;
}

.btn-sign-up {
  background-color: #96e6b3;
}

.btn-sign-up:hover {
  background-color: #21e468;
}
</style>
