<template>
  <div class="container" id="about">
    <div class="row">
      <div class="col">
        <h1 class="text-dark">Nous découvrir</h1>
      </div>
    </div>

    <div class="row d-flex align-items-center p-5 bg-light">
      <div class="col-12 col-lg-7">
        <h2>Qui sommes-nous ?</h2>
        <p class="lh-lg mt-4">
          Nous c'est CompostAll, une chouette équipe qui s'intéresse de près à
          l'environnement. <br />
          <br />
          Notre démarche est de proposer aux restaurants un service de gestion
          de compostage. On espère ainsi diminuer les déchets des restaurants et
          contribuer à la préservation de l'environnement.
        </p>
      </div>
      <div class="col d-none d-lg-block">
        <img
          src="../assets/img/drive/Qui-sommes-nous.png"
          alt="Compost All - camion de livraison"
        />
      </div>
    </div>

    <div class="row d-flex align-items-center p-5">
      <div class="col d-none d-lg-block">
        <img
          src="../assets/img/drive/Mission.png"
          alt="Compost All - tracteur avec une cargaison de fruits et légumes"
        />
      </div>
      <div class="col-12 col-lg-7">
        <h2 class="text-start">Notre mission</h2>
        <p class="text-start float-end pr-2">
          Que les restaurants se lancent dans une démarche encore plus
          écologique. Ce travail de fourmis peut à grande échelle être une
          source d’optimisme pour la préservation de l’environnement.
        </p>
      </div>
    </div>

    <div class="row d-flex align-items-center bg-light p-5">
      <div class="col-12 col-lg-7 ">
        <h2>Nos valeurs</h2>
        <p class="">
          CompostAll est fidèle à ses valeurs de respect de l’environnement et
          de réduire au maximum les déchets dans la restauration.
          L’apprentissage se fait dans l’accompagnement.
        </p>
      </div>
      <div class="col d-none d-lg-block">
        <img
          src="../assets/img/drive/Nos-valeurs.png"
          alt="Compost All - femme avec dees fruits et légumes"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

#about h1 {
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 4em;
  font-weight: bold;
  color: #717171;
}

#about h2,
#about p {
  text-align: left;
}

#about h2 {
  font-weight: bold;
  color: #96e6b3;
}

#about img {
  width: 70%;
}

#about .align-items-center {
  margin: 3em 0;
}

@media (max-width: 768px) {
  #about h1 {
    font-size: 1.8em;
  }

  #about h2 {
    font-size: 1em;
  }

  #about p {
    font-size: 0.9em;
  }

  #about img {
    width: 90%;
  }

  #video {
    min-height: 25vh;
  }
}

@media (max-width: 1200px) {
  #about h1 {
    font-size: 3em;
  }

  #video {
    min-height: 35vh;
  }
}





@font-face {
      font-display: block;
      font-family: Roboto;
      src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
    }
  
    @font-face {
      font-display: fallback;
      font-family: Roboto;
      font-weight: 600;
      src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
    }
  
    @font-face {
      font-display: fallback;
      font-family: Roboto;
      font-weight: 700;
      src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
    }
  
    #sib-container input:-ms-input-placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
    }
  
    #sib-container input::placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
    }
  
    #sib-container textarea::placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
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
};
</script>
