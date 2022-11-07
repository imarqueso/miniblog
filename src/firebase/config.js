import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ0tSCGvqTMR0_Uhw6M-D-SZxTAFWatcA",
  authDomain: "miniblog-fd113.firebaseapp.com",
  projectId: "miniblog-fd113",
  storageBucket: "miniblog-fd113.appspot.com",
  messagingSenderId: "542368584078",
  appId: "1:542368584078:web:e5ffef9bf8d3f3966a14df",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
