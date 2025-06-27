"use client";
// eslint-disable-next-line @next/next/no-img-element

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/media.css";
import "../../css/all.min.css";
import "../../js/popper.min.js";
import { useEffect } from "react";
import Image from "next/image";
import $ from "jquery";
import Link from "next/link";

export default function PrakritiFooter() {
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
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <img
              src="/images/prakriti_by_jiya/prakriti-by-jiya-white.png"
              className="f-logo img-fluid"
              width="80%"
              alt="prakriti-by-jiya"
            />
          </div>

          <div className="col-lg-3 col-md-3 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Quick Links</h5>

            <ul className="footer-menu">
              <li className="footer-menu-item">
                <Link
                  href="#"
                  className="footer-menu-link prakriti-footer-menu-link"
                >
                  Home
                </Link>
              </li>

              <li className="footer-menu-item">
                <Link
                  href="#"
                  className="footer-menu-link prakriti-footer-menu-link"
                >
                  About
                </Link>
              </li>

              <li className="footer-menu-item">
                <Link
                  href="#"
                  className="footer-menu-link prakriti-footer-menu-link"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Social Media</h5>

            <ul className="social-icon">
              <li className="social-icon-item" style={{ textAlign: "center" }}>
                <a
                  href="https://www.facebook.com/jaynaupadhyay"
                  className="social-icon-link"
                  target="_blank"
                >
                  <img
                    src="/images/prakriti_by_jiya/facebook.png"
                    width="15px"
                    className="mb-2"
                    alt="facebook"
                  />
                </a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://instagram.com/prakritibyjiya?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  className="social-icon-link "
                >
                  <img
                    src="/images/prakriti_by_jiya/instagram.png"
                    width="15px"
                    className="mb-2"
                    alt="instagram"
                  />
                </a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                  className="social-icon-link "
                >
                  <img
                    src="/images/prakriti_by_jiya/linkedin.png"
                    width="15px"
                    className="mb-2"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-12 mx-auto">
            <h5 className="site-footer-title mb-3">Contact Infomation</h5>

            <p className="text-white d-flex mb-2">
              <i className="fa fa-phone mt-1" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <a
                href="tel:7600091041"
                className="site-footer-link prakriti-site-footer-link"
              >
                +91 76000 91041
              </a>
            </p>

            <p className="text-white d-flex">
              <i className="fa fa-envelope-o mt-1" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <a
                href="mailto:infoprakritibyjiya@gmail.com"
                className="site-footer-link prakriti-site-footer-link"
              >
                infoprakritibyjiya@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 text-center">
              <p className="copyright-text mb-0">
                Copyright © 2023 <a href="#"></a>
                Design{" "}
                <Link
                  href="https://gcsconsultant.com/digital-marketing-agency"
                  target="_blank"
                >
                  By FITIT Official
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
