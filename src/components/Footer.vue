<template>
    <footer class="container-fluid" id="footer">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col text-start">
                    <img class="mb-3" src="..\assets\img\logo-compost-all-white.png" style="max-width: 200px;">
                    <p class="text-start text-light">Copyright © 2021 Fourmizz <br> All rights reserved</p>
                    <small><img src="..\assets\img\compost-all-linkedin.png" alt=""></small>
                    <small><img src="..\assets\img\compost-all-facebook.png" alt="" class="mx-4"></small>
                    <small><img src="..\assets\img\compost-all-instagram.png" alt=""></small>
                </div>
                <div class="col">
                    <h2 class="text-end text-light">Agis pour l’environnement, <br> Souscris à notre abonnement ! </h2>
                    <form action="" id="hero-form" class="d-flex align-items-end">
                        <input type="email" id="hero-email" class="align-middle  w-75 fs-4 fw-bold" placeholder="Adresse mail">
                        <button class="btn align-middle" id="btn-envoi" type="submit">Envoyer</button>
                    </form>
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
    
</style>