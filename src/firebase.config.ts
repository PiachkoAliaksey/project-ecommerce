import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzRNol4KclTvMDTnSmdhYVNa-SEqYf83k",
  authDomain: "e-commerce-project-app.firebaseapp.com",
  projectId: "e-commerce-project-app",
  storageBucket: "e-commerce-project-app.appspot.com",
  messagingSenderId: "551925203970",
  appId: "1:551925203970:web:676db3d9695f458af9d31b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;