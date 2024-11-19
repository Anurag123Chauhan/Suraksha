import React from "react";
import GoogleSignin from "./btn_google_signin_dark_pressed_web.png";
import logo512 from "../../assets/logo512.png";
import { auth } from "../../config/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to React Chat.</h2>
      <img
        src={logo512}
        alt="ReactJs logo"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-lg text-center mb-4">
        Sign in with Google to chat with your fellow React Developers.
      </p>
      <button className="sign-in" onClick={googleSignIn}>
        <img src={GoogleSignin} alt="sign in with google" className="w-48" />
      </button>
    </main>
  );
};

export default Welcome;
