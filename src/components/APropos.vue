<template>
    <div class="container" id="about">
        <div class="row">
            <div class="col">
                <h1>Nous découvrir</h1>
            </div>
        </div>

        <div class="row d-flex align-items-center">
            <div class="col col-md-7 ">
                <h2>Qui sommes-nous ?</h2>
                <p>Nous sommes une petite équipe voulant améliorer le monde de demain.</p>
            </div>
            <div class="col">
                <img src="../assets/img/compost-all-qui-sommes-nous.png" alt="Compost All - camion de livraison">
            </div>
        </div>

        <div class="row d-flex align-items-center">
            <div class="col">
                <img src="../assets/img/compost-all-notre-mission.png" alt="Compost All - tracteur avec une cargaison de fruits et légumes">
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
                <p>CompostAll est fidèle à ses valeurs de respect de l’environnement et de réduire au maximum les déchets dans la restauration. L’apprentissage se fait dans
                    l’accompagnement.
                </p>
            </div>
            <div class="col">
                <img src="../assets/img/compost-all-nos-valeurs.png" alt="Compost All - femme avec dees fruits et légumes">
            </div>
        </div>

        <div class="container-fluid ">
            <div class="row" id="explainer-video">
                <div class="col">
                    <h1 class="text-center">Explainer vidéo</h1>
                    <!-- <b-img
                        v-bind="mainProps"
                        blank-color="rgb(139, 139, 139)"
                        width="600px"
                        height="350"
                        alt="HEX color image"
                    ></b-img> -->
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <iframe width="720px" height="450px" src="https://www.youtube.com/embed/RTptiP2QhN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

    #about p {
        font-size: 1.2em;
    }

    #about img {
        width: 70%;
    }

    #about .align-items-center {
        margin: 3em 0;
    }

    .explainer-video {
        background-color: #f2f2f2;
    }

    #explainer-video h1 {
        color: #717171;
        margin: 1em 0;
    }

    .explainer-video iframe {
        min-height: 200px;
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