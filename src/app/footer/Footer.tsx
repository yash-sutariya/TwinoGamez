"use client";
// eslint-disable-next-line @next/next/no-img-element

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../css/all.min.css";
import "../../js/popper.min.js";
import { useEffect } from "react";
import Image from "next/image";
import $ from "jquery";
import Link from "next/link";

export default function Footer() {
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
    <footer className="bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-sec">
              <div className="logo d-none d-md-block">
                <img
                  src="/images/logos/gcs-logo-normal.png"
                  alt="GCS"
                  className="header-logo-180"
                />
              </div>
              <div className="logo d-block d-md-none">
                <img
                  src="/images/logos/gcs-logo-normal.png"
                  alt="GCS"
                  className="header-logo-180"
                />
              </div>
              <p>
                Gomzi Consulting Services (GCS) is a leading group managing
                diverse businesses, offering customized solutions for growth and
                profitability.
              </p>
              <ul className="mt-4">
                <li>
                  <Link href="tel:+916354051487">
                    <i className="fas fa-phone-alt"></i> +91 97731 74522
                  </Link>
                </li>
                <li>
                  <Link href="mailto:gomziconsultingservices@gmail.com">
                    <i className="fas fa-envelope"></i>
                    gomziconsultingservices@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/BcrHe5i8AC3U6uYq5"
                    target="_blank"
                  >
                    <i className="fas fa-map-marker-alt"></i> 2, Abhushan
                    Bunglows, Near Alkapuri Char Rasta, Katargam, Surat - 395004
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6 mt-md-5 mt-3">
            <div className="footer-test ml-lg-3">
              <p>Links</p>
              <ul className="mt-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/fitit/digital-marketing-agency">FitIT</Link>
                </li>
                <li>
                  <Link href="/takshak/business-consulting-services">
                    Takshak
                  </Link>
                </li>
                <li>
                  <Link href="/atoz/financial-advisory-services">
                    A to Z Finance
                  </Link>
                </li>
                <li>
                  <Link href="/business-blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6 mt-md-5 mt-3">
            <div className="footer-test ml-lg-4">
              <p>Information</p>
              <ul className="mt-4">
                <li>
                  <Link href="/term-and-conditions">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="/return-refund">Return and Refund</Link>
                </li>
                <li>
                  <Link href="/cancellation-policy">Cancellation Policy</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mt-md-5 mt-3 p-0">
            <div className="footer-test mr-md-3 ml-3 ml-md-0">
              <p>Social Media</p>
              <div className="f_social_icon mt-md-4 mt-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100090555890586"
                  className="fab fa-facebook"
                  target="_blank"
                ></Link>
                <Link
                  href="https://www.instagram.com/gomziconsultingservices/"
                  className="fab fa-instagram"
                  target="_blank"
                ></Link>
                <Link
                  href="https://www.youtube.com/@gomziconsultingservices/featured"
                  className="fab fa-youtube"
                  target="_blank"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
