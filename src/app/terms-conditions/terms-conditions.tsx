"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";

export default function TermsConditions() {
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
                    Terms & Conditions - TwinoGamez
                  </span>
                </h1>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-6">
              <div className="w-full p-10 shadow-xl">
                <div className="text-white space-y-8 leading-relaxed">
                  <p className="text-gray-300">
                    Welcome to TwinoGamez (https://twinogamez.com). These Terms
                    & Conditions govern your use of our website and services. By
                    accessing or using TwinoGamez, you agree to comply with
                    these terms. If you do not agree, please do not use the
                    website.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 1. Acceptance of Terms */}
                  <h3 className="text-2xl font-semibold text-danger">
                    1. Acceptance of Terms
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>
                      You have read and understood these Terms & Conditions
                    </li>
                    <li>You agree to be bound by them</li>
                    <li>You are using the website for lawful purposes only</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* 2. About TwinoGamez */}
                  <h3 className="text-2xl font-semibold text-danger">
                    2. About TwinoGamez
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez is a browser-based HTML games platform providing
                    free online games for entertainment purposes only.
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>No downloads required</li>
                    <li>No account registration</li>
                    <li>No real-money gameplay</li>
                  </ul>

                  <p className="text-gray-300">
                    All games are provided “as is” for casual entertainment.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 3. Eligibility */}
                  <h3 className="text-2xl font-semibold text-danger">
                    3. Eligibility
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>TwinoGamez is intended for a general audience</li>
                    <li>
                      Users under the age of 13 should use the site only with
                      parental guidance
                    </li>
                    <li>
                      We do not knowingly collect personal data from children
                    </li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* 4. Use of the Website */}
                  <h3 className="text-2xl font-semibold text-danger">
                    4. Use of the Website
                  </h3>
                  <p className="text-gray-300">You agree NOT to:</p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Use the website for unlawful or harmful purposes</li>
                    <li>Attempt to hack, disrupt, or damage the website</li>
                    <li>
                      Copy, redistribute, or exploit website content without
                      permission
                    </li>
                    <li>Use automated bots or scraping tools</li>
                  </ul>

                  <p className="text-gray-300">
                    TwinoGamez reserves the right to restrict or block access if
                    misuse is detected.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 5. Games & Virtual Content */}
                  <h3 className="text-2xl font-semibold text-danger">
                    5. Games & Virtual Content
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>All games are free to play</li>
                    <li>Any points, coins, or rewards are virtual only</li>
                    <li>Virtual items have no real-world monetary value</li>
                    <li>No gambling, betting, or cash-out features exist</li>
                  </ul>

                  <hr className="border-gray-700" />

                  {/* 6. Intellectual Property */}
                  <h3 className="text-2xl font-semibold text-danger">
                    6. Intellectual Property
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>
                      The TwinoGamez name, logo, and website design are
                      protected by applicable laws
                    </li>
                    <li>
                      Games may be owned by TwinoGamez or respective copyright
                      holders
                    </li>
                    <li>
                      We do not modify game source code or remove original
                      credits
                    </li>
                  </ul>

                  <p className="text-gray-300">
                    For copyright concerns, please refer to the Copyright / IPR
                    section on our Contact page.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 7. Third-Party Content */}
                  <h3 className="text-2xl font-semibold text-danger">
                    7. Third-Party Content & Advertisements
                  </h3>
                  <p className="text-gray-300">TwinoGamez may display:</p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Third-party advertisements (e.g., Google AdSense)</li>
                    <li>External links or embedded content</li>
                  </ul>

                  <p className="text-gray-300">
                    We do not control third-party websites or services and are
                    not responsible for their content, policies, or practices.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 8. Cookies */}
                  <h3 className="text-2xl font-semibold text-danger">
                    8. Cookies & Tracking
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez may use cookies or similar technologies to:
                  </p>

                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Improve site performance</li>
                    <li>Analyze traffic</li>
                    <li>Enhance user experience</li>
                  </ul>

                  <p className="text-gray-300">
                    You can manage cookies through your browser settings.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 9. Disclaimer */}
                  <h3 className="text-2xl font-semibold text-danger">
                    9. Disclaimer
                  </h3>
                  <p className="text-gray-300">
                    TwinoGamez is provided “as is” without warranties of any
                    kind. We do not guarantee uninterrupted or error-free
                    access. We are not responsible for any loss or damage
                    arising from website use.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 10. Liability */}
                  <h3 className="text-2xl font-semibold text-danger">
                    10. Limitation of Liability
                  </h3>
                  <p className="text-gray-300">
                    To the maximum extent permitted by law, TwinoGamez shall not
                    be liable for indirect, incidental, or consequential
                    damages. Use of the website is at your own risk.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 11. Modifications */}
                  <h3 className="text-2xl font-semibold text-danger">
                    11. Modifications
                  </h3>
                  <p className="text-gray-300">
                    We may update these Terms & Conditions at any time. Changes
                    will be effective immediately once posted on this page.
                    Users are encouraged to review this page periodically.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 12. Governing Law */}
                  <h3 className="text-2xl font-semibold text-danger">
                    12. Governing Law
                  </h3>
                  <p className="text-gray-300">
                    These Terms & Conditions are governed by applicable laws,
                    without regard to conflict of law principles.
                  </p>

                  <hr className="border-gray-700" />

                  {/* 13. Contact */}
                  <h3 className="text-2xl font-semibold text-danger">
                    13. Contact Information
                  </h3>
                  <p className="text-gray-300">
                    For questions regarding these Terms & Conditions, please
                    contact us:
                  </p>

                  <p className="text-gray-300">
                    🌐 Website: https://twinogamez.com
                  </p>
                  <p className="text-gray-300">
                    📧 Email: (add your official contact email here)
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
