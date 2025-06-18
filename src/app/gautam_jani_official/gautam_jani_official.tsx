/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
"use client";
// eslint-disable-next-line @next/next/no-img-element
import React, { useEffect, useState } from "react";
import "../../css/gcs.css";
import "../../css/gautam-jani.css";
import "../../css/media.css";
import "../../css/landing.css";
import "../../js/popper.min.js";
import "../../css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCirclePlay,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";
import Link from "next/link";
import ReactPlayer from "react-player";
import ChatBotComponent from "../../components/chat-bot";
import ModalVideo from "react-modal-video";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function GautamJaniOfficial() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrlPopUp, setVideoUrlPopUp] = useState("");

  const openVideoModal = (url: any) => {
    setIsVideoOpen(true);
    setVideoUrlPopUp(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrlPopUp("");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleApplyForInquiry = async (e: any) => {
    e.preventDefault();
    try {
      await submitForm(
        name,
        email,
        mobile,
        "ERP Inquiry",
        message,
        "https://gcsconsultant.com/gautam_jani_official"
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

  const images = [
    "images/sir/sir-1.webp",
    "images/sir/sir-2.webp",
    "images/sir/sir-9.webp",
    "images/sir/sir-10.webp",
    "images/sir/sir-7.webp",
    "images/sir/sir-8.webp",
    "images/sir/sir-3.webp",
    "images/sir/sir-4.webp",
    "images/sir/sir-5.webp",
    "images/sir/sir-6.webp",
  ];
  const imageses = [
    "images/sir/saho.webp",
    "images/sir/mazhar.webp",
    "images/sir/navnish.webp",
    "images/sir/t4.webp",
  ];
  const imagesNew = [
    "images/sir/t&p-review-1.webp",
    "images/sir/t&p-review-2.webp",
    "images/sir/t&p-review-3.webp",
    "images/sir/t&p-review-4.webp",
    "images/sir/t&p-review-5.webp",
    "images/sir/t&p-review-6.webp",
    "images/sir/t&p-review-7.webp",
    "images/sir/t&p-review-8.webp",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const settingsOne = {
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setContentLoaded(true);
    setVideoLoaded(true);
  }, []);

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrlPopUp}
        onClose={closeVideoModal}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <Link
        className="float-button"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about gautam jani"
      >
        <i className="fab fa-whatsapp"></i>
        <span>Message</span>
      </Link>
      <ChatBotComponent />
      <section id="hero" className="hero bg-white pt-0">
        <div className="container-fluid px-0">
          <div className="">
            <div className="hero-img">
              <div className="p-0">
                {isClient && (
                  <ReactPlayer
                    url={`/images/sir/sir-video.mp4`}
                    width="100%"
                    height="auto"
                    style={{ borderRadius: "10px" }}
                    playing
                    loop
                    muted
                    playsinline
                    onReady={() => console.log("Video ready")}
                    onError={() => console.log("Error loading video")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2 pb-3 pt-5 bg-white">
        <div className="container-fluid">
          <div className="container">
            <div className="title-compnay text-center mt-2 pb-3">
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>Transforming Health, Minds and Lives</b>
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-1.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-2.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-3.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-4.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-5.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
              <div className="col-md-4 col-6 px-3 py-2">
                <img
                  src="images/book/design-6.png"
                  alt="sales"
                  style={{
                    width: "100%",
                  }}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hero" className="hero hero-about bg-white pt-0 pb-5 pt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  Dr.Gautam Jani <br /> Health & Fitness Educator
                </h1>
                <div
                  className="hero-img d-md-none d-block mt-3"
                  data-aos="zoom-out"
                >
                  <div className="p-0 d-flex justify-content-center">
                    <img
                      src="/images/gautam-jani.webp"
                      alt="Gautam Jani"
                      width="70%"
                    />
                  </div>
                </div>
                <p
                  data-aos="fade-up mb-2 p-2"
                  data-aos-delay={100}
                  className=""
                >
                  With over 13 years of dedicated experience, Dr. Gautam Jani
                  stands as a leader in the health and fitness industry. His
                  mission is to transform lives through expert guidance in
                  nutrition, fitness, and holistic wellness. Combining his
                  academic background and practical expertise, he has empowered
                  countless individuals to achieve their health goals.
                </p>
                <div className="d-none d-md-block">
                  <div
                    className="d-flex flex-column flex-md-row btn-container"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello, I want to know more about Dr. Gautam Jani."
                      className="btn-get-started"
                    >
                      Get Started{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                  </div>
                </div>
                <div className="d-block d-md-none mt-3">
                  <div
                    className="d-flex flex-row flex-md-row btn-container hero-btn"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello, I want to know more about Dr. Gautam Jani."
                      className="btn-get-started hero-video-btn"
                    >
                      Get Started{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-md-block d-none">
                <div className="hero-img">
                  <div className="p-0">
                    <img src="/images/gautam-jani.webp" alt="Gautam Jani" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-white who-is-jani">
        <div className="container-fluid pb-md-5">
          <div className="container">
            <div className="title-compnay text-center">
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>Who is Dr.Gautam Jani ?</b>
                </span>
              </h2>
            </div>
            <div>
              <Slider {...settingsOne}>
                <div className="mt-3 mb-3">
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="video-img">
                          <div className="ply1 black-before">
                            <img
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              alt="client journey"
                              src="/images/atoz/chirag-pandey.webp"
                            />
                            <div className="video-btn">
                              <a
                                onClick={() => openVideoModal("eNftd_fbBOo")}
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content-service">
                          <h4>Chirag Pandey</h4>
                          <p className="">
                            Our team of experienced financial advisors will work
                            with you to create a personalised investment plan..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="video-img">
                          <div className="ply1 black-before">
                            <img
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              alt="client journey"
                              src="/images/atoz/chirag-sir.webp"
                            />
                            <div className="video-btn">
                              <a
                                onClick={() => openVideoModal("eNftd_fbBOo")}
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content-service">
                          <h4>Chirag Chandleker</h4>
                          <p className="mb-0">
                            Our team of experienced financial advisors will work
                            with you to create a personalised investment plan..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="video-img">
                          <div className="ply1 black-before">
                            <img
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              alt="client journey"
                              src="/images/atoz/satish.webp"
                            />
                            <div className="video-btn">
                              <a
                                onClick={() => openVideoModal("eNftd_fbBOo")}
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content-service">
                          <h4>Satish Nishad</h4>
                          <p className="">
                            Our team of experienced financial advisors will work
                            with you to create a personalised investment plan..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="video-img">
                          <div className="ply1 black-before">
                            <img
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              alt="client journey"
                              src="/images/atoz/review-client.webp"
                            />
                            <div className="video-btn">
                              <a
                                onClick={() => openVideoModal("eNftd_fbBOo")}
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content-service">
                          <h4>Rushabh Joshi</h4>
                          <p className="">
                            Our team of experienced financial advisors will work
                            with you to create a personalised investment plan..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-white who-is-jani">
        <div className="container-fluid pb-md-5">
          <div className="container mb-5">
            <div className="title-compnay review-title text-center">
              <h4>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>From Engineer to Educator</b>
                </span>
              </h4>
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>
                    Meet Chirag Pandey, The Trainer Who Transformed His Passion
                    Into A Profession
                  </b>
                </span>
              </h2>
            </div>
            <div>
              <div className="mt-3 mb-3">
                <div className="col-12">
                  <div className="card-box card-style-1 text-start">
                    <div
                      className="inner-service review-inner"
                      style={{ boxShadow: "none" }}
                    >
                      <div
                        className="video-img"
                        style={{ borderRadius: "10px", overflow: "hidden" }}
                      >
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/atoz/chirag-pandey.webp"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("uoQ5s2mKpXM")}
                              data-flashy-type="video"
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
                    <div className="review-content-service">
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        <span>
                          Hello everyone, my name is Chirag Pandey. I started my
                          career as a mechanical engineer, but then I saw an
                          advertisement about Dr. Gautam Jani's nutrition and
                          personal training courses online. I joined his course
                          in 2017-2018 and completed my first course through
                          online recorded videos
                        </span>
                      </p>
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        <span className="">
                          I really enjoyed learning from him, and he would
                          personally solve our doubts one-on-one and encourage
                          us to build a career in this field. After completing
                          the course, I joined a gym as a personal trainer and
                          gained a lot of knowledge. People started to
                          appreciate me, and as time passed, I met Dr. Gautam
                          Jani again to discuss how I could further my career.
                        </span>
                      </p>
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        He suggested that I join him, and I worked as a personal
                        trainer at his gym for a year. During this time, I
                        received intense training, and he pushed me to become a
                        faculty member. I successfully completed various
                        government exams, and after a year or two of training,
                        Dr. Gautam Jani launched me as a faculty member.
                      </p>
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        I'm still working with him, and I want to thank him for
                        believing in me and giving me the opportunity to work
                        with him and grow in this field. Thank you so much, Dr.
                        Gautam Jani.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-5">
            <div className="title-compnay review-title text-center">
              <h4>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>From Transformation To Inspiration</b>
                </span>
              </h4>
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  <b>
                    Meet Kinjal Pastagia, The Dietitian Who Turned Her Journey
                    Into A Career
                  </b>
                </span>
              </h2>
            </div>
            <div>
              <div className="mt-3 mb-3">
                <div className="col-12">
                  <div className="card-box card-style-1 text-start">
                    <div
                      className="inner-service review-inner"
                      style={{ boxShadow: "none" }}
                    >
                      <div
                        className="video-img"
                        style={{ borderRadius: "10px", overflow: "hidden" }}
                      >
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/atoz/kinjal-prastagia.webp"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("MNG3fDK8-sw")}
                              data-flashy-type="video"
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
                    <div className="review-content-service">
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        <span>
                          Hello everyone, I'm Dietitian Kinjal Bastargia. Today,
                          I want to share my fitness journey with you. It all
                          started seven years ago when I was introduced to Dr.
                          Gautam Jani through my husband. He guided me with a
                          personalized diet plan, which helped me achieve an
                          incredible fifty-three kilogram weight loss.
                        </span>
                      </p>
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        <span className="">
                          Dr. Jani then suggested that I consider a career as a
                          dietitian. I took his advice and pursued a course in
                          dietetics and personal training from FGIIT, his
                          institute. Today, I work as a dietitian at the Adajan
                          branch and as an online trainer.
                        </span>
                      </p>
                      <p className="d-flex">
                        <FontAwesomeIcon
                          className="mt-1 me-2"
                          icon={faCircleCheck}
                        />{" "}
                        I'd like to take this opportunity to thank Dr. Gautam
                        Jani and his team for their guidance and support.
                        They've played a significant role in my transformation,
                        and I'm grateful for their expertise and encouragement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements-section pt-5 pb-0">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="row">
            {[
              {
                title: "Won Mr. Gujarat and Mr. Surat titles 2014",
                image: "images/gcs/achievements-1.webp",
                description:
                  "Dr. Gautam Jani demonstrated his exceptional dedication to fitness by winning the prestigious titles of Mr. Gujarat and Mr. Surat in 2014. These accolades marked the beginning of his impactful journey in the health and fitness industry.",
              },
              {
                title:
                  "Opened Fitness with Gomzi Transformation 10000+ Clients",
                image: "images/gcs/achievements-2.webp",
                description:
                  "Dr. Jani established 'Fitness with Gomzi,' a groundbreaking fitness center that set new standards in personal training and nutrition coaching. During this time, he designed tailored programs for bodybuilding, competition preparation, and holistic health management.",
              },
              {
                title: "Created 16000+ dieticien and trainers coummnity",
                image: "images/gcs/achievements-3.webp",
                description:
                  "Recognizing the need for structured education in fitness and nutrition, Dr. Jani launched FGIIT Academy. The academy provides cutting-edge training for aspiring health professionals, focusing on innovative fitness strategies and nutritional science.",
              },
              {
                title:
                  "Won best performing startup awarded by telecom minister",
                image: "images/gcs/achievements-4.webp",
                description:
                  "In 2020, Dr. Jani enhanced his expertise by obtaining advanced accreditations, further solidifying his status as a trusted advisor in the health and fitness domain.",
              },
              {
                title:
                  "Started gcs to help dieticians, gyms, and trainers with marketing services and financial management",
                image: "images/gcs/achievements-6.webp",
                description:
                  "Pursuing Gomzi Consulting Services (GCS) They Provide Expertise Across Various Areas Such As Strategy Development, Marketing, IT Services, Finance Management, And More.",
              },
              {
                title: "First Doctorate degree in entire india",
                image: "images/gcs/achievements-7.webp",
                description:
                  "Dr. Jani achieved a significant academic milestone by earning his Doctorate in 2024, further enhancing his credentials and ability to lead in the health and wellness industry.",
              },
              {
                title: "Received India Business Leadership and Educator Award",
                image: "images/gcs/achievements-8.webp",
                description:
                  "In recognition of his contributions to health and education, Dr. Jani was honored with the India Business Leadership and Educator Award by the Global Human Rights and Council USA in 2024. This award highlights his commitment to excellence and transformative impact.",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className={`row align-items-center mb-5 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="col-lg-6">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-lg-6">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white pt-md-5 pt-4 pt-md-0 section-services pb-3 books-bg-img">
        <div className="container pt-4 pb-4">
          <div className="title-company text-center mb-md-2 mb-1 container pt-2 pb-2">
            <h2>
              <span style={{ color: "white", margin: "0px" }}>
                Books Written By Gautam Jani
              </span>
            </h2>
          </div>
          <div className="portfolio-cards">
            <div className="row justify-content-center">
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/steriods-book-for-bodybuilding">
                  <img
                    src="/images/book/book-anabolic.webp"
                    alt="Anabolic Book"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/nutrition-book">
                  <img
                    src="/images/book/book-dnc.webp"
                    alt="DNC Book"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/personal-training-book">
                  <img
                    src="/images/book/book-dpt.webp"
                    alt="DPT Book"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/group-instructor-masterclass">
                  <img
                    src="/images/book/book-group.webp"
                    alt="Group Book"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/injury-rehab">
                  <img
                    src="/images/book/book-injury.webp"
                    alt="Injury Book"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="col-md-2 col-6">
                <a href="https://fggroup.in/book/powerlifting-theory-and-practice">
                  <img
                    src="/images/book/book-powerlifting.webp"
                    alt="Powerlifting Book"
                    className="rounded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="paddingtop book-bg-image bg-white"
        style={{ backgroundColor: "#F6F6F6 !important" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="title-compnay text-center mb-md-5 mb-3">
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  Conference & Events As a Speaker
                </span>
              </h2>
            </div>
          </div>
          <div className="d-none d-md-block">
            <Slider {...settings} className="smooth-slider">
              {images.map((src, index) => (
                <div className="px-2 item" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="d-block d-md-none">
            <div className="row g-2">
              {images.map((src, index) => (
                <div className="col-6 mt-2 px-2" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="pb-4 book-bg-image bg-white"
        style={{ backgroundColor: "#F6F6F6 !important" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="title-compnay text-center mb-md-5 mb-3">
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  Transformation done by Dr.Guatam jani
                </span>
              </h2>
            </div>
          </div>
          <div className="d-none d-md-block">
            <Slider {...settings} className="smooth-slider">
              {imageses.map((src, index) => (
                <div className="px-2 item" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="d-block d-md-none">
            <div className="row g-2">
              {imageses.map((src, index) => (
                <div className="col-6 mt-2 px-2" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="pb-4 book-bg-image bg-white"
        style={{ backgroundColor: "#F6F6F6 !important" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="title-compnay text-center mb-md-5 mb-3">
              <h2>
                <span style={{ color: "black", margin: "0px" }}>
                  Students transformation fitness youth into the fitness
                  leadership
                </span>
              </h2>
            </div>
          </div>
          <div className="d-none d-md-block">
            <Slider {...settings} className="smooth-slider">
              {imagesNew.map((src, index) => (
                <div className="px-2 item" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="d-block d-md-none">
            <div className="row g-2">
              {imagesNew.map((src, index) => (
                <div className="col-6 mt-2 px-2" key={index}>
                  <img
                    className="img-fluid"
                    src={src}
                    alt={`weight loss transformation ${index + 1}`}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div
          className="bg-full-bd sir-contact-page"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="contact-us">
                  <h2>
                    Contact Us For <br /> More Details
                  </h2>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="contact-us-form">
                  <div className="mb-4">
                    <h4 className="text-black">Fill The Form :-</h4>
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
      <footer className="footer-section new-footer">
        <div className="footer-container">
          <div className="social-media">
            <a
              href="https://instagram.com/gomzi2712?igshid=Y2IzZGU1MTFhOQ=="
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} className="" />
            </a>
            <a href="https://www.facebook.com/gajani2" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} className="" />
            </a>
            <a
              href="https://www.youtube.com/@GautamJaniOffcial"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faYoutube} className="" />
            </a>
            <a
              href="https://www.linkedin.com/in/gautam-jani-561a50161"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} className="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
