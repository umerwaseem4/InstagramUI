import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDW_hXGSBoqqcytwBs60UMjpBCJ8XY--ro",
  authDomain: "instagram-clone-react-e0b3b.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-e0b3b.firebaseio.com",
  projectId: "instagram-clone-react-e0b3b",
  storageBucket: "instagram-clone-react-e0b3b.appspot.com",
  messagingSenderId: "551826047584",
  appId: "1:551826047584:web:00831726fca3d1601df905",
  measurementId: "G-3B927E1CB8",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
