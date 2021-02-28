import firebase from "firebase";

 
  var firebaseConfig = {
    apiKey: "AIzaSyBpXU3JVEcEhg-2EjmXfGvao7Ynh0AXP-s",
    authDomain: "login-move-it.firebaseapp.com",
    projectId: "login-move-it",
    storageBucket: "login-move-it.appspot.com",
    messagingSenderId: "205833289387",
    appId: "1:205833289387:web:1347efb41a51c973b701ee",
    measurementId: "G-B6CF7BW3Y2"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;