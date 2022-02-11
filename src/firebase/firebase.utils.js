import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA8aoKvlWiCt3ggoupgNWiBYFbZp7aUY4s",
    authDomain: "crwn-db-jlk.firebaseapp.com",
    projectId: "crwn-db-jlk",
    storageBucket: "crwn-db-jlk.appspot.com",
    messagingSenderId: "622418349407",
    appId: "1:622418349407:web:41edbab1653c1cdbea7aea",
    measurementId: "G-KR81K625Y5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;