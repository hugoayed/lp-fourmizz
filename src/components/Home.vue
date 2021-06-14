<template>
    <div class="container-fluid pt-5" id="hero">
        <div class="container">
            <div class="row">
                <div class="col w-auto mx-auto mw-75 ">
                    <h1 class="fw-bold text-start" id="hero-title">Apprenons <br> ensemble à <br>changer le <br>monde !</h1>
                </div>
                <div class="col-xl">
                    <!-- <b-img
                        v-bind="mainProps"
                        blank-color="rgb(139, 139, 139)"
                        width="500px"
                        height="350"
                        alt="HEX color image"
                    ></b-img> -->
                    <img src="..\assets\img\compost-all-hero.png" alt="">
                </div>
            </div>
            <div class="row">
                <p class="text-start text-dark mt-5" id="hero-intro">Un monde avec moins de gaspillage  nous fait rêver. Récuperer les déchets des restaurants au lieu de les jeter nous fait avancer vers ce rêve. Ensemble changeons le monde.</p>
            </div>
            <div class="row">
                <div class="col-8">
                    <form action="" class="text-start my-5">
                        <input class="align-middle w-75 fs-4" type="email" id="hero-email" placeholder="Adresse mail">
                        <button class="btn align-middle fw-bold" id="btn-envoi" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        
</template>

<style>

    #hero {
        background-color: #fbfbfb;
    }

    #hero-title {
        font-size: 5em;
        color: #96e6b3;
    }
    
    #hero-intro {
        font-size: 1.2em;
        color: #525252;
    }

    #hero-email {
        padding: 0.375rem 0.75rem;
        border-radius: 10px 0px 0px 10px;
        border: none;
        background-color: #fff;
    }

    #btn-envoi {
        background-color: #96e6b3;
        color: #fff;
        font-size: 1.5em;
    }

</style>

<script>
export default {
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
    };
  },
};
</script>