import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvRi4c7xdzOh0O4CFs6aJymnN16qE9lIY",
    authDomain: "mario-plan-ce328.firebaseapp.com",
    projectId: "mario-plan-ce328",
    storageBucket: "mario-plan-ce328.appspot.com",
    messagingSenderId: "719301106843",
    appId: "1:719301106843:web:8ceabe34fb73bfd04cba3e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;