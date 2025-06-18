"use client";
// eslint-disable-next-line @next/next/no-img-element

import React, { useState } from "react";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../css/effect.css";
import "../../css/prakriti_by_jiya/style.css";
import "../../css/prakriti_by_jiya/bootstrap.min.css";
import "../../js/popper.min.js";
import PrakritiHeader from "../header/PrakritiHeader";
import PrakritiFooter from "../footer/PrakritiFooter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function PrakritiByJiya() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      title:
        "I take lots of Doctors treatment but my Diseased not stopped I am worried but my cousin suggests to take treatment hear and I am start treatment and after 3 month treatment I can see many improvement.I am very happy and satisfied with treatment....",
      name: "Neha Sarma",
      image: "/images/prakriti_by_jiya/review-2.jpg",
    },
    {
      title:
        "Hey this is Raj Joshi Was going through seasonal flu every now and then Then one of my friends recommend prakriti by Jiya where I get proper Ayurvedic guidance by dr Jayna Really happy with the treatment Now I can say that my seasonal flu is treatable anytime !",
      name: "Raj Joshi",
      image: "/images/prakriti_by_jiya/review-1.jpg",
    },
    {
      title:
        "Earlier I have issues with gastric reflux and acidity I tried the detox plan provided by prakriti by Jiya With the lifestyle guidance dr Jayna provided with the help of it I get really best result with my problems Highly recommend prakriti by jiya",
      name: "Rajesh Patel",
      image: "/images/prakriti_by_jiya/review-3.jpg",
    },
    {
      title:
        "My sugar is going high and low continuously that's why I take medicine of sugar but when I visit Prakriti by jiya after that my sugar is in control and now I don't want to take a medicine. Panchkarma treatment was amazing.... reduced my stress level and loss my 3 kg weight",
      name: "Shruti Chauhan",
      image: "/images/prakriti_by_jiya/review-4.jpg",
    },
  ];

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <PrakritiHeader
        logoURL={"/images/prakriti_by_jiya/prakriti-by-jiya.png"}
        mobileLogoURL={"/images/prakriti_by_jiya/prakriti-by-jiya.png"}
        altLogo={"Fitit Logo"}
      />
      <main className="prakriti-body">
        <section
          className="d-none d-md-block hero-section hero-section-full-height  wow animate__animated  animate__fadeIn"
          data-wow-delay="300ms"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12 p-0">
                <div id="hero-slide-1" className="">
                  <div className="d-none d-md-block">
                    <img
                      src="/images/prakriti_by_jiya/heal-with-ayurvada.png"
                      className="carousel-image img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <img
                      src="/images/prakriti_by_jiya/heal-with-ayurvada-3.png"
                      className="carousel-image img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="d-block d-md-none hero-section hero-section-full-height  wow animate__animated  animate__fadeIn"
          data-wow-delay="300ms"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12 p-0">
                <div id="hero-slide" className="owl-carousel owl-theme">
                  <Slider {...settings3}>
                    <div className="d-block d-md-none">
                      <img
                        src="/images/prakriti_by_jiya/heal-with-ayurvada-3.png"
                        className="carousel-image img-fluid"
                        alt="..."
                      />
                    </div>

                    <div className="item">
                      <img
                        src="images/prakriti_by_jiya/home-slide.JPG"
                        className="carousel-image img-fluid"
                        alt="..."
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-paddin-3 mt-xl-10 pt-xl-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mt-5 col-12 prakriti-form text-center mx-auto d-md-block d-none">
                <h2 className="my-5">Welcome to Prakriti By Jiya</h2>
              </div>
              <div className="col-lg-10 mt-5 col-12 prakriti-form text-center mx-auto d-block d-md-none">
                <h2 className="my-5">Welcome to Prakriti By Jiya</h2>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated  animate__fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a className="d-block">
                    <img
                      src="/images/prakriti_by_jiya/Panchkarma.JPG"
                      className="featured-block-image img-fluid"
                      alt=""
                    />

                    <p className="featured-block-text mb-0">
                      <strong>Panchakarma </strong>
                      <br /> ( Purification Therapies : Healing methods )
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4 wow animate__animated  animate__fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a className="d-block">
                    <img
                      src="/images/prakriti_by_jiya/Garbhsanskar.jpg"
                      className="featured-block-image img-fluid"
                      alt=""
                    />

                    <p className="featured-block-text">
                      <strong>Garbhsanskar </strong> <br /> ( Educating unborn
                      child & motherhood ){" "}
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4 wow animate__animated  animate__fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a className="d-block">
                    <img
                      src="/images/prakriti_by_jiya/Seasonal lifestyle.JPG"
                      className="featured-block-image img-fluid"
                      alt=""
                    />

                    <p className="featured-block-text">
                      {" "}
                      Seasonal lifestyle guidance to{" "}
                      <strong> improve Health</strong>
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated  animate__fadeInUp"
                data-wow-delay="900ms"
              >
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a className="d-block">
                    <img
                      src="/images/prakriti_by_jiya/Treatment segment.JPG"
                      className="featured-block-image img-fluid"
                      alt=""
                    />

                    <p className="featured-block-text">
                      <strong>Targeted treatments related to</strong> metabolic
                      disorders
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section section-padding-2 ">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-5 col-12 wow animate__animated  animate__fadeInLeft  d-none d-md-block"
                style={{ marginTop: "80px" }}
              >
                <img
                  src="/images/prakriti_by_jiya/dr_jayna.jpeg"
                  className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                  alt=""
                />
              </div>

              <div
                className="col-lg-5 col-md-7 col-12 wow animate__animated  animate__fadeInRight d-none d-md-block"
                style={{ marginTop: "80px", marginBottom: "80px" }}
              >
                <div className="custom-text-block">
                  <h2 className="mb-0">
                    Meet <br /> Dr Jayna Upadhyay
                  </h2>

                  <p className="text-muted mb-lg-4 mb-md-4">
                    Founder of Prakriti By Jiya
                  </p>

                  <p>
                    Compassionate and dedicated Ayurveda physician, committed to
                    delivering exceptional patient care. With a patient-centered
                    approach, I provide personalized healthcare in Ayurveda
                    clinical settings. I strive to find the most effective
                    treatment options, ensuring the highest quality of care for
                    every individual I serve.
                  </p>
                  <ul className="social-icon mt-4">
                    <li
                      className="social-icon-item"
                      style={{ textAlign: "center" }}
                    >
                      <a
                        href="https://www.facebook.com/jaynaupadhyay"
                        className="social-icon-link"
                        target="_blank"
                      >
                        <img
                          src="./images/prakriti_by_jiya/facebook.png"
                          width="15px"
                          className="mb-2"
                          alt=""
                        />
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://instagram.com/prakritibyjiya?igshid=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        className="social-icon-link "
                      >
                        <img
                          src="./images/prakriti_by_jiya/instagram.png"
                          width="15px"
                          className="mb-2"
                          alt=""
                        />
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                        className="social-icon-link "
                      >
                        <img
                          src="./images/prakriti_by_jiya/linkedin.png"
                          width="15px"
                          className="mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-text-block text-center d-block d-md-none">
                <h2 className="mb-3">
                  Meet <br /> Dr Jayna Upadhyay
                </h2>
              </div>
              <div id="slider-1" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="wow animate__animated  animate__fadeIn d-block d-md-none">
                    <img
                      src="/images/prakriti_by_jiya/dr_jayna.jpeg"
                      className="about-image ms-lg-auto bg-light shadow-lg "
                      alt=""
                    />
                    <div className="custom-text-block text-center">
                      <p className="text-muted mb-lg-4 mb-md-4">
                        Founder of Prakriti By Jiya
                      </p>

                      <p className="mt-3 p-2">
                        Compassionate and dedicated Ayurveda physician,
                        committed to delivering exceptional patient care. With a
                        patient-centered approach, I provide personalized
                        healthcare in Ayurveda clinical settings. I strive to
                        find the most effective treatment options, ensuring the
                        highest quality of care for every individual I serve.
                      </p>
                      <ul className="social-icon mt-4">
                        <li
                          className="social-icon-item"
                          style={{ textAlign: "center" }}
                        >
                          <a
                            href="https://www.facebook.com/jaynaupadhyay"
                            className="social-icon-link"
                            target="_blank"
                          >
                            <img
                              src="./images/prakriti_by_jiya/facebook.png"
                              width="15px"
                              className="mb-2"
                              alt=""
                            />
                          </a>
                        </li>

                        <li className="social-icon-item">
                          <a
                            href="https://instagram.com/prakritibyjiya?igshid=NTc4MTIwNjQ2YQ=="
                            target="_blank"
                            className="social-icon-link "
                          >
                            <img
                              src="./images/prakriti_by_jiya/instagram.png"
                              width="15px"
                              className="mb-2"
                              alt=""
                            />
                          </a>
                        </li>

                        <li className="social-icon-item">
                          <a
                            href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                            className="social-icon-link "
                          >
                            <img
                              src="./images/prakriti_by_jiya/linkedin.png"
                              width="15px"
                              className="mb-2"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item  d-block d-md-none">
                  <div className=" mt-md-0">
                    <iframe
                      width="100%"
                      height="345"
                      style={{ borderRadius: "20px" }}
                      src="https://www.youtube.com/embed/zeMAl3czBzk?si=kO6gv82cocLARwJQ"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <div className="custom-text-block">
                    <h2 className="mb-0 p-3 pb-0">
                      Ayurveda for Allergies Diseases
                    </h2>

                    <p className="p-3">
                      {" "}
                      Ayurveda plays a vital role in managing seasonal
                      allergies, as explained by Dr. Jayna. Through customized
                      purification and medication therapies, diseases in the
                      body can be eradicated effectively. Additionally, Garbh
                      Sanskar practices aim to educate and instill proper
                      sanskars in the child while in the womb, ensuring their
                      holistic development. Ayurveda offers a comprehensive
                      approach to address allergies and promote overall
                      well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section section-padding section-bg">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-12 ms-auto prakriti-form">
                <h2 className="mb-0 Consultation-h2">
                  Book Your <br /> Online Consultation.
                </h2>
              </div>

              <div className="col-lg-5 col-12">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf28Cpa51-m15CX0TUtWcBzIH6Xt6T9gtBdcuTwuvNkVpWHyg/viewform?usp=sf_link"
                  className="prakriti-custom-btn custom-btn btn smoothscroll wow animate__animated  animate__bounceIn ml-4 ml-lg-0"
                >
                  Get an Appointment
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section margintop">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12 wow animate__animated  animate__fadeInLeft d-none d-md-block">
                <div className="video-card mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        src="/images/prakriti_by_jiya/heal-with-ayurvada.png"
                        className="about-image-2 ms-lg-auto bg-light shadow-lg img-fluid"
                        alt=""
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/zeMAl3czBzk"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fa fa-play" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-7 col-12 wow animate__animated animate__fadeInRight d-none
                        d-md-block"
              >
                <div className="custom-text-block ">
                  <h2 className="mb-3">Ayurveda for Allergies Diseases</h2>

                  <p>
                    {" "}
                    Ayurveda plays a vital role in managing seasonal allergies,
                    as explained by Dr. Jayna. Through customized purification
                    and medication therapies, diseases in the body can be
                    eradicated effectively. Additionally, Garbh Sanskar
                    practices aim to educate and instill proper sanskars in the
                    child while in the womb, ensuring their holistic
                    development. Ayurveda offers a comprehensive approach to
                    address allergies and promote overall well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section mt-lg-5">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-7 col-12 wow animate__animated animate__fadeInRight d-none
                        d-md-block"
              >
                <div className="custom-text-block">
                  <h2 className="">
                    Discoves the Ancient wisdom of Health with Prakriti By Jiya
                  </h2>
                  <p className="mb-0" style={{ fontSize: "20px" }}>
                    <span style={{ fontSize: "25px" }}>
                      <b>»</b>
                    </span>
                    <b>{`Suffering from caseous gut, an acidic stomach, and indigestion? Let's fix all
                                            your
                                            Gut related issues at Prakrity by Jiya.`}</b>
                  </p>
                  <div className="mt-4">
                    <Link href="detox-plan">
                      <button className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3">
                        Know more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-12 wow animate__animated  animate__fadeInLeft d-none d-md-block">
                <div className="mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="">
                      <img
                        src="./images/prakriti_by_jiya/ayurveda.webp"
                        className="about-image-2 ms-lg-auto bg-light shadow-lg img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-block d-md-none">
                <div className="video-card mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        src="/./images/prakriti_by_jiya/ayurveda.webp"
                        className="about-image-2 ms-lg-auto bg-light shadow-lg img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-text-block p-3">
                  <h4 className="">
                    Discover the Ancient wisdom of Health with Prakriti By Jiya
                  </h4>
                  <p className="mb-0" style={{ fontSize: "20px" }}>
                    <span style={{ fontSize: "25px" }}>
                      <b>»</b>
                    </span>
                    <b>{`Suffering from gaseous gut, an acidic stomach, and indigestion? Let's fix all
                                            your
                                            Gut related issues at Prakrity by Jiya.`}</b>
                  </p>
                  <div className="mt-4">
                    <Link href="detox-plan">
                      <button className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3">
                        Know more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding d-none d-md-block" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-4 prakriti-form">
                <h2>Our Services</h2>
              </div>
              <div
                className="row justify-content-center"
                style={{ margin: "auto" }}
              >
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInRight">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">1</h2>
                        </div>
                        <h5 className="mb-3">Consultation</h5>
                        <p>
                          Being an Ayurveda doctor, my goal is to maintain the
                          health of an individual via a holistic approach and to
                          treat the diseased with the essence of Ayurveda.
                        </p>
                        <a
                          href="https://forms.gle/yY4k1F3hrw7mvT6S6"
                          className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3"
                        >
                          Know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeIn">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">2</h2>
                        </div>
                        <h5 className="mb-3">Panchakarma (Detox)</h5>
                        <p>{`Detox plan is made to rejuvenate each and every microcell and to clear out
                                                    toxins from the body. This cleansing process of the body is called
                                                    "Panchakarma".`}</p>
                        <button
                          id="detox"
                          className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3"
                        >
                          Know more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInLeft">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">3</h2>
                        </div>
                        <h5 className="mb-3">Garbhsanskar</h5>
                        <p>
                          Garbhsanskar nurtures the unborn. Simple activities
                          for social, physical, spiritual, and mental well-being
                          of mother & child. Sanskar/knowledge for the unborn.
                        </p>
                        <a
                          id="garbhsanskar"
                          className="prakriti-custom-btn custom-btn btn know-btn smoothscroll p-3"
                        >
                          Know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding d-block d-md-none" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-4">
                <h2>Our Services</h2>
              </div>
              <div
                className="row justify-content-center"
                style={{ margin: "auto" }}
              >
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInRight">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">1</h2>
                        </div>
                        <h5 className="mb-3">Consultation</h5>
                        <p>
                          Being an Ayurveda doctor, my goal is to maintain the
                          health of an individual via a holistic approach and to
                          treat the diseased with the essence of Ayurveda.
                        </p>
                        <a
                          href="https://forms.gle/yY4k1F3hrw7mvT6S6"
                          className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3"
                        >
                          Know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeIn">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">2</h2>
                        </div>
                        <h5 className="mb-3">Panchakarma (Detox)</h5>
                        <p>{`Detox plan is made to rejuvenate each and every microcell and to clear out
                                                    toxins from the body. This cleansing process of the body is called
                                                    "Panchakarma".`}</p>
                        <Link
                          href="panchakarma"
                          className="prakriti-custom-btn custom-btn know-btn btn smoothscroll p-3"
                        >
                          Know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInLeft">
                  <div className="custom-block-wrap text-center pt-3">
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <div className="service-count">
                          <h2 className="text-center mb-3">3</h2>
                        </div>
                        <h5 className="mb-3">Garbhsanskar</h5>
                        <p>
                          Garbhsanskar nurtures the unborn. Simple activities
                          for social, physical, spiritual, and mental well-being
                          of mother & child. Sanskar/knowledge for the unborn.
                        </p>
                        <Link
                          href="garbhsanskar"
                          className="prakriti-custom-btn custom-btn btn know-btn smoothscroll p-3"
                        >
                          Know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" id="detox-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-4 prakriti-form">
                <h2>Detox Plan</h2>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInRight">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/detox.png"
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                  <div className="custom-block">
                    <div className="custom-block-body">
                      <h5 className="mb-3">Normal Detox Plan</h5>
                      <p>» Zoom Consultation</p>
                      <p>» Prakriti Analysis & Brief History taking</p>
                      <p>» Understanding Detox</p>
                      <p>» Customized Detox Plan</p>
                      <p>» Follow up Via Zoom Every 3 Days</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Normal Detox Plan"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeIn">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/anual-detox-plan.png"
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                  <div className="custom-block">
                    <div className="custom-block-body">
                      <h5 className="mb-3">Annual Detox Plan</h5>
                      <p>» Monthly Diet & Exercise Plan</p>
                      <p>» Medicinal Guidance Throughout the Year</p>
                      <p>» {`Seasonal Do's & Don'ts`}</p>
                      <p>» Yoga & Exercise</p>
                      <p>» Weekly Zoom</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Annual Detox Plan"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated animate__fadeInLeft">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/seasonal-detox.png"
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                  <div className="custom-block">
                    <div className="custom-block-body">
                      <h5 className="mb-3">Seasonal Detox Plan (3 Months)</h5>
                      <p>» Zoom Consultation</p>
                      <p>» Prakriti Analysis & Brief history</p>
                      <p>» Seasonal Diet, Exercise & Detox Drink</p>
                      <p>» Every 3 Days Follow Up</p>
                      <p>» Medicinal Guidance If Required</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Seasonal Detox Plan (3 Months)"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" id="garbhsanskar-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-4 prakriti-form">
                <h2>Garbhsanskar Plan</h2>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated animate__fadeInRight">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/Garbhsanskar-monthly.png"
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                  <div className="custom-block">
                    <div
                      className="custom-block-body"
                      style={{ padding: "9px" }}
                    >
                      <h5 className="mb-3">Garbhsanskar (Monthly) Plan</h5>
                      <p>» Zoom Consulting</p>
                      <p>
                        » Monthly Diet, Exercise & Yoga Plan, Meditation Session
                      </p>
                      <p>» If any Co-Morbidity Then Medicinal Plan.</p>
                      <p>
                        » WhatsApp Activity Every 3 Days (Memory Game, Music
                        Session, Accordingly).
                      </p>
                      <p>» Once a Week Follow Up.</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Garbhsanskar (Monthly) Plan"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated animate__fadeIn">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/garbhsanskar-anual-plan.png"
                    className="custom-block-image img-fluid"
                    alt=""
                  />
                  <div className="custom-block">
                    <div
                      className="custom-block-body"
                      style={{ paddingBottom: "17px" }}
                    >
                      <h5 className="mb-3">Garbh Sanskar (9 Months) Plan</h5>
                      <p>» Zoom Consulting, Monthly Diet</p>
                      <p>» Exercise & Yoga Plan & Meditation Session</p>
                      <p>
                        » Medicinal Plan, Activity Every 3 Days, Every Week
                        Follow Up
                      </p>
                      <p>» Post Pregnancy Lifestyle & Care Guide</p>
                      <p>» Complimentary Guidance Any Time</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Garbh Sanskar (9 Months) Plan"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-4 wow animate__animated animate__fadeInLeft">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/diseased-plan.png"
                    className="custom-block-image img-fluid pb-3"
                    alt=""
                  />
                  <div className="custom-block">
                    <div className="custom-block-body">
                      <h5 className="mb-3">Diseased Plan</h5>
                      <p>» Zoom Consultation</p>
                      <p>» Brief history & Prakriti Analysis, Medicinal Plan</p>
                      <p>» Detox Customised Plan, Follow Up Every 3 Days</p>
                      <p>» Post Treatment Diet & Lifestyle Plan</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=7600091041&text=Hello I want to know more Diseased Plan"
                      target="_blank"
                      className="prakriti-custom-btn custom-btn btn"
                    >
                      Inquiry now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section section-padding section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto prakriti-form">
                <h2 className="mb-lg-3">Happy customers</h2>
                <div
                  id="testimonial-carousel"
                  className="carousel carousel-fade slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner mb-10 pb-10">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === activeIndex ? "active" : ""
                        }`}
                      >
                        <div className="carousel-caption">
                          <h4 className="carousel-title">
                            {testimonial.title}
                          </h4>
                          <small className="carousel-name">
                            <span className="carousel-name-title">
                              {testimonial.name}
                            </span>
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ol className="carousel-indicators">
                    {testimonials.map((testimonial, index) => (
                      <li
                        key={index}
                        data-bs-target="#testimonial-carousel"
                        data-bs-slide-to={index}
                        className={index === activeIndex ? "active" : ""}
                        onClick={() => setActiveIndex(index)}
                      >
                        <img
                          src={testimonial.image}
                          className="img-fluid rounded-circle avatar-image"
                          alt="avatar"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PrakritiFooter />
    </>
  );
}
