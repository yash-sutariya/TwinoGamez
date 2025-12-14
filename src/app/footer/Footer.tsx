"use client";
// eslint-disable-next-line @next/next/no-img-element

import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/all.min.css";

export default function Footer() {
  const tags = [
    "ARCADE",
    "HTML5",
    "CARS",
    "AVENTURE",
    "RACING",
    "WORDPRESS",
    "GIRLS",
    "GAMES",
  ];

  const RecentPosts = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },

    {
      title: "Terms & Conditions",
      link: "/terms-conditions",
    },
    {
      title: "For Developers",
      link: "/for-developer",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <footer>
      <div className="container-fluid  text-white ">
        <div className="background p-3 pt-5">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <img
                src="/images/games/logo_gameleon3.png"
                width="200"
                alt="Twino Gamez"
                title="Twino Gamez"
              />
              <p className="text-muted mt-3">
                TwinoGamez is your destination for simple, fast, and free online
                browser gaming. We offer a growing collection of lightweight
                HTML5 games that work instantly on any device—mobile, tablet, or
                desktop—without requiring downloads, sign-ups, or app installs.
              </p>
              <p className="text-muted">
                Our platform is built to deliver a smooth, distraction-free
                experience with no intrusive ads or forced pop-ups, ensuring
                players of all ages can enjoy games safely and comfortably. All
                gameplay is purely for entertainment, with no real-money
                betting, gambling, or cash-out features.
              </p>
              <p className="text-muted">
                At TwinoGamez, our mission is to make fun accessible to everyone
                by providing a clean, user-friendly environment where gaming is
                quick, easy, and always free. Whether you're relaxing, taking a
                break, or looking for casual entertainment, TwinoGamez lets you
                jump into the fun instantly—anytime, anywhere.
              </p>
            </div>

            <div className="col-lg-4 mb-4">
              <h2 className="text-lg sm:text-xl font-bold mb-6">
                <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                  Links
                </span>
              </h2>
              {RecentPosts.map((post, index) => (
                <div key={index} className="mb-4">
                  <a href={post.link} className="text-white fw-bold mb-1">
                    {post.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
