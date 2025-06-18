// eslint-disable-next-line @next/next/no-img-element
"use client";

import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../../../js/modal/modal.js";
import { submitForm } from "@/utils/submitForm.js";
import Swal from "sweetalert2";

const HumunResource = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);
  const [showMoreII, setShowMoreII] = useState(false);
  const [showMoreIII, setShowMoreIII] = useState(false);
  const [showMoreIIII, setShowMoreIIII] = useState(false);
  const [showMoreIIIII, setShowMoreIIIII] = useState(false);
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
        "human resource agency services",
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
  const toggleReadMoreIIIII = () => {
    setShowMoreIIIII(!showMoreIIIII);
  };
  useEffect(() => {
    $(document).ready(function () {
      $(".Services-box-1").click(function () {
        $(".Services-box-1").addClass("services-select-active");
        $(".Services-box-2").removeClass("services-select-active");
        $(".Services-1").show();
        $(".Services-2, .Services-3").hide();
      });
      $(".Services-box-2").click(function () {
        $(".Services-box-2").addClass("services-select-active");
        $(".Services-box-1").removeClass("services-select-active");
        $(".Services-2").show();
        $(".Services-1").hide();
      });

      $(".Services-box-3").click(function () {
        $(".Services-box-3").addClass("services-select-active");
        $(".Services-box-4").removeClass("services-select-active");
        $("#marketing-services").show();
        $("#mobile-services").hide();
      });
      $(".Services-box-4").click(function () {
        $(".Services-box-4").addClass("services-select-active");
        $(".Services-box-3").removeClass("services-select-active");
        $("#mobile-services").show();
        $("#marketing-services").hide();
      });
    });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
  };
  return (
    <div>
      <Header
        logoURL={"/images/logos/takshak-logo-white.png"}
        mobileLogoURL={"/images/logos/takshak-logo.png"}
        altLogo={"takshak Logo"}
      />

      <section className="margintop">
        <div className="container-fluid px-0">
          <div className="">
            <div
              className="background-imgs"
              style={{
                backgroundImage:
                  "url(/images/mix-img/Human-Resource-agency.webp)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1>
                      <span>Human Resource Agency</span> Services
                    </h1>
                    <button
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="btn-readmore btn"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-md-5 pt-4">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div>
                    <span> Human-Resource-agency </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-4">
              <div className="col-md-6">
                <div>
                  <img
                    src="/images/fitit/our-approch.webp"
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100">Human Resource Agency Services</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    HR Consultants help human resource professionals improve
                    talent recruitment, management, and development processes in
                    the company. Their primary focus is the people who work in
                    the organization and the team culture that binds them
                    together. HR Consultants might specialize in:
                  </p>
                  <ul className="mt-md-2">
                    <li>1. Training & development programme </li>
                    <li>2. Employee wellbeing and satisfaction </li>
                    <li>3. Legal HR documentation</li>
                    <li>4. Company culture </li>
                    <li>5. Recruitment </li>
                    <li>6. Employer branding</li>
                  </ul>
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
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/Training-development-programme.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Training & development programme"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="coach-box">
                  <h2 className="w-100">Training & development programme</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/Training-development-programme.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Training & development programme"
                  />
                </div>
                <div className="approach">
                  <p>
                    Enhance your organizational competencies to complement your
                    technical expertise. Get top notch professional corporate
                    training programs in India from Takshak Management
                    Consultants, the best in business. We offer Corporate
                    Training Programs for Employees that help your team learn
                    the essentials of business. Our solutions are customized to
                    your specific needs, regardless of the size of your business
                    or the type of training you require.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-md-4">
              <div className="col-md-12">
                <div className="text-center">
                  <h2>Our USP</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-star"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Expertise</h2>
                    <p className="">
                      With our training programs, you can give your team a
                      chance to learn, develop and embrace new skills for fast
                      growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Tailor Made Approach</h2>
                    <p className="mb-md-0">
                      Transition High potential employee from high performer to
                      an engaging leader.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Mindset</h2>
                    <p className="mb-md-4 pb-2">
                      Think smarter, articulate finer and manage your team
                      better.
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
                    <h2>Result</h2>
                    <p className="mb-md-4 pb-1">
                      Resolve workplace conflict with better team dynamics and
                      clear communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-md-4">
              <div className="col-md-12">
                <div className="text-center">
                  <h2>Training & Development Programme</h2>
                </div>
                <ul className="d-flex justify-content-center mt-md-3">
                  <li className="coach-box-services Services-box-1 services-select-active">
                    Solutions
                  </li>
                  <li className="coach-box-services Services-box-2">
                    Program Benefits
                  </li>
                </ul>
              </div>
              <div className="Services-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="about-box-content text-center mt-md-3">
                        <h2>Individual Contributors</h2>
                      </div>
                      <ul className="service-li mb-md-5 pb-md-5">
                        <li>1. Time Management</li>
                        <li>2. Conflict Management</li>
                        <li>3. Emergenetics Employee Profiling</li>
                        <li>
                          4. Presentation & Communication Training for Employees
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="fas fa-user-cog"></i>
                      </div>
                      <div className="about-box-content text-center mt-md-3">
                        <h2>Managers</h2>
                      </div>
                      <ul className="service-li mb-md-5 pb-md-3">
                        <li>1. Manager Boot Camp for First Time Managers</li>
                        <li>2. Team Building Program</li>
                        <li>3. Performance Management Training</li>
                        <li className="mb-3">
                          4. Emergenetics: Meeting of the Minds
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="far fa-paper-plane"></i>
                      </div>
                      <div className="about-box-content text-center mt-md-3">
                        <h2>Leaders</h2>
                      </div>
                      <ul className="service-li">
                        <li>1. Leadership Development Programs</li>
                        <li>2. Leadership Impact 360</li>
                        <li>3. Human Synergistics Cultural Assessment</li>
                        <li>4. Emotional Intelligence Training</li>
                        <li>5. Self & Team Development</li>
                        <li>6. Strategic Alignment Workshop</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Services-2">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="about-box-content text-center">
                        <h2>Organization</h2>
                      </div>
                      <ul className="service-li mb-md-4 pb-md-3">
                        <li>
                          1. Consistent delivery across levels/ locations/topics
                        </li>
                        <li>2. Global standards in delivery</li>
                        <li>3. Alignment to both business and L&D needs</li>
                        <li>
                          4. Establish learning culture - Pre -post support
                          establishes learning as a process and not an event
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="about-box-content text-center">
                        <h2>Team</h2>
                      </div>
                      <ul className="service-li">
                        <li>
                          1. Connecting program to team needs Engagement with
                          Team members.
                        </li>
                        <li>2. plan program as well as assess effectiveness</li>
                        <li>3. Align session with other actions in the team</li>
                        <li>4. High impact session with manager involvement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-box">
                      <div className="media-icon m-auto">
                        <i className="fas fa-user-cog"></i>
                      </div>
                      <div className="about-box-content text-center">
                        <h2>Participant</h2>
                      </div>
                      <ul className="service-li mb-md-5 pb-md-4">
                        <li>
                          1. Blend of best practices and practical counsel -
                          experiential, discussion and activity-based learning
                        </li>
                        <li>2. Experienced trainer to instruct and mentor</li>
                        <li>3. 70:20:10 to continue learning</li>
                      </ul>
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
              <div className="col-md-6 order-2 order-md-1 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/banner/banner-4.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Employee wellbeing and satisfaction</h2>
                </div>
                <div className="approach">
                  <p>
                    we specialize in employee well being and satisfaction help
                    organizations to create a positive and supportive work
                    environment that promotes the physical, mental, and
                    emotional well being of employees. we work with
                    organizations to identify and address factors that may
                    contribute to employee stress, burnout, or disengagement,
                    and develop strategies to improve employee satisfaction and
                    retention. By prioritizing employee well being and
                    satisfaction, organizations can improve employee engagement
                    and retention, reduce absenteeism and turnover, and create a
                    positive and supportive workplace culture.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center  d-block d-md-none">
              <div className="col-md-6 order-2 order-md-1">
                <div className=" d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">
                      Employee wellbeing and satisfaction
                    </h2>
                  </div>
                  <img
                    src="/images/banner/banner-4.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    we specialize in employee well being and satisfaction help
                    organizations to create a positive and supportive work
                    environment that promotes
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        the physical, mental, and emotional well being of
                        employees. we work with organizations to identify and
                        address factors that may contribute to employee stress,
                        burnout, or disengagement, and develop strategies to
                        improve employee satisfaction and retention. By
                        prioritizing employee well being and satisfaction,
                        organizations can improve employee engagement and
                        retention, reduce absenteeism and turnover, and create a
                        positive and supportive workplace culture.
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
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className=" col-md-6 order-lg-2 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/legal-documnet.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Legal HR documentation</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    we help organizations to manage legal risks related to HR
                    documentation and compliance. By ensuring that HR policies,
                    procedures, and documents comply with relevant laws and
                    regulations, organizations can reduce legal risks, avoid
                    costly litigation, and create a positive and supportive work
                    environment for their employees.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
                    <h2 className="w-100">Legal HR documentation</h2>
                  </div>
                  <img
                    src="/images/mix-img/legal-documnet.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    we help organizations to manage legal risks related to HR
                    documentation and compliance. By ensuring that HR policies,
                    procedures, and documents
                    {showMoreI ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        comply with relevant laws and regulations, organizations
                        can reduce legal risks, avoid costly litigation, and
                        create a positive and supportive work environment for
                        their employees.
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
                        onClick={toggleReadMoreI}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMoreI ? "Read less" : "Read more"}
                      </span>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/company-culture.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Company culture</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    our team specialize in company culture help organizations to
                    create a positive and engaging work environment that
                    reflects their values, mission, and goals. also we work with
                    organizations to identify the current state of their
                    culture, identify areas for improvement, and develop
                    strategies to create a desired culture. By creating a
                    positive and engaging culture, organizations can improve
                    employee engagement and retention, foster innovation and
                    creativity, and create a positive reputation in the market.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center d-block d-md-none">
              <div className="col-md-6 order-lg-1">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Company culture</h2>
                  </div>
                  <img
                    src="/images/mix-img/company-culture.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    our team specialize in company culture help organizations to
                    create a positive and engaging work environment that
                    reflects their values, mission, and goals.
                    {showMoreII ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        also we work with organizations to identify the current
                        state of their culture, identify areas for improvement,
                        and develop strategies to create a desired culture. By
                        creating a positive and engaging culture, organizations
                        can improve employee engagement and retention, foster
                        innovation and creativity, and create a positive
                        reputation in the market.{" "}
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
                        onClick={toggleReadMoreII}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMoreII ? "Read less" : "Read more"}
                      </span>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2  d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="/images/mix-img/company-hiring.webp"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Recruitment</h2>
                </div>
                <div className="approach">
                  <p>
                    in recruitment help organizations to find and hire the best
                    talent for their workforce. By using effective recruitment
                    strategies, organizations can attract qualified candidates,
                    reduce time-to-hire, and create a strong talent pipeline for
                    future needs.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
                <div className=" d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Recruitment</h2>
                  </div>
                  <img
                    src="/images/mix-img/company-hiring.webp"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    in recruitment help organizations to find and hire the best
                    talent for their workforce. By using effective recruitment
                    strategies, organizations
                    {showMoreIII ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        can attract qualified candidates, reduce time-to-hire,
                        and create a strong talent pipeline for future needs.
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
                        onClick={toggleReadMoreIII}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMoreIII ? "Read less" : "Read more"}
                      </span>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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

      <section className="bg-dark pb-5">
        <div className="container-fluid py-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="d-none d-md-block">
                  <img
                    src="../images/mix-img/employer-branding.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2  d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Employer branding</h2>
                </div>
                <div className="approach">
                  <p>
                    in employee branding help organizations develop and promote
                    their brand as an attractive employer to current and
                    potential employees. They work with organizations to
                    identify their unique values, culture, and strengths, and
                    develop a strategy to communicate these to their target
                    audience.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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
                    <h2 className="w-100">Employer branding</h2>
                  </div>
                  <img
                    src="../images/mix-img/employer-branding.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    in employee branding help organizations develop and promote
                    their brand as an attractive employer to current and
                    potential employees.They work
                    {showMoreIIII ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        with organizations to identify their unique values,
                        culture, and strengths, and develop a strategy to
                        communicate these to their target audience.
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
                        onClick={toggleReadMoreIIII}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMoreIIII ? "Read less" : "Read more"}
                      </span>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Human-Resource"
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

      <section>
        <div
          className="bg-full-bd"
          style={{
            backgroundImage: "url(../images/gcs/contact-us.webp)",
            backgroundAttachment: "local",
          }}
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

      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="wrapper-thing">
              <h2>
                coming soon<span className="dot">.</span>
              </h2>
              <p style={{ wordSpacing: "normal" }}>Call Us Now</p>
              <div className="icons-thing">
                <a href="tel:6354051487" className="text-dark">
                  <i className="fas fa-phone-alt"></i>{" "}
                  <span className="d-none d-md-block">+91 97731 74522</span>
                </a>
                <a
                  className="text-dark"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about FitIT"
                >
                  <i className="fab fa-whatsapp"> </i>
                  <span className="d-none d-md-block">Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HumunResource;
