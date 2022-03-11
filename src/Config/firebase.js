import firebase from '@firebase/app';
require('firebase/auth');
require("firebase/firestore");
require("firebase/storage");


var firebaseConfig = {
  apiKey: "AIzaSyBW7vZS8IlIU-_Iyt8r4NOzhUSsZQfSkCo",
  authDomain: "shoppingcart-1d62b.firebaseapp.com",
  projectId: "shoppingcart-1d62b",
  storageBucket: "shoppingcart-1d62b.appspot.com",
  messagingSenderId: "650676174724",
  appId: "1:650676174724:web:466fb35490a0e419f5e7d1",
  measurementId: "G-W9L27QPENK"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
export {db, storage};
export const auth = app.auth();
export default app;