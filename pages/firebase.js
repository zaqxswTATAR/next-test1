// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvccch7eyva-p-2RG_-duQotT8O3z5GiI",
  authDomain: "next-test1-e869f.firebaseapp.com",
  projectId: "next-test1-e869f",
  storageBucket: "next-test1-e869f.appspot.com",
  messagingSenderId: "718234627796",
  appId: "1:718234627796:web:5e14acaa1e2eb0e31c1541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider }