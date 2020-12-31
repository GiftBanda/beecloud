import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-analytics";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDtyaG1etwayBsuN2P-qUUTmd9YQ-G7WPs",
    authDomain: "bee-cloud-672d6.firebaseapp.com",
    projectId: "bee-cloud-672d6",
    storageBucket: "bee-cloud-672d6.appspot.com",
    messagingSenderId: "687254936161",
    appId: "1:687254936161:web:84944a406e02ffee096820",
    measurementId: "G-6Q8HPMNVT9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export {db}