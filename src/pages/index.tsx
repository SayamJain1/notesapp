import HomePage from "./home";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hook";

export default function Home() {
  const state = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (state.isAuth) {
      router.push("/note");
    } else {
      router.push("/home");
    }
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}
