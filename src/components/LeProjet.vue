<template>
  <div class="container px-4 pb-5" id="projet">
    <div class="row">
      <div class="col">
        <h1 id="projet-title" class="text-dark">Comment ça marche ?</h1>
      </div>
    </div>

    <!-- ETAPES VISIBLES UNIQUEMENT SUR GRAND ECRAN -->
    <div class="container d-none d-xl-block">
      <div class="row">
        <div class="col-xl-4 text-center">
          <div class="square green">
            <h2 class="chiffre">1</h2>
            <h2 class="my-5">Accompagnement</h2>
            <p class="px-3">
              Nous vous accompagnons dans le projet en fonction de votre nombre
              de couvert et vous apportons un composteur à la taille idéale.
              Nous sommes présents pour chaque besoin.
            </p>
          </div>
        </div>

        <div class="col-xl-4 text-center" style="margin-top: 3em">
          <img src="@/assets/img/trait-1.png" alt="Etape 1 vers étape 2" />
        </div>
        <div
          class="col-xl-4 text-center"
          style="margin-top: 8em; z-index: 99; "
        >
          <div class="square grey">
            <h2 class="chiffre">2</h2>
            <h2 class="my-5">Tri des déchets</h2>
            <p>
              Nous récupérons vos déchets dans une poubelle CompostAll, dans des
              sacs plastiques transparents afin de faciliter le tri.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 text-center">
          <img
            src="@/assets/img/trait2.png"
            alt="Etape 2 vers étape 3"
            style="margin: -8em -47em 0 0"
          />
          <div class="square grey">
            <h2 class="chiffre">3</h2>
            <h2 class="my-5">Recyclage</h2>
            <p class="px-3">
              Une fois vos déchets récupérés dans une des poubelles CompostAll,
              nous nous occupons de trier les déchets dans notre centre afin
              qu’ils finissent en compost ou bio carburant.
            </p>
          </div>
        </div>

        <div class="col-xl-4 text-center">
          <img
            src="@/assets/img/trait3.png"
            alt="Etape 3 vers étape 4"
            style="margin-top: 13em"
          />
        </div>
        <div class="col-xl-4 text-center" style="margin-top: 11em">
          <div class="square green">
            <h2 class="chiffre">4</h2>
            <h2 class="my-5">Partenariat</h2>
            <p>
              Une fois votre livraison validée, vous récupérerez des points sur
              votre compte partenaire et vous pourrez bénéficier d’avantages avec
              vos partenaires préférés.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Visible que sur mobile v2 -->
    <div class="container d-xl-none">
      <div class="row">
        <div class="col square green">
          <h2 class="chiffre my-2 fs-1">1. Accompagnement</h2>
          <p>
            Nous vous accompagnons étape par étape dans cette nouvelle aventure
            écologique afin de travailler ensemble sur vos besoins.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="square grey">
          <h2 class="chiffre my-2 fs-1">2. Tri des déchets</h2>
          <p>
            Nous récupérons vos déchets dans une poubelle CompostAll, dans des
            sacs plastiques transparents afin de faciliter le tri.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col square green">
          <h2 class="chiffre my-2 fs-1">3. Recyclage</h2>
          <p>
            Une fois vos déchets récupérés dans une des poubelles CompostAll,
            nous nous occupons de trier les déchets dans notre centre afin qu il
            finisse en compost ou bio carburant.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="square grey">
          <h2 class="chiffre my-2 fs-1">4. Partenariat</h2>
          <p>
            Une fois votre livraison validée, vous récupérerez des points sur
            votre compte partenaire et vous pouvez bénéficier davantage avec vos
            partenaires préférés.
          </p>
        </div>
      </div>
    </div>

    <div class="container" id="explainer-video">
      <div class="row" style="min-height: 22em">
        <!--  ratio ratio-16x9 -->
        <div class="col-12 col-lg-6" id="video">
          <iframe
            width="100%"
            height="90%"
            src="https://www.youtube.com/embed/IJAEWYz4wfg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-12 col-lg-6 align-items-center">
          <p class="text-start lh-lg">
            Soyez les premiers avertis sur nos nouveautés et bénéficiez de codes
            promotionnels avec nos partenaires exclusifs en plus de vos points
            de réduction habituels.
          </p>
          <h2 class="text-start fs-4 my-5">
            Agis pour l’environnement, <br />
            Souscris à notre abonnement !
          </h2>

          <!-- **************************************************************** -->
          <!-- <form
            action=""
            class="d-flex justify-content-start mt-4"
            @submit.prevent="sendEmail"
          >
            <input
              class="align-middle w-75 fs-4 email"
              type="email"
              placeholder="Adresse mail"
              name="user_email"
              autocomplete="off"
            />
            <button class="btn align-middle fw-bold btn-envoi" type="submit">
              Envoyer
            </button>
          </form> -->

            <SIBForm/>
          <!-- **************************************************************** -->

         
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

input {
  outline: none;
}
#projet {
  margin-top: 3em;
}

#projet-title {
  font-weight: bold;
  font-size: 4em;
  margin: 1em 0;
}

.fonctionnement {
  text-align: left;
  margin-bottom: 3em;
}

.fonctionnement div {
  width: 45%;
}

.fonctionnement h2 {
  color: #96e6b3;
  font-weight: bold;
  font-size: 1.8em;
}

.square {
  padding: 3em 2em;
  border-radius: 15px;
}

.square.green {
  background-color: #96e6b3;
  color: white;
}

.square.grey {
  background-color: #fbfbfb;
}

.square.grey h2 {
  color: #96e6b3;
}

.square .chiffre {
  font-size: 4em;
}

#accordionProjet button {
  background-color: #fbfbfb;
  color: #96e6b3;
  font-size: 0.8em !important;
}
.accordion-item {
  border: none;
}

#chiffres-title {
  color: #717171;
  font-weight: bold;
  font-size: 3em;
  margin: 1em 0;
}

#chiffres-cles {
  text-align: left;
  margin: auto;
  margin-bottom: 3em;
}

.chiffres-cles h3 {
  font-weight: bold;
  color: #96e6b3;
}

#explainer-video {
  margin-top: 6em;
}

#explainer-video h2 {
  font-weight: 500;
  color: #96e6b3;
}

#explainer-video .email {
  padding: 0.375rem 0.75rem;
  border-radius: 10px 0px 0px 10px;
  border: none;
  background-color: #fbfbfb;
}

#explainer-video .email::placeholder {
  color: black;
}

#explainer-video .btn-envoi {
  background-color: #96e6b3;
  color: #fff;
  font-size: 1.5em;
  line-height: normal;
  margin-left: -0.1em;
}

@media (max-width: 768px) {
  #projet-title {
    color: #717171;
    font-weight: bold;
    font-size: 1.8em;
    margin: 1em 0;
  }

  #accordionProjet #accordion-body {
    font-size: 0.5em !important;
    color: red !important;
  }

  #chiffres-title {
    font-size: 1.8em;
  }

  #chiffre-cles h3 {
    font-size: 0.2em !important;
  }
}

@media (max-width: 1200px) {
  .square {
    padding: 1em 1em;
    margin: 1em 0;
  }

  #projet-title {
    font-size: 3em;
  }
}
</style>

<script>
import SIBForm from "@/components/SIBForm.vue"
export default {
  name: "LeProjet",
  components: {
    SIBForm
  }
};
</script>
