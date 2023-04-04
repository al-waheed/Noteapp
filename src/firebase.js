import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mpseDH1kxX1cULgUE2Pyw74pDR0EVp4",
  authDomain: "diary-login-65923.firebaseapp.com",
  projectId: "diary-login-65923",
  storageBucket: "diary-login-65923.appspot.com",
  messagingSenderId: "1078994048755",
  appId: "1:1078994048755:web:24c58cfaac3dac15f9c986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);