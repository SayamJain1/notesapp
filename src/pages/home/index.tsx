import Image from "next/image";
import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200 sm:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/notes.jpg"
          className="lg-max-w-sm rounded-lg shadow-2xl"
          width={300}
          height={300}
          alt="hero image"
        />
        <div>
          <h1 className="text-5xl font-bold">Your Web notebook!</h1>
          <div className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos
            excepturi, aut tenetur ullam ident velit quae rem sint volup ?
          </div>
          <Link href="/signup">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
