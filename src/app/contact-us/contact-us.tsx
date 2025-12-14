"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";

export default function ContactUs() {

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
                    Contact Us
                  </span>
                </h1>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-6">
              <div className="w-full p-10 shadow-xl">

                {/* Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* LEFT — FORM */}
                  <form className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#121212] text-white px-5 py-3 rounded-xl border border-gray-700 focus:border-purple-500 outline-none"
                      />
                      <i className="fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-[#121212] text-white px-5 py-3 rounded-xl border border-gray-700 focus:border-purple-500 outline-none"
                      />
                      <i className="fas fa-envelope absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full bg-[#121212] text-white px-5 py-3 rounded-xl border border-gray-700 focus:border-purple-500 outline-none"
                      />
                      <i className="fas fa-phone absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        rows={5}
                        placeholder="Type Your Message"
                        className="w-full bg-[#121212] text-white px-5 py-3 rounded-xl border border-gray-700 focus:border-purple-500 outline-none"
                      ></textarea>
                      <i className="fab fa-whatsapp absolute right-4 bottom-4 text-green-500 text-xl"></i>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold text-lg bg-gradient-to-r bg-red hover:opacity-90 transition"
                    >
                      SUBMIT
                    </button>
                  </form>

                  {/* RIGHT — IMAGE */}
                  <div className="flex justify-center items-center">
                    <img
                      src="/images/contactus.png"
                      alt="Contact Illustration"
                      className="w-[80%] drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* NEW CONTENT SECTION — TwinoGamez Contact Information */}
                {/* ------------------------------------------------------ */}
                <div className="text-white mt-16 space-y-8 leading-relaxed">
                  {/* <h2 className="text-3xl font-bold text-center bg-gradient-to-r text-danger text-transparent bg-clip-text">
                    Contact Us - TwinoGamez
                  </h2> */}

                  <p className="text-gray-300 text-lg text-center">
                    We'd love to hear from you! At TwinoGamez, your feedback,
                    suggestions, and questions help us improve our games and
                    provide a better experience for everyone.
                  </p>

                  <p className="text-gray-300">
                    Whether you're facing an issue, have a game idea, want to
                    collaborate, or need support, feel free to reach out.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Get in Touch */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Get in Touch
                  </h3>
                  <p>🌐 Website: https://twinogamez.com</p>
                  <p>
                    📧 Email:{" "}
                    <span className="text-gray-400">
                      (add your official support email here)
                    </span>
                  </p>
                  <p className="text-gray-300">
                    We aim to respond to all genuine inquiries as quickly as
                    possible.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Why Contact */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Why Contact TwinoGamez?
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>🎮 Game-related feedback or suggestions</li>
                    <li>🐞 Reporting bugs or technical issues</li>
                    <li>💡 New game ideas or feature requests</li>
                    <li>🤝 Business or partnership inquiries</li>
                    <li>📄 Questions about our Privacy Policy or Terms</li>
                    <li>🚫 Reporting inappropriate content or ads</li>
                  </ul>

                  <p className="text-gray-300">
                    Your input helps us make TwinoGamez better every day.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Support */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Support & Assistance
                  </h3>

                  <p>We provide support for:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Browser-based HTML games</li>
                    <li>Game loading or performance issues</li>
                    <li>Website access problems</li>
                  </ul>

                  <p>To help us solve your issue faster, please include:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Game name</li>
                    <li>Your device + browser (example: Android + Chrome)</li>
                    <li>Screenshot or error message (if possible)</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* Business */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Business & Advertising Inquiries
                  </h3>
                  <p>If you are interested in:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Advertising opportunities</li>
                    <li>Game publishing</li>
                    <li>Partnerships or collaborations</li>
                  </ul>

                  <p>
                    Please email us with full details, and we'll get back to
                    you.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Copyright */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Copyright / IPR Complaint (DMCA-Style Notice)
                  </h3>

                  <p className="text-gray-300">
                    TwinoGamez hosts browser-based games. Some are owned by us,
                    others are under license. If you believe anything infringes
                    your intellectual property, provide the following:
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-3">
                    <li>Your physical/electronic signature</li>
                    <li>Description of the IP being infringed</li>
                    <li>Exact URL of the infringing material</li>
                    <li>Proof of authorization (if filing for someone else)</li>
                    <li>Detailed identification of the infringing content</li>
                    <li>Your full name + contact details</li>
                    <li>Your good-faith statement claiming unauthorized use</li>
                  </ul>

                  <p className="text-gray-300">
                    📧 Send copyright/IPR notices to:
                    <span className="text-gray-400">
                      (add your copyright email here)
                    </span>
                  </p>

                  <p className="text-gray-300">
                    We aim to reply within 7 days for copyright/IPR-related
                    queries.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Response Time */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Response Time
                  </h3>
                  <p className="text-gray-300">
                    📌 We usually respond within 24-72 hours on business days.
                    On weekends or holidays, responses may take longer.
                  </p>

                  <hr className="border-gray-700" />

                  {/* Thank You */}
                  <h3 className="text-2xl font-semibold text-danger">
                    Thank You
                  </h3>
                  <p className="text-gray-300">
                    Thank you for visiting TwinoGamez and being part of our
                    growing gaming community. Your support means a lot to us!
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
