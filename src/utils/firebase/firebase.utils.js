import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userDocRef;
}
