"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10">

        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 select-none"
        >
          AAVORide
        </Link>

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
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e8361a")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FF3E1D")}
            onMouseDown={e => (e.currentTarget.style.backgroundColor = "#cc2f16")}
            onMouseUp={e => (e.currentTarget.style.backgroundColor = "#e8361a")}
          >
            Sign up
          </Link>
        </div>

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

      {/* for mobile */}
      {menuOpen && (
        <div className="sm:hidden mt-2 pb-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
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