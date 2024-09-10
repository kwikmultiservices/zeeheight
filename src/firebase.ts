import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

let isFirebaseInitialized = false;

const FirebaseApp = {
  apiKey: "AIzaSyCU4w47VRi13m9sbMEKTLWMQMovwx0huWA",
  authDomain: "zeeheight-app.firebaseapp.com",
  projectId: "zeeheight-app",
  storageBucket: "zeeheight-app.appspot.com",
  messagingSenderId: "877788110113",
  appId: "1:877788110113:web:645a66cc62fc24f3b57260"
};

let database: Firestore;
let auth: Auth;
let storage: FirebaseStorage;

const initializeFirebase = () => {
  if (!isFirebaseInitialized) {
    const app = initializeApp(FirebaseApp);
    database = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
    isFirebaseInitialized = true;
  }
};

initializeFirebase();

export { auth, database, storage };
