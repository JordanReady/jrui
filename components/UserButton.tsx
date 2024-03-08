"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const UserButton = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    if (session) {
      // If a user is signed in, toggle the dropdown menu
      setShowDropdown(!showDropdown);
    } else {
      // If no user is signed in, initiate the login process
      signIn();
    }
  };

  const handleLogout = () => {
    // Log the user out and close the dropdown
    signOut();
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className={`px-4 py-2   border btn-hover border-gradient ${
          session ? "signed-in" : ""
        }`}
      >
        {session?.user?.name ? (
          <span>
            {`${session.user.name[0]}${
              session.user.name.split(" ")[1]?.[0] ?? ""
            }`}
          </span>
        ) : (
          "Login"
        )}
      </button>

      {session && showDropdown && (
        <div className="w-[169px] absolute top-10 mt-5 right-0 border-gradient border-2">
          <Link
            href="/request"
            onClick={() => setShowDropdown(false)}
            className=" btn-hover block px-4 py-2"
          >
            Request UI
          </Link>
          <Link
            href="/request"
            onClick={() => setShowDropdown(false)}
            className=" btn-hover block px-4 py-2"
          >
            Support Me
          </Link>
          <button onClick={handleLogout} className=" btn-hover block px-4 py-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
