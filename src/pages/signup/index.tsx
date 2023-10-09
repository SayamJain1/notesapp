import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Signup() {
  const router = useRouter();
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/note");
  };
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-xl font-bold">SignUp to access Notebook</h2>
        <div className="card max-w-[1200px] bg-base-100 shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center"
          >
            <div>
              <label htmlFor="">username</label>
              <input
                type="text"
                placeholder="e.g John Wick"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">email</label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="">password</label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button type="submit" className="btn text-xs btn-sm btn-accent">
              Sign-Up
            </button>
            <p className="text-sm">
              If you already have an account:{" "}
              <span className="font-bold cursor-pointer ps-2 text-red-400">
                <Link href="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
