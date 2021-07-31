import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAzVp51f1jwKHcyz3GtZLj5xaYAORtmVcU",
  authDomain: "book-santa-app-c4b54.firebaseapp.com",
  projectId: "book-santa-app-c4b54",
  storageBucket: "book-santa-app-c4b54.appspot.com",
  messagingSenderId: "889896972416",
  appId: "1:889896972416:web:5888b7816d3b438095f665",
  measurementId: "G-HFGD061NBX"
};

  // Initialize Firebase
  
  if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig); 
  }

  export default firebase.firestore();
