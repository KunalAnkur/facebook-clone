import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFo2bmJQeNbFi8I_g3EXfhmIdsZlxyxhE",
  authDomain: "facebook-clone-3c02e.firebaseapp.com",
  databaseURL: "https://facebook-clone-3c02e.firebaseio.com",
  projectId: "facebook-clone-3c02e",
  storageBucket: "facebook-clone-3c02e.appspot.com",
  messagingSenderId: "253314268029",
  appId: "1:253314268029:web:2e1ac88f827d81ea346a14",
  measurementId: "G-J9D3NDRNK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
