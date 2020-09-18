
  import firebase from 'firebase';


  const firebaseApp = firebase.initializeApp({
   //firebaseConfig will come here. copy it from firebase console and paste the code inside the curly brackets here.
  });
  const db = firebaseApp.firestore();
  

  export default  db;
