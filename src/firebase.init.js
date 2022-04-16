// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7AWxexR1FRtFoilxu1YOBMdepyp7kT7o",
  authDomain: "assignment10-4b6c1.firebaseapp.com",
  projectId: "assignment10-4b6c1",
  storageBucket: "assignment10-4b6c1.appspot.com",
  messagingSenderId: "565625276049",
  appId: "1:565625276049:web:4c7a38ea1550963fe8e130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
