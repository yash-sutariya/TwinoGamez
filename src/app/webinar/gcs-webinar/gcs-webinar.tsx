"use client";
import React, { useState } from "react";
import "../../../css/bootstrap.css";
import "../../../css/gcs.css";
import "../../../css/landing.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { submitForm } from "@/utils/submitForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/header/Header";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function GCSWebinar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
    setShow(false);
  };

  return (
    <>
      <header>
        <Link
          href="https://api.whatsapp.com/send?phone=8866842520&text=I want to know about GCS Webinar."
          className="float"
          target="_blank"
        >
          {/* <i className="fab fa-whatsapp mt-3"></i> */}
          <img
            src="/images/achievements/whatsapp.png"
            style={{ borderRadius: "10px" }}
            className="img-fluid whatsapp-btn"
            alt="whatsapp-btn"
            width="32px"
          />
        </Link>
      </header>
      <section className="margintop wow animate__ animate__fadeInDown animated">
        <div className="container-fluid">
          <div className="container">
            <h1
              className="mb-0 text-center"
              style={{ fontWeight: "700", fontSize: "30px" }}
            >
              Are you struggling to scale your fitness business?
            </h1>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center" data-aos="fade-left">
                <div className="mt-4 landing-head">
                  <div className="d-block d-md-none mt-3">
                    <iframe
                      width="100%"
                      height="210px"
                      src="https://www.youtube.com/embed/W-VpjqhmR0s?si=lp5nu5XQ_SIKfKhj"
                      title="YouTube video player"
                      style={{ borderRadius: "30px" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="d-none d-md-block mt-3">
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/W-VpjqhmR0s?si=lp5nu5XQ_SIKfKhj"
                      title="YouTube video player"
                      style={{ borderRadius: "30px" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-4">
                      <h2 style={{ color: "#fff", fontSize: "26px" }}>
                        Health Coaches Who Won Big
                      </h2>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                      <img
                        src="/images/webinar-success/webinar-success-image-1.webp"
                        style={{ borderRadius: "10px" }}
                        className="img-fluid m-auto"
                        alt="coach"
                        width="100%"
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                      <img
                        src="/images/webinar-success/webinar-success-image-4.webp"
                        style={{ borderRadius: "10px" }}
                        className="img-fluid m-auto"
                        alt="coach"
                        width="100%"
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                      <img
                        src="/images/webinar-success/webinar-success-image-2.webp"
                        style={{ borderRadius: "10px" }}
                        className="img-fluid m-auto"
                        alt="coach"
                        width="100%"
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                      <img
                        src="/images/webinar-success/webinar-success-image-3.webp"
                        style={{ borderRadius: "10px" }}
                        className="img-fluid m-auto"
                        alt="coach"
                        width="100%"
                      />
                    </div>
                  </div>
                  {/* <div
                    className="row justify-content-center"
                    style={{ textAlign: "center", marginTop: "50px" }}>
                    <div className="col-md-4 p-3">
                      <div
                        style={{
                          backgroundColor: "#191919",
                          borderRadius: "10px",
                          padding: "30px 10px",
                          border: "2px dotted orange",
                        }}>
                        <img
                          src="/images/landing-page/marketing.png"
                          alt="sales"
                          style={{ width: "100px", marginBottom: "10px" }}
                          className="mx-auto"
                        />
                        <p
                          style={{
                            fontSize: "20px",
                            color: "orange",
                            margin: "0",
                            fontWeight: "bold",
                          }}>
                          Are You Struggling to get clients ?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 p-3">
                      <div
                        style={{
                          backgroundColor: "#191919",
                          borderRadius: "10px",
                          padding: "30px 10px",
                          border: "2px dotted orange",
                        }}>
                        <img
                          src="/images/landing-page/digital.png"
                          alt="sales"
                          style={{ width: "100px", marginBottom: "10px" }}
                          className="mx-auto"
                        />
                        <p
                          style={{
                            fontSize: "20px",
                            color: "orange",
                            margin: "0",
                            fontWeight: "bold",
                          }}>
                          Is your fitness making a <br /> loss ?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 p-3">
                      <div
                        style={{
                          backgroundColor: "#191919",
                          borderRadius: "10px",
                          padding: "30px 10px",
                          border: "2px dotted orange",
                        }}>
                        <img
                          src="/images/landing-page/digital-marketing.png"
                          alt="sales"
                          style={{ width: "100px", marginBottom: "10px" }}
                          className="mx-auto"
                        />
                        <p
                          style={{
                            fontSize: "20px",
                            color: "orange",
                            margin: "0",
                            fontWeight: "bold",
                          }}>
                          Is your Business Facing a burnout ?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 p-3">
                      <div
                        style={{
                          backgroundColor: "#191919",
                          borderRadius: "10px",
                          padding: "30px 10px",
                          border: "2px dotted orange",
                        }}>
                        <img
                          src="/images/landing-page/digital.png"
                          alt="sales"
                          style={{ width: "100px", marginBottom: "10px" }}
                          className="mx-auto"
                        />
                        <p
                          style={{
                            fontSize: "20px",
                            color: "orange",
                            margin: "0",
                            fontWeight: "bold",
                          }}>
                          Monthly Revenue run-rate is dropping ?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 p-3">
                      <div
                        style={{
                          backgroundColor: "#191919",
                          borderRadius: "10px",
                          padding: "30px 10px",
                          border: "2px dotted orange",
                        }}>
                        <img
                          src="/images/landing-page/graph-line.png"
                          alt="sales"
                          style={{ width: "100px", marginBottom: "10px" }}
                          className="mx-auto"
                        />
                        <p
                          style={{
                            fontSize: "20px",
                            color: "orange",
                            margin: "0",
                            fontWeight: "bold",
                          }}>
                          Your trainer & dietition not working well ?
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h2 style={{ color: "#fff", fontSize: "26px" }}>
                <p
                  className="mb-0"
                  style={{ fontWeight: "600", color: "white" }}
                >
                  Earn upto 6 Figure Income/month
                </p>
              </h2>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-3 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2">Winning Systems</h4>
                </div>
              </div>
              <div className="col-md-4 mt-3 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2">Staff SOP's</h4>
                </div>
              </div>
              <div className="col-md-4 mt-3 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2">Revenue Growth Strategies</h4>
                </div>
              </div>
              <div className="col"></div>
              <div className="col-md-4 mt-3 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2">Guaranteed ROI Plan:</h4>
                </div>
              </div>
              <div className="col-md-4 mt-3 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2">Mentorship</h4>
                </div>
              </div>
              <div className="col"></div>
            </div>
            <div>
              <Button
                variant="success"
                onClick={handleShow}
                className="w-100 mt-6"
                style={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                Book your spot today
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12 p-md-5">
              <div className="text-center">
                <h2 style={{ color: "#fff", fontSize: "26px" }}>
                  How will we help you?
                </h2>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-md-3 text-center mt-4 p-5 m-2"
                  style={{
                    border: "2px solid orange",
                    borderStyle: "dashed",
                  }}
                >
                  <div
                    className="include"
                    style={{
                      backgroundColor: "#ff9f69",
                      border: "2px solid #ce6600",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-src="/images/icons/recorded-videos.webp"
                      alt="recorded session"
                      src="/images/icons/recorded-videos.webp"
                    />
                  </div>
                  <h6 className="mt-3">Your Business's Marketing</h6>
                </div>
                <div
                  className="col-md-3 text-center mt-4 p-5 m-2"
                  style={{
                    border: "2px solid orange",
                    borderStyle: "dashed",
                  }}
                >
                  <div
                    className="include"
                    style={{
                      backgroundColor: "#ff9f69",
                      border: "2px solid #ce6600",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-src="/images/icons/webinar.png"
                      alt="Experience"
                      src="/images/icons/webinar.png"
                    />
                  </div>
                  <h6 className="mt-3">Efficient Management</h6>
                </div>
                <div
                  className="col-md-3 text-center mt-4 p-5 m-2"
                  style={{
                    border: "2px solid orange",
                    borderStyle: "dashed",
                  }}
                >
                  <div
                    className="include"
                    style={{
                      backgroundColor: "#ff9f69",
                      border: "2px solid #ce6600",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-src="/images/landing-page/report.png"
                      alt="Experience"
                      src="/images/landing-page/report.png"
                    />
                  </div>
                  <h6 className="mt-3">Financial Analysis & Budgeting</h6>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="success"
                onClick={handleShow}
                className="w-100 mt-6"
                style={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                Book your spot today
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12 textr-center p-0">
              <div className="text-center">
                <h2 style={{ color: "#fff", fontSize: "24px" }}>
                  <p
                    className="mb-0"
                    style={{ fontWeight: "600", color: "white" }}
                  >
                    Don't hear it from us, Hear it from our program joinees:
                  </p>
                </h2>
              </div>
              <div className="landing-testimonial-video">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <div
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        margin: "10px 0px",
                        border: "2px dotted orange",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/m_GpoDeW1QU"
                        title="YouTube video player"
                        style={{ borderRadius: "10px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                      <p
                        style={{ fontWeight: "bold", textAlign: "center" }}
                        className="mt-3"
                      >
                        Journey of Dt. Chirag Pandey from 15000 INR to 2
                        lakh/month
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        margin: "10px 0px",
                        border: "2px dotted orange",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/AljwdDjKUw0"
                        title="YouTube video player"
                        style={{ borderRadius: "10px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                      <p
                        style={{ fontWeight: "bold", textAlign: "center" }}
                        className="mt-3"
                      >
                        From 2LAKH revenue to 9 lakh revenue - <br /> Dr. Milan
                        Modi
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        margin: "10px 0px",
                        border: "2px dotted orange",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/ehyXbYzLgM0"
                        style={{ borderRadius: "10px" }}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                      <p
                        style={{ fontWeight: "bold", textAlign: "center" }}
                        className="mt-3"
                      >
                        Fitness Manager revenue boost up from 50,000 INR to
                        3.5lakh/month
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        margin: "10px 0px",
                        border: "2px dotted orange",
                      }}
                    >
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/2-49dtoYAv8"
                        title="YouTube video player"
                        style={{ borderRadius: "10px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                      <p
                        style={{ fontWeight: "bold", textAlign: "center" }}
                        className="mt-3"
                      >
                        Proper Management Lessons Learned by Personal Trainer
                        Pawan Rana Revenue up to 6 lakh/month
                      </p>
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
            <div className="text-center">
              <h2 style={{ color: "#fff", fontSize: "26px" }}>
                <p
                  className="mb-0"
                  style={{ fontWeight: "600", color: "white" }}
                >
                  What Will You Learn?
                </p>
              </h2>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-2 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2 mb-2">
                    Get Guaranteed Business Growth
                  </h4>
                  <p>
                    Transform your fitness business with our comprehensive
                    webinar. Register now and secure your spot for a brighter,
                    more prosperous future.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-2 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2 mb-2">
                    Hear From Our Program Participants
                  </h4>
                  <p>
                    Don't just take our word for it. Listen to the success
                    stories from those who have already benefited from our
                    program.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-2 wow animate__ animate__pulse animated">
                <div
                  className="card text-center px-2 pb-3 pt-2"
                  style={{
                    backgroundColor: "#191919",
                    borderRadius: "10px",
                    border: "2px dotted orange",
                  }}
                >
                  <h4 className="mb-0 mt-2 mb-2">
                    Ready to Elevate Your Business?
                  </h4>
                  <p>
                    We have been committed to elevating fitness businesses for
                    the past 9 years, and we are ready to help you achieve
                    extraordinary growth.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="success"
                onClick={handleShow}
                className="w-100 mt-6"
                style={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                Book your spot today
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container-fluid">
          <div className="container">
            <div className="d-block d-md-none pt-2">
              <div className="col-md-12">
                <div className="text-center">
                  <h2
                    className="mt-3 mb-0"
                    style={{ fontSize: "20px", fontWeight: "600" }}
                  >
                    Our Clients
                  </h2>
                </div>
              </div>
              <div className="mb-5 mt-3">
                <div>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/mix-img/spinex.webp"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-2">spinex Global</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/mix-img/gomzi.webp"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-2">FitnessWithGomzi</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/mix-img/fgiit.webp"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-2">FGIIT</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/mix-img/stallon.webp"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-2">Stallon</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/logos/Dr-milan-modi-logo.png"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-4">Dr.Milan Modi</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="logo-box text-center">
                        <img
                          src="/images/logos/vraj-hospital-logo.png"
                          width="65%"
                          className="lazy mx-auto"
                          alt="Logos"
                        />
                        <p className="mt-4">Vraj Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop" id="inq_form">
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h2 style={{ color: "#fff", fontSize: "26px" }} className="mb-3">
                <p
                  className="mb-3"
                  style={{ fontWeight: "600", color: "white" }}
                >
                  Achievements
                </p>
              </h2>
            </div>
            <div className="row mt-md-5 mt-5 align-items-center">
              <div className="row">
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-1.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-2.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-3.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-4.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-5.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-6.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-7.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
                <div className="item col-md-6 col-12 mt-3">
                  <div className="ply1">
                    <img
                      src="/images/achievements/fwg-achievements-8.webp"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop" id="inq_form">
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h2 style={{ color: "#fff", fontSize: "26px" }} className="mb-3">
                <p
                  className="mb-3"
                  style={{ fontWeight: "600", color: "white" }}
                >
                  Contact Us
                </p>
              </h2>
            </div>
            <div className="row mt-md-5 mt-4 align-items-center">
              <div className="col-md-5 text-center order-md-2">
                <div className="coach-img">
                  <img
                    src="/images/takshak/coach-2.png"
                    className="img-fluid m-auto"
                    alt="coach"
                    width="60%"
                  />
                </div>
                <div>
                  <img
                    src="/images/takshak/gautamjani.png"
                    alt="sign coach"
                    width="60%"
                    className="mt-md-3 m-auto"
                  />
                </div>
              </div>
              <div className="col-md-7 order-md-1 ">
                <div className="coach-box-1 text-center d-flex flex-wrap justify-content-center">
                  <h2 className="mt-md-2">Meet Dr Gautam Jani:</h2>
                  <p className="mb-3">
                    Dr. Gautam Jani specialises in Fitness Industry , with over
                    10+ years in industry, he is successfully running multiple
                    businesses like FGIIT, Fitness WIth Gomzi, Gomzi Nutrition,
                    Gomzi Equipment and Gomzi Consulting Services. He is an
                    established fitness entrepreneur, renowned with a doctorate
                    degree in Health & Fitness Business.
                  </p>
                </div>
              </div>
            </div>
            <form id="myForm2" onSubmit={handleSubmit} className="mt-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  className="form-control in-put p-3"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="form-control in-put p-3"
                  required
                />
              </div>
              <input
                type="hidden"
                name="subject"
                id="subject"
                value="GCS Webinar"
              />
              <div>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  id="mobile"
                  className="form-control in-put p-3"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="business"
                  placeholder="Enter Your Business"
                  id="business"
                  className="form-control in-put p-3"
                  required
                />
              </div>
              <div>
                <textarea
                  name="messages"
                  placeholder="Messages"
                  id="messages"
                  className="form-control in-put p-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                style={{ backgroundColor: "orange" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid px-0">
          <div className="text-center" style={{ backgroundColor: "#161616" }}>
            <h6 className="mb-0 p-3">@2023 GCS. All Right Reserved.</h6>
          </div>
        </div>
      </section>
      <div>
        <Button
          variant="success"
          onClick={handleShow}
          className="w-100 blinking-button"
          style={{
            backgroundColor: "orange",
            color: "black",
            fontWeight: "bold",
            boxShadow: "none",
            position: "fixed",
            zIndex: "9999",
            bottom: "0px",
          }}
        >
          Reserve Your Spot Today!
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          style={{ backgroundColor: "black", borderBottom: "none" }}
        >
          <Modal.Title style={{ color: "#ffffff", lineHeight: "3rem" }}>
            Give me access for webinar
          </Modal.Title>
          <Button
            variant="link"
            onClick={handleClose}
            style={{
              fontSize: "1.5rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "#ffffff" }}>
          <form id="myForm2" onSubmit={handleSubmit} className="mt-3">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                className="form-control in-put p-3"
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="form-control in-put p-3"
                required
              />
            </div>
            <input
              type="hidden"
              name="subject"
              id="subject"
              value="GCS Webinar"
            />
            <div>
              <label>Mobile No.</label>
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                id="mobile"
                className="form-control in-put p-3"
                required
              />
            </div>
            <div>
              <label>Slot</label>
              <select className="form-control in-put" name="services">
                <option value="" hidden>
                  Field you want to teach
                </option>
                <option style={{ color: "White" }} value="29/06/2024">
                  29/06/2024
                </option>
                <option style={{ color: "White" }} value="06/07/2024">
                  06/07/2024
                </option>
                <option style={{ color: "White" }} value="13/07/2024">
                  13/07/2024
                </option>
                <option style={{ color: "White" }} value="20/07/2024">
                  20/07/2024
                </option>
                <option style={{ color: "White" }} value="27/07/2024">
                  27/07/2024
                </option>
              </select>
            </div>
            <div>
              <label>Business</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Your Business"
                id="company"
                className="form-control in-put p-3"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="messages"
                placeholder="Messages"
                id="messages"
                className="form-control in-put p-3"
                required
              ></textarea>
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="submit-btn"
                style={{ backgroundColor: "orange" }}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
