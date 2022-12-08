import { signInWithRedirect } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
//import { FaFacebook } from "react-icons/fa";
import "../Components/login.css";

import { auth, googleProvider } from "../firebase";

const Login = () => {
  const handleSignIn = () => {
    const res = signInWithRedirect(auth, googleProvider);
  };

  return (
    <article class="wrapper">
      <div className="flex border py-12 px-12 flex-col justify-center items-center">
        <h1 className="mb-4 text-2xl md:text-4xl font-bold">Login</h1>
        <div>
          <button
            onClick={() => handleSignIn()}
            className="flex border px-6 hover:bg-black py-2  items-center gap-4 mb-10"
          >
            <FcGoogle size={38} />
            Sign in with Google
          </button>
        </div>
      </div>
    </article>
  );
};

export default Login;
