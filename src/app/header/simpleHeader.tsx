"use client";
// eslint-disable-next-line @next/next/no-img-element

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";
import Gotop from "../gotop/Gotop";
import MobileUserInfo from "../../js/menu/mobileUserInfo";
import UserInfo from "../../js/menu/userInfo";

export default function SimpleHeader({ logoURL, mobileLogoURL, altLogo }: any) {
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

  return (
    <>
      <header>
        <Link
          className="float-button"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9016085949&text=Hello I want to know more about GCS Consulting service"
        >
          <i className="fab fa-whatsapp"></i>
          <span>Message</span>
        </Link>
        <div className="container-fluid main p-0 m-0">
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
            <ul></ul>
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
        </div>
      </header>
      <Gotop />
    </>
  );
}
