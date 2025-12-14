"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header({ logoURL, mobileLogoURL, altLogo }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md w-full container-fluid">
      <div className="background">
        {/* Top bar */}
        <nav className=" shadow-sm container-fluid p-0">
          <div className="mx-auto p-0 bg-zinc-900">
            <div className="flex justify-between mx-4 items-center h-14">
              {/* Logo - Left */}
              <a href="/" className="flex items-center">
                <img
                  src="/images/games/logo_gameleon3.png"
                  width="200"
                  height="80"
                  alt="Twino Gamez"
                  title="Twino Gamez"
                  className="h-100"
                />
              </a>

              {/* Hamburger for Mobile */}
              <div className="sm:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white text-xl focus:outline-none"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              {/* Main Menu - Right */}
              <div className="hidden sm:flex items-center space-x-6 text-white">
                <a
                  href="/"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <span className="uppercase font-semibold">Home</span>
                </a>

                <a
                  href="/about-us"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <span className="uppercase font-semibold">About Us</span>
                </a>

                <a
                  href="/for-developer"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <span className="uppercase font-semibold">
                    For Developers
                  </span>
                </a>

                <a
                  href="/contact-us"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <span className="uppercase font-semibold">Contact Us</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="animate-slide-down">
              {menuOpen && (
                <div className="sm:hidden px-4 pb-6 pt-4 bg-black text-white space-y-3 shadow-lg border-t border-red-700">
                  <a
                    href="/"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="/about-us"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    About Us
                  </a>
                  <a
                    href="/for-developer"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    For Developers
                  </a>
                  <a
                    href="/contact-us"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
