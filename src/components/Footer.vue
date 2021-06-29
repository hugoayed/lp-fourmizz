<template>
  <footer class="container-fluid pt-5" id="footer">
    <!-- FOOTER SUR ORDI -->
    <div class="container d-none d-md-block">
      <div class="row ">
        <div class="col ">
          <img
            class="mb-3"
            src="../assets/img/logo-compost-all-white.png"
            alt="Logo Compost All blanc"
            style="max-width: 200px;"
          />

          <p></p>  <!-- si on enlève ce paragraphe ça nique l'arrangement -->

          <a href="https://www.linkedin.com/company/compostall" title="Linkedin"
            ><small
              ><img
                src="../assets/img/compost-all-linkedin.png"
                alt="Logo Linkedin"/></small
          ></a>
          <a href="https://www.facebook.com/CompostAll" title="Facebook"
            ><small
              ><img
                src="../assets/img/compost-all-facebook.png"
                alt="Logo Facebook"
                class="mx-4"/></small
          ></a>
          <a href="https://www.instagram.com/compostall/" title="Instagram"
            ><small
              ><img
                src="../assets/img/compost-all-instagram.png"
                alt="Logo Instagram"/></small
          ></a>
          <a href="https://www.youtube.com/channel/UCH0UpF_aXlichdNgYxCXjPA" title="YouTube">
              <small>
                  <img src="../assets/img/drive/Youtube.png" class="ms-4"/>
              </small>
          </a>
        </div>
        <div class="col text-start text-light" style="margin-left: 12em">
          <h2 class="fs-4 fw-bold text-uppercase">Plan du site</h2>
          <ul class="ps-0 light">
            <li>
              <router-link to="/#projet" class="nav-link ps-0"
                >Le Projet</router-link
              >
            </li>
            <li class="">
              <router-link to="/#about" class="nav-link ps-0"
                >À Propos</router-link
              >
            </li>
            <li class="">
              <router-link to="/#footer" class="nav-link ps-0"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col text-start text-light">
          <h2 class="fs-4 fw-bold text-uppercase">Autres</h2>
          <ul class="ps-0 light">
            <li>
              <router-link to="/#" class="nav-link ps-0"
                >Presse</router-link
              >
            </li>
            <li class="">
              <router-link to="/#" class="nav-link ps-0"
                >Aide</router-link
              >
            </li>
            <li class="">
              <router-link to="/#" class="nav-link ps-0"
                >Carrière</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col text-start text-light">
          <h2 class="fs-4 fw-bold text-uppercase">Mentions légales</h2>
          <ul class="ps-0 light">
            <li>
              <router-link to="/#" class="nav-link ps-0"
                >Conditions générales d’utilisation</router-link
              >
            </li>
            <li class="">
              <router-link to="/#" class="nav-link ps-0"
                >Politique de confidentialité</router-link
              >
            </li>
            <li class="">
              <router-link to="/#" class="nav-link ps-0"
                >Utilisation de cookies</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
          <small class="text-light">
            Copyright © 2021 Fourmizz | All rights reserved
          </small>
      </div>
    </div>

    <!-- FOOTER SUR MOBILE -->
    <div class="container d-md-none" id="footer-mobile">
      <div class="row">
        <div class="col">
          <h2 class="text-start text-light">
            Agis pour l’environnement, <br />
            Souscris à notre abonnement !
          </h2>
          <form
            action=""
            id="hero-form-mobile"
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
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <a href="https://www.linkedin.com/company/compostall"
            ><small
              ><img
                src="../assets/img/compost-all-linkedin.png"
                alt="Logo Linkedin"/></small
          ></a>
          <a href="https://www.facebook.com/CompostAll"
            ><small
              ><img
                src="../assets/img/compost-all-facebook.png"
                alt="Logo Facebook"
                class="mx-4"/></small
          ></a>
          <a href="https://www.instagram.com/compostall/"
            ><small
              ><img
                src="../assets/img/compost-all-instagram.png"
                alt="Logo Instagram"/></small
          ></a>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <p class="text-center text-light">
            Copyright © 2021 Fourmizz <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  /* text-decoration: none; */
  color: white;
}

a:hover {
  color: white;
}

#footer {
  background-color: dimgray;
  margin-top: 4em;
  padding: 2em;
}

#footer p {
  font-size: 1.2em;
}

#footer ul {
  list-style-type: none;
}

#footer .email {
  padding: 0.375rem 0.75rem;
  border-radius: 10px 0px 0px 10px;
  border: none;
  background-color: #fff;
}

#footer .btn-envoi {
  background-color: #96e6b3;
  color: #fff;
  font-size: 1.5em;
  line-height: normal;
  margin-left: -0.1em;
}

#footer .btn-envoi:hover {
  background-color: #21e468;
}

@media (max-width: 576px) {
  #footer-mobile h2 {
    font-size: 1.3em;
  }
}
</style>
