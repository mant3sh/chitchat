import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVILig6wOyyKFnWstolAVOfSOxms44TFs",
  authDomain: "chitchat-9c9cb.firebaseapp.com",
  projectId: "chitchat-9c9cb",
  storageBucket: "chitchat-9c9cb.appspot.com",
  messagingSenderId: "1017018971502",
  appId: "1:1017018971502:web:a457755abaab6becbefd7f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export default app;
