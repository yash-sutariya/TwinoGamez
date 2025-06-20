"use client";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";

export default function GamePage() {
  const relatedItems = [
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "New Battlefield Season Starts Soon",
      date: "Feb 25, 2021",
      likes: 4,
      plays: 4971,
    },
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "Our Highest Review Scores of 2020",
      date: "Feb 25, 2021",
      likes: 10,
      plays: 4976,
    },
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "This Game Will Keep You Up All Night",
      date: "Feb 25, 2021",
      likes: 6,
      plays: 4999,
    },
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "Ninja Has an Official Fortnite Skin Now",
      date: "Feb 25, 2021",
      likes: 13,
      plays: 2143,
    },
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "Ninja Has an Official Fortnite Skin Now",
      date: "Feb 25, 2021",
      likes: 13,
      plays: 2143,
    },
    {
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      title: "Ninja Has an Official Fortnite Skin Now",
      date: "Feb 25, 2021",
      likes: 13,
      plays: 2143,
    },
  ];

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        (iframe as any).msRequestFullscreen();
      }
    }
  };


  return (
    <div>
      <div className="m-3 mt-5">
        <Header />
      </div>

      <div className="container-fluid">
        <div className="container p-0 mx-auto">
          <div className="bg-[#1a1a1a] text-white min-h-screen p-4 flex flex-col">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-700 pb-3 gap-2">
              <h1 className="text-lg sm:text-xl font-bold">
                <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                  Play Traffic Racer Game!
                </span>
              </h1>
              <button
                className="bg-red-600 text-white p-4 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                onClick={handleFullscreen}
              >
                <i className="fas fa-expand-arrows-alt"></i> PLAY FULL SCREEN
              </button>
            </div>

            {/* Game Container */}
            <div className="flex-grow flex justify-center items-center py-4">
              <div
                className="w-full max-w-[960px] aspect-video bg-black rounded overflow-hidden shadow-lg"
                onClick={handleFullscreen}
              >
                <iframe
                  id="game-frame"
                  ref={iframeRef}
                  src="https://appzonellc.website/H5/TrafficRacer/index.html"
                  className="w-full h-full border-none"
                  title="Traffic Racer Game"
                  allowFullScreen
                  tabIndex={0}
                ></iframe>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4 gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-white">
                <i className="fas fa-chevron-left"></i>
                <span className="font-semibold uppercase">Previous Game</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <span className="font-semibold uppercase">Next Game</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Games */}
      <div className="container-fluid">
        <div className="container mx-auto">
          <div className="bg-[#161616] p-4 w-full">
            <h2 className="text-white text-2xl font-bold border-l-4 border-red-600 pl-2 mb-4">
              Related Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-md overflow-hidden shadow-md transition-transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="p-4">
                    <p
                      className="text-white font-bold text-sm line-clamp-2"
                      style={{ fontSize: "16px" }}
                    >
                      {item.title}
                    </p>
                    <div className="text-gray-400 text-xs mt-2 flex flex-wrap items-center gap-2">
                      <span style={{ color: "#f63a3a", fontSize: "16px" }}>
                        {item.date}
                      </span>
                      <span>
                        <i
                          className="far fa-heart"
                          style={{ fontSize: "16px" }}
                        />{" "}
                        {item.likes} Likes
                      </span>
                      <span>
                        <i
                          className="fas fa-trophy"
                          style={{ fontSize: "16px" }}
                        />{" "}
                        {item.plays} Plays
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
