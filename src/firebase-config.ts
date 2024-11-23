import {
  FirebaseAuth,
  FirebaseDatabase,
  FirestoreDatabase,
  initializeFirebase,
} from "refine-firebase";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

export const firebaseApp = initializeFirebase(firebaseConfig);

export const firebaseAuth = new FirebaseAuth();

export const firestoreDatabase = new FirestoreDatabase();

export const firebaseDatabase = new FirebaseDatabase();
