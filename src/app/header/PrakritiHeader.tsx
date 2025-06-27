"use client";
// eslint-disable-next-line @next/next/no-img-element

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/media.css";
import "../../css/prakriti_by_jiya/style.css";
import "../../js/popper.min.js";
import { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";
import PrakritiGoTop from "../gotop/PrakritiGoTop";

export default function PrakritiHeader({
  logoURL,
  mobileLogoURL,
  altLogo,
}: any) {
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
      <header className="mb-10 pb-10">
        <div className="container-fluid">
          <div className="prakriti-main site-header wow animate__animated  animate__fadeInDownBig">
            <div className="container">
              <div className="">
                <div className="d-flex flex-wrap">
                  <p className="d-flex mb-0">
                    <i className="fa fa-envelope-o mt-1" aria-hidden="true"></i>
                    &nbsp;&nbsp;
                    <a href="mailto:infoprakritibyjiya@gmail.com">
                      infoprakritibyjiya@gmail.com
                    </a>
                  </p>
                </div>
                <div className="ms-auto d-lg-block d-none">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a
                        href="https://www.facebook.com/jaynaupadhyay"
                        className="social-icon-link "
                      >
                        <i
                          className="fa fa-facebook-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://instagram.com/prakritibyjiya?igshid=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        className="social-icon-link "
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                        className="social-icon-link "
                      >
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <Link
                        className="nav-link custom-btn custom-border-btn btn"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf28Cpa51-m15CX0TUtWcBzIH6Xt6T9gtBdcuTwuvNkVpWHyg/viewform?usp=sf_link"
                      >
                        Get an Consultations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0 m-0">
              <Link
                className="float-button"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=9016085949&text=Hello I want to know more about GCS Consulting service"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Message</span>
              </Link>
              <div className="container-fluid main py-5 m-0">
                <div className="d-lg-block d-none log">
                  <Link href="/prakriti_by_jiya">
                    <div>
                      <img
                        src={logoURL}
                        alt={altLogo}
                        className="header-logo-80"
                      />
                    </div>
                  </Link>
                </div>
                <div className="d-lg-none d-sm-block t0 log1">
                  <Link href="/prakriti_by_jiya">
                    <div>
                      <img
                        src={logoURL}
                        alt={altLogo}
                        className="header-logo-80"
                      />
                    </div>
                  </Link>
                </div>
                <div className="lang">
                  <ul>
                    <li>
                      <Link href="#top">
                        <p className="m-0 active">Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#about">
                        <p className="m-0">About</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#section_4">
                        <p className="m-0">Service</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact">
                        <p className="m-0">Contact</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf28Cpa51-m15CX0TUtWcBzIH6Xt6T9gtBdcuTwuvNkVpWHyg/viewform?usp=sf_link">
                        <p className="ms-3 custom-btn p-0 m-0">
                          Get an Consultations
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="side bg-white" id="demo">
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
                      style={{ width: "160px" }}
                    />
                  </Link>
                  <Link style={{ color: "#000" }} href="#top">
                    Home
                  </Link>
                  <Link style={{ color: "#000" }} href="#about">
                    About
                  </Link>
                  <Link style={{ color: "#000" }} href="#section_4">
                    Service
                  </Link>
                  <Link style={{ color: "#000" }} href="#contact">
                    Contact
                  </Link>
                </div>
                <button
                  className="d-lg-none d-sm-block btnn"
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "black",
                  }}
                  onClick={openside}
                >
                  &#9776;
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <PrakritiGoTop />
    </>
  );
}
