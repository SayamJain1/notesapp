import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-xl font-bold">Login to access Notebook</h2>
        <div className="card max-w-[1200px] bg-base-100 shadow-xl">
          <form className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center">
            <div>
              <label htmlFor="username" className="pb-1 font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="write Username here"
                className="input input-bordered w-full mt-1 max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="password" className="pb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Write Password here"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn text-xs btn-sm btn-accent">Log-in</button>
            <p className="text-sm">
              Don't have an account:
              <span className="font-bold cursor-pointer ps-2 text-red-400">
                <Link href="/signup">Signup</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
