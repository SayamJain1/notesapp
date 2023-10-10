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
import Menu from "./Menu";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false)

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "luxury" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const HandleOpenMenu = () => {
    setShowMenu(!showMenu)
  }

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
      <div>
        <div>
          <div className="hidden sm:block">

            <div className="flex gap-2 justify-center">
              <button className="btn btn-sm btn-ghost">Login</button>
              <button className="btn btn-sm btn-ghost">SignUp</button>
            </div>
          </div>
          <div className="sm:hidden relative flex justify-center">
            <label className="swap">
              <input onClick={HandleOpenMenu} type="checkbox" />
              {showMenu ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg> : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>}

            </label>
            {showMenu && <div className=" z-10 bg-gray-100 rounded-xl shadow-xl p-2 absolute top-14 -left-5"><Menu showMenu={showMenu} setShowMenu={setShowMenu} /></div>}
          </div>
        </div>
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
