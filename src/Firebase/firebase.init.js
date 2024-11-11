import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9r9-IGettiUkDbhHQtB2_yHS0RbW-jRs",
  authDomain: "paikgachadotcom-b9d74.firebaseapp.com",
  projectId: "paikgachadotcom-b9d74",
  storageBucket: "paikgachadotcom-b9d74.firebasestorage.app",
  messagingSenderId: "906723900893",
  appId: "1:906723900893:web:61c49b3271b6df093a8a34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

export default auth;