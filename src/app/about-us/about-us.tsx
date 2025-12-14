"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";

export default function AboutUs() {
  return (
    <div>
      <Header />

      <div className="background-wrapper">
        <img src="/images/background.png" alt="" className="background-image" />
      </div>

      <div className="container-fluid">
        <div className="background p-0 mx-auto">
          <div className="text-white p-3 flex flex-col">
            {/* Top Header */}
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-2 py-2 bg-black">
              <div className="flex justify-center items-center p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-yellow pl-2">
                    About Us - TwinoGamez
                  </span>
                </h1>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-6">
              <div className="w-full p-10 shadow-xl">
                <div className="text-white space-y-8 leading-relaxed">
                  <p className="text-gray-300">
                    Welcome to TwinoGamez, your destination for free online
                    browser games you can play instantly—anytime, anywhere.
                  </p>

                  <p className="text-gray-300">
                    At TwinoGamez, we focus on simple, fast, and
                    distraction-free gaming. No downloads, no sign-ups, no
                    pop-ups—just open your browser and start playing.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Who We Are */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Who We Are
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez is an independent online gaming platform built
                    for players who enjoy casual HTML browser games. Our aim is
                    to create a smooth and enjoyable gaming experience for users
                    across the world.
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Easy to access</li>
                    <li>Fun to play</li>
                    <li>Free for everyone</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* What Makes Us Different */}
                  <h3 className="text-2xl font-semibold text-danger">
                    What Makes TwinoGamez Different
                  </h3>

                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>🎮 Instant Play - No downloads or installations</li>
                    <li>🆓 100% Free Games</li>
                    <li>🚫 No Login Required</li>
                    <li>⚡ Fast & Lightweight HTML5 Games</li>
                    <li>📱 Mobile, Tablet & Desktop Friendly</li>
                    <li>❌ No intrusive pop-ups or forced actions</li>
                  </ul>

                  <p className="text-gray-300">
                    Just load your favorite game in your browser and enjoy.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Games & Experience */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Our Games & Experience
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez offers a growing collection of free online HTML
                    games that can be played:
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Alone or casually</li>
                    <li>On desktop PCs, laptops & Chromebooks</li>
                    <li>On smartphones & tablets (Android & iOS)</li>
                  </ul>

                  <p className="text-gray-300">
                    Our games are optimized to work smoothly across devices,
                    whether you’re at home, on the road, or just taking a short
                    break.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Mission */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    <i>
                      "To build an open and accessible browser-gaming platform
                      that delivers fun without barriers."
                    </i>
                  </p>

                  <p className="text-gray-300">We aim to provide:</p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Seamless gameplay worldwide</li>
                    <li>A clean and user-friendly interface</li>
                    <li>Entertainment without hidden costs or complexity</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* Fun Only */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Fun-Only Platform (No Real Money, No Gambling)
                  </h3>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>💰 No real-money betting</li>
                    <li>🪙 All coins/points are virtual only</li>
                    <li>🚫 No gambling or cash-out features</li>
                  </ul>

                  <p className="text-gray-300">
                    Play freely, safely, and responsibly.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Vision */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Our Community & Vision
                  </h3>

                  <p className="text-gray-300">
                    TwinoGamez is built by people who love games and technology.
                    We’re creators, developers, and gamers at heart—working to
                    create a platform that players of all ages can enjoy.
                  </p>

                  <p className="text-gray-300">
                    Our long-term vision is to make TwinoGamez an open online
                    playground, free and accessible to everyone.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Privacy */}
                  <h3 className="text-2xl font-semibold text-danger">
                    User Safety & Privacy
                  </h3>
                  <p className="text-gray-300">We respect our users:</p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>No account creation required</li>
                    <li>No personal data collection</li>
                    <li>Privacy-focused experience</li>
                  </ul>

                  <p className="text-gray-300">
                    TwinoGamez is accessible to a general audience while
                    maintaining a safe environment.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Stay Connected */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Stay Connected
                  </h3>
                  <p className="text-gray-300">
                    We love hearing from our users!
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>🌐 Website: https://twinogamez.com</li>
                    <li>📧 Contact: (add your official email here)</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* Thank You */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Thank You for Playing
                  </h3>
                  <p className="text-gray-300">
                    Thank you for choosing TwinoGamez. Load your favorite game,
                    hit play, and enjoy the fun—instantly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
