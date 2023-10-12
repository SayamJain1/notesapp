import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW7qdzsznBtbkpA4S2hYBP8WXXccPMIFo",
  authDomain: "next-notes-app-ed088.firebaseapp.com",
  projectId: "next-notes-app-ed088",
  storageBucket: "next-notes-app-ed088.appspot.com",
  messagingSenderId: "497082481193",
  appId: "1:497082481193:web:79ce630a4b68c47947ba38"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;