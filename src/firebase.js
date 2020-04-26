// firebase.js
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDciUjGJwEk-pas3FAtthvcGXJT8QTwOhQ",
  authDomain: "to-do-app-32054.firebaseapp.com",
  databaseURL: "https://to-do-app-32054.firebaseio.com",
  projectId: "to-do-app-32054",
  storageBucket: "to-do-app-32054.appspot.com",
  messagingSenderId: "552462434673",
  appId: "1:552462434673:web:456137243376262d4576d0",
};

firebase.initializeApp(config);

export default firebase;