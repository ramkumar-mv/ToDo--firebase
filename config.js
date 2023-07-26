import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwlSY6-k6WHbyJcDKGn-DXmmLfdWOAOQ4",
  authDomain: "test-1238a.firebaseapp.com",
  projectId: "test-1238a",
  storageBucket: "test-1238a.appspot.com",
  messagingSenderId: "217351180605",
  appId: "1:217351180605:web:030f8e671decc243d53554",
  measurementId: "G-TER1FPCS9G",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
