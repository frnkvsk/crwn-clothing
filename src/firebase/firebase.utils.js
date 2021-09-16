import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
   apiKey: "AIzaSyC0sj-eGoS8-7Tcb9hFNS-UVGv-p1wNqKU",
   authDomain: "crwn-db-15147.firebaseapp.com",
   projectId: "crwn-db-15147",
   storageBucket: "crwn-db-15147.appspot.com",
   messagingSenderId: "748354755046",
   appId: "1:748354755046:web:070338365822d40f42de27",
   measurementId: "G-7QNFE7BXJ3"
 }

 const firebaseApp = initializeApp(config);

 export const auth = getAuth();
 export const firestore = getFirestore();

 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => signInWithPopup(getAuth(), provider);

 export default firebaseApp;

 /*
  ABOVE IS THE NEWEST VERSION OF FIREBASE

  BELOW IS THE FIREBASE CODE GIVEN WITH THE COURSE THAT WORKS ON VERSION 6.0.2
 */
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//    apiKey: "AIzaSyC0sj-eGoS8-7Tcb9hFNS-UVGv-p1wNqKU",
//    authDomain: "crwn-db-15147.firebaseapp.com",
//    projectId: "crwn-db-15147",
//    storageBucket: "crwn-db-15147.appspot.com",
//    messagingSenderId: "748354755046",
//    appId: "1:748354755046:web:070338365822d40f42de27",
//    measurementId: "G-7QNFE7BXJ3"
//  }

//  firebase.initializeApp(config);

//  export const auth = firebase.auth();
//  export const firestore = firebase.firestore();

//  const provider = new firebase.auth.GoogleAuthProvider();
//  provider.setCustomParameters({ prompt: 'select_account' });
//  export const signInWithGoogle = () => auth.signInWithPopup(provider);

//  export default firebase;