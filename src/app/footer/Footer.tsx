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

  // footer

  const tags = [
    "ARCADE",
    "HTML5",
    "CARS",
    "AVENTURE",
    "RACING",
    "WORDPRESS",
    "GIRLS",
    "GAMES",
  ];

  const RecentPosts = [
    {
      title: "New Battlefield Season Starts Soon",
      date: "Feb 25, 2021",
      plays: 4971,
    },
    {
      title: "Our Highest Review Scores of 2020",
      date: "Feb 25, 2021",
      plays: 4976,
    },
    {
      title: "This Game will Keep You up All Night",
      date: "Feb 25, 2021",
      plays: 4996,
    },
  ];

  return (
    <footer>
      <div className="container-fluid  text-white ">
        <div className="container background p-3 pt-5">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                <span className="text-danger">GAME</span>
                <span className="text-white">LEON</span>
              </h1>
              <p className="text-muted">
                Gameleon is a <strong>WordPress arcade theme</strong> for online
                games, gaming, HTML5 games, magazine, newspaper, reviews or
                blogging site.
              </p>
              <p className="text-muted">
                You can have your own unique gaming site using our WordPress
                Arcade Theme and impress your online players with this fully
                functional WordPress Theme for Online Games.
              </p>
              <p className="text-muted">
                Of course, you can use it for any other purpose: magazine, blog,
                newspaper, editorial or review site.
              </p>
            </div>

            <div className="col-lg-4 mb-4">
              <h1 className="text-lg sm:text-xl font-bold mb-6">
                <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                  Recent Posts
                </span>
                <span className="text-danger fw-bold fst-italic ms-2">
                  BEST
                </span>
              </h1>
              {RecentPosts.map((post, index) => (
                <div key={index} className="mb-4">
                  <h6 className="text-white fw-bold mb-1">{post.title}</h6>
                  <div className="text-danger small mb-1">{post.date}</div>
                  <div className="text-muted small">
                    <i className="fas fa-trophy me-1 text-muted"></i>
                    {post.plays} Plays
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="mb-4 rounded">
                <p className="mb-2 small">
                  Get the best games news into your inbox!
                </p>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="ENTER YOUR EMAIL"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <button className="btn btn-danger fw-bold px-3">
                    Subscribe
                  </button>
                </div>
              </div>

              <h3 className="fw-bold mb-3">
                <span className="text-danger me-2">|</span>
                Tag Cloud
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-dark text-white px-3 py-1 rounded small"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
