"use client";
// eslint-disable-next-line @next/next/no-img-element

import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import "../../../css/bootstrap.css";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";

export default function DigitalMarketingAgency() {
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

  const handleApplyForInquiry = async (e: any) => {
    e.preventDefault();
    try {
      await submitForm(
        name,
        email,
        mobile,
        "ERP Inquiry",
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

  function SampleNextArrow(props: any) {
    const { className, style, onClick, right } = props;
    const rightStyle = right ? { "--right": right } : {};

    return (
      <div
        className={`slider-button-right ${
          right ? "slider-button-right-important" : ""
        }`}
        style={{ ...style, ...rightStyle, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick, left } = props;
    const leftStyle = left ? { "--left": left } : {};

    return (
      <div
        className={`slider-button-left ${
          left ? "slider-button-left-important" : ""
        }`}
        style={{ ...style, ...leftStyle, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  var digitalTeam = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  const testimonial = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow right="42%" />,
    prevArrow: <SamplePrevArrow left="42%" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow right="35%" />,
          prevArrow: <SamplePrevArrow left="35%" />,
        },
      },
    ],
  };

  var settings = {
    dots: false,
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
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container pt-md-5">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                <div className="fitit-box">
                  <h1>Welcome to Fit IT</h1>
                  <p>
                    A leading digital marketing agency that specializes in
                    helping businesses of all sizes to achieve their online
                    goals. Our team of experienced professionals combines
                    creativity, technical know-how, and data-driven strategies
                    to deliver exceptional results for our clients.
                  </p>
                  <div className="btn-box banner-btn mt-md-3 mt-2">
                    <Link
                      className="theme-btn style-two me-3"
                      href="/services/marketing-guru-services"
                    >
                      Learn More
                    </Link>
                    <a
                      href="/images/pdf/FITIT-PACKAGE.pdf"
                      className="theme-btn style-two"
                      download
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 image-column d-none d-md-block">
                <div className="image-box boximg">
                  <figure className="image image-1">
                    <img
                      src="/images/banner/baner-1.webp"
                      alt=""
                      className="lazy fitit-intro-image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop bg-dark">
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
                <div className="">
                  <Slider {...digitalTeam}>
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
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box mb-3 ">
                  <span style={{ fontSize: "16px" }}>Our Approach</span>
                </div>
                <div className="agency-design approach-1">
                  <p>
                    <span>At Fit IT,</span> we believe that every business is
                    unique and requires a customized digital marketing strategy.
                    That is why we take a data-driven approach to understand
                    your business, your audience, and your goals. We then create
                    a customized strategy that addresses your specific needs and
                    objectives. Our team of experts works closely with you to
                    execute the strategy and achieve the desired results.We also
                    provide regular reports and updates to ensure that you are
                    informed of the progress and performance of your campaigns.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/services/marketing-guru-services"
                    className="btn mx-1"
                  >
                    Know More
                  </Link>
                  <a
                    href="/pdf/FITIT-PACKAGE.pdf"
                    className="btn mx-1"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/banner/baner.webp"
                    alt="HR Agency"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pt-md-5 pt-4">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div>
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
      <section className="bg-dark pt-md-5 pt-4 pt-md-0">
        <div className="container-fluid">
          <div className="container pb-lg-5">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <span>Testimonial</span>
                </div>
              </div>
            </div>
            <div className="row mt-md-4 mt-3">
              <div className="col-md-6 order-2 testimonial-box-fitit">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/debug-review-3.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Harsh bhootra</strong>
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
                      Fit IT is a great digital marketing agency that helped me
                      grow my business. They are professional, knowledgeable,
                      and affordable. I would highly recommend them to anyone
                      looking for help with their digital marketing.
                    </p>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/debug-review.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Desai Shubham</strong>
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
                  <div className="client-comment mb-md-3">
                    <p>
                      Fit IT is a great digital marketing agency that provides
                      excellent website development and digital marketing
                      services. They are professional, knowledgeable, and
                      affordable. I would highly recommend them to anyone
                      looking for help with their website or digital marketing
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1">
                <Slider {...testimonial}>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/banner/banner-4.webp"
                          />
                          <div className="video-btn">
                            <Link
                              href="https://youtu.be/m_GpoDeW1QU"
                              data-flashy-type="video"
                              className="custom"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h4>Chirag Pandey (FGIIT Manager)</h4>
                        <Link
                          href="https://youtu.be/m_GpoDeW1QU"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/review/thumbnil-1.png"
                          />
                          <div className="video-btn">
                            <Link
                              href="https://youtube.com/5krZoURCpuE"
                              data-flashy-type="video"
                              className="custom"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h4>Kaushik Jadhav (Personal Trainer)</h4>
                        <Link
                          href="https://youtube.com/5krZoURCpuE"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/review/thumbnil-2.png"
                          />
                          <div className="video-btn">
                            <Link
                              href="https://youtube.com/r_AqNN4ijGI;"
                              data-flashy-type="video"
                              className="custom"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h4>Satish Nishad (Personal Trainer)</h4>
                        <Link
                          href="https://youtube.com/r_AqNN4ijGI;"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/review/milan-modi-review.webp"
                          />
                          <div className="video-btn">
                            <Link
                              href="https://youtube.com/AljwdDjKUw0"
                              data-flashy-type="video"
                              className="custom"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h4>Dr.Milan Modi</h4>
                        <Link
                          href="https://youtube.com/AljwdDjKUw0"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div className="mb-3">
                    <span>Fit IT Packages</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-md-5">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">
                  Beginner is Marketing Package
                </h4>
                <div>
                  <img
                    src="/images/fitit/digital-marketing-course.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">
                    Beginner is Marketing Package
                  </h4>
                  <div className="d-block d-md-flex">
                    <p className="mb-0">
                      <b>Duration:-</b> 90 Days
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p className="mb-0">
                      <b>Included Services :-</b>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Marketing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Video Editing & Shooting{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Graphics Designing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Paid Advertisements{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Basic Website Development Upto 5 pages ( Wordpress )
                        </li>
                      </ul>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Platforms:- </b>Facebook, Instagram,
                        YouTube, Google My Business, Pinterest / LinkedIn
                      </p>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Content:- </b>45 for 3 months ( 15 videos,
                        15 photos, and 15 graphics )
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="course-price mt-md-3 mt-3"
                  id="recorded-price-1"
                >
                  <h4>
                    ₹20,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Beginner is Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹20,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Beginner is Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">
                  Standard Marketing Package (Recommended)
                </h4>
                <div>
                  <img
                    src="/images/mix-img/Beginner-marketing.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">
                    Standard Marketing Package (Recommended)
                  </h4>
                  <div className="d-block d-md-flex">
                    <p className="mb-0">
                      <b>Duration:-</b> 90 Days
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p className="mb-0">
                      <b>Included Services :-</b>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Marketing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Video Editing & Shooting{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Graphics Designing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Paid Advertisements{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Website Design & Development ( Shopify, Wordpress &
                          Coding ) Based on requirements
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Optimization & Reporting
                        </li>
                      </ul>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Platforms:- </b>Facebook, Instagram,
                        YouTube, Google My Business, Pinterest / LinkedIn, Local
                        Citations{" "}
                      </p>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Content:- </b>90 content for 3 months ( 30
                        videos, 30 photos & 30 videos )
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="course-price mt-md-3 mt-3"
                  id="recorded-price-1"
                >
                  <h4>
                    ₹45,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Standard Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹45,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Standard Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">
                  Premium Marketing Package (Recommended)
                </h4>
                <div>
                  <img
                    src="/images/fitit/Strategic-Devlopment.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">
                    Premium Marketing Package (Recommended)
                  </h4>
                  <div className="d-block d-md-flex">
                    <p className="mb-0">
                      <b>Duration:-</b> 90 Days
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p className="mb-0">
                      <b>Included Services :-</b>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2 d-block d-md-none">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Marketing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Video Editing & Shooting{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Graphics Designing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Paid Advertisements{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Website Design & Development
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Optimization & Reporting ( Total 5
                          Platforms included : Facebook, Instagram, Google My
                          Business, Youtube & Pinterest + 5 Side Platforms to
                          maintain Online presence everywhere)
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          5 Ad campaign + Ads Analysis + Monitoring + Weekly
                          Reporting + Performance Check
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Total 90 content/month
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Everyday 1 Graphic 1 Photo & 1 Video will be uploaded
                          on every Social Media Platform
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Boosting will be done every alternate days
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Weekly Growth & Analysis Report
                        </li>
                      </ul>
                      <div className="d-md-flex d-none">
                        <ul className="mb-0 mb-mb-2 d-none d-md-block col-md-6 px-0">
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Social Media Marketing
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Video Editing & Shooting{" "}
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Graphics Designingt
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Paid Advertisements{" "}
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Website Design & Development
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Social Media Optimization & Reporting
                          </li>
                        </ul>
                        <ul className="mb-0 mb-mb-2 d-none d-md-block col-md-6 px-0">
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            5 Ad campaign
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Everyday Posting on Social Media
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Boosting will be done every alternate days
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Weekly Growth & Analysis Report
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Platforms:- </b>Facebook, Instagram,
                        YouTube, Google My Business, Pinterest / LinkedIn, Local
                        Citations{" "}
                      </p>
                    </div>
                    <div className="d-block d-md-flex mt-3 ml-3">
                      <p className="mb-0">
                        <b>Included Content:- </b>270 content for 3 months which
                        includes 90 Graphics, 90 Videos & 90 Photos
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="course-price mt-md-3 mt-3"
                  id="recorded-price-1"
                >
                  <h4>
                    ₹75,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Premium Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹75,000/- <span>+ 18%</span>
                  </h4>
                  <Link href="#myForm2" className="btn me-3">
                    Inquiry Now
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT Premium Marketing Package"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </Link>
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
                    <span>DIGITAL COURSES</span>
                  </div>
                  <h2 className="w-100">Topic Be covered in course</h2>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 align-items-center">
              <div className="col-lg-6">
                <div>
                  <img
                    src="/images/fitit/digital-marketing-course.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="course-box">
                  <h4>Digital Marketing Course</h4>
                  <div className="d-block d-md-flex">
                    <p className="mb-0">
                      <b>Duration</b> :- 3 month
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mb-0">Syllabus :-</p>
                    </div>
                    <div className="col-sm-7 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Social Media Marketing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Content Creation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Web Design &amp; Development
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Video Editing
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <ul>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Graphic Designing
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Facebook Paid Ads
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Google Ads
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          SEO
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course-price mt-md-3" id="recorded-price-1">
                  <h4>
                    ₹ 15,000/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="/courses/online-digital-marketing-course"
                    className="btn"
                  >
                    Know More
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹ 15,000/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="/courses/online-digital-marketing-course"
                    className="btn"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row pt-3 pt-md-4 mt-md-4">
              <div className="col-lg-6">
                <div>
                  <img
                    className="img-fluid"
                    src="/images/fitit/Python-course.webp"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-0 pb-3 pb-md-5">
                <div className="course-box">
                  <h4>Online Python Programming Course</h4>
                  <div className="d-block d-md-flex">
                    <p className="mb-0">
                      <b>Duration</b> : 2 month
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mb-0">Syllabus :-</p>
                    </div>
                    <div className="col-sm-6 mt-2 mt-md-0">
                      <ul className="mb-0 mb-md-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Introduction/Installation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Overview &amp; Operators
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Conditional &amp; Control Stateme nts
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Lists (Collection Of Data)
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Tuples, Dictionary and Sets
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Strings &amp; Functions
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Module and Exception Handling
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          File Handling
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course-price mt-md-3" id="recorded-price">
                  <h4>
                    ₹ 9,999/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Python course"
                    className="btn"
                  >
                    Enroll Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price">
                  <h4>
                    ₹ 9,999/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Python course"
                    className="btn"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-md-4">
        <div className="container-fluid py-md-5">
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
                          src="/images/fitit/debug-review-2.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Aditya Jaiswal</strong>
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
                      Best place to upgrade and learn new skills to excel in
                      Software Industry. Highly recommended for exponential
                      growth. 💯
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
                          src="/images/fitit/debug-review-3.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Harsh bhootra</strong>
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
                          src="/images/fitit/divyesh-patel.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Divyesh Patel</strong>
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
                      It is I Divyesh Patel who started the journey of digital
                      marketing at the time of covid-19 because I did not get
                      enough
                      {showMoreIII ? (
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
                          src="/images/fitit/debug-review.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Desai Shubham</strong>
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
                      Helpful guidance I would like to thank you for the helpful
                      guidance provided by the Anirudh sir. I am happy with my
                      {showMoreIIII ? (
                        <span>
                          tutor who is very efficient and shared his knowledge
                          and experience with me.
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
      <section className="bg-dark margintop">
        <div className="container-fluid py-5 py-md-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6 d-block d-md-none">
                <div>
                  <img
                    src="/images/fitit/gcs-portfolio.png"
                    alt="Company Portfolio"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box mb-3 d-none d-md-block">
                  <span style={{ fontSize: "16px" }}>Our Portfolio</span>
                </div>
                <div className="agency-design approach-1">
                  <p>
                    <span>Fit IT</span> Company is a leading digital marketing
                    agency, dedicated to propelling businesses to online
                    success. We offer a comprehensive suite of services,
                    including SEO, social media marketing, content creation, and
                    paid advertising. Our expert team crafts tailored strategies
                    to boost brand visibility, engage audiences, and drive
                    measurable results. Partner with us to thrive in the
                    ever-evolving digital landscape.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Marketing Guru Services"
                    target="_blank"
                    className="btn mx-1"
                  >
                    Know More
                  </Link>
                  <a
                    href="/images/pdf/GCS Compnay Portfolio.pdf"
                    className="btn mx-1"
                    download=""
                  >
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div>
                  <img
                    src="/images/fitit/gcs-portfolio.png"
                    alt="Company Portfolio"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container pb-5">
            <div className="row align-items-center">
              <div className="col-lg-6 content-column order-2 order-md-1">
                <div className="coach-box">
                  <div>
                    <span style={{ fontSize: "16px" }}>Latest Features</span>
                  </div>
                </div>
                <div className="fitit-box mt-3">
                  <h2
                    style={{ fontSize: "28px" }}
                    className="d-none d-md-block"
                  >
                    Supercharge Your Gym Business with Our All-in-One ERP
                    Software!
                  </h2>
                  <h2 className="d-block d-md-none">
                    {" "}
                    Supercharge Your Gym Business with Our All-in-One ERP
                    Software!
                  </h2>
                  <p>
                    {" "}
                    Unlock efficiency with diet and exercise PDF creation,
                    seamless invoicing, expense management, and customized
                    branding for your company is success. Try it now!
                  </p>
                  <ul className="mt-3">
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Effortless Invoice Creation
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Seamless Expense Management
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Empower Your Clients :- Personalized Diet & Exercise PDFs
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Customized Branding.
                    </li>
                  </ul>
                  <div className="btn-box banner-btn mt-md-3 mt-2">
                    <Link
                      className="theme-btn style-two"
                      href="/services/erp_software"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 image-column order-1 order-md-2">
                <div className="image-box boximg d-none d-md-block">
                  <div className="image image-1">
                    <img
                      alt="ERP Software"
                      width="120%"
                      src="/images/fitit/main-Dasboard-app.webp"
                    />
                  </div>
                </div>
                <div className="image-box boximg d-md-none d-block">
                  <div className="image image-1">
                    <img
                      src="/images/fitit/main-Dasboard-app.webp"
                      alt="ERP Software"
                      className="lazy"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="contianer-fluid py-3 py-md-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box">
                  <div className="d-none d-md-block">
                    <span style={{ fontSize: "16px" }}>Latest Blog</span>
                  </div>
                  <h2 className="w-100 d-block d-md-none text-center mb-3">
                    Latest Blog
                  </h2>
                  <div className="d-block d-md-none">
                    <img
                      src="/images/blog/fitit/fitit-blog-thumbnail.webp"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <h2 className="w-100">
                    From Clicks to Conversions : How a Digital Marketing Agency
                    Can Skyrocket Your Sales
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    In today is digital age, businesses need to have a strong
                    online presence to stay competitive. Simply attracting
                    clicks to your website is not enough; the real goal is to
                    convert those clicks into valuable sales. This is where a
                    digital marketing agency can be your secret weapon....
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/blog/how-a-digital-marketing-agency-can-skyrocket-your-sales"
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/blog/fitit/fitit-blog-thumbnail.webp"
                    alt="HR Agency"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
                    Get A <br /> Free Quote
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
