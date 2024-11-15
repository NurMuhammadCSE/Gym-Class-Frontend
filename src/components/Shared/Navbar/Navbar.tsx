"use client";

import { useState } from "react";
import Link from "next/link";
import { getUserInfo, removeUser } from "@/Services/authServices";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch user info (you may replace this with a better authentication mechanism if available)
  const userInfo = getUserInfo();
  const router = useRouter();

  // Handler for logout
  const handleLogout = () => {
    // localStorage.removeItem("authToken"); // Adjust this based on how your token is stored
    // window.location.href = "/login"; // Redirect to login page
    removeUser();
    router.refresh();
  };

  return (
    <nav className="bg-[#133E87] text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Gym Scheduler
        </Link>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#133E87] lg:bg-transparent transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="block px-4 py-2 lg:inline lg:py-0">
              Home
            </Link>
          </li>
          <li>
            <Link href="/classes" className="block px-4 py-2 lg:inline lg:py-0">
              Classes
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 lg:inline lg:py-0">
              About Us
            </Link>
          </li>

          {/* Conditional Rendering: Dashboard & Logout */}
          {userInfo?.id ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 lg:inline lg:py-0"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 lg:inline lg:py-0 lg:bg-white lg:text-[#133E87] lg:rounded lg:px-4 lg:font-semibold"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="block px-4 py-2 lg:inline lg:py-0 lg:bg-white lg:text-[#133E87] lg:rounded lg:px-4 lg:font-semibold"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
