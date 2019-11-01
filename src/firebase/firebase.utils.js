import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBk4UCZIxkamPELXAL5-CK1RmW78UxjR5o",
  authDomain: "fiber-knight-db.firebaseapp.com",
  databaseURL: "https://fiber-knight-db.firebaseio.com",
  projectId: "fiber-knight-db",
  storageBucket: "fiber-knight-db.appspot.com",
  messagingSenderId: "426461235314",
  appId: "1:426461235314:web:ceaa2cae0aab9448049aeb"
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
