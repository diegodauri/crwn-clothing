import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDmFDby_LiRu5NOZ71k7EJ6T6ZDulJbVbI",
    authDomain: "crwn-db-5029c.firebaseapp.com",
    projectId: "crwn-db-5029c",
    storageBucket: "crwn-db-5029c.appspot.com",
    messagingSenderId: "801107562243",
    appId: "1:801107562243:web:21c4da063ae5baf183a336",
    measurementId: "G-BE82FMV1YL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;