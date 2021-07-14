<template>
  <section id="onboarding">
    <div class="container-fluid">
      <div class="row d-flex align-items-center">
        <div class="col-xl-10">
          <div class="" v-if="isStep1Visible">
            <Step1 />
            <button class="mt-5" @click="nextStep()">C'est parti !</button>
          </div>
          <div v-if="isStep2Visible">
            <Step2 />
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep3Visible">
            <Step3 />
            <button class="mt-5 me-3 ignore" @click="nextStep()">Ignorer</button>
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep4Visible">
            <Step4 />
            <button class="mt-5 me-3 ignore" @click="previousStep()">Précédent</button>
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep5Visible">
            <Step5 />
            <button class="mt-5 me-3 ignore" @click="previousStep()">Précédent</button>
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep6Visible">
            <Step6 />
            <button class="mt-5 me-3 ignore" @click="previousStep()">Précédent</button>
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep7Visible">
            <Step7 />
            <button class="mt-5 me-3 ignore" @click="previousStep()">Précédent</button>
            <button class="mt-5" @click="nextStep()">Suivant</button>
          </div>
          <div v-if="isStep8Visible">
            <Step8 />
            <button class="mt-5 me-3 ignore" @click="previousStep()">Précédent</button>
            <a href="https://www.dashboard.compostall.fr/"><button class="mt-5" @click="nextStep()"> Calculer mes économies</button></a>
          </div>
          <p class="mt-4"> Etape {{count}} / 8</p>
        </div>

        <div class="col-xl-2" id="greenBg">
          <!-- Colonne verte -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Step1 from "@/components/Onboarding/Step1.vue";
import Step2 from "@/components/Onboarding/Step2.vue";
import Step3 from "@/components/Onboarding/Step3.vue";
import Step4 from "@/components/Onboarding/Step4.vue";
import Step5 from "@/components/Onboarding/Step5.vue";
import Step6 from "@/components/Onboarding/Step6.vue";
import Step7 from "@/components/Onboarding/Step7.vue";
import Step8 from "@/components/Onboarding/Step8.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
  },
  data() {
    return {
      count: 1,
      isStep1Visible: true,
    };
  },
  methods: {
    nextStep() {
        if(this.count < 8)
            this.count++;
      switch (this.count) {
        case 2:
          this.isStep1Visible = false;
          this.isStep2Visible = true;
          break;
        case 3:
          this.isStep2Visible = false;
          this.isStep3Visible = true;
          break;
        case 4:
          this.isStep3Visible = false;
          this.isStep4Visible = true;
          break;
        case 5:
          this.isStep4Visible = false;
          this.isStep5Visible = true;
          break;
        case 6:
          this.isStep5Visible = false;
          this.isStep6Visible = true;
          break;
        case 7:
          this.isStep6Visible = false;
          this.isStep7Visible = true;
          break;
        case 8:
          this.isStep7Visible = false;
          this.isStep8Visible = true;
          break;
      }
    },
    previousStep() {
        if(this.count > 0)
            this.count--;
      switch (this.count) {
        case 3:
          this.isStep3Visible = true;
          this.isStep4Visible = false;
          break;
        case 4:
          this.isStep4Visible = true;
          this.isStep5Visible = false;
          break;
        case 5:
          this.isStep5Visible = true;
          this.isStep6Visible = false;
          break;
        case 6:
          this.isStep6Visible = true;
          this.isStep7Visible = false;
          break;
        case 7:
          this.isStep7Visible = true;
          this.isStep8Visible = false;
          break;
        case 8:
          this.isStep8Visible = true;
          this.isStep9Visible = false;
          break;
      }
    },
  },
};
</script>

<style>
#onboarding {
  background-color: white;
  min-height: 100vh;
  color: #4e4e4e;
  overflow-x: unset;
}

#greenBg {
  background-color: #96e6b3;
  min-height: 100vh;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: white;
}

button {
  color: white;
  background-color: #96e6b3;
  font-size: 1.5em;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
}

.ignore {
    background-color: #fbfbfb;
    color: #4e4e4e;
    font-weight: bold;
}
</style>
