"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Image from "next/image";

// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import { Link } from "react-scroll";

export default function GamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };


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

  const relatedGames = [
    { title: "Traffic Racer", image: "/game-logo-webp/1.webp" },
    { title: "Brick Breaker Unicorn", image: "/game-logo-webp/2.webp" },
    { title: "Air Warfare", image: "/game-logo-webp/3.webp" },
    { title: "Ninja Run", image: "/game-logo-webp/4.webp" },
    { title: "Gold Miner", image: "/game-logo-webp/5.webp" },
    { title: "Fruit Slasher", image: "/game-logo-webp/6.webp" },
    { title: "Stick Monkey", image: "/game-logo-webp/7.webp" },
    { title: "Space Purge", image: "/game-logo-webp/8.webp" },
    { title: "Shoot Robbers", image: "/game-logo-webp/9.webp" },
    { title: "Splishy Fish", image: "/game-logo-webp/10.webp" },
    { title: "Speed Racer", image: "/game-logo-webp/11.webp" },
    { title: "Duck Shooter", image: "/game-logo-webp/12.webp" },
    { title: "Traffic", image: "/game-logo-webp/13.webp" },
    { title: "Kingdom Defense", image: "/game-logo-webp/14.webp" },
    { title: "Candy Super Lines", image: "/game-logo-webp/15.webp" },
    { title: "Fruit Snake", image: "/game-logo-webp/16.webp" },
    { title: "Super Color Lines", image: "/game-logo-webp/17.webp" },
    { title: "Pool 8 Ball", image: "/game-logo-webp/18.webp" },
    { title: "Mummy Candies", image: "/game-logo-webp/19.webp" },
    { title: "Mad Fish", image: "/game-logo-webp/20.webp" },
    { title: "Easter Memory", image: "/game-logo-webp/21.webp" },
    { title: "Forest Brothers", image: "/game-logo-webp/22.webp" },
    { title: "Tank Defender", image: "/game-logo-webp/23.webp" },
    { title: "Angry Cats", image: "/game-logo-webp/24.webp" }
  ];


  return (
    <div>
      <Header/>

      <div className="background-wrapper">
        <img src="/images/background.png" alt="" className="background-image" />
      </div>

      <div className="container-fluid">
        <div className="container background p-0 mx-auto">
          <div className=" text-white p-3 flex flex-col">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-2 py-2  bg-black">
              <div className="flex justify-center items-center p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-red-600 pl-2">Play Traffic Racer Game !</span>
                </h1>
              </div>
              <div className="flex justify-content-center gap-3">
                <button
                  className="bg-red-600 text-white p-2 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                  onClick={handleOpenModal}
                >
                  <i className="fas fa-gamepad"></i> OPEN GAME
                </button>
                <button
                  className="bg-red-600 text-white p-2 mr-1 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                  onClick={handleFullscreen}
                >
                  <i className="fas fa-expand-arrows-alt"></i> PLAY FULL SCREEN
                </button>
              </div>
            </div>

            <div className="p-5 flex justify-center items-center">
              <div
                className="w-full sm:max-w-[960px] bg-black rounded overflow-hidden shadow-lg relative aspectRatio"
                onClick={handleOpenModal}
              >
                <iframe
                  ref={iframeRef}
                  src="https://appzonellc.website/H5/TrafficRacer/index.html"
                  className="w-full h-full border-none z-0"
                  title="Traffic Racer Game"
                  tabIndex={0}
                ></iframe>

                <img
                  src="/images/games/traffic-racer.png"
                  className="absolute inset-0 z-10 w-full h-full object-cover sm:object-contain"
                  alt="Traffic Racer Cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-xl relative">
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold">
                Traffic Racer Game
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-red-500"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://appzonellc.website/H5/TrafficRacer/index.html"
                className="w-full h-full border-none"
                title="Traffic Racer"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div
          className="container text-white background p-3 "

        >
          <div className="row border-b border-gray-700">
            {/* Related Games */}
            <div className="col-12">
              <div className="flex justify-between items-center mb-6 bg-black p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-red-600 pl-2 ">Related Games</span>
                </h1>
              </div>
              <div className="row g-3">
                {relatedGames.map((game, idx) => (
                  <div className="col-12 col-sm-6 col-md-3 mb-4 cursor-pointer" key={idx}>
                    <div className="game-card position-relative rounded overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="img-fluid w-100 h-100 rounded"
                      />
                      <div className="game-title-overlay d-flex align-items-center justify-content-center text-white">
                        <h4 className="m-0">{game.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
