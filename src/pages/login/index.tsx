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
import React from "react";
import GoogleButton from "react-google-button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required("Email is required")
      .matches(/@[^.]*\./, "Invalid email")
      .matches(/^(?!.*@[^,]*,)/, "Invalid email"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short should be 8 chars minimum")
      .matches(/(?=.*[0-9])/, "Password must contain one digit")
      .matches(/(?=.*[a-z])/, "Password must contain lowercase letter")
      .matches(/(?=.*[A-Z])/, "Password must contain uppercase letter")
      .matches(/(?=.*\W)/, "Password must contain special character"),
  })
  .required();

type LoginInput = {
  email: string;
  password: string;
};

function Login() {
  const { logEmail, logIsLoading, logPassword } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const handleLogin: SubmitHandler<LoginInput> = () => {
    // e.preventDefault();
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
        setError("email", {
          type: "custom",
          message: "Email/Password does not match",
        });
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
            onSubmit={handleSubmit(handleLogin)}
            className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center"
          >
            <div className="w-full">
              <label htmlFor="email" className="pb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                value={logEmail}
                onChange={(e) => dispatch(setLogEmail(e.target.value))}
                placeholder="write Email here"
                className="input input-bordered w-full mt-1 max-w-xs"
              />
              <p className="text-red-400 text-sm font-semibold">
                {errors.email?.message}
              </p>
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
                {...register("password", { required: true })}
                value={logPassword}
                onChange={(e) => dispatch(setLogPassword(e.target.value))}
                placeholder="Write Password here"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
              <p className="text-red-400 whitespace-normal text-sm font-semibold">
                {errors.password?.message}
              </p>
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
            <div className="text-sm ">
              Don't have an account:
              <span className="font-bold cursor-pointer ps-2 text-red-400">
                <Link href="/signup">Signup</Link>
              </span>
              <div className="divider">OR</div>
            </div>
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
