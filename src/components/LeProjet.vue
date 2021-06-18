<template>
    <div class="container px-4" id="projet">
        <div class="row">
            <div class="col">
                <h1 id="projet-title">Comment ça marche ?</h1>
            </div>
        </div>

        <!-- ETAPES VISIBLES UNIQUEMENT SUR GRAND ECRAN -->

        <div class="container d-none d-md-block">
            <div class="row fonctionnement">
                <div class="col-xl-6">
                    <h2>1. Accompagnement</h2>
                    <p>Nous vous accompagnons étape par étape dans cette nouvelle aventure écologique afin de travailler ensemble sur vos besoins. </p>
                </div>
                <div class="col-xl-6 ms-auto">
                    <h2>2.Tri des déchets</h2>
                    <p>Nous récupérons vos déchets dans une poubelle CompostAll, dans des sacs plastiques transparents afin de faciliter le tri.</p>
                </div>
            </div>

            <div class="row fonctionnement">
                <div class="col-xl-6">
                    <h2>3. Recyclage</h2>
                    <p>Une fois vos déchets récupérés dans une des poubelles CompostAll, nous nous occupons de trier les déchets dans notre centre afin qu’il
                        finisse en compost ou bio-carburant.</p>
                </div>
                <div class="col-xl-6 ms-auto">
                    <h2>4. Partenariat</h2>
                    <p>Une fois votre livraison validée, vous récupérerez des points sur votre compte partenaire et vous pouvez bénéficier d’avantage
                        avec vos partenaires préférés.</p>
                </div>
            </div>
        </div>

        <!-- Accordéon visible uniquement sur mobile -->
        
        <div class="accordion text-start d-md-none" id="accordionProjet">
            <div class="accordion-item my-4">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button fw-bold fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        1. Accompagnement
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProjet">
                    <div class="accordion-body">
                        Nous vous accompagnons étape par étape dans cette nouvelle aventure écologique afin de travailler ensemble sur vos besoins.
                    </div>
                </div>
            </div>
            <div class="accordion-item my-4">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button fw-bold fs-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2. Tri des déchets
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionProjet">
                    <div class="accordion-body ">
                        Nous récupérons vos déchets dans une poubelle CompostAll, dans des sacs plastiques transparents afin de faciliter le tri.
                    </div>
                </div>
            </div>
            <div class="accordion-item my-4">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button fw-bold fs-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        3. Recyclage
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionProjet">
                    <div class="accordion-body ">
                        Une fois vos déchets récupérés dans une des poubelles CompostAll, nous nous occupons de trier les déchets dans notre centre afin qu’il
                    finisse en compost ou bio-carburant.
                    </div>
                </div>
            </div>
            <div class="accordion-item my-4">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button fw-bold fs-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        4. Partenariat
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionProjet">
                    <div class="accordion-body ">
                        Une fois votre livraison validée, vous récupérerez des points sur votre compte partenaire et vous pouvez bénéficier d’avantage
                    avec vos partenaires préférés.
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h1 id="chiffres-title">Quelques chiffres clés</h1>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 chiffres-cles">
            <div class="col col-md text-start">
                <h3>20 Tonnes</h3>
                <p class="">De nourritures gaspillées chaque minute en France</p>
            </div>
            <div class="col col-md text-start">
                <h3>10 Millions</h3>
                <p class="">De tonnes de déchets alimentaires en France</p>
            </div>
            <div class="col col-md text-start">
                <h3>400 000 Tonnes</h3>
                <p class="">De déchets alimentaires dans la restauration</p>
            </div>
            <div class="col col-md text-start">
                <h3>1 Repas</h3>
                <p class="">Par personne par semaine gaspillé</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #projet {
        margin-top: 3em;
    }

    #projet-title {
        color: #717171;
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

    @media (max-width: 576px) {
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
        
        #chiffres-title{
            font-size: 1.8em;
        }

        #chiffre-cles h3 {
            font-size: 0.2em !important;
        }
    }
</style>

<script>

export default {
    name: 'LeProjet'
}
</script>
