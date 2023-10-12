import { auth } from "@/firbase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import GoogleButton from "react-google-button";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail('')
        setPassword('')
        setIsLoading(false)
        router.push('/note')
      }).catch((err) => {
        console.log(err.code)
        console.log(err.message)
        setEmail('')
        setPassword('')
        setIsLoading(false)
      })
  }

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        router.push('/note')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-xl font-bold">Login to access Notebook</h2>
        <div className="card max-w-[1200px] bg-base-100 shadow-xl">
          <form onSubmit={handleLogin} className="py-10 px-4 md:px-8 flex flex-col gap-7 items-center justify-center">
            <div className="w-full">
              <label htmlFor="email" className="pb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="write Email here"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Write Password here"
                className="input mt-1 input-bordered w-full max-w-xs"
              />
            </div>
            <button className={`w-20 btn text-xs btn-sm btn-accent ${isLoading ? ' bg-opacity-60' : ''}`}>
              {isLoading ? <span className="loading loading-spinner loading-xs"></span> : 'Login'}
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
