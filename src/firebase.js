import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBYLMfxJfCvi4My-C3ZjYrK6yCeKkRLxB4",
  authDomain: "unichat-9cdc3.firebaseapp.com",
  projectId: "unichat-9cdc3",
  storageBucket: "unichat-9cdc3.appspot.com",
  messagingSenderId: "87185410331",
  appId: "1:87185410331:web:860235e995e67c6eba2bbe",
};

const app = initializeApp(config);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
