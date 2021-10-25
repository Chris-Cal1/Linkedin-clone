import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALhxukFbG-tZN7LGCJBR0hHzqR_bWgv4w",
  authDomain: "linkedin-clone-8911b.firebaseapp.com",
  projectId: "linkedin-clone-8911b",
  storageBucket: "linkedin-clone-8911b.appspot.com",
  messagingSenderId: "605390408085",
  appId: "1:605390408085:web:a2e150d57a9f5c0a1a0e9c"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };