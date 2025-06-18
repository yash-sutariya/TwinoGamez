// eslint-disable-next-line @next/next/no-img-element
"use client";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../../css/bootstrap.css';
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import Link from "next/link";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";

export default function MarketingGuruServices() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);
  const [showMoreII, setShowMoreII] = useState(false);
  const [showMoreIII, setShowMoreIII] = useState(false);
  const [showMoreIIII, setShowMoreIIII] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");

  const handleApplyForInquiry = async (e: any) => {
    e.preventDefault();
    try {
      await submitForm(
        name,
        email,
        mobile,
        "Marketing guru services",
        message,
        window.location.href
      );

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setSource("");
      Swal.fire({
        icon: "success",
        title: "",
        text: "Thank You for Connecting us. We will Contact You Soon.",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        confirmButtonText: "OK",
      });
    }
    setShow(false);
  };

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const toggleReadMoreI = () => {
    setShowMoreI(!showMoreI);
  };
  const toggleReadMoreII = () => {
    setShowMoreII(!showMoreII);
  };
  const toggleReadMoreIII = () => {
    setShowMoreIII(!showMoreIII);
  };
  const toggleReadMoreIIII = () => {
    setShowMoreIIII(!showMoreIIII);
  };

  var digitalTeam = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var testimonial = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pagination: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var project1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var Project2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var client1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var client2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
  };

  return (
    <>
      <Header
        logoURL={"/images/logos/fitit-logo.png"}
        mobileLogoURL={"/images/logos/fitit-logo.png"}
        altLogo={"Fitit Logo"}
      />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid px-0">
          <div className="d-none d-md-block">
            <Link href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to book Free Consulting">
              <img
                src="/images/gcs/new-offer.png"
                className="img-fluid"
                alt="offer"
              />
            </Link>
          </div>
          <div className="d-block d-md-none">
            <Link href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to book Free Consulting">
              <img
                src="/images/gcs/new-mobile-offer.jpg"
                className="img-fluid"
                alt="offer"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-dark pt-md-5 pt-4">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box d-none d-md-block">
                  <div>
                    <span>MARKETING GURU Services</span>
                  </div>
                </div>
                <div className="reasons-box d-block d-md-none">
                  <h4>
                    MARKETING GURU{" "}
                    <span style={{ color: "#ff8024" }}> Services</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-5 mt-4">
              <div className="col-md-6">
                <div className="video-img">
                  <div className="ply1">
                    <img
                      className="lazy"
                      width="100%"
                      style={{ borderRadius: "10px 10px 10px 10px" }}
                      alt="client journey"
                      src="/images/fitit/marketing-black.jpg"
                    />
                    <div className="video-btn">
                      <Link
                        href="https://youtu.be/A_3hGSPVKXA"
                        data-flashy-type="video"
                        id="video-btn"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100">Marketing Guru Services</h2>
                </div>
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Marketing guru service help a Business to reach and engage
                    to new customers with advance social media strategies, IT
                    services and ad campaigning. We help on following services,
                  </p>
                  <ul className="mt-md-2 mt-2">
                    <li style={{ fontWeight: "700", color: "#fff" }}>
                      1. Website Design & Development
                    </li>
                    <li style={{ fontWeight: "700", color: "#fff" }}>
                      2. Social media marketing
                    </li>
                    <li style={{ fontWeight: "700", color: "#fff" }}>
                      3. Paid ads on Facebook and Google
                    </li>
                    <li style={{ fontWeight: "700", color: "#fff" }}>4. SEO</li>
                    <li style={{ fontWeight: "700", color: "#fff" }}>
                      5. Content creation
                    </li>
                    <li style={{ fontWeight: "700", color: "#fff" }}>
                      6. PR activity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid py-md-5 py-3">
          <div className="container pb-md-5">
            <div className="col-md-12 text-center px-0 px-md-3">
              <div className="heading-text">
                <h2 className="text-center">Our Services</h2>
              </div>
            </div>
            <div className="Services-1 mb-5 mb-md-0">
              <Slider {...digitalTeam}>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/ser-3.webp"
                            width="100%"
                            alt="WEBSITE DEVLOPMENT & WEBSITE DESIGN"
                            className="lazy"
                          />
                          <h4 className="text-white">
                            Website Development and Website Design
                          </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Website Development and Website Design</h4>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            UP TO 100 PAGES
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/managment-skills.webp"
                            width="100%"
                            alt="Social media account marketing and handling"
                            className="lazy"
                          />
                          <h4 className="text-white">
                            Social media account marketing and handling
                          </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Social media account marketing and handling</h4>
                          <ul className="d-flex justify-content-center">
                            <li>
                              <i className="fab fa-facebook"></i>
                            </li>
                            <li>
                              <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li>
                              <i className="fab fa-instagram"></i>
                            </li>
                            <li>
                              <i className="fab fa-youtube"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/online-plan.webp"
                            alt="Social Media Marketing"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">
                            Paid Advertisement{" "}
                          </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Paid Advertisement</h4>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            META
                          </p>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            GOOGAL ADS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/content-writing.webp"
                            width="100%"
                            alt="Content Marketing"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">Content Writing </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Content Writing</h4>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            AD COPY & VIDEO SCRIPT
                          </p>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            AD SCRIPT & BLOGS
                          </p>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            CAPTION & ARTICALS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/shoot.webp"
                            alt="Content Marketing"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">Content Shoot</h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Content Shoot</h4>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            Photo Shoot
                          </p>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            Video Shoot
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/video-edit.webp"
                            width="100%"
                            alt="Content Edit"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">Content Edit</h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Content Edit</h4>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            Photo Edit
                          </p>
                          <p>
                            <i className="fas fa-long-arrow-alt-right mr-2"></i>
                            15 Reels Video + 3 Major Video for youtube
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/account-img.webp"
                            width="100%"
                            alt="Google my business profile Maintain"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">
                            Google my business profile Maintain
                          </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>Google my business profile Maintain</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flip-card-fitit">
                    <div className="flip-card-inner-fitit">
                      <div className="flip-card-front-fitit">
                        <div>
                          <img
                            src="/images/fitit/pr-events.webp"
                            width="100%"
                            alt="PR Activities & Events"
                            className="lazy"
                          />
                          <h4 className="text-white mt-5">
                            PR Activities & Events
                          </h4>
                        </div>
                      </div>
                      <div className="flip-card-back-fitit">
                        <div>
                          <h4>PR Activities & Events</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid">
          <div className="container pb-5">
            <div className="title-small">
              <h6>Our Client Review</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="main-title">
                <h2>Happy Clients Review</h2>
              </div>
            </div>
            <div className="d-none d-sm-block">
              <Slider {...testimonial}>
                <div className="px-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="465"
                        src="https://www.youtube.com/embed/g2wzrJRz7ec?si=5Jeg0RdrJgNjI4cb"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="465"
                        src="https://www.youtube.com/embed/fDjDB87BhR0?si=KxMrji5M4GphfBZh"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="465"
                        src="https://www.youtube.com/embed/AljwdDjKUw0?si=ADwERvxxAicqFg6c"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="465"
                        src="https://www.youtube.com/embed/m_GpoDeW1QU?si=TV3VShkcNJBHu3P8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="coach-box text-center">
                  <div>
                    <span>Digital Team</span>
                  </div>
                  <h2 className="w-100 d-none d-md-block">
                    No matter how brilliant your mind or strategy. if you are
                    playing a solo game, you will always lose out to a team.
                  </h2>
                </div>
                <div>
                  <Slider {...settings}>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/takshak/coach-2.png"
                            width="100%"
                            alt="Owner"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Dr.Gautam Jani</h5>
                          <p>Owner</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-4.webp"
                            width="100%"
                            alt="Full Stack Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Smit Luvani</h5>
                          <p>Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-5.webp"
                            width="100%"
                            alt="Full Stack Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Jenil Narola</h5>
                          <p>Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-3.webp"
                            width="100%"
                            alt="Digital Marketer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Rozal Gohil</h5>
                          <p>Digital Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-1.webp"
                            width="100%"
                            alt="Video Grapher & Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Harshad Dave</h5>
                          <p>Video Grapher & Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-2.webp"
                            width="100%"
                            alt="Owner"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Divyesh Baraiya</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-7.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Yash Sutariya</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-8.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Umang Rathod</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-9.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Brijesh Prajapati</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-10.webp"
                            width="100%"
                            alt="Video Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Suresh Pagi</h5>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-11.webp"
                            width="100%"
                            alt="Video Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Vedant Makani</h5>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-12.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Krishi Shah</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-13.webp"
                            width="100%"
                            alt="SEO Executive"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Heer Shah</h5>
                          <p>SEO Executive</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-14.webp"
                            width="100%"
                            alt="SEO Executive"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Prem Beshan</h5>
                          <p>SEO Executive</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-15.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Isha Patel</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-16.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Amee Mistri</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid py-4 py-md-5">
          <div className="container">
            <div className="col-md-12 text-center">
              <div className="reasons-box">
                <h4>
                  <span style={{ color: "#ff8024" }}>Our </span> Services
                </h4>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/website-devlopment.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    alt="Website Development and Website Design"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="coach-box ">
                  <h2 className="w-100">
                    Website Development and Website Design
                  </h2>
                </div>
                <div className="d-block d-md-none">
                  <div className="d-block d-md-none pt-2">
                    <div>
                      <Slider {...project1}>
                        <div className="item">
                          <Link href="https://stallon.in">
                            <img
                              src="/images/mix-img/stallon-website-mobile.webp"
                              className="img-fluid"
                              alt="Stallon Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://gcsconsultant.com/">
                            <img
                              src="/images/mix-img/gcs-website-mobile.webp"
                              className="img-fluid"
                              alt="GCS Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://eyetoeye.in/">
                            <img
                              src="/images/mix-img/eyetoeye-website-mobile.webp"
                              className="img-fluid"
                              alt="EyetoEye Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://gcsconsultant.com/business-consulting-services">
                            <img
                              src="/images/mix-img/Takshak-website.webp"
                              className="img-fluid"
                              alt="Takshak Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://fggroup.in/fgiit/courses">
                            <img
                              src="/images/mix-img/FGIIT-website.webp"
                              className="img-fluid"
                              alt="FGIIT Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://gcsconsultant.com/digital-marketing-agency">
                            <img
                              src="/images/mix-img/Fitit-website.webp"
                              className="img-fluid"
                              alt="Stallon Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://gcsconsultant.com/financial-advisory-services">
                            <img
                              src="/images/mix-img/A2Z-website.webp"
                              className="img-fluid"
                              alt="A2Z Website"
                            />
                          </Link>
                        </div>
                        <div className="item">
                          <Link href="https://fggroup.in/fitnesswithgomzi/Rapid-transformanation-program">
                            <img
                              src="/images/mix-img/fitnesswithgomzi-website.webp"
                              className="img-fluid"
                              alt="GCS Website"
                            />
                          </Link>
                        </div>
                      </Slider>
                    </div>
                  </div>
                  <div className="approach">
                    <p className="mb-0">
                      Our website development and website design services offer
                      a comprehensive solution to your online presence. We focus
                      on creating visually appealing, user-friendly websites
                      that deliver results. Our team of experienced
                    </p>
                    {showMore ? (
                      <p>
                        developers and designers work closely with you to
                        understand your business needs and goals, ensuring that
                        the end result reflects your brand is personality and
                        values. From basic static sites to dynamic e-commerce
                        platforms, we provide customized solutions that enhance
                        your online presence and improve user experience. Trust
                        us to take your website to the next level.
                      </p>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                    <div className="mt-3 d-block d-md-none">
                      <div className="d-flex">
                        <span
                          onClick={toggleReadMore}
                          id="myBtnn"
                          style={{ cursor: "pointer" }}
                          className="about-btn moreless-button"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </span>
                        <Link
                          href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                          className="btn ml-3"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-block">
                  <div className="approach">
                    <p className="mb-0">
                      Our website development and website design services offer
                      a comprehensive solution to your online presence. We focus
                      on creating visually appealing, user-friendly websites
                      that deliver results. Our team of experienced and
                      designers work closely with you to understand your
                      business needs and goals, ensuring that the end result
                      reflects your brands personality and values. From basic
                      static sites to dynamic e-commerce platforms, we provide
                      customized solutions that enhance your online presence and
                      improve user experience. Trust us to take your website to
                      the next level.
                    </p>
                    <div className="course-price mt-md-3 d-none d-md-block">
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-none d-md-block">
              <div className="text-center my-md-4">
                <h2 className="d-none d-md-block">Our Projects</h2>
              </div>
            </div>
            <div className="d-none d-md-block">
              <Slider {...Project2}>
                <div className="px-2">
                  <div className="item">
                    <div className="screen">
                      <Link href="https://stallon.in">
                        <img src="/images/mix-img/stallon-website.webp" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen">
                      <Link href="https://fggroup.in/">
                        <img src="/images/mix-img/fggroup-website.webp" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen screen-eyeto">
                      <Link href="https://eyetoeye.in/">
                        <img src="/images/mix-img/eyetoeye-website.webp" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen screen-milanmodi">
                      <Link href="https://drmilanmodi.com/">
                        <img src="/images/mix-img/milanmodi-website.png" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen screen-bright">
                      <Link href="https://ieltsbharuch.com/">
                        <img src="/images/mix-img/brightintarnational-website.png" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen screen-maruti">
                      <Link href="https://marutitrainingcenter.in/">
                        <img src="/images/mix-img/maruti-website.png" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="px-2">
                    <div className="screen screen-kscars">
                      <Link href="https://kscars.in/">
                        <img src="/images/mix-img/kscar-website.png" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid pt-md-5 pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/social-media-posting.webp"
                    width="100%"
                    className="lazy"
                    style={{ borderRadius: "10px" }}
                    alt="Social media account marketing and handling"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="coach-box">
                  <h2 className="w-100">
                    Social media account marketing and handling
                  </h2>
                </div>
                <div className="d-block d-md-none">
                  <div className="d-block d-md-none">
                    <img
                      src="/images/mix-img/social-media-posting.webp"
                      width="100%"
                      className="lazy"
                      style={{ borderRadius: "10px" }}
                      alt="Social media account marketing and handling"
                    />
                  </div>
                  <div className="approach">
                    <p className="mb-0">
                      Looking to boost your social media presence and engage
                      with your audience effectively? Our social media account
                      marketing and handling services are here to help! Our team
                      of experts will w
                      {showMore ? (
                        <span
                          style={{
                            color: "#b4b4b4",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          ork with you to create engaging content, manage your
                          accounts, and track performance metrics to ensure you
                          are making the most of your social media presence.
                          With years of experience and a proven track record of
                          success, we are the partner you need to take your
                          social media marketing to the next level.
                        </span>
                      ) : (
                        <span
                          id="dotsx"
                          style={{
                            color: "#b4b4b4",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          ...
                        </span>
                      )}
                    </p>
                    <div className="mt-3">
                      <div className="mt-3 d-block d-md-none">
                        <div className="d-flex">
                          <span
                            onClick={toggleReadMore}
                            id="myBtnn"
                            style={{ cursor: "pointer" }}
                            className="about-btn moreless-button"
                          >
                            {showMore ? "Read less" : "Read more"}
                          </span>

                          <Link
                            href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                            className="btn ml-3"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-block">
                  <div className="approach">
                    <p className="mb-0">
                      Looking to boost your social media presence and engage
                      with your audience effectively? Our social media account
                      marketing and handling services are here to help! Our team
                      of experts will work with you to create engaging content,
                      manage your accounts, and track performance metrics to
                      ensure{" "}
                      {`you're making the most of
                                            your social media presence. With years of experience and a proven track record of
                                            success, we're the partner you need to take your social media marketing to the next
                                            level.`}
                    </p>
                    <div className="course-price mt-md-3 d-none d-md-block">
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-md-5">
              <div className="text-center">
                <h2 className="d-none d-md-block">Our Clients</h2>
              </div>
              <div className="d-none d-md-block">
                <Slider {...client1}>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/logos/atoz-logo.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>AtoZ Finance</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/spinex.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>spinex Global</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/takshak-logos.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>Takshak</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/gomzi.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>FitnessWithGomzi</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/fgiit.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>FGIIT</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/logos/fitit-logo-mobile.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>FitIT</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/stallon.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>Stallon</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box px-3 text-center">
                      <img
                        src="/images/mix-img/subodh.webp"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p>{`Subodh's Urology`}</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/bright-international-logo.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p className="mt-2">Bright International</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/mix-img/Charmi-logo.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p className="mt-3">Charmi Boutique</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-3">
                      <img
                        src="/images/mix-img/wee-too-logo.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p className="mt-3">Weetoo India</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/Dr-milan-modi-logo.png"
                        width="100%"
                        className="lazy"
                        alt="Logos"
                      />
                      <p className="mt-4">
                        Dr Milan modi Allergies and Chest Specialist
                      </p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/osjeans-logo.png"
                        style={{ width: "100% !important" }}
                        className="lazy ml-4"
                        alt="Logos"
                      />
                      <p className="mt-4">Os jenas</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/vraj-hospital-logo.png"
                        style={{ width: "100% !important" }}
                        className="lazy"
                        alt="Logos"
                      />
                      <p className="mt-4">Vraj Hospital</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/vala-logo.png"
                        style={{ width: "100% !important" }}
                        className="lazy ml-4"
                        alt="Logos"
                      />
                      <p className="mt-4">Never Down</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/black-pearl.png"
                        style={{ width: "100% !important" }}
                        className="lazy ml-2"
                        alt="Logos"
                      />
                      <p className="mt-4">Black Peral</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/mtc-logo.png"
                        style={{ width: "100% !important" }}
                        className="lazy ml-2"
                        alt="Logos"
                      />
                      <p className="mt-4">Maruti Training Center</p>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="logo-box text-center mt-5">
                      <img
                        src="/images/logos/shreemaainvestment-logo.png"
                        style={{ width: "100% !important" }}
                        className="lazy ml-2"
                        alt="Logos"
                      />
                      <p className="mt-4">Shreemaa Investment</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pt-5">
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 order-lg-2 order-md-1 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/facebook-ads.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Paid Advertisement META & GOOGLE ADS"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-lg-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">
                    Paid Advertisement META & GOOGLE ADS
                  </h2>
                </div>
                <div className="approach">
                  <p>
                    {`Are you looking for effective ways to promote your business online? Meta & Google
                                        Ads
                                        services can help you reach your target audience and increase your brand's
                                        visibility.
                                        With our expertise in digital marketing, we can create customized campaigns that fit
                                        your business goals and budget. Our team of professionals will manage your ads,
                                        ensuring
                                        they are optimized for maximum ROI. Don't let your competitors get ahead of you.
                                        Contact
                                        us today and let us help you boost your online presence!`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center  d-block d-md-none">
              <div className="col-md-6 order-2 order-md-">
                <div className=" d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">
                      Paid Advertisement META & GOOGLE ADS
                    </h2>
                  </div>
                  <img
                    src="/images/mix-img/facebook-ads.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    alt="Paid Advertisement META & GOOGLE ADS"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Are you looking for effective ways to promote your business
                    online? Meta & Google Ads services can help you reach your
                    target audience and increase y
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {`our brand's visibility.
                                                With our expertise in digital marketing, we can create customized campaigns that fit
                                                your business goals and budget. Our team of professionals will manage your ads, ensuring
                                                they are optimized for maximum ROI. Don't let your competitors get ahead of you. Contact
                                                us today and let us help you boost your online presence!`}
                      </span>
                    ) : (
                      <span
                        id="dotsx"
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        ...
                      </span>
                    )}
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn ml-3"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className=" col-md-6 order-lg-1 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/content-writer.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    alt="Content writing"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100"> Content writing</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    {`Content writing services offer businesses and individuals a variety of written materials
                                        such as blog posts, articles, website copy, and more. With the rise of digital
                                        marketing, content writing has become an essential aspect of promoting and growing a
                                        business online. Professional content writers are skilled in crafting engaging and
                                        informative content that resonates with their target audience. To ensure the quality and
                                        originality of the content, it is essential to use plagiarism-checking tools to identify
                                        any potential issues.`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <Link
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                      className="btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center d-block d-md-none">
              <div className="col-md-6 order-lg-2">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100"> Content writing</h2>
                  </div>
                  <img
                    src="/images/mix-img/content-writer.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Content writing services offer businesses and individuals a
                    variety of written materials such as blog posts, articles,
                    website copy
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        , and more. With the rise of digital marketing, content
                        writing has become an essential aspect of promoting and
                        growing a business online. Professional content writers
                        are skilled in crafting engaging and informative content
                        that resonates with their target audience. To ensure the
                        quality and originality of the content, it is essential
                        to use plagiarism-checking tools to identify any
                        potential issues.
                      </span>
                    ) : (
                      <span
                        id="dotsx"
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        ...
                      </span>
                    )}
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn ml-3"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/banner/banner-2.webp"
                    width="100%"
                    className="lazy"
                    style={{ borderRadius: "10px" }}
                    alt="Content Shoot"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Content Shoot</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    {`Content shoot services are a popular option for businesses looking to create
                                        high-quality video content. These services typically include a team of professionals
                                        who
                                        handle everything from pre-production planning to post-production editing. They can
                                        help
                                        businesses create engaging videos that showcase their products, services, and brand
                                        message in a creative way. However, it's important to choose a reputable provider
                                        with
                                        experience in your industry to ensure the best possible results. Always check for
                                        plagiarism in any content produced to ensure its originality.`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <Link
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                      className="btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center d-block d-md-none">
              <div className="col-md-6 order-lg-2">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Content Shoot</h2>
                  </div>
                  <img
                    src="/images/banner/banner-2.webp"
                    data-src="/images/banner/banner-2.webp"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Content Shoot"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Content shoot services are a popular option for businesses
                    looking to create high-quality video content. These services
                    typically include a team of
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        {`professionals who
                                            handle everything from pre-production planning to post-production editing. They can help
                                            businesses create engaging videos that showcase their products, services, and brand
                                            message in a creative way. However, it's important to choose a reputable provider with
                                            experience in your industry to ensure the best possible results. Always check for
                                            plagiarism in any content produced to ensure its originality.`}
                      </span>
                    ) : (
                      <span
                        id="dotsx"
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        ...
                      </span>
                    )}
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn ml-3"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1  d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/video-edit.webp"
                    width="100%"
                    className="lazy"
                    alt="Content Edit"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Content Edit</h2>
                </div>
                <div className="approach">
                  <p>
                    {`We provide high-quality video and graphic content editing services to meet your
                                        unique
                                        needs. Our experienced team is dedicated to enhancing your visual content to make it
                                        more engaging, professional, and memorable. We offer a wide range of editing
                                        services,
                                        including color correction, animation, motion graphics, and more. Our goal is to
                                        deliver
                                        stunning visuals that will help you stand out in today's competitive market. Trust
                                        us to
                                        bring your ideas to life through our expert editing skills.`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <Link
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                      className="btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center d-block d-md-none">
              <div className="col-md-6 order-lg-1">
                <div className=" d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Content Edit</h2>
                  </div>
                  <img
                    src="/images/mix-img/video-edit.webp"
                    width="100%"
                    className="lazy"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    {`We provide high-quality video and graphic content editing services to meet your unique
                                        needs. Our experienced team is dedicated to`}
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        enhancing your visual content to make it
                        {`more engaging, professional, and memorable. We offer a wide range of editing services,
                                        including color correction, animation, motion graphics, and more. Our goal is to deliver
                                        stunning visuals that will help you stand out in today's competitive market. Trust us to
                                        bring your ideas to life through our expert editing skills.`}
                      </span>
                    ) : (
                      <span
                        id="dotsx"
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        ...
                      </span>
                    )}
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                      <Link
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn ml-3"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pb-5">
        <div className="container-fluid py-md-5 pt-4">
          <div className="container">
            <div className="col-md-12 text-center">
              <div className="reasons-box">
                <h4>
                  Some of <span style={{ color: "#ff8024" }}> Our Work</span>
                </h4>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/tve0mJwNGpY?si=V1APyZLgPSj3lJ6d"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/sKF4bsNud_4?si=k-FQR0mq6iznwqe4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/ER7CwKBVIbs?si=qIIwA1NFgVaicFYi"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/6uyrkB9iPzQ?si=GyHC7flgN3Voxcej"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/DEN9KKXL284?si=qIAxhm_9HpQBOWlF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="col-lg-4 col-md-6 yt-tm-item">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "10px" }}
                  src="https://www.youtube.com/embed/QCR3Wrv4STk?si=vY2xIFMigiRz2Zi_"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pb-5">
        <div className="container-fluid py-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/gmb-profiles.png"
                    width="100%"
                    className="lazy"
                    alt="Google my business profile Maintain"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Google my business profile Maintain</h2>
                </div>
                <div className="approach">
                  <p>
                    Regularly updating your Google My Business profile with
                    accurate information, photos, and videos can boost your
                    local search ranking and help potential customers find your
                    business. To maintain credibility, use original language and
                    avoid plagiarism when creating content for your profile.
                    Engage with your customers by posting updates and showcasing
                    your products or services.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center d-block d-md-none">
              <div className="col-md-6 order-lg-2">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">
                      Google my business profile Maintain
                    </h2>
                  </div>
                  <img
                    src="/images/mix-img/gmb-profiles.png"
                    className="lazy"
                    alt="Google my business profile Maintain"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Regularly updating your Google My Business profile with
                    accurate information, photos, and videos can boost your
                    local search ranking and
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        help potential customers find your business. To maintain
                        credibility, use original language and avoid plagiarism
                        when creating content for your profile. Engage with your
                        customers by posting updates and showcasing your
                        products or services.
                      </span>
                    ) : (
                      <span
                        id="dotsx"
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        ...
                      </span>
                    )}
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Fitit"
                        className="btn ml-3"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid pt-md-3 pt-4 pb-md-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1">
                <div className="d-none d-md-block">
                  <img
                    src="/images/fitit/Our-Fees.webp"
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    width="100%"
                    alt="Our Fees"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="coach-box">
                  <h2 className="w-100 mt-0"> Our Fees</h2>
                </div>
                <div className="approach">
                  <p>
                    Transparent, competitive fees tailored to your needs.
                    Contact us for a personalized quote and discuss your
                    project.
                  </p>
                  <a
                    className="submit-btn"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Marketing Guru Services and i want know about your charges"
                  >
                    <i className="fab fa-whatsapp"></i>
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop pt-md-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div className="">
                    <span>Why Choose Fit IT?</span>
                  </div>
                  <h2
                    className="w-100 d-none d-md-block"
                    style={{ fontSize: "18px" }}
                  >
                    There are many reasons why businesses choose Fit IT as their
                    digital marketing agency. Here are a few:
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-md-4">
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-star"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Expertise</h2>
                    <p>
                      Our team of professionals has years of experience in
                      digital marketing, and we stay
                      {showMore ? (
                        <span>
                          up-to-date with the latest trends and techniques.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMore}
                      id="myBtnn"
                      style={{ cursor: "pointer" }}
                      className="about-btn moreless-button"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Customization</h2>
                  </div>
                  <p>
                    We do not believe in a one-size-fits-all approach. We
                    customize our strategies
                    {showMoreI ? (
                      <span>to meet your specific needs and objectives.</span>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                  </p>
                  <span
                    onClick={toggleReadMoreI}
                    id="myBtnn"
                    style={{ cursor: "pointer" }}
                    className="about-btn moreless-button"
                  >
                    {showMoreI ? "Read less" : "Read more"}
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Results-driven</h2>
                    <p className="mb-md-4 pb-2">
                      We are committed to delivering results that help you
                      achieve your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Transparency</h2>
                    <p>
                      We believe in being transparent with our clients. We
                      provide regular
                      {showMoreII ? (
                        <span>
                          reports and updates to ensure that you are informed of
                          the progress and performance of your campaigns.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMoreII}
                      id="myBtnn"
                      style={{ cursor: "pointer" }}
                      className="about-btn moreless-button"
                    >
                      {showMoreII ? "Read less" : "Read more"}
                    </span>
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
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div>
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
                          src="/images/review/markatingguru-review-4.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Bhargav Sureliya</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      Best Digital Marketing & Social Media Marketing Agency in
                      adajan. Very satisfied service. Surely recommend....{" "}
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
                          src="/images/review/markatingguru-review-2.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Yuvraj Dubey</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      Superb services, Digital marketing is all about strategy
                      and execution.. They are excellent at both .. Recommended
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
                          src="/images/review/markatingguru-review-3.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Nilam Patel</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      best digital marketing service in surat .They are always
                      very responsive and continuously give us suggestions to
                      {showMoreIII ? (
                        <span>
                          improve our digital visibility. Recommended all take
                          his service. Excellent performance and responsive.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMoreIII}
                      id="myBtnn"
                      style={{ cursor: "pointer" }}
                      className="about-btn moreless-button"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/review/markatingguru-review-1.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>
                          Dr. Modi Allergy & Chest - Clinic, DayCare, Hospital
                        </strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                      <i className="fas fa-star mx-1"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      🙏 Gratitude Alert! 🙌 Shoutout to Fit It Best IT &
                      Digital Marketing Agency! 🌟 As a Doctor, I am thrilled to
                      share my
                      {showMoreIIII ? (
                        <span>
                          experience with their top-notch services! 💯 From
                          boosting my online presence to skyrocketing my
                          practice, they nailed it all! 🚀
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMoreIIII}
                      id="myBtnn"
                      style={{ cursor: "pointer" }}
                      className="about-btn moreless-button"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div
          className="bg-full-bd"
          style={{
            backgroundImage: "url(/images/gcs/contact-us.webp)",
            backgroundAttachment: "local",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="contact-us">
                  <h2>
                    Get a <br /> Free Quote
                  </h2>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="contact-us-form">
                  <div className="mb-4">
                    <h4 className="fill">Fill The Form :-</h4>
                  </div>
                  <form id="myForm2" className="mt-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        className="form-control in-put"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="form-control in-put"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile"
                        id="mobile"
                        className="form-control in-put"
                        required
                        value={mobile}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <textarea
                        name="messages"
                        placeholder="Messages"
                        id="messages"
                        className="in-put"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="submit-btn"
                      onClick={handleApplyForInquiry}
                    >
                      Submit
                    </button>
                  </form>
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
