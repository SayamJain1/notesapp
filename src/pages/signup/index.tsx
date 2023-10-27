import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firbase";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  removeSignIsLoading,
  setSignEmail,
  setSignIsLoading,
  setSignName,
  setSignPassword,
} from "@/redux/features/AuthSlice";
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

type SignInInput = {
  email: string;
  password: string;
};

function Signup() {
  const { signEmail, signIsLoading, signName, signPassword } = useAppSelector(
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
  const handleSubmitForm = () => {
    dispatch(setSignIsLoading());
    createUserWithEmailAndPassword(auth, signEmail, signPassword)
      .then((userCredential) => {
        dispatch(setSignEmail(""));
        dispatch(setSignPassword(""));
        dispatch(setSignName(""));
        dispatch(removeSignIsLoading());
        router.push("/note");
      })
      .catch((error) => {
        setError("email", {
          type: "custom",
          message: "Email already in use/login instead",
        });
        dispatch(setSignEmail(""));
        dispatch(setSignPassword(""));
        dispatch(setSignName(""));
        dispatch(removeSignIsLoading());
      });
  };
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-xl font-bold">SignUp to access Notebook</h2>
        <div className="card max-w-[1200px] bg-base-100 shadow-xl">
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center"
          >
            <div>
              <label className="font-medium" htmlFor="">
                username
              </label>
              <input
                type="text"
                value={signName}
                onChange={(e) => dispatch(setSignName(e.target.value))}
                placeholder="e.g John Wick"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                email
              </label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                {...register("email", { required: true })}
                value={signEmail}
                onChange={(e) => dispatch(setSignEmail(e.target.value))}
                className="input mt-1 input-bordered w-full max-w-xs"
              />
              <p className="text-red-400 text-sm font-semibold">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                value={signPassword}
                onChange={(e) => dispatch(setSignPassword(e.target.value))}
                className="input mt-1 input-bordered w-full max-w-xs"
              />
              <p className="text-red-400 text-sm font-semibold">
                {errors.password?.message}
              </p>
            </div>
            <button
              type="submit"
              className={`btn w-20 text-xs btn-sm btn-accent ${
                signIsLoading ? " bg-opacity-60" : ""
              }`}
            >
              {signIsLoading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Sign-Up"
              )}
            </button>
            <div className="text-sm">
              If you already have an account:{" "}
              <span className="font-bold cursor-pointer ps-2 text-red-400">
                <Link href="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
