/* eslint-disable @next/next/no-img-element */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function OnlineDigitalMarketingCourse() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url: any) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const toggleReadMoreI = () => {
    setShowMoreI(!showMoreI);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <Header
        logoURL={"/images/logos/takshak-logo-white.png"}
        mobileLogoURL={"/images/logos/takshak-logo.png"}
        altLogo={"takshak Logo"}
      />
      <section style={{ marginTop: "120px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-7">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className="lazy"
                      src="/images/mix-img/digital-marketing-recorded-thumbnail.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("bVL9zT_H8vI")}
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 w">
                <div className="tabata d-inline-block">
                  <h1>Digital Marketing Course (Online)</h1>
                </div>
                <div className="mt-2 mb-2 meal">
                  <i
                    className="fas fa-star"
                    id="overall_top_1"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_1"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_2"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_2"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_3"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_3"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_4"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_4"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_5"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_5"
                    style={{ display: "none" }}
                  ></i>
                  <span id="span_overall_rating">5.0</span>
                </div>
                <div className="price">
                  <div>
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-clock"></i> 3 Months
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom
                        Classes
                      </li>
                      <li>
                        <i className="fas fa-video"></i> Recorded Video and
                        E-book Available{" "}
                      </li>
                      <li>
                        <i className="fas fa-credit-card"></i> Emi Option
                        Available
                      </li>
                    </ul>
                  </div>
                  <p className="mt-2" style={{ fontSize: "30px" }}>
                    ₹15,000 + 18%GST
                  </p>
                  {/* <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal d-flex mt-3">
                  <a id="rzp-button1" className="btn ml-3">
                    Pay Now
                  </a>
                  <button
                    className="btn ml-3"
                    style={{ backgroundColor: "#F0F0F0" }}
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-lg-12 px-0 px-md-3">
              <div className="">
                <h2 className="new-h2">Course Info</h2>
              </div>
              <div className="course-p">
                <p>
                  Digital Marketing Is The Process Of Promoting Products Or
                  Services Using Digital Channels, Such As The Internet, Social
                  Media, Search Engines, Mobile Devices, And Email. The Goal Of
                  Digital Marketing Is To Reach And Engage Customers Where They
                  Spend Most Of Their Time, Which Is Increasingly Online.Some Of
                  The Key Concepts And Techniques Covered In A Digital Marketing
                  Course.
                </p>
                <div className="mt-md-3">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Introduction
                          To Digital Marketing{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Google Ads
                          Mastery
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Types of
                          Google Ads
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Youtube
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Shorts
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Keywords for
                          SEO{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Optimizations
                          for SEO{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Youtube Ads{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Campaign Ads &
                          Types{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Target Setting
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Bidding &
                          Budgeting
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Youtube Ads
                          Conversion Tracking
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Result Check &
                          Optimization{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Google My
                          business{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Setup process
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Keywords
                          Optimization
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> GMB{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Facebook Ads
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Types of
                          Facebook Ads
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Instagram
                          Marketing
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Setting up
                          your instagram profile{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Boost Post (
                          Running Ads )
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Facebook Ads
                          Library Overview
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Influencer
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> SEO
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Best Practices
                          For SEO{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Backlinks
                          Creation
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Outreach
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Google
                          Analytics{" "}
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Social Media
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Content
                          Calendar
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Marketing
                          Stratgies for Businesses
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Service Based
                          Business Strategy
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Product Based
                          Business strategy
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Email
                          marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Whatsapp
                          Automation
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Use Of Latest
                          AI Tools in Digital Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Creating A
                          Shopify/wordpress Website
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Content
                          Creation
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Overview &
                          Bonuses
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="">
              <div className="col-sm-12 text-center">
                <div className="coach-box">
                  <div className="">
                    <span>Course Includes</span>
                  </div>
                </div>
              </div>
              <div className="row mt-md-4">
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/social-media.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> 3 Months Duration</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/book-material.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3">Ready to go Book Material</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/online-class.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> Live Zoom or Offline Classes</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/study-project.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> Case Study Based Project</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 pt-2 pb-1 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/recorded-videos.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3">Included Recorded Sessions </h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className="lazy m-auto"
                      src="/images/icons/certified.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> Certified From NSDC</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-md-4 margin-top">
        <div className="container-fluid py-md-5 bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 mb-md-4">
                <div className="coach-box text-center">
                  <div className="d-none d-md-block">
                    <span>Government Approved Courses</span>
                  </div>
                  <h2 className="w-100">Our Institute Accreditation</h2>
                </div>
              </div>
              <div className="col-md-6 text-center mt-3 mt-md-0">
                <div>
                  <img
                    src="/images/certificate/certificate-logo.png"
                    className="img-fluid"
                    alt="Certificate Logo"
                    width="80%"
                  />
                </div>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <div>
                  <img
                    src="/images/certificate/fitIT-certificate.jpeg"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Certificate Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div className="">
                    <span>Student Review</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-md-5">
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/divyesh-patel.webp"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Divyesh Patel</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      It is I Divyesh Patel who started the journey of digital
                      marketing at the time of covid-19 because I {`didn't`} get
                      enough
                      {showMore ? (
                        <span>
                          clients due to the lockdown. I was from the
                          non-technical field so initially capturing all this
                          information was very difficult. Now I got 3-4 clients
                          each week from google location, and 2-3 from Instagram
                          and I also set an online appointment segment so anyone
                          can book my appointment as per my preferred time and
                          place. I recommend this course to each and every
                          person who wants to grow in his career and especially
                          belongs to the health and fitness industry.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        onClick={toggleReadMore}
                        className="about-btn moreless-button4"
                      >
                        {showMoreI ? "Read less" : "Read more"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/debug-review.webp"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Desai Shubham</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      Helpful guidance I would like to thank you for the helpful
                      guidance provided by the Anirudh sir. I am happy with my
                      {showMoreI ? (
                        <span>
                          tutor who is very efficient and shared his knowledge
                          and experience with me.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        onClick={toggleReadMoreI}
                        className="about-btn moreless-button3"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/debug-review-3.webp"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Harsh bhootra</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      One of the BEST institute. Lots to learn from the
                      professional coach ANIRUDH KHURANA. This place offers more
                      than expected.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/debug-review-2.webp"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Aditya Jaiswal</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      Best place to upgrade and learn new skills to excel in
                      Software Industry. Highly recommended for exponential
                      growth. 💯
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
