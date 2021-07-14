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
            height="100%"
            src="https://www.youtube.com/embed/RTptiP2QhN0"
            title="YouTube video player"
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
          <form
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
          </form>

          <!-- **************************************************************** -->

          <!-- <div
            class="sib-form"
            style="text-align: center;
           background-color: #EFF2F7;                                 "
          >
            <div id="sib-form-container" class="sib-form-container">
              <div
                id="error-message"
                class="sib-form-message-panel"
                style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;'
              >
                <div
                  class="sib-form-message-panel__text sib-form-message-panel__text--center"
                >
                  <svg
                    viewBox="0 0 512 512"
                    class="sib-icon sib-notification__icon"
                  >
                    <path
                      d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                    />
                  </svg>
                  <span class="sib-form-message-panel__inner-text">
                    Nous n&#039;avons pas pu confirmer votre inscription.
                  </span>
                </div>
              </div>
              <div></div>
              <div
                id="success-message"
                class="sib-form-message-panel"
                style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;'
              >
                <div
                  class="sib-form-message-panel__text sib-form-message-panel__text--center"
                >
                  <svg
                    viewBox="0 0 512 512"
                    class="sib-icon sib-notification__icon"
                  >
                    <path
                      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                    />
                  </svg>
                  <span class="sib-form-message-panel__inner-text">
                    Votre inscription est enregistrée, cliquez sur le lien dans
                    le mail que nous venons de vous envoyer pour confirmer votre
                    inscription.
                  </span>
                </div>
              </div>
              <div></div>
              <div
                id="sib-container"
                class="sib-container--large sib-container--vertical"
                style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;"
              >
                <form
                  id="sib-form"
                  method="POST"
                  action="https://b1d2e1ad.sibforms.com/serve/MUIEANP0Hiuwgg3PVrkQgmoPbclyjsVvTxP0AwKNpGnnyjRQo_3ORpd1JOfwyElS1uqIrNmodMOIlKA4h_BlBIlpYfvrZg43RLALKWcKcJ8_nz03GTjJJ10kFBYt5LPiZBy0vdtDR7Tp1WwJxk9Ti3F-l0S_Yy58LlHFzUXcEf8wEebMra4PAH5p4Jt8r6iVYShwtGbT1QBFJFbd"
                  data-type="subscription"
                >
                  <div style="padding: 8px 0;">
                    <div class="sib-input sib-form-block">
                      <div class="form__entry entry_block">
                        <div class="form__label-row ">
                          <label
                            class="entry__label"
                            style='font-size:16px; text-align:left; font-weight:700; font-family:"Helvetica", sans-serif; color:#3c4858;'
                            for="EMAIL"
                            data-required="*"
                          >
                            Entrez votre EMAIL
                          </label>

                          <div class="entry__field">
                            <input
                              class="input"
                              type="text"
                              id="EMAIL"
                              name="EMAIL"
                              autocomplete="off"
                              placeholder="EMAIL"
                              data-required="true"
                              required
                            />
                          </div>
                        </div>

                        <label
                          class="entry__error entry__error--primary"
                          style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;'
                        >
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-input sib-form-block">
                      <div class="form__entry entry_block">
                        <div class="form__label-row ">
                          <label
                            class="entry__label"
                            style='font-size:16px; text-align:left; font-weight:700; font-family:"Helvetica", sans-serif; color:#3c4858;'
                            for="PRENOM"
                            data-required="*"
                          >
                            Entrez votre PRENOM
                          </label>

                          <div class="entry__field">
                            <input
                              class="input"
                              maxlength="200"
                              type="text"
                              id="PRENOM"
                              name="PRENOM"
                              autocomplete="off"
                              placeholder="PRENOM"
                              data-required="true"
                              required
                            />
                          </div>
                        </div>

                        <label
                          class="entry__error entry__error--primary"
                          style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;'
                        >
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-optin sib-form-block" data-required="true">
                      <div class="form__entry entry_mcq">
                        <div class="form__label-row ">
                          <div class="entry__choice">
                            <label>
                              <input
                                type="checkbox"
                                class="input_replaced"
                                value="1"
                                id="OPT_IN"
                                name="OPT_IN"
                                required
                              />
                              <span
                                class="checkbox checkbox_tick_positive"
                              ></span
                              ><span
                                style='font-size:14px; text-align:left; font-family:"Helvetica", sans-serif; color:#3C4858; background-color:transparent;'
                                ><p>
                                  J'accepte de recevoir vos e-mails et confirme
                                  avoir pris connaissance de votre politique de
                                  confidentialité et mentions légales.
                                </p>
                                <span
                                  data-required="*"
                                  style="display: inline;"
                                  class="entry__label entry__label_optin"
                                ></span
                              ></span>
                            </label>
                          </div>
                        </div>
                        <label
                          class="entry__error entry__error--primary"
                          style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;'
                        >
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-form__declaration">
                      <div class="declaration-block-icon">
                        <svg
                          class="icon__SVG"
                          width="0"
                          height="0"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                              <path
                                class="path1"
                                d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                                fill="#0092FF"
                              ></path>
                            </symbol>
                          </defs>
                        </svg>
                        <svg
                          class="svgIcon-sphere"
                          style="width:54px; height:54px;"
                        >
                          <use xlink:href="#svgIcon-sphere"></use>
                        </svg>
                      </div>
                      <p
                        style='font-size:12px; text-align:left; font-family:"Helvetica", sans-serif; color:#687484; background-color:transparent;'
                      >
                        Nous utilisons Sendinblue en tant que plateforme
                        marketing. En soumettant ce formulaire, vous
                        reconnaissez que les informations que vous allez fournir
                        seront transmises à Sendinblue en sa qualité de
                        processeur de données; et ce conformément à ses
                        <a
                          target="_blank"
                          class="clickable_link"
                          href="https://fr.sendinblue.com/legal/termsofuse/"
                          >conditions générales d'utilisation</a
                        >.
                      </p>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-form-block" style="text-align: right">
                      <button
                        class="sib-form-block__button sib-form-block__button-with-loader"
                        style='font-size:16px; text-align:right; font-weight:700; font-family:"Helvetica", sans-serif; color:#FFFFFF; background-color:#22ae5b; border-radius:3px; border-width:0px;'
                        form="sib-form"
                        type="submit"
                      >
                        <svg
                          class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                          />
                        </svg>
                        S&#039;INSCRIRE
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="email_address_check"
                    value=""
                    class="input--hidden"
                  />
                  <input type="hidden" name="locale" value="fr" />
                </form>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
export default {
  name: "LeProjet",
};
</script>
