// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwF8KIeYYuyJzr3GigfwrQ3Tc2kjJqw4",
  authDomain: "jobplacement-ea5d1-678c2.firebaseapp.com",
  projectId: "jobplacement-ea5d1",
  storageBucket: "jobplacement-ea5d1.appspot.com",
  messagingSenderId: "38669778407",
  appId: "1:38669778407:web:d153d28e500711e80ad142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;