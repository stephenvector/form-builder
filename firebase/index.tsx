import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// These are public in the browser, so they're not
// secret. We'll move these to environment variables
// eventually.
const firebaseConfig = {
  apiKey: "AIzaSyAbmCn-SQtEKq09M_G4ZQLlndoHyt_41d4",
  authDomain: "form-builder-d15c3.firebaseapp.com",
  projectId: "form-builder-d15c3",
  storageBucket: "form-builder-d15c3.appspot.com",
  messagingSenderId: "543663630959",
  appId: "1:543663630959:web:eaefed630912192fe7bb9a",
  measurementId: "G-9LMDXWDEG4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
