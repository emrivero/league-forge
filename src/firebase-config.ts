import {
  FirebaseAuth,
  FirebaseDatabase,
  FirestoreDatabase,
  initializeFirebase,
} from "refine-firebase";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

export const firebaseApp = initializeFirebase(firebaseConfig);

export const firebaseAuth = new FirebaseAuth();

export const firestoreDatabase = new FirestoreDatabase();

export const firebaseDatabase = new FirebaseDatabase();
