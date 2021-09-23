import * as firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "",
    authDomail: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');