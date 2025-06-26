"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Image from "next/image";

import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";

export default function GamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    {
      title: "NEW BATTLEFIELD SEASON STARTS SOON",
      date: "Feb 25, 2021",
      likes: 4,
      plays: 4974,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },
    {
      title: "OUR HIGHEST REVIEW SCORES OF 2020",
      date: "Feb 25, 2021",
      likes: 10,
      plays: 4980,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },
    {
      title: "THIS GAME WILL KEEP YOU UP ALL NIGHT",
      date: "Feb 25, 2021",
      likes: 6,
      plays: 5001,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },
    {
      title: "NINJA’S OFFICIAL FORTNITE SKIN",
      date: "Feb 25, 2021",
      likes: 13,
      plays: 2148,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },

    {
      title: "THIS GAME WILL KEEP YOU UP ALL NIGHT",
      date: "Feb 25, 2021",
      likes: 6,
      plays: 5001,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },
    {
      title: "NINJA’S OFFICIAL FORTNITE SKIN",
      date: "Feb 25, 2021",
      likes: 13,
      plays: 2148,
      image: "/images/games/yahttvis7wy31-302x180.jpg",
    },
  ];

  return (
    <div>
      <div className="container-fulid mt-5">
        <div className="container p-0 background">
        <Header />
        </div>
      </div>

      <div className="container-fluid mb-3">
        <div className="container p-0 mx-auto">
          <div className="bg-[#1a1a1a] text-white min-h-screen p-4 flex flex-col">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center border-b border-gray-700 gap-2 p-2">
              <h1 className="text-lg sm:text-xl font-bold">
                <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                  Play Traffic Racer Game !
                </span>
              </h1>
              <div className="flex gap-3">
                <button
                  className="bg-red-600 text-white p-3 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                  onClick={handleOpenModal}
                >
                  <i className="fas fa-gamepad"></i> OPEN GAME
                </button>
                <button
                  className="bg-red-600 text-white p-3 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                  onClick={handleFullscreen}
                >
                  <i className="fas fa-expand-arrows-alt"></i> PLAY FULL SCREEN
                </button>
              </div>
            </div>

            <div className="flex-grow flex justify-center items-center py-4 px-2">
              <div
                className="w-full sm:max-w-[960px] bg-black rounded overflow-hidden shadow-lg relative"
                style={{ aspectRatio: "16 / 9" }}
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

            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4 gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-white cursor-pointer">
                <i className="fas fa-chevron-left"></i>
                <span className="font-semibold uppercase">Previous Game</span>
              </div>
              <div className="flex items-center gap-1 text-white cursor-pointer">
                <span className="font-semibold uppercase">Next Game</span>
                <i className="fas fa-chevron-right"></i>
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

      <div
        className="container text-white py-5"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="row">
          {/* Related Games */}
          <div className="col-12">
             <h1 className="text-lg sm:text-xl font-bold">
                <span className="text-white mr-2 border-l-4 border-red-600 pl-2">Related Games</span>
              </h1>
            <div className="row g-3">
              {relatedGames.map((game, idx) => (
                <div className="col-12 col-md-4 my-2 cursor-pointer" key={idx}>
                  <div className="bg-dark rounded p-2 h-100">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={600}
                      height={300}
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                    <div className="fw-bold mt-2">{game.title}</div>
                    <div className="text-muted small">
                      <span className="text-danger">{game.date}</span> | ❤️{" "}
                      {game.likes} Likes | 🏆 {game.plays} Plays
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
