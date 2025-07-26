"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Image from "next/image";

// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function GamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const gameName = searchParams.get("gamename") || "";
  const [gameUrl, setGameUrl] = useState<string>("");

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

  const games = [
    { name: "Traffic Racer", url: "https://twinogamez.com/Game/01-Traffic-Racer" },
    { name: "Brick Breaker Unicorn", url: "https://twinogamez.com/Game/02-Brick-Breaker-Unicorn" },
    { name: "Air Warfare", url: "https://twinogamez.com/Game/03-Air-Warfare" },
    { name: "Ninja Run New", url: "https://twinogamez.com/Game/04-Ninja-Run-New" },
    { name: "Gold Miner", url: "https://twinogamez.com/Game/05-Gold-Miner" },
    { name: "Fruit Slasher", url: "https://twinogamez.com/Game/06-Fruit-Slasher" },
    { name: "Stick Monkey", url: "https://twinogamez.com/Game/07-Stick-Monkey" },
    { name: "Space Purge", url: "https://twinogamez.com/Game/08-Space-Purge" },
    { name: "Shoot Robbers", url: "https://twinogamez.com/Game/09-Shoot-Robbers" },
    { name: "Splishy Fish", url: "https://twinogamez.com/Game/10-Splishy-Fish" },
    { name: "Speed Racer", url: "https://twinogamez.com/Game/11-Speed-Racer" },
    { name: "Duck Shooter", url: "https://twinogamez.com/Game/12-Duck-Shooter" },
    { name: "Traffic", url: "https://twinogamez.com/Game/13-Traffic" },
    { name: "Kingdom Defense", url: "https://twinogamez.com/Game/14-Kingdom-Defense" },
    { name: "Candy Super Lines", url: "https://twinogamez.com/Game/15-Candy-Super-Lines" },
    { name: "Fruit Snake", url: "https://twinogamez.com/Game/16-Fruit-Snake" },
    { name: "Super Color Lines Match 5", url: "https://twinogamez.com/Game/17-Super-Color-Lines-Match-5" },
    { name: "Pool 8 Ball", url: "https://twinogamez.com/Game/18-Pool-8-Ball" },
    { name: "Mummy Candies", url: "https://twinogamez.com/Game/19-Mummy-Candies" },
    { name: "Mad Fish", url: "https://twinogamez.com/Game/20-Mad-Fish" },
    { name: "Easter Memory", url: "https://twinogamez.com/Game/21-Easter-Memory" },
    { name: "Forest Brothers", url: "https://twinogamez.com/Game/22-Forest-Brothers" },
    { name: "Tank Defender", url: "https://twinogamez.com/Game/23-Tank-Defender" },
    { name: "Angry Cat Shot", url: "https://twinogamez.com/Game/24-Angry-Cat-Shot" },
    { name: "Balloon Paradise", url: "https://twinogamez.com/Game/25-Balloon-Paradise" },
    { name: "Super PonGoal", url: "https://twinogamez.com/Game/26-Super-PonGoal" },
    { name: "Brick Out", url: "https://twinogamez.com/Game/27-Brick-Out" },
    { name: "Duck Hunter", url: "https://twinogamez.com/Game/28-Duck-Hunter" },
    { name: "Animals Crash Match 3", url: "https://twinogamez.com/Game/29-Animals-Crash-Match-3" },
    { name: "Happy Chef Bubble Shooter", url: "https://twinogamez.com/Game/30-Happy-Chef-Bubble-Shooter" },
    { name: "Great Air Battles", url: "https://twinogamez.com/Game/31-Great-Air-Battles" },
    { name: "Plumber", url: "https://twinogamez.com/Game/32-Plumber" },
    { name: "Professor Bubble", url: "https://twinogamez.com/Game/33-Professor-Bubble" },
    { name: "Gold Miner Jack", url: "https://twinogamez.com/Game/34-Gold-Miner-Jack" },
    { name: "Tank Wars", url: "https://twinogamez.com/Game/35-Tank-Wars" },
    { name: "Stick Panda", url: "https://twinogamez.com/Game/36-Stick-Panda" },
    { name: "Stack Jump", url: "https://twinogamez.com/Game/37-Stack-Jump" },
    { name: "Crazy Runner", url: "https://twinogamez.com/Game/38-Crazy-Runner" },
    { name: "Fashion Dress Up", url: "https://twinogamez.com/Game/39-Fashion-Dress-Up" },
    { name: "Super Cowboy Run", url: "https://twinogamez.com/Game/40-Super-Cowboy-Run" },
    { name: "Quick Dice", url: "https://twinogamez.com/Game/41-Quick-Dice" },
    { name: "Stick Soldier", url: "https://twinogamez.com/Game/42-Stick-Soldier" },
    { name: "Monster Match 3", url: "https://twinogamez.com/Game/43-Monster-Match-3" },
    { name: "Flappy Ball", url: "https://twinogamez.com/Game/44-Flappy-Ball" },
    { name: "Car Physics", url: "https://twinogamez.com/Game/45-Car-Physics" },
    { name: "Girl Dress Up", url: "https://twinogamez.com/Game/46-Girl-Dress-Up" },
    { name: "Viking Escape", url: "https://twinogamez.com/Game/47-Viking-Escape" },
    { name: "Pops Billiards", url: "https://twinogamez.com/Game/48-Pops-Billiards" },
    { name: "Cars", url: "https://twinogamez.com/Game/49-Cars" },
    { name: "Sahara Invasion", url: "https://twinogamez.com/Game/50-Sahara-Invasion" }
  ];



  const relatedGames = [
    {
      title: "Traffic Racer",
      image: "/game-logo-webp/1.webp",
      link: "/game-page?gamename=traffic-racer",
    },
    {
      title: "Brick Breaker Unicorn",
      image: "/game-logo-webp/2.webp",
      link: "/game-page?gamename=brick-breaker-unicorn",
    },
    {
      title: "Air Warfare",
      image: "/game-logo-webp/3.webp",
      link: "/game-page?gamename=air-warfare",
    },
    {
      title: "Ninja Run",
      image: "/game-logo-webp/4.webp",
      link: "/game-page?gamename=ninja-run",
    },
    {
      title: "Gold Miner",
      image: "/game-logo-webp/5.webp",
      link: "/game-page?gamename=gold-miner",
    },
    {
      title: "Fruit Slasher",
      image: "/game-logo-webp/6.webp",
      link: "/game-page?gamename=fruit-slasher",
    },
    {
      title: "Stick Monkey",
      image: "/game-logo-webp/7.webp",
      link: "/game-page?gamename=stick-monkey",
    },
    {
      title: "Space Purge",
      image: "/game-logo-webp/8.webp",
      link: "/game-page?gamename=space-purge",
    },
    {
      title: "Shoot Robbers",
      image: "/game-logo-webp/9.webp",
      link: "/game-page?gamename=shoot-robbers",
    },
    {
      title: "Splishy Fish",
      image: "/game-logo-webp/10.webp",
      link: "/game-page?gamename=splishy-fish",
    },
    {
      title: "Speed Racer",
      image: "/game-logo-webp/11.webp",
      link: "/game-page?gamename=speed-racer",
    },
    {
      title: "Duck Shooter",
      image: "/game-logo-webp/12.webp",
      link: "/game-page?gamename=duck-shooter",
    },
    {
      title: "Traffic",
      image: "/game-logo-webp/13.webp",
      link: "/game-page?gamename=traffic",
    },
    {
      title: "Kingdom Defense",
      image: "/game-logo-webp/14.webp",
      link: "/game-page?gamename=kingdom-defense",
    },
    {
      title: "Candy Super Lines",
      image: "/game-logo-webp/15.webp",
      link: "/game-page?gamename=candy-super-lines",
    },
    {
      title: "Fruit Snake",
      image: "/game-logo-webp/16.webp",
      link: "/game-page?gamename=fruit-snake",
    },
    {
      title: "Super Color Lines",
      image: "/game-logo-webp/17.webp",
      link: "/game-page?gamename=super-color-lines",
    },
    {
      title: "Pool 8 Ball",
      image: "/game-logo-webp/18.webp",
      link: "/game-page?gamename=pool-8-ball",
    },
    {
      title: "Mummy Candies",
      image: "/game-logo-webp/19.webp",
      link: "/game-page?gamename=mummy-candies",
    },
    {
      title: "Mad Fish",
      image: "/game-logo-webp/20.webp",
      link: "/game-page?gamename=mad-fish",
    },
    {
      title: "Easter Memory",
      image: "/game-logo-webp/21.webp",
      link: "/game-page?gamename=easter-memory",
    },
    {
      title: "Forest Brothers",
      image: "/game-logo-webp/22.webp",
      link: "/game-page?gamename=forest-brothers",
    },
    {
      title: "Tank Defender",
      image: "/game-logo-webp/23.webp",
      link: "/game-page?gamename=tank-defender",
    },
    {
      title: "Angry Cats",
      image: "/game-logo-webp/24.webp",
      link: "/game-page?gamename=angry-cats",
    },
  ];


  useEffect(() => {
    if (gameName) {
      const formattedName = gameName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const foundGame = games.find((g) => g.name.toLowerCase() === formattedName.toLowerCase());

      if (foundGame) {
        setGameUrl(foundGame.url);
      } else {
        setGameUrl("");
      }
    }
  }, [gameName]);

  return (
    <div>
      <Header />

      <div className="background-wrapper">
        <img src="/images/background.png" alt="" className="background-image" />
      </div>

      <div className="container-fluid">
        <div className="container background p-0 mx-auto">
          <div className=" text-white p-3 flex flex-col">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-2 py-2  bg-black">
              <div className="flex justify-center items-center p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-red-600 pl-2">Play {gameName?.toString().replace(/-/g, " ")} Game !</span>
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
                  src={gameUrl}
                  className="w-full h-full border-none z-0"
                  title={gameName?.toString()}
                ></iframe>
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
                {gameName?.toString().replace(/-/g, " ")} Game
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
                src={gameUrl}
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
                    <Link href={game.link}>
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
                    </Link >
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
