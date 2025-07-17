// eslint-disable-next-line @next/next/no-img-element
"use client";
import React, { useEffect, useState } from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  const highlights = [
    {
      title: "Brick Out",
      image: "/game-logo-webp/27.webp",
      link: "/game-page?gamename=brick-out",
    },
    {
      title: "Duck Hunter",
      image: "/game-logo-webp/28.webp",
      link: "/game-page",
    },
    {
      title: "Animal Crush",
      image: "/game-logo-webp/29.webp",
      link: "/game-page",
    },
    {
      title: "Happy Chef Bubble Shooter",
      image: "/game-logo-webp/30.webp",
      link: "/game-page",
    },
    {
      title: "Great Air Battles",
      image: "/game-logo-webp/31.webp",
      link: "/game-page",
    },
    {
      title: "Plumber",
      image: "/game-logo-webp/32.webp",
      link: "/game-page",
    },
    {
      title: "Professor Bubble",
      image: "/game-logo-webp/33.webp",
      link: "/game-page",
    },
    {
      title: "Gold Miner Jack",
      image: "/game-logo-webp/34.webp",
      link: "/game-page",
    },
    {
      title: "Tank War",
      image: "/game-logo-webp/35.webp",
      link: "/game-page",
    },
    {
      title: "Stick Panda",
      image: "/game-logo-webp/36.webp",
      link: "/game-page",
    },
    {
      title: "Stack Jump",
      image: "/game-logo-webp/37.webp",
      link: "/game-page",
    },
    {
      title: "Crazy Runner",
      image: "/game-logo-webp/38.webp",
      link: "/game-page",
    },
    {
      title: "Fashion Dress Up",
      image: "/game-logo-webp/39.webp",
      link: "/game-page",
    },
    {
      title: "Super Cowboy Run",
      image: "/game-logo-webp/40.webp",
      link: "/game-page",
    },
    {
      title: "Quick Dice",
      image: "/game-logo-webp/41.webp",
      link: "/game-page",
    },
    {
      title: "Stick Soldier",
      image: "/game-logo-webp/42.webp",
      link: "/game-page",
    },
    {
      title: "Monsters",
      image: "/game-logo-webp/43.webp",
      link: "/game-page",
    },
    {
      title: "Flappy Ball",
      image: "/game-logo-webp/44.webp",
      link: "/game-page",
    },
    {
      title: "Car Physics",
      image: "/game-logo-webp/45.webp",
      link: "/game-page",
    },
    {
      title: "Girl Dress Up",
      image: "/game-logo-webp/46.webp",
      link: "/game-page",
    },
    {
      title: "Viking Escape",
      image: "/game-logo-webp/47.webp",
      link: "/game-page",
    },
    {
      title: "Pops Billiards",
      image: "/game-logo-webp/48.webp",
      link: "/game-page",
    },
    {
      title: "Cars",
      image: "/game-logo-webp/49.webp",
      link: "/game-page",
    },
    {
      title: "Tank",
      image: "/game-logo-webp/50.webp",
      link: "/game-page",
    }
  ];


  const posts = [
  {
    title: "Easter Memory",
    date: "Feb 15, 2021",
    image: "/game-logo-webp/21.webp",
    link: "/game-page?gamename=easter-memory",
  },
  {
    title: "Forrest Brothers",
    date: "Oct 14, 2020",
    image: "/game-logo-webp/22.webp",
    link: "/game-page?gamename=forrest-brothers",
  },
  {
    title: "Tank Defender",
    date: "Oct 14, 2020",
    image: "/game-logo-webp/23.webp",
    link: "/game-page?gamename=tank-defender",
  },
  {
    title: "Angry Cats",
    date: "Oct 14, 2020",
    image: "/game-logo-webp/24.webp",
    link: "/game-page?gamename=angry-cats",
  },
  {
    title: "Balloon Paradise",
    date: "Jul 14, 2020",
    image: "/game-logo-webp/25.webp",
    link: "/game-page?gamename=balloon-paradise",
  },
  {
    title: "Super Pongoal",
    date: "Jun 25, 2020",
    image: "/game-logo-webp/26.webp",
    link: "/game-page?gamename=super-pongoal",
  },
];


 const WeeklyGames = [
  { title: "Traffic Racer", image: "/game-logo-webp/1.webp", link: "/game-page?gamename=traffic-racer" },
  { title: "Brick Breaker Unicorn", image: "/game-logo-webp/2.webp", link: "/game-page?gamename=brick-breaker-unicorn" },
  { title: "Air Warfare", image: "/game-logo-webp/3.webp", link: "/game-page?gamename=air-warfare" },
  { title: "Ninja Run", image: "/game-logo-webp/4.webp", link: "/game-page?gamename=ninja-run" },
  { title: "Gold Miner", image: "/game-logo-webp/5.webp", link: "/game-page?gamename=gold-miner" },
  { title: "Fruit Slasher", image: "/game-logo-webp/6.webp", link: "/game-page?gamename=fruit-slasher" },
  { title: "Stick Monkey", image: "/game-logo-webp/7.webp", link: "/game-page?gamename=stick-monkey" },
  { title: "Space Purge", image: "/game-logo-webp/8.webp", link: "/game-page?gamename=space-purge" },
  { title: "Shoot Robbers", image: "/game-logo-webp/9.webp", link: "/game-page?gamename=shoot-robbers" },
  { title: "Splishy Fish", image: "/game-logo-webp/10.webp", link: "/game-page?gamename=splishy-fish" },
  { title: "Speed Racer", image: "/game-logo-webp/11.webp", link: "/game-page?gamename=speed-racer" },
  { title: "Duck Shooter", image: "/game-logo-webp/12.webp", link: "/game-page?gamename=duck-shooter" },
  { title: "Traffic", image: "/game-logo-webp/13.webp", link: "/game-page?gamename=traffic" },
  { title: "Kingdom Defense", image: "/game-logo-webp/14.webp", link: "/game-page?gamename=kingdom-defense" },
  { title: "Candy Super Lines", image: "/game-logo-webp/15.webp", link: "/game-page?gamename=candy-super-lines" },
  { title: "Fruit Snake", image: "/game-logo-webp/16.webp", link: "/game-page?gamename=fruit-snake" },
  { title: "Super Color Lines", image: "/game-logo-webp/17.webp", link: "/game-page?gamename=super-color-lines" },
  { title: "Pool 8 Ball", image: "/game-logo-webp/18.webp", link: "/game-page?gamename=pool-8-ball" },
  { title: "Mummy Candies", image: "/game-logo-webp/19.webp", link: "/game-page?gamename=mummy-candies" },
  { title: "Mad Fish", image: "/game-logo-webp/20.webp", link: "/game-page?gamename=mad-fish" },
];


  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="background-wrapper">
        <img src="/images/background.png" alt="" className="background-image" />
      </div>


      <Header />

      <div className=" container-fluid text-white ">
        <div className="container p-3 mx-auto  background" >
          <div className="flex justify-between items-center mb-6 bg-black p-3">
            <h1 className="text-lg sm:text-xl font-bold">
              <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                Today Highlights
              </span>
              <span className="text-danger fw-bold fst-italic ms-2">Top</span>
            </h1>
            <Link href="">
              <div className="bg-red-600 text-white px-3 py-1 text-xs cursor-pointer font-semibold uppercase px-4 py-3">
                view all
              </div>
            </Link>
          </div>

          <div className="container">
            <div className="row">
              {highlights.map((item, index) => (
                <div key={item.title || index} className="col-12 col-sm-6 col-md-2 mb-4">
                  <div className="game-card position-relative overflow-hidden bg-dark p-1">
                    <Link href={item.link}>
                      <div className="custom-card-img-wrapper position-relative w-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="transition-transform object-fit-cover w-100 h-100"
                        />
                        {/* <div className="custom-gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div> */}
                        <div className="game-title-overlay d-flex align-items-center justify-content-center text-white">
                          <h4 className="m-0">{item.title}</h4>
                        </div>

                        <div className="position-absolute bottom-0 start-0 p-3 z-2">
                          {/* <h2 className="text-white text-uppercase fw-bold h6 ">{item.title}</h2> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  text-white">
        <div className="container py-3 mx-auto px-4 background">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 bg-black p-3">
            <h1 className="text-lg sm:text-xl font-bold ">
              <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                Popular
              </span>
              <span className="text-danger fw-bold fst-italic ms-2">HOT</span>
            </h1>
            <a
              href=""
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-3 uppercase font-bold"
            >
              View All
            </a>
          </div>

          {/* Cards Grid */}
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-2">
                <div className="bg-dark p-1 rounded overflow-hidden shadow cursor-pointer">
                  <a href={post.link}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </a>
                  <div className="p-1">
                    <h6 className=" mb-1">
                      <a href={post.link} className="text-white text-decoration-none hover:text-danger">
                        {post.title}
                      </a>
                    </h6>
                    <p className="text-danger small mb-0">
                      {post.date}
                      <span className="text-secondary ms-2">- No Comments</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container text-white py-4 rounded background">
          <h1 className="text-lg sm:text-xl font-bold mb-6 bg-black p-3">
            <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
              Weekly Games
            </span>
            <span className="text-danger fw-bold fst-italic ms-2">BEST</span>
          </h1>

          <div className="row d-flex flex-wrap  justify-content-center gap-6">
            {WeeklyGames.map((game, index) => (
              <div
                key={index}
                className="col-12 col-lg-1 col-md-1 rounded bg-dark p-1 overflow-hidden  cursor-pointer"
              >
                <Link href={game.link}>
                  <img
                    src={game.image}
                    alt={`Game ${index + 1}`}
                    className="img-fluid rounded"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
