<template>
    <div class="container" id="projet">
        <div class="row">
            <div class="col">
                <h1 id="projet-title">Comment ça marche ?</h1>
            </div>
        </div>
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

        <div class="row">
            <div class="col">
                <h1 id="chiffres-title">Quelques chiffres clés</h1>
            </div>
        </div>
        <div class="row chiffres-cles" id="">
            <div class="col text-start">
                <h3>20 Tonnes</h3>
                <p>De nourritures gaspillées chaque minute en France</p>
            </div>
            <div class="col text-start">
                <h3>10 Millions</h3>
                <p>De tonnes de déchets alimentaires en France</p>
            </div>
            <div class="col text-start">
                <h3>400 000 Ronnes</h3>
                <p>De déchets alimentaires dans la restauration</p>
            </div>
            <div class="col text-start">
                <h3>1 Repas</h3>
                <p>Par personne par semaine gaspillé</p>
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
        font-size: 1.2em;
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

    #chiffres-title {
        color: #717171;
        font-weight: bold;
        font-size: 3em;
        margin: 1em 0;
    }

    #chiffres-cles {
        text-align: left;
        /* max-width: 90%; */
        margin: auto;
        margin-bottom: 3em;
    }

    /* #chiffres-cles p {
        font-size: 1.2em;
    } */

    .chiffres-cles h3 {
        font-weight: bold;
        color: #96e6b3;
        font-size: 1.8em;
    }
</style>