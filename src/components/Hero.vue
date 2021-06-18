<template>
    <section id="content">
            <div class="container-fluid p-3 pt-5" id="hero">
            <div class="container">
                <div class="row">
                    <div class="col-xl col-lg-12 w-auto mx-auto ">
                        <h1 class="fw-bold text-start d-none d-md-block" id="hero-title">Apprenons ensemble à changer le monde !</h1>
                        <h1 class="fw-bold text-start d-md-none" id="hero-title-mobile">Apprenons ensemble à changer le monde !</h1>
                    </div>
                    <div class="col-lg w-auto mx-auto d-none d-xl-block">
                        <img src="../assets/img/compost-all-hero.png" alt="Compost All - illustration avec des fruits et légumes">
                    </div>
                </div>
                <div class="row">
                    <p class="text-start text-dark mt-5" id="hero-intro">Un monde avec moins de gaspillage  nous fait rêver. Récuperer les déchets des restaurants au lieu de les jeter nous fait avancer vers ce rêve. Ensemble changeons le monde.</p>
                </div>
                <div class="row ">
                    <div class="col-xl-8 col-md-12">
                        <form action="" class="text-start my-5">
                            <input class="align-middle w-auto fs-4" type="email" id="hero-email" placeholder="Adresse mail">
                            <button class="btn align-middle fw-bold btn-envoi" type="submit">Envoyer</button>
                        </form>
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

    #hero .d-md-none {
        font-size: 1.8em;
    }

    #hero-title, #hero-title-mobile {
        font-size: 5em;
        color: #96e6b3;
    }
    
    #hero-intro {
        font-size: 1.2em;
        color: #525252;
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
        margin-left: -.1em;
    }

    @media (max-width: 576px) {
         #hero-email {
            background-color: #fff;
            font-size: 1em !important;
            min-width: unset !important;
        }

        #hero .btn-envoi {
            font-size: 0.9em;
            
        }
    }

</style>

<script>
export default {

    name: 'Hero'
};
</script>