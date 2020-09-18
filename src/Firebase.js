
  import firebase from 'firebase';


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDeIXZxoDojdcJssztmQXKlxcGt4soy9Gw",
    authDomain: "todo-app-3fbd8.firebaseapp.com",
    databaseURL: "https://todo-app-3fbd8.firebaseio.com",
    projectId: "todo-app-3fbd8",
    storageBucket: "todo-app-3fbd8.appspot.com",
    messagingSenderId: "890795014572",
    appId: "1:890795014572:web:e030eaaa447d7f5f9fa209",
    measurementId: "G-MSK9H5YW30"
  });
  const db = firebaseApp.firestore();
  

  export default  db;