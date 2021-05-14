import firebase, { firestore } from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCBBhxmaQapunph-qm19pjJnnYaIKmCgrk",
    authDomain: "facebook-clone-afdda.firebaseapp.com",
    projectId: "facebook-clone-afdda",
    storageBucket: "facebook-clone-afdda.appspot.com",
    messagingSenderId: "1097761723882",
    appId: "1:1097761723882:web:a2a1313e63c0c5f2dcce93",
    measurementId: "G-0YZ3NQGFBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;