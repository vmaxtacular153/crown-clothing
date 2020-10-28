import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDc62zQZfDlqC51_G1HvDdoJHmW8RJA96c",
    authDomain: "crown-db-28cd1.firebaseapp.com",
    databaseURL: "https://crown-db-28cd1.firebaseio.com",
    projectId: "crown-db-28cd1",
    storageBucket: "crown-db-28cd1.appspot.com",
    messagingSenderId: "210327630808",
    appId: "1:210327630808:web:5182dac9058130c06ef8ad",
    measurementId: "G-71CXH0E2CM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;