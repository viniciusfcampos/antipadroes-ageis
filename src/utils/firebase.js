import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAm1oL6JYvkrZfHoIudKdtv_VKwq_adPbI",
  authDomain: "antipadroes-ageis.firebaseapp.com",
  projectId: "antipadroes-ageis",
  storageBucket: "antipadroes-ageis.appspot.com",
  messagingSenderId: "729645651878",
  appId: "1:729645651878:web:eabae762eee1a019022167"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database;