import { auth } from "@/firbase";
import {
  removeLogIsLoading,
  setLogEmail,
  setLogIsLoading,
  setLogPassword,
} from "@/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import GoogleButton from "react-google-button";

function Login() {
  const { logEmail, logIsLoading, logPassword } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const router = useRouter();
  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLogIsLoading());

    signInWithEmailAndPassword(auth, logEmail, logPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setLogEmail(""));
        dispatch(setLogPassword(""));
        dispatch(removeLogIsLoading());
        router.push("/note");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        dispatch(setLogEmail(""));
        dispatch(setLogPassword(""));
        dispatch(removeLogIsLoading());
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        router.push("/note");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-xl font-bold">Login to access Notebook</h2>
        <div className="card max-w-[1200px] bg-base-100 shadow-xl">
          <form
            onSubmit={handleLogin}
            className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center"
          >
            <div className="w-full">
              <label htmlFor="email" className="pb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={logEmail}
                onChange={(e) => dispatch(setLogEmail(e.target.value))}
                placeholder="write Email here"
                className="input input-bordered w-full mt-1 max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="pb-1 font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={logPassword}
                onChange={(e) => dispatch(setLogPassword(e.target.value))}
                placeholder="Write Password here"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <button
              className={`w-20 btn text-xs btn-sm btn-accent ${
                logIsLoading ? " bg-opacity-60" : ""
              }`}
            >
              {logIsLoading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-sm ">
              Don't have an account:
              <span className="font-bold cursor-pointer ps-2 text-red-400">
                <Link href="/signup">Signup</Link>
              </span>
              <div className="divider">OR</div>
            </p>
            <GoogleButton
              className="g-btn h-10"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
