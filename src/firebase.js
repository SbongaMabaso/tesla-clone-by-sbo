// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnqUPuCSRJ8ral-iz29_28oLG743EslUE",
  authDomain: "tesla-clone-db1.firebaseapp.com",
  projectId: "tesla-clone-db1",
  storageBucket: "tesla-clone-db1.appspot.com",
  messagingSenderId: "894296301895",
  appId: "1:894296301895:web:6e57950f9b34d2c11fac62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
