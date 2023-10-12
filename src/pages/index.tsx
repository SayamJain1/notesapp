import HomePage from "./home";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firbase";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        router.push('/note')
        console.log(user)
      } else {
        router.push('/home')
      }
    });
  }, [])
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
    </div>
  );
}
