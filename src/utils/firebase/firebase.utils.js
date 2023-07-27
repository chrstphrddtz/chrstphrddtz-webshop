import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA1UUz2L1Hg7d52wrSBTYjzYlXzEp7lwSs",
  authDomain: "portfolio-chrstphrddtz-webshop.firebaseapp.com",
  projectId: "portfolio-chrstphrddtz-webshop",
  storageBucket: "portfolio-chrstphrddtz-webshop.appspot.com",
  messagingSenderId: "134058619703",
  appId: "1:134058619703:web:e47cbe5a753dcdf541a0b2",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
