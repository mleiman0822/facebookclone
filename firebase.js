import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAel8Vtp6ulWOIddul1v-PbvRboy0-EgyM",
    authDomain: "facebook-2-819f8.firebaseapp.com",
    projectId: "facebook-2-819f8",
    storageBucket: "facebook-2-819f8.appspot.com",
    messagingSenderId: "890883140524",
    appId: "1:890883140524:web:19ed55e2f385c155906809"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};


 