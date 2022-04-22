import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDII3WyALAvK543jetFP_LeCUUrA4YCuFk",
    authDomain: "otp-app-26216.firebaseapp.com",
    projectId: "otp-app-26216",
    storageBucket: "otp-app-26216.appspot.com",
    messagingSenderId: "1055970936713",
    appId: "1:1055970936713:web:bc01102fd058d79f65c358",
    measurementId: "G-XD4S7W3T6D"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;