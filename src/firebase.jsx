import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_esHWuUKbbipW_rBh7RCD_EsjEEiTKRU",
  authDomain: "note-app-7e576.firebaseapp.com",
  projectId: "note-app-7e576",
  storageBucket: "note-app-7e576.appspot.com",
  messagingSenderId: "331267997644",
  appId: "1:331267997644:web:c23d02e04777c3e352e769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
