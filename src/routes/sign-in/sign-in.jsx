import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  async function logGoogleUser() {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
}
