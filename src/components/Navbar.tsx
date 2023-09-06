import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("luxury");
      document.documentElement.setAttribute("data-theme", "luxury");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12">
      <div className="flex-1">
        <h1 className="text-lg font-bold mx-4">Notes app</h1>
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
