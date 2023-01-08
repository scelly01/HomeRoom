import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1GXMrle-gxK_hELtnvz0VGlMEeu_uyc4",
  authDomain: "slack-5c357.firebaseapp.com",
  projectId: "slack-5c357",
  storageBucket: "slack-5c357.appspot.com",
  messagingSenderId: "978360012220",
  appId: "1:978360012220:web:38a142d4e00c74db496fb9",
  measurementId: "G-BTLDX247E1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;