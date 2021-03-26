import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOsWG01hRd4Dp_IG0mnw1ay7oDmkKz_YM",
  authDomain: "whatsapp-clone-71059.firebaseapp.com",
  projectId: "whatsapp-clone-71059",
  storageBucket: "whatsapp-clone-71059.appspot.com",
  messagingSenderId: "271217648700",
  appId: "1:271217648700:web:6e22c8055c3e465a0a8f39",
  measurementId: "G-N2V9MSYMSV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
