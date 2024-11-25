const { config } = require("dotenv");
const { initializeApp } = require("firebase/app");
const { addDoc, collection, getFirestore } = require("firebase/firestore");
const path = require("path");
const { teams } = require("./teams");

config({
  path: path.resolve(__dirname, "../../src/.env"),
});

const firebaseConfig = {
  apiKey: process.env.VITE_apiKey,
  authDomain: process.env.VITE_authDomain,
  projectId: process.env.VITE_projectId,
  storageBucket: process.env.VITE_storageBucket,
  messagingSenderId: process.env.VITE_messagingSenderId,
  appId: process.env.VITE_appId,
  measurementId: process.env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadTeamsToFirestore = async () => {
  try {
    const teamsCollection = collection(db, "teams");
    for (const team of teams) {
      await addDoc(teamsCollection, team);
    }
    console.log("teams uploaded successfully");
  } catch (error) {
    console.error("Error uploading teams: ", error);
  }
};

uploadTeamsToFirestore();
