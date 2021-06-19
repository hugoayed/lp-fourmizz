<template>
    <footer class="container-fluid" id="footer">
        <!-- FOOTER SUR ORDI -->
        <div class="container d-none d-md-block">
            <div class="row d-flex align-items-center">
                <div class="col text-start">
                    <img class="mb-3" src="../assets/img/logo-compost-all-white.png" alt="Logo Compost All blanc" style="max-width: 200px;">
                    <p class="text-start text-light">Copyright © 2021 Fourmizz <br> All rights reserved</p>
                    <a href="https://www.linkedin.com/company/compostall"><small><img src="../assets/img/compost-all-linkedin.png" alt="Logo Linkedin"></small></a> 
                    <a href="https://www.facebook.com/CompostAll"><small><img src="../assets/img/compost-all-facebook.png" alt="Logo Facebook" class="mx-4"></small></a> 
                    <a href="https://www.instagram.com/compostall/"><small><img src="../assets/img/compost-all-instagram.png" alt="Logo Instagram"></small></a> 
                </div>
                <div class="col">
                    <h2 class="text-end text-light">Agis pour l’environnement, <br> Souscris à notre abonnement ! </h2>
                    <form action="" id="hero-form" class="d-flex justify-content-end mt-4">
                        <input class="align-middle w-75 fs-4 email"  type="email" placeholder="Adresse mail">
                        <button class="btn align-middle fw-bold btn-envoi" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- FOOTER SUR MOBILE -->
        <div class="container d-md-none" id="footer-mobile">
            <div class="row">
                <div class="col">
                    <h2 class="text-start text-light">Agis pour l’environnement, <br> Souscris à notre abonnement ! </h2>
                    <form action="" id="hero-form" class="d-flex justify-content-start mt-4">
                        <input class="align-middle w-75 fs-4 email"  type="email" placeholder="Adresse mail">
                        <button class="btn align-middle fw-bold btn-envoi" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <a href="https://www.linkedin.com/company/compostall"><small><img src="../assets/img/compost-all-linkedin.png" alt="Logo Linkedin"></small></a> 
                    <a href="https://www.facebook.com/CompostAll"><small><img src="../assets/img/compost-all-facebook.png" alt="Logo Facebook" class="mx-4"></small></a> 
                    <a href="https://www.instagram.com/compostall/"><small><img src="../assets/img/compost-all-instagram.png" alt="Logo Instagram"></small></a> 
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <p class="text-center text-light">Copyright © 2021 Fourmizz <br> All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    #footer {
        background-color: dimgray;
        margin-top: 4em;
        padding: 2em;
    }

    #footer p {
        font-size: 1.2em;
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
        margin-left: -.1em;
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