import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7vMJq8IIBWP8TfS3uY4YGYitPqtCfGIs",
  authDomain: "compostall-fb7cb.firebaseapp.com",
  projectId: "compostall-fb7cb",
  storageBucket: "compostall-fb7cb.appspot.com",
  messagingSenderId: "573016335796",
  appId: "1:573016335796:web:6211c39e76188ed06b7ee1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged( () => {
  if(!app) {
    app = new Vue({
          router,
          render: h => h(App),
          }).$mount('#app')
  }
})


