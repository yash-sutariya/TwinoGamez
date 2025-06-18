// eslint-disable-next-line @next/next/no-img-element
"use client";

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import { useEffect, useState } from "react";
import $ from "jquery";
import Link from "next/link";
import Gotop from "../gotop/Gotop";
import MobileUserInfo from "../../js/menu/mobileUserInfo";
import UserInfo from "../../js/menu/userInfo";

export default function Header({ logoURL, mobileLogoURL, altLogo }: any) {
  function openside() {
    var demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.style.width = "100%";
    }
  }

  function sideclose() {
    var demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.style.width = "0px";
    }
  }
  useEffect(() => {
    $(function () {
      //Scroll event
      $(window).scroll(function () {
        var scrolled: any = $(window).scrollTop();
        if (scrolled > 200) $(".go-top").fadeIn("slow");
        if (scrolled < 200) $(".go-top").fadeOut("slow");
      });

      //Click event
      $(".go-top").click(function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    });
    $(function () {
      // Scroll event
      $(window).scroll(function () {
        var scrolled: any = $(window).scrollTop();
        if (scrolled > 100) {
          $(".floting-btn, .floting-w-btn").fadeIn("slow");
        }
        if (scrolled < 100) {
          $(".floting-btn, .floting-w-btn").fadeOut("slow");
        }
      });

      // Click event
      $(".floting-btn, .floting-w-btn").click(function () {
        $("html, body").animate({ scrollTop: "0" }, 100);
      });
    });
  }, []);

  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleSetActiveLink = (link: any) => {
    setActiveLink(link);
  };

  return (
    <>
      <header>
        {/* <div className="container-fluid main p-0 m-0">
          <div className="d-lg-block d-none log">
            <Link href="/">
              <div>
                <img src={logoURL} alt={altLogo} className="header-logo-170" />
              </div>
            </Link>
          </div>
          <div className="d-lg-none d-sm-block t0 log1">
            <Link href="/">
              <div>
                <img src={logoURL} alt={altLogo} className="header-logo-160" />
              </div>
            </Link>
          </div>
          <div className="lang">
            <ul className="mb-3">
              <li>
                <Link href="/" passHref>
                  <p
                    className={activeLink === "/" ? "m-0 active" : "m-0"}
                    onClick={() => handleSetActiveLink("/")}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/fitit/digital-marketing-agency" passHref>
                  <p
                    className={
                      activeLink === "/fitit/digital-marketing-agency"
                        ? "m-0 active"
                        : "m-0"
                    }
                    onClick={() =>
                      handleSetActiveLink("/fitit/digital-marketing-agency")
                    }
                  >
                    FitIT
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/takshak/business-consulting-services" passHref>
                  <p
                    className={
                      activeLink === "/takshak/business-consulting-services"
                        ? "m-0 active"
                        : "m-0"
                    }
                    onClick={() =>
                      handleSetActiveLink(
                        "/takshak/business-consulting-services"
                      )
                    }
                  >
                    Takshak
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/atoz/financial-advisory-services" passHref>
                  <p
                    className={
                      activeLink === "/atoz/financial-advisory-services"
                        ? "m-0 active"
                        : "m-0"
                    }
                    onClick={() =>
                      handleSetActiveLink("/atoz/financial-advisory-services")
                    }
                  >
                    AtoZ Finance
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              &times;
            </span>
            <Link
              href="/"
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={mobileLogoURL}
                alt={altLogo}
                className="header-logo-35"
              />
            </Link>
            <Link href="/">Home</Link>
            <Link href="/fitit/digital-marketing-agency">FitIT</Link>
            <Link href="/takshak/business-consulting-services">Takshak</Link>
            <Link href="/atoz/financial-advisory-services">AtoZ Finance</Link>
            <ul className="mobileUserInfo aa">
              <MobileUserInfo />
            </ul>
          </div>
          <button
            className="d-lg-none d-sm-block btnn"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
            onClick={openside}
          >
            &#9776;
          </button>
          <div className="login d-lg-block d-none">
            <ul>
              <li style={{ fontSize: "18px" }} className="ddmenu userInfo">
                <UserInfo />
              </li>
            </ul>
          </div>
        </div> */}
        <div className="header-inner d-flex mx-auto">
          <div id="logo" className="d-md-4">
            <a href="https://www.tiguandesign.com/gameleon/dark/">
              <img
                src="/images/games/logo_gameleon3.png"
                width="250"
                height="100"
                alt="Arcade Theme"
                title="Arcade Theme"
              />
            </a>
          </div>
          <div className="col-md-2"></div>
        </div>
      </header>
      <Gotop />
    </>
  );
}
