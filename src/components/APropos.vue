<template>
    <div class="container" id="about">
        <div class="row">
            <div class="col">
                <h1 class="text-dark">Nous découvrir</h1>
            </div>
        </div>

        <div class="row d-flex align-items-center" >
            <div class="col col-md-7">
                <h2>Qui sommes-nous ?</h2>
                <p class="lh-lg w-75 mt-4">Nous c'est CompostAll, une chouette équipe qui s'intéresse de près à l'environnement. <br> <br>
                    Notre démarche est de proposer aux restaurants un service de gestion de
                    compostage. On espère ainsi diminuer les déchets des restaurants et
                    contribuer à la préservation de l'environnement...
                </p>
            </div>
            <div class="col ">
                <img src="../assets/img/drive/Qui-sommes-nous.png" alt="Compost All - camion de livraison">
            </div>
        </div>

        <div class="row d-flex align-items-center">
            <div class="col">
                <img src="../assets/img/drive/Mission.png" alt="Compost All - tracteur avec une cargaison de fruits et légumes">
            </div>
            <div class="col col-md-7 ">
                <h2 class="text-end">Notre mission</h2>
                <p class="text-end w-75 float-end pr-2">Que les restaurants se lancent dans une démarche encore plus écologique. Ce travail de fourmis peut à grande échelle être une source d’optimisme pour la
                    préservation de l’environnement.
                </p>
            </div>
            
        </div>

        <div class="row d-flex align-items-center">
            <div class="col col-md-7 ">
                <h2>Nos valeurs</h2>
                <p class="w-75">CompostAll est fidèle à ses valeurs de respect de l’environnement et de réduire au maximum les déchets dans la restauration. L’apprentissage se fait dans
                    l’accompagnement.
                </p>
            </div>
            <div class="col">
                <img src="../assets/img/drive/Nos-valeurs.png" alt="Compost All - femme avec dees fruits et légumes">
            </div>
        </div>

        <div class="container" id="explainer-video">
            <div class="row" style="min-height: 22em">
                <!--  ratio ratio-16x9 -->
                <div class="col col-6">  
                    <iframe class="" width="100%" height="100%" src="https://www.youtube.com/embed/RTptiP2QhN0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col col-6  align-items-center">
                    <p class="text-start lh-lg">
                        Soyez les premiers avertis sur nos nouveautés et bénéficiez de codes promotionnels avec nos partenaires exclusifs en plus de vos points de réduction habituels.
                    </p>
                    <h2 class="fs-4 fw-normal my-5">Agis pour l’environnement, <br> Souscris à notre abonnement ! </h2>
                    <form action="" class="d-flex justify-content-start mt-4" @submit.prevent="sendEmail">
                        <input class="align-middle w-75 fs-4 email"  type="email" placeholder="Adresse mail" name="user_email" autocomplete="off">
                        <button class="btn align-middle fw-bold btn-envoi" type="submit">Envoyer</button>
                    </form>
                </div>
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

    #about h2, #about p {
        text-align: left;
    }

    #about h2{
        font-weight: bold;
        color: #96e6b3;
    }

    #about img {
        width: 70%;
    }

    #about .align-items-center {
        margin: 3em 0;
    }

    #explainer-video {
        margin-top: 6em;
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
        margin-left: -.1em;
    }

    @media (max-width: 576px) {
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