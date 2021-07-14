<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 text-start my-auto" id="leftCol">
          <h1 id="title">Me connecter</h1>
          <form @submit.prevent="submit">
            <label for="name">Email</label>
            <input
              type="email"
              name="name"
              v-model="email"
              placeholder="fourmizz.agency@gmail.com"
              required
            />

            <label for="name">Mot de passe</label>
            <input
              type="password"
              name="name"
              v-model="password"
              placeholder="********"
              required
            />

            <button type="submit" class="mt-4">Créer mon compte</button>
          </form>

          <p class="mt-3">
            Vous n'avez pas de compte ?
            <router-link to="/login"> Inscrivez-vous !</router-link>
          </p>
        </div>
        <div class="col-6 p-5 d-grid " id="rightCol">
          <img
            src="@/assets/img/drive/Logo Footer.png"
            alt="Logo CompostAll"
            class="mx-auto w-50"
          />
          <img
            src="@/assets/img/compost-all-hero.png"
            alt="Compost All - illustration avec des fruits et légumes"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#rightCol {
  background-color: #96e6b3;
  min-height: 90vh;
}

#leftCol {
  padding: 3em 17em;
}

#title {
  color: #6b6b6b;
  font-weight: 600;
  font-size: 2.5em;
}

form {
  display: grid;
}

form input {
  margin-bottom: 1em;
  border: 1px solid #a5a5a5;
  border-radius: 15px;
  padding: 1em;
}

form button {
  background-color: #96e6b3;
  color: white;
  font-weight: 600;
  font-size: 1.2em;
  padding: 1em;
  border: none;
  border-radius: 15px;
}

form button:hover {
  background-color: #21e468;
}

a {
  color: #96e6b3;
  text-decoration: none;
  font-weight: 600;
}
</style>

<script>
import firebase from "firebase";

export default {
  methods: {
    async submit() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "Dashboard" });
        // window.location.href = "https://www.dashboard.compostall.fr";
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
