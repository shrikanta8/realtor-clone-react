// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFGYwISdWEtb1q1bH-FmXTFPRbhAUbf-c",
  authDomain: "realtor-clone-react-3a557.firebaseapp.com",
  projectId: "realtor-clone-react-3a557",
  storageBucket: "realtor-clone-react-3a557.appspot.com",
  messagingSenderId: "756669527078",
  appId: "1:756669527078:web:2a066f3a9b7053a44f22e7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()