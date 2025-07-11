"use client";

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header({ logoURL, mobileLogoURL, altLogo }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md w-full container-fluid">
      <div className="container background">
        <div className="header-inner  w-auto h-auto flex flex-col sm:flex-row items-center justify-between mx-auto p-3">
          {/* Logo */}
          <div
            id="logo"
            className="w-full sm:w-auto  flex justify-center items-center sm:justify-center"
          >
            <a
              href="https://www.tiguandesign.com/gameleon/dark/"
              className="flex justify-center"
            >
              <img
                src="/images/games/logo_gameleon3.png"
                width="200"
                height="80"
                alt="Arcade Theme"
                title="Arcade Theme"
                className="h-100"
              />
            </a>
          </div>

          {/* Spacer or content if needed */}
          <div className="hidden sm:block sm:w-1/3"></div>
        </div>
        {/* Top bar */}
        <div className="container mx-auto p-0">
          <div className="container mx-auto">
            <div className="flex justify-between sm:justify-end space-x-6">
              <a
                href="/game-page"
                className="flex items-center space-x-1 text-red-500 hover:text-red-500"
              >
                <i
                  className="fa fa-clock text-2xl mr-1"
                  style={{ fontSize: "15px" }}
                ></i>
                <span
                  className="uppercase font-semibold text-white"
                  style={{ fontSize: "15px" }}
                >
                  Latest
                </span>
              </a>
              <a
                href="https://www.tiguandesign.com/gameleon/dark/most-popular-games/"
                className="flex items-center space-x-1 text-red-500 hover:text-red-500"
              >
                <i
                  className="fa fa-star text-2xl mr-1"
                  style={{ fontSize: "15px" }}
                ></i>
                <span
                  className="uppercase font-semibold text-white"
                  style={{ fontSize: "15px" }}
                >
                  Popular
                </span>
              </a>
              <a
                href="https://www.tiguandesign.com/gameleon/dark/most-played-games/"
                className="flex items-center space-x-1 text-red-500 hover:text-red-500"
              >
                <i
                  className="fa fa-fire text-2xl mr-1"
                  style={{ fontSize: "15px" }}
                ></i>
                <span
                  className="uppercase font-semibold text-white"
                  style={{ fontSize: "15px" }}
                >
                  Hot
                </span>
              </a>
            </div>
          </div>

          {/* Navbar */}
          <nav className=" shadow-sm container-fluid p-0">
            <div className="mx-auto  flex justify-between items-center h-14">
              {/* Logo (optional) */}
              <div className="text-white font-bold text-lg sm:hidden">
                <i className="fa fa-gamepad mr-2" /> GAMELON
              </div>

              {/* Hamburger for mobile */}
              <div className="sm:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white text-xl focus:outline-none"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              {/* Main Menu */}
              <div className="hidden sm:flex items-center space-x-6 text-white">
                <a
                  href="/"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-home mr-1"></i>
                  <span className="uppercase font-semibold ">Home</span>
                  <i className="fa fa-caret-down ml-1 text-xs"></i>
                </a>
                <a
                  href="/category/arcade"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-gamepad mr-1"></i>
                  <span className="uppercase font-semibold">Arcade</span>
                </a>
                <a
                  href="/category/adventure"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-bomb mr-1"></i>
                  <span className="uppercase font-semibold">Adventure</span>
                </a>
                <a
                  href="/category/action"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-car-crash mr-1"></i>
                  <span className="uppercase font-semibold">Action</span>
                </a>
                <a
                  href="/most-played-games"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-fire mr-1"></i>
                  <span className="uppercase font-semibold">Most Played</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-white hover:text-red-500"
                >
                  <i className="fa fa-mobile-alt mr-1"></i>
                  <span className="uppercase font-semibold">Game Format</span>
                  <i className="fa fa-caret-down ml-1 text-xs"></i>
                </a>
              </div>

              {/* Search Icon */}
              <div className="hidden sm:block text-white">
                <i className="fas fa-search text-lg cursor-pointer hover:text-red-500"></i>
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
                    🏠 Home
                  </a>
                  <a
                    href="/category/arcade"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    🎮 Arcade
                  </a>
                  <a
                    href="/category/adventure"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    🧭 Adventure
                  </a>
                  <a
                    href="/category/action"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    ⚔️ Action
                  </a>
                  <a
                    href="/most-played-games"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    🔥 Most Played
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-white transition duration-200"
                  >
                    🎲 Game Format
                  </a>

                  <div className="pt-4 border-t border-red-700 flex items-center gap-2 text-sm text-gray-300 hover:text-white transition duration-200">
                    <i className="fas fa-search text-red-500" />
                    <span>Search</span>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
