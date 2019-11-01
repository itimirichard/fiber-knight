import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import keys from "../config/keys";

const config = {
  apiKey: keys.API_KEY,
  authDomain: keys.AUTH_DOMAIN,
  databaseURL: keys.DATABASE_URL,
  projectId: keys.PROJECT_ID,
  storageBucket: keys.STORAGE_BUCKET,
  messagingSenderId: keys.MESSAGING_SENDER,
  appId: keys.APP_ID
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
