<template>
  <section id="our-solution">
    <div class="container p-5">
      <div class="row">
        <div class="col">
          <h1 id="title" class="text-dark">Notre solution</h1>
        </div>
      </div>
    </div>
    <div class="container p-5">
      <div class="row ">
        <div class="col-xl-6 my-auto">
          <p class="text-start">
            Une grâce <span class="green-text">logistique simple</span> à notre
            équipe et nos contacts.
          </p>
          <p class="text-start my-5">
            Un suivi facilité grâce a un
            <span class="green-text">dashboard personnalisé</span>.
          </p>
          <p class="text-start">
            Un <span class="green-text">déploiement rapide</span> grâce a nos
            questionnaires d’onboarding.
          </p>
        </div>
        <div class="col-xl-6" style="min-height: 22em">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PWgvGjAhvIw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#our-solution {
  background-color: #fbfbfb;
}

#title {
  font-weight: bold;
  font-size: 4em;
  /* margin: 1em 0; */
}

.green-text {
  color: #96e6b3;
  font-weight: bold;
}

@media (max-width: 768px) {
    #title {
      font-size: 1.8em;
    }
}

@media(max-width: 1200px) {
    iframe{
        margin-top: 3em;
    }

    #title {
      font-size: 3em;
    }
}
</style>
