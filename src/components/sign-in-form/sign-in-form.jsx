import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  async function signInWithGoogle() {
    await signInWithGooglePopup();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error("user creation encountered an error:", error);
      }
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          required
        />

        <FormInput
          label="password"
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            {" "}
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
