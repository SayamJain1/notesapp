import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div className="hero h-[calc(100vh-11vh)] bg-base-200 px-0 lg-px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/notes.jpg"
          className="lg-max-w-sm rounded-lg shadow-2xl"
          width={300}
          height={300}
          alt="hero image"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
