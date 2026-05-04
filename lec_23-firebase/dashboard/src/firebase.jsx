import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATLQpkFxRjCUVIKo-wRfbnBW8DBWLWpGE",
  authDomain: "fse-1may.firebaseapp.com",
  projectId: "fse-1may",
  storageBucket: "fse-1may.firebasestorage.app",
  messagingSenderId: "421326166483",
  appId: "1:421326166483:web:bf07055163c6caabb7b726",
  measurementId: "G-M359N908LR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };