// import { useState } from "react";
// import Image from "next/image";

// const Navbar = () => {
//   const [theme, setTheme] = useState("light");

//   const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setTheme("luxury");
//       document.documentElement.setAttribute("data-theme", "luxury");
//     } else {
//       setTheme("light");
//       document.documentElement.setAttribute("data-theme", "light");
//     }
//   };

//   return (
//     <div className="navbar bg-base-100 shadow-sm lg:px-12">
//       <div className="flex-1">
//         <h1 className="text-lg font-bold mx-4">Notes</h1>
//       </div>
//       <div className="flex-none">
//         <button className="btn btn-square btn-ghost">
//           <label className="swap swap-rotate w-12 h-12">
//             <input
//               type="checkbox"
//               onChange={handleToggle}
//               checked={theme === "light" ? false : true}
//             />
//             <Image
//               src="/sun.png"
//               width={24}
//               height={24}
//               alt="Light"
//               className="swap-on"
//             />
//             <Image
//               src="/moon.png"
//               width={24}
//               height={24}
//               alt="Dark"
//               className="swap-off"
//             />
//           </label>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "luxury" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-12">
      <div className="flex-1">
        <h1 className="text-lg font-bold mx-4">
          <Link href="/home">Notes</Link>
        </h1>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <Image
              src="/sun.png"
              width={24}
              height={24}
              alt="Light"
              className="swap-on"
            />
            <Image
              src="/moon.png"
              width={24}
              height={24}
              alt="Dark"
              className="swap-off"
            />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
