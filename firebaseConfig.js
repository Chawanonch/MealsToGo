// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfCvQTXRuVUixPhcGtEwdDMmhnTG9cJyM",
  authDomain: "mealstogo-cbf29.firebaseapp.com",
  projectId: "mealstogo-cbf29",
  storageBucket: "mealstogo-cbf29.appspot.com",
  messagingSenderId: "136680352926",
  appId: "1:136680352926:web:df4d40e8740e29efb09f8f"
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth,getAuth }
