// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB83I-9r0MaxFr_zMOJ-jLLnXs1-Zj118A",
  authDomain: "appmusic-a466c.firebaseapp.com",
  projectId: "appmusic-a466c",
  storageBucket: "gs://appmusic-a466c.appspot.com",
  messagingSenderId: "123750166497",
  appId: "1:123750166497:web:9ca59789306a7a8384aca0",
  measurementId: "G-W0HKMCMT4G",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;