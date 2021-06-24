import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Hotjar from 'vue-hotjar'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import axios from "axios"
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyC7vMJq8IIBWP8TfS3uY4YGYitPqtCfGIs",
  authDomain: "compostall-fb7cb.firebaseapp.com",
  projectId: "compostall-fb7cb",
  storageBucket: "compostall-fb7cb.appspot.com",
  messagingSenderId: "573016335796",
  appId: "1:573016335796:web:6211c39e76188ed06b7ee1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(Hotjar, {
  id: '2463355' // Hotjar Site ID
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
