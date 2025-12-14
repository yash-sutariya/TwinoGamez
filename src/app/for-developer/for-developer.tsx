"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";

export default function ForDeveloper() {
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
                    For Developers - TwinoGamez
                  </span>
                </h1>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-6">
              <div className="w-full p-10 shadow-xl">
                <div className="text-white space-y-8 leading-relaxed">
                  <p className="text-gray-300">
                    TwinoGamez is a browser-based gaming platform built around
                    HTML games and casual entertainment. We welcome
                    conversations with game developers and creators who are
                    interested in showcasing their work or exploring future
                    collaboration opportunities.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 1. For Game Developers */}
                  <h3 className="text-2xl font-semibold text-danger">
                    1. For Game Developers
                  </h3>
                  <p className="text-gray-300">
                    If you are an independent developer or small studio
                    creating:
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>HTML5 games</li>
                    <li>Casual browser games</li>
                    <li>Mobile-friendly web games</li>
                  </ul>

                  <p className="text-gray-300">
                    We are open to discussions about possible content
                    collaboration in the future.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 2. What TwinoGamez Offers */}
                  <h3 className="text-2xl font-semibold text-danger">
                    2. What TwinoGamez Offers
                  </h3>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>A clean, browser-based gaming platform</li>
                    <li>Games playable on desktop, tablet, and mobile</li>
                    <li>Focus on instant play and user experience</li>
                    <li>A growing gaming audience</li>
                  </ul>

                  <p className="text-gray-300 font-semibold mt-2">
                    ⚠️ Important:
                  </p>

                  <p className="text-gray-300">
                    TwinoGamez does not currently provide:
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Direct uploads</li>
                    <li>Developer dashboards</li>
                    <li>Revenue sharing or monetization tools</li>
                  </ul>

                  <p className="text-gray-300">
                    Any such features, if introduced, will be clearly announced
                    with proper terms.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 3. How to Reach Us */}
                  <h3 className="text-2xl font-semibold text-danger">
                    3. How to Reach Us
                  </h3>
                  <p className="text-gray-300">
                    Developers interested in collaboration may contact us at:
                  </p>

                  <p className="text-gray-300">
                    📧 Email: (add your official contact email here)
                  </p>

                  <p className="text-gray-300 mt-2">Please include:</p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Brief introduction</li>
                    <li>Type of games you develop</li>
                    <li>Any relevant links or demos</li>
                  </ul>
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
