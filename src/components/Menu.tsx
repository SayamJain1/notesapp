import Link from "next/link";
import React from "react";

type MenuProps = {
  auth: Boolean;
  signOutUser: () => void;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

function Menu({ showMenu, setShowMenu, auth, signOutUser }: MenuProps) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {!auth ? (
          <>
            <Link href="/login">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="btn btn-sm btn-ghost"
              >
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="btn btn-sm btn-ghost"
              >
                Signup
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/note">
              <button className="btn btn-sm btn-ghost">Note</button>
            </Link>
            <button onClick={signOutUser} className="btn btn-sm btn-ghost">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
