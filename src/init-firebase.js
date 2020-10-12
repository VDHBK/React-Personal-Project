import * as firebase from "firebase";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2mR0Q-ElI9iKIyfNwu3yg5YYPZv1YmMY",
  authDomain: "world-recruit.firebaseapp.com",
  databaseURL: "https://world-recruit.firebaseio.com",
  projectId: "world-recruit",
  storageBucket: "world-recruit.appspot.com",
  messagingSenderId: "632363979501",
  appId: "1:632363979501:web:1c067f13fb69b7199372e4",
  measurementId: "G-91PZRNQFDS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const ga = firebase.analytics();