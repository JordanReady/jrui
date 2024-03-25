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
        className={`px-3 py-2 border btn-hover border-gradient ${
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
        <div className="w-[169px] absolute top-10 mt-5 right-0 border-gradient border-2 bg-white dark:bg-[#020617]">
          <Link
            href="/ideas"
            onClick={() => setShowDropdown(false)}
            className="w-full text-center block px-4 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 duration-100"
          >
            Request UI
          </Link>
          {session && session.user?.id === "PqMnl7Wc32CVIzhMAic8" && (
            <>
              <Link
                href="/admin"
                onClick={() => setShowDropdown(false)}
                className="w-full text-center block px-4 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 duration-100"
              >
                Admin
              </Link>
              <Link
                href="/demo"
                onClick={() => setShowDropdown(false)}
                className="w-full text-center block px-4 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 duration-100"
              >
                Demo
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="w-full text-center block px-4 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-red-700 hover:to-red-500 duration-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
