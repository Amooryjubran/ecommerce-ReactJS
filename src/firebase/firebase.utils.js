import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCREFd08oY3FSqRprTC2yClIj8vUDCsh7M",
    authDomain: "ecommerce-bbe59.firebaseapp.com",
    databaseURL: "https://ecommerce-bbe59.firebaseio.com",
    projectId: "ecommerce-bbe59",
    storageBucket: "ecommerce-bbe59.appspot.com",
    messagingSenderId: "957243394456",
    appId: "1:957243394456:web:c62b765880d9b212a383ed",
    measurementId: "G-FM87GXDHWG"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;