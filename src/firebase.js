import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyDktYAusJXUN3dtxcnneVEjIZr6m29g6Z8",
  authDomain: "sopfile-4ac9a.firebaseapp.com",
  databaseURL: "https://sopfile-4ac9a-default-rtdb.firebaseio.com",
  projectId: "sopfile-4ac9a",
  storageBucket: "sopfile-4ac9a.appspot.com",
  messagingSenderId: "942414697217",
  appId: "1:942414697217:web:7c527a9b8161fe70500100"
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;