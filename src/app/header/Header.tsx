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
        <div className="header-inner  w-auto h-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div
            id="logo"
            className="w-full sm:w-auto  flex justify-center items-center sm:justify-center"
          >
            <a
              href="/"
              className="flex justify-center"
            >
              <img
                src="/images/games/logo_gameleon3.png"
                width="200"
                height="80"
                alt="Twino Gamez"
                title="Twino Gamez"
                className="h-100"
              />
              {/* <img
                src="/images/games/twino-logo.png"
                alt="Twino Gamez"
                title="Twino Gamez"
                className="h-100"
              /> */}
            </a>
          </div>

          {/* Spacer or content if needed */}
          <div className="hidden sm:block sm:w-1/3"></div>
        </div>
      </div>
    </header >
  );
}
