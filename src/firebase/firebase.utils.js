import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAMdD_TrmjLolDVpxihCajpxBZXuiTBKHo",
    authDomain: "crwn-db-51129.firebaseapp.com",
    projectId: "crwn-db-51129",
    storageBucket: "crwn-db-51129.appspot.com",
    messagingSenderId: "229360262",
    appId: "1:229360262:web:365e42268115062e4e4707"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;