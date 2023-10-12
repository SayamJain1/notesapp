import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firbase";


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
        router.push("/note");
      })
      .catch((error) => {
        console.log(error.message);
        setName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
      })
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
              <label className="font-medium" htmlFor="">username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g John Wick"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <label className="font-medium" htmlFor="">email</label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="">password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <button type="submit" className={`btn w-20 text-xs btn-sm btn-accent ${isLoading ? ' bg-opacity-60' : ''}`}>
              {isLoading ? <span className="loading loading-spinner loading-xs"></span> : 'Sign-Up'}
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
