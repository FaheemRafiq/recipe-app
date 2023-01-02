import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLLvLpGkaPia4HGNOoI4KA93N6Ni_O2Z8",
  authDomain: "recipe-app-a5727.firebaseapp.com",
  projectId: "recipe-app-a5727",
  storageBucket: "recipe-app-a5727.appspot.com",
  messagingSenderId: "85054725260",
  appId: "1:85054725260:web:b776b24d926335aecdafa9",
  measurementId: "G-5CFZQWCXHM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import "./style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
