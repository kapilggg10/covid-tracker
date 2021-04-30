import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import config from "../config.json";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = config.firebase;
firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
window.dbRef = dbRef;

createApp(App)
  .use(router)
  .mount("#app");
