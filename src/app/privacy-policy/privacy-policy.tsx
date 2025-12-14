"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";

export default function PrivacyPolicy() {
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
                    Privacy Policy & Terms of Use for TwinoGamez
                  </span>
                </h1>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-6">
              <div className="w-full p-10 shadow-xl">
                <div className="text-white space-y-8 leading-relaxed">

                  <p className="text-gray-300">
                    Welcome to TwinoGamez (accessible from
                    https://twinogamez.com). This Privacy Policy & Terms of Use
                    document explains how we operate our website, what
                    information is collected (if any), and how we ensure a safe
                    and fun gaming experience for all users.
                  </p>

                  <p className="text-gray-300">
                    By accessing or using TwinoGamez, you agree to the terms
                    outlined in this policy. Please read it carefully.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 1. Introduction */}
                  <h3 className="text-2xl font-semibold text-danger">
                    1. Introduction
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez is an HTML browser-based gaming website created
                    purely for fun and entertainment purposes. Users can play
                    games directly in their browser without registration, login,
                    or payments.
                  </p>
                  <p className="text-gray-300">
                    We respect your privacy and are committed to protecting it.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 2. Data Collection */}
                  <h3 className="text-2xl font-semibold text-danger">
                    2. Data Collection
                  </h3>
                  <p className="text-gray-300">
                    ✔ We do NOT collect any personal user information
                    intentionally.
                  </p>

                  <p className="text-gray-300">TwinoGamez does not require:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Account registration</li>
                    <li>Login credentials</li>
                    <li>Payments</li>
                    <li>Personal identification details</li>
                  </ul>

                  <p className="text-gray-300">
                    However, like most websites, non-personal technical
                    information may be collected automatically, such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                  </ul>

                  <p className="text-gray-300">
                    This data is anonymous and used only for performance,
                    security, and analytics.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 3. Use of Data */}
                  <h3 className="text-2xl font-semibold text-danger">
                    3. Use of Data
                  </h3>
                  <p className="text-gray-300">
                    Automatically collected non-personal data is used to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Maintain website performance</li>
                    <li>Improve game loading speed</li>
                    <li>Enhance user experience</li>
                    <li>Analyze traffic patterns</li>
                    <li>Ensure security</li>
                  </ul>

                  <p className="text-gray-300">
                    👉 We do NOT sell or trade any user data.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 4. Cookies */}
                  <h3 className="text-2xl font-semibold text-danger">
                    4. Cookies and Tracking Technologies
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez may use cookies to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Improve gameplay performance</li>
                    <li>Remember preferences</li>
                    <li>Analyze usage</li>
                  </ul>

                  <p className="text-gray-300">
                    Users may disable cookies anytime via browser settings.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 5. Advertising */}
                  <h3 className="text-2xl font-semibold text-danger">
                    5. Advertising & Third-Party Services
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez may show ads from third-party networks like:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Google AdSense</li>
                    <li>Other ad partners</li>
                  </ul>

                  <p className="text-gray-300">
                    These services may use cookies or web beacons. Review
                    Google's ad policy:
                    https://policies.google.com/technologies/ads
                  </p>

                  <hr className="border-gray-700" />

                  {/* 6. Payments */}
                  <h3 className="text-2xl font-semibold text-danger">
                    6. Payments & Transactions
                  </h3>
                  <p className="text-gray-300">✔ No payments are collected.</p>
                  <p className="text-gray-300">✔ No in-game purchases exist.</p>
                  <p className="text-gray-300">
                    ✔ All rewards are virtual and have no real monetary value.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 7. Gambling */}
                  <h3 className="text-2xl font-semibold text-danger">
                    7. No Gambling Policy
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez does NOT include gambling, wagering, betting, or
                    real-money risks of any kind.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 8. Children's Privacy */}
                  <h3 className="text-2xl font-semibold text-danger">
                    8. Children's Privacy
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez is not designed for children under 13. We do not
                    knowingly collect personal information from children.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 9. Data Location */}
                  <h3 className="text-2xl font-semibold text-danger">
                    9. Data Processing Location
                  </h3>
                  <p className="text-gray-300">
                    Technical data may be processed in the U.S. or other server
                    locations.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 10. Security */}
                  <h3 className="text-2xl font-semibold text-danger">
                    10. Security Measures
                  </h3>
                  <p className="text-gray-300">
                    We implement reasonable security practices, but no internet
                    transmission is 100% secure.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 11. Consent */}
                  <h3 className="text-2xl font-semibold text-danger">
                    11. Consent
                  </h3>
                  <p className="text-gray-300">
                    By using TwinoGamez, you consent to this Privacy Policy &
                    Terms of Use.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 12. Updates */}
                  <h3 className="text-2xl font-semibold text-danger">
                    12. Updates to This Policy
                  </h3>
                  <p className="text-gray-300">
                    This policy may be updated periodically. Please check this
                    page regularly.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 13. Contact */}
                  <h3 className="text-2xl font-semibold text-danger">
                    13. Contact Us
                  </h3>
                  <p className="text-gray-300">
                    If you have questions about this policy:
                  </p>
                  <p>🌐 Website: https://twinogamez.com</p>
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
