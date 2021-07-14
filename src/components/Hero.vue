<template>
  <section>
    <div class="container-fluid p-3 pt-5 bg-light" id="hero">
      <div class="container">
        <div class="row">
          <div class="col-xl w-auto mx-auto ">
            <h1 class="text-start " id="hero-title">
              Une place pour gérer toutes vos problématiques liés aux biodéchets
            </h1>

            <h3 class="mt-5 hero-subtitle">Ensemble faisons la guerre contre le gaspillage</h3>
          </div>
          <div class="col-lg w-auto d-none d-lg-block mx-auto mt-5 mb-2">
            <img
              src="../assets/img/compost-all-hero.png"
              alt="Compost All - illustration avec des fruits et légumes"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <p class="text-start text-dark lh-lg" id="hero-intro">
              Un monde avec moins de gaspillage nous fait rêver. Récuperer les
              déchets des restaurants au lieu de les jeter nous fait avancer
              vers ce rêve. Ensemble changeons le monde.
            </p>
            <router-link to="#projet" class="text-decoration-none">
              <p class="text-start fs-5  my-5" id="economies">
                Je veux calculer mes économies
                <!-- <img
                  src="@/assets/img/chevron-right.svg"
                  alt="Chevron droit"
                  class="ms-2"
                  style="max-width: 20px"
                /> -->
              </p>
            </router-link>
          </div>
        </div>

        <!-- CHAMP POUR LA NEWSLETTER -->

        <!-- <div class="row ">
          <div class="col-xl-8 col-md-12">
            <form action="" class="text-start my-5" @submit.prevent="sendEmail">
              <input
                class="align-middle w-auto fs-4"
                type="email"
                id="hero-email"
                placeholder="Adresse mail"
                name="user_email"
                autocomplete="off"
              />
              <button class="btn align-middle fw-bold btn-envoi" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div> -->

        <div
          class="row row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex justify-content-between chiffres-cles mt-5 text-light"
        >
          <div class="col col-md mt-4 mt-lg-0 ">
            <div class="card p-3 h-100">
              <h2 class="fs-1">20 Tonnes</h2>
              <p class="">De nourritures gaspillées chaque minute en France</p>
            </div>
          </div>
          <div class="col col-md mt-4 mt-lg-0 ">
            <div class="card p-3 h-100">
              <h2 class="fs-1">10 Millions</h2>
              <p class="">De tonnes de déchets alimentaires en France</p>
            </div>
          </div>
          <div class="col col-md mt-4 mt-lg-0 ">
            <div class="card p-3 h-100">
              <h2 class="">400k Tonnes</h2>
              <p class="">De déchets alimentaires dans la restauration</p>
            </div>
          </div>
          <div class="col col-md mt-4 mt-lg-0 ">
            <div class="card p-3 h-100">
              <h2 class="fs-1">1 Repas</h2>
              <p class="w-75 mx-auto">Par personne par semaine gaspillé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#hero {
  background-color: #fbfbfb;
}

#hero-title,
#hero-title-mobile {
  font-size: 4em;
  color: #96e6b3;
}

.hero-subtitle {
  font-weight: 600;
  color: #5f5f5f;
}

#hero-intro {
  font-size: 0.92em;
  color: #525252;
}

#economies {
  color: #96e6b3;
  font-weight: 600;
}

#hero-email {
  padding: 0.2rem 0.75rem;
  border-radius: 10px 0px 0px 10px;
  border: none;
  background-color: #fff;
  min-width: 20em;
}

#hero .btn-envoi {
  background-color: #96e6b3;
  color: #fff;
  font-size: 1.5em;
  line-height: normal;
  margin-left: -0.1em;
}

#hero .btn-envoi:hover {
  background-color: #21e468;
}

.chiffres-cles .card {
  background-color: #96e6b3;
  /* background-color: #18E77F; */
  border: none;
  border-radius: 15px;
  color: white;
  margin: 0 auto;
  max-width: 90%;
}

.card p {
  letter-spacing: 0.5px;
}

.card h2 {
  font-size: 2.3em;
  font-weight: 500;
}

@media (max-width: 768px) {
  #hero-email {
    background-color: #fff;
    font-size: 1em !important;
    min-width: unset !important;
  }

  #hero .btn-envoi {
    font-size: 0.9em;
  }
  .card h2 {
    font-size: calc(1.325rem + 0.9vw);
    font-weight: 500;
  }

  #hero-title {
  font-size: 2.2em;
  }
}

@media (max-width: 500px) {
  #hero-title {
  font-size: 1.8em;
  }
}
</style>

<script>
import emailjs from "emailjs-com";
export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_c2h1jrf",
          "contact_form",
          e.target,
          "user_ekTn8dEAYOfMMVPy0YHrW"
        )
        .then(
          (result) => {
            alert(
              "Merci d'avoir souscrit à notre newsletter !",
              result.status,
              result.text
            );
          },
          (error) => {
            alert("Une erreur survenue, réessayez.", error);
          }
        );
    },
  },
  name: "Hero",
};
</script>
