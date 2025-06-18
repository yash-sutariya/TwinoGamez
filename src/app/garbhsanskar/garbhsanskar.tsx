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
import Link from "next/link";
import { submitForm } from "@/utils/submitForm";

export default function Garbhsanskare() {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
  };
  return (
    <>
      <PrakritiHeader
        logoURL={"/images/prakriti_by_jiya/prakriti-by-jiya.png"}
        mobileLogoURL={"/images/prakriti_by_jiya/prakriti-by-jiya.png"}
        altLogo={"Fitit Logo"}
      />
      <main className="prakriti-body">
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-4">
                <h2>Garbhsanskar Plan</h2>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 wow animate__animated animate__fadeInRight">
                <div className="custom-block-wrap">
                  <img
                    src="/images/prakriti_by_jiya/Garbhsanskar-monthly.png"
                    className="custom-block-image img-fluid"
                    alt="Garbhsanskar"
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
                    <Link
                      href="#contact"
                      target="_blank"
                      className="custom-btn btn"
                    >
                      Inquiry now
                    </Link>
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
                    <Link
                      href="#contact"
                      target="_blank"
                      className="custom-btn btn"
                    >
                      Inquiry now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section section-padding-2 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12 wow animate__animated  animate__fadeInLeft  d-none d-md-block">
                <img
                  src="/images/prakriti_by_jiya/dr_jayna.png"
                  className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-5 col-md-7 col-12 wow animate__animated  animate__fadeInRight d-none d-md-block">
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
                  <ul className="social-icon">
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
                          src="/images/prakriti_by_jiya/facebook.png"
                          width="15px"
                          className="mb-2"
                          alt="facebook"
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
                          src="/images/prakriti_by_jiya/instagram.png"
                          width="15px"
                          className="mb-2"
                          alt="instagram"
                        />
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                        className="social-icon-link "
                      >
                        <img
                          src="/images/prakriti_by_jiya/linkedin.png"
                          width="15px"
                          className="mb-2"
                          alt="linkedin"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-text-block text-center d-block d-md-none">
                <h2 className="mb-3">
                  Meet Dr Jayna <br /> Upadhyay
                </h2>
              </div>
              <div className="col-lg-6 col-md-5 col-12 wow animate__animated  animate__fadeInLeft d-block d-md-none">
                <img
                  src="/images/prakriti_by_jiya/dr_jayna.png"
                  className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5 col-md-7 col-12 wow animate__animated  animate__fadeInRight d-block d-md-none">
                <div className="custom-text-block text-center">
                  <p className="text-muted mb-lg-4 mb-md-4">
                    Founder of Prakriti By Jiya
                  </p>

                  <p className="mt-3 p-2">
                    Compassionate and dedicated Ayurveda physician, committed to
                    delivering exceptional patient care. With a patient-centered
                    approach, I provide personalized healthcare in Ayurveda
                    clinical settings. I strive to find the most effective
                    treatment options, ensuring the highest quality of care for
                    every individual I serve.
                  </p>

                  <ul className="social-icon">
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
                          src="/images/prakriti_by_jiya/facebook.png"
                          width="15px"
                          className="mb-2"
                          alt="facebook"
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
                          src="/images/prakriti_by_jiya/instagram.png"
                          width="15px"
                          className="mb-2"
                          alt="instagram"
                        />
                      </a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.linkedin.com/in/dr-jayna-upadhyay-5354131aa"
                        className="social-icon-link "
                      >
                        <img
                          src="/images/prakriti_by_jiya/linkedin.png"
                          width="15px"
                          className="mb-2"
                          alt="linkedin"
                        />
                      </a>
                    </li>
                  </ul>
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
        <section className="contact-section section-padding" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12 mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="custom-form contact-form prakriti-form"
                  id="myForm"
                >
                  <h2>Contact form</h2>

                  <p className="mb-4 ml-2">
                    <b>
                      Email:
                      <a href="#">infoprakritibyjiya@gmail.com</a>
                    </b>
                  </p>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile"
                        id="mobile"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="subject"
                    id="subject"
                    value="Garbhsanskar"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="form-control"
                    required
                  />

                  <textarea
                    name="messages"
                    className="form-control"
                    id="messages"
                    placeholder="What can we help you?"
                  ></textarea>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PrakritiFooter />
    </>
  );
}
