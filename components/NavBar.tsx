"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 sm:px-8 lg:px-10 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10">

        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 select-none"
        >
          AAVORide
        </Link>

        {/* desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-1.5"
          >
            Log in
          </Link>
          <Link
            href="#signup"
            className="text-sm font-semibold text-white transition-colors px-4 py-1.5 rounded-md"
            style={{ backgroundColor: "#FF3E1D" }}
          >
            Sign up
          </Link>
        </div>

        {/* hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg px-4 py-3 flex flex-col gap-2">
          <Link
            href="#login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="#signup"
            className="text-sm font-semibold text-white transition-colors px-4 py-2 rounded-md text-center"
            style={{ backgroundColor: "#FF3E1D" }}
            onClick={() => setMenuOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}