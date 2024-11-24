const { config } = require("dotenv");
const { initializeApp } = require("firebase/app");
const { addDoc, collection, getFirestore } = require("firebase/firestore");
const path = require("path");
const skills = require("./skills.json");

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

const uploadSkillsToFirestore = async () => {
  try {
    const skillsCollection = collection(db, "skills");
    for (const skill of skills) {
      await addDoc(skillsCollection, skill);
    }
    console.log("Skills uploaded successfully");
  } catch (error) {
    console.error("Error uploading skills: ", error);
  }
};

uploadSkillsToFirestore();
