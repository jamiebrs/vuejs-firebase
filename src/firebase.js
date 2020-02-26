import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZ9s2cLylt8fwNsrPWuvFrs9WwhWpoNKw",
  authDomain: "medcheckin.firebaseapp.com",
  databaseURL: "https://medcheckin.firebaseio.com",
  projectId: "medcheckin",
  storageBucket: "medcheckin.appspot.com",
  messagingSenderId: "382874693114",
  appId: "1:382874693114:web:51f0bda9ba18226b724843",
  measurementId: "G-F3DZJ1NCQ6"

});

export const db = firebaseApp.firestore();