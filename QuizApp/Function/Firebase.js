import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC293pmlLyBGRSCU-xP3xYW5yyyRm6YUjU",
  authDomain: "quizapp-32f57.firebaseapp.com",
  projectId: "quizapp-32f57",
  storageBucket: "quizapp-32f57.appspot.com",
  messagingSenderId: "435745931807",
  appId: "1:435745931807:web:9483597e78767697e98b2a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
