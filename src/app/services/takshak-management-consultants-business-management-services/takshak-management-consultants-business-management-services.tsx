/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import { Metadata } from "next";
import ModalVideo from "react-modal-video";
import { submitForm } from "@/utils/submitForm";
import { Link } from "react-scroll";
import Swal from "sweetalert2";

// export const metadata = {
//     title: "Takshak Management Consultants - Business Management Services",
//     description: "Takshak Management Consultants offers a range of consulting services to help businesses achieve their goals, including strategic, operations, financial, marketing, technology, legal, social media, sales, wellness, growth marketing, career coaching, PR, leadership, product development, and compliance consulting.",
//     keywords: "business management services, strategic consulting, operations consulting, financial consulting, marketing consulting, technology consulting, legal consultant, social media consultant, sales consultant, wellness consultant, growth marketing consultant, career coaching consultancy, PR consultancy, leadership consulting, product development consulting, compliance consulting, Takshak Management Consultants."
// };

export default function TakshakBusinessManagementServices() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
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
        "takshak management consultants business management services",
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

  const openVideoModal = (url: any) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  var Glimpse = {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
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
        mobileLogoURL={"/images/logos/takshak-logo-white.png"}
        altLogo={"takshak Logo"}
      />
      <section className="margintop">
        <div className="container-fluid px-0">
          <div className="">
            <div
              className="background-imgs"
              style={{
                backgroundImage: `url(/images/mix-img/home-section-image.webp)`,
              }}
            >
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1>
                      <span>Business</span> Management Services
                    </h1>
                    <h2>We Grow Together with Management Services</h2>
                    <Link to="#Services" className="btn-readmore">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-md-5 pt-4" id="Services">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div>
                    <span> Business Management Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-4 mt-4">
              <div className="col-md-6">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className=""
                      data-src="/images/mix-img/mangment-services.webp"
                      width="100%"
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                      alt="client journey"
                      src="/images/mix-img/mangment-services.webp"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("JsaDQYa9_hY")}
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
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100">Business Management Services</h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    At Takshak Management Consultants, we offer a wide range of
                    consulting services to help businesses achieve their goals.
                    Our services include:
                  </p>
                  <ul className="mt-md-2">
                    <li>1. Strategic Consulting </li>
                    <li>2. Operations Consulting </li>
                    <li>3. Financial Consulting</li>
                    <li>4. Marketing Consulting </li>
                    <li>5. Technology Consulting </li>
                    <li>6. Legal consultant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-md-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center my-md-5 mb-3">
                <div className="coach-box">
                  <span>Our Services</span>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/strategy-consultant.webp"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Strategic Consulting</h2>
                </div>
                <div className="approach d-none d-md-block">
                  <p>
                    Our team of experts can help you develop a strategic plan to
                    achieve your businessgoals. We can assist you in identifying
                    growth opportunities, improving operational efficiency, and
                    enhancing customer experience.By working closely with our
                    clients, we develop comprehensive strategies that align with
                    their goals and objectives, leveraging our expertise in
                    business strategy, marketing, operations, and finance.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Strategic Consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/strategy-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our team of experts can help you develop a strategic plan to
                    achieve your businessgoals. We can assist you in identifying
                    growth opportunities,improving
                  </p>
                  <p className="moretext">
                    {" "}
                    operational efficiency, and enhancing customer experience.By
                    working closely with our clients, we develop comprehensive
                    strategies that align with their goals and objectives,
                    leveraging our expertise in business strategy, marketing,
                    operations, and finance.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-5 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/operations-consulting.jpg"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Operations Consulting</h2>
                </div>
                <div className="approach">
                  <p>
                    Our operations consulting services are designed to help
                    businesses improve their operations, reduce costs, and
                    increase productivity. Our team of consultants is
                    experienced in process improvement, supply chain management,
                    and logistics optimization. We work closely with our clients
                    to identify areas for improvement and develop customized
                    solutions that are tailored to their specific needs and
                    goals.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Operations Consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/operations-consulting.jpg"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our operations consulting services are designed to help
                    businesses improve their operations, reduce costs, and
                    increase productivity.
                  </p>
                  <p className="moretext1">
                    {" "}
                    Our team of consultants is experienced in process
                    improvement, supply chain management, and logistics
                    optimization. We work closely with our clients to identify
                    areas for improvement and develop customized solutions that
                    are tailored to their specific needs and goals.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button1">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/financial-consulting.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Financial Consulting</h2>
                </div>
                <div className="approach">
                  <p>
                    Our financial consulting services offer businesses the
                    opportunity to work with a team of experts who can help them
                    optimize their financial resources, manage risks, and
                    maximize profits. Our experienced consultants provide
                    guidance and support in financial planning, budgeting,
                    forecasting, and more.Overall, our financial consulting
                    services can help businesses become more financially
                    efficient, competitive, and profitable.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Financial Consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/financial-consulting.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our financial consulting services offer businesses the
                    opportunity to work with a team of experts who can help them
                    optimize their financial resources,manage risks,
                  </p>
                  <p className="moretext2">
                    {" "}
                    and maximize profits. Our experienced consultants provide
                    guidance and support in financial planning, budgeting,
                    forecasting, and more.Overall, our financial consulting
                    services can help businesses become more financially
                    efficient, competitive, and profitable.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button2">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/marketing-consulting.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Marketing Consulting</h2>
                </div>
                <div className="approach">
                  <p>
                    Our marketing consulting services are designed to help
                    businesses develop a marketing strategy that aligns with
                    their goals and objectives. Our experienced consultants can
                    provide guidance and support in a range of areas, including
                    market research, branding, advertising, and more.We work
                    closely with our clients to understand their unique needs
                    and challenges, and develop customized solutions to address
                    them.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Marketing Consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/marketing-consulting.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our marketing consulting services are designed to help
                    businesses develop a marketing strategy that aligns with
                    their goals and objectives.
                  </p>
                  <p className="moretext3">
                    {" "}
                    Our experienced consultants can provide guidance and support
                    in a range of areas, including market research, branding,
                    advertising, and more.We work closely with our clients to
                    understand their unique needs and challenges, and develop
                    customized solutions to address them.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button3">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/legal-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Legal consultant</h2>
                </div>
                <div className="approach">
                  <p>
                    provides a wide variety of legal expertise ranging from
                    improve organizations profitability and efficiency, advise
                    solutions for client development strategies, marketing and
                    productivity, consult on legal and program issues to
                    actively manage risks, analyze problems and develop
                    solutions.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Legal consultant</h2>
                  </div>
                  <img
                    src="/images/mix-img/legal-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    provides a wide variety of legal expertise ranging from
                    improve organizations profitability and efficiency, advise
                    solutions for
                  </p>
                  <p className="moretext4">
                    {" "}
                    client development strategies, marketing and productivity,
                    consult on legal and program issues to actively manage
                    risks, analyze problems and develop solutions.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button4">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/social-media-consultant.jpg"
                    style={{ borderRadius: "10px", width: "100%" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Social media consultant</h2>
                </div>
                <div className="approach">
                  <p>
                    we helps brands and businesses leverage social media and
                    social media strategy in general. It involves planning,
                    developing, and improving a{`brand's`}social media presence
                    through digital marketing techniques. In addition, managing
                    crises and budget to align with the {`brand's`}
                    objectives.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      target="_blank"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Social media consultant</h2>
                  </div>
                  <img
                    src="/images/mix-img/social-media-consultant.jpg"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    we helps brands and businesses leverage social media and
                    social media strategy in general. It involves planning,
                    developing,
                  </p>
                  <p className="moretext5">
                    {" "}
                    and improving a{`brand's`} social media presence through
                    digital marketing techniques. In addition, managing crises
                    and budget to align with the {`brand's`}
                    objectives.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button5">Read more</a>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/career-coaching-consultancy.jpg"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Sales consultant</h2>
                </div>
                <div className="approach">
                  <p>
                    {`As sales consultants, we are responsible for developing and maintaining our clients'
                                        customer base. Our services include creating and implementing effective sales strategies
                                        and techniques to attract new customers and maintain existing ones. We work closely with
                                        our clients to understand their business goals and target audience, and develop
                                        customized solutions that help them achieve their objectives.`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Sales consultant</h2>
                  </div>
                  <img
                    src="/images/mix-img/career-coaching-consultancy.jpg"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    As sales consultants, we are responsible for developing and
                    maintaining our clients customer base. Our services include
                    creating and implementing
                  </p>
                  <p className="moretext6">
                    {" "}
                    effective sales strategies and techniques to attract new
                    customers and maintain existing ones. We work closely with
                    our clients to understand their business goals and target
                    audience, and develop customized solutions that help them
                    achieve their objectives.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button6">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/wellness-fitness-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Wellness/Fitness consultant</h2>
                </div>
                <div className="approach">
                  <p>
                    {`At our fitness and nutrition consulting services, we are passionate about helping people
                                        achieve their health and fitness goals through personalized exercise programs and
                                        scientifically-based diets. We believe that fitness is an essential component of overall
                                        well-being and can positively impact every aspect of a person's life.`}
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Wellness/Fitness consultant</h2>
                  </div>
                  <img
                    src="/images/mix-img/wellness-fitness-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    At our fitness and nutrition consulting services, we are
                    passionate about helping people achieve their health and
                    fitness goals through personalized
                  </p>
                  <p className="moretext7">
                    {" "}
                    exercise programs and scientifically-based diets. We believe
                    that fitness is an essential component of overall well-being
                    and can positively impact every aspect of a {`person's`}{" "}
                    life.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button7">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/growth-marketing-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Growth Marketing consultant</h2>
                </div>
                <div className="approach">
                  <p>
                    helps a company achieve sustainable growth with a
                    well-planned and executable business growth strategy. Not
                    only can they achieve increased sales, but they can also
                    increase growth capacities by leveraging their expertise and
                    helping build an infrastructure to support growth.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Growth Marketing consultant</h2>
                  </div>
                  <img
                    src="/images/mix-img/growth-marketing-consultant.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    helps a company achieve sustainable growth with a
                    well-planned and executable business growth strategy. Not
                    only can
                  </p>
                  <p className="moretext8">
                    {" "}
                    they achieve increased sales, but they can also increase
                    growth capacities by leveraging their expertise and helping
                    build an infrastructure to support growth.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button8">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/Career-Counselling.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Career coaching consultancy</h2>
                </div>
                <div className="approach">
                  <p>
                    Our career coaching consultancy provides guidance and advice
                    to professionals and career changers who are seeking to
                    advance their careers. We offer a range of services,
                    including advice on training and development opportunities,
                    employment options, and career progression. Our experienced
                    consultants work closely with clients to understand their
                    goals and aspirations, and develop customized plans to help
                    them achieve their objectives.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Career coaching consultancy</h2>
                  </div>
                  <img
                    src="/images/mix-img/Career-Counselling.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    our career coaching consultancy provides guidance and advice
                    to professionals and career changers who are seeking to
                    advance their
                  </p>
                  <p className="moretext9">
                    {" "}
                    careers. We offer a range of services, including advice on
                    training and development opportunities, employment options,
                    and career progression. Our experienced consultants work
                    closely with clients to understand their goals and
                    aspirations, and develop customized plans to help them
                    achieve their objectives.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button9">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/pr-consultancy.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">PR consultancy</h2>
                </div>
                <div className="approach">
                  <p>
                    Our PR consultancy services are designed to help businesses
                    manage their public image and reputation. Our team of
                    experts can provide a range of services, including writing
                    press releases, managing public speaking engagements,
                    organizing events, and more. We work closely with our
                    clients to understand their target audience and develop
                    tailored communication strategies to effectively reach and
                    engage with them.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">PR consultancy</h2>
                  </div>
                  <img
                    src="/images/mix-img/pr-consultancy.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our PR consultancy services are designed to help businesses
                    manage their public image and reputation. Our team of
                    experts can provide a range of services,
                  </p>
                  <p className="moretext10">
                    {" "}
                    including writing press releases, managing public speaking
                    engagements, organizing events, and more. We work closely
                    with our clients to understand their target audience and
                    develop tailored communication strategies to effectively
                    reach and engage with them.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button10">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/ledership.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Leadership consulting</h2>
                </div>
                <div className="approach">
                  <p>
                    Our leadership consulting services are designed to help
                    businesses assess their current leadership capabilities and
                    develop a plan to improve them. Our team of experienced
                    consultants can provide guidance and support in a range of
                    areas, including leadership development, high potential
                    training, and leadership principles.We work closely with our
                    clients to understand their unique needs and challenges, and
                    develop customized solutions to address them.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Leadership consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/ledership.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Our leadership consulting services are designed to help
                    businesses assess their current leadership capabilities and
                    develop a plan to improve them.
                  </p>
                  <p className="moretext11">
                    {" "}
                    Our team of experienced consultants can provide guidance and
                    support in a range of areas, including leadership
                    development, high potential training, and leadership
                    principles.We work closely with our clients to understand
                    their unique needs and challenges, and develop customized
                    solutions to address them.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button11">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/product-Brand-image.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">
                    Product development consulting/ Brand image
                  </h2>
                </div>
                <div className="approach">
                  <p>
                    committed to helping clients develop products that fit
                    market needs, produce attractive margins, provide platforms
                    for add-on offerings, and enhance the reputation of brands
                    for future business growth. Our work in product development
                    includes developing, defining, and implementing strategies
                    that help clients make lasting improvements to their
                    innovation and business performance.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">
                      Product development consulting/ Brand image
                    </h2>
                  </div>
                  <img
                    src="/images/mix-img/product-Brand-image.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    committed to helping clients develop products that fit
                    market needs, produce attractive margins, provide platforms
                    for add-on
                  </p>
                  <p className="moretext12">
                    {" "}
                    offerings, and enhance the reputation of brands for future
                    business growth. Our work in product development includes
                    developing, defining, and implementing strategies that help
                    clients make lasting improvements to their innovation and
                    business performance.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button12">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
      <section className="my-md-5 my-4">
        <div className="container-fluid pt-md-3 pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/complince-image.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-none d-md-block">
                <div className="coach-box">
                  <h2 className="w-100">Compliance consulting</h2>
                </div>
                <div className="approach">
                  <p>
                    Compliance consulting refers to expert-driven consulting
                    services that assist businesses in identifying, managing,
                    and mitigating various IT and enterprise compliance risks.
                    These risks can include issues related to regulatory
                    compliance, data privacy, information security, and more.
                    Our compliance consultants work closely with businesses to
                    understand their unique compliance needs and challenges, and
                    develop customized solutions to address them.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2 d-block d-md-none">
                <div className="d-block d-md-none">
                  <div className="coach-box">
                    <h2 className="w-100">Compliance consulting</h2>
                  </div>
                  <img
                    src="/images/mix-img/complince-image.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="approach">
                  <p className="mb-0 mt-3">
                    Compliance consulting refers to expert-driven consulting
                    services that assist businesses in identifying, managing,
                    and
                  </p>
                  <p className="moretext13">
                    {" "}
                    mitigating various IT and enterprise compliance risks. These
                    risks can include issues related to regulatory compliance,
                    data privacy, information security, and more. Our compliance
                    consultants work closely with businesses to understand their
                    unique compliance needs and challenges, and develop
                    customized solutions to address them.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a className="readmore-button13">Read more</a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak"
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
        <div className="container-fluid pb-md-5">
          <div className="container">
            <div className="pt-5 pt-md-0 mt-3 mt-md-5">
              <div className="col-md-12 mt-md-5">
                <div className="Services text-center pt-md-4">
                  <h2>Glimpse of our Project</h2>
                </div>
              </div>
              <div className="d-none d-md-block">
                <Slider {...Glimpse}>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-9.jpg"
                        alt="Business Audit"
                      />
                      <figcaption>
                        <h2>Business Audit</h2>
                        <p>A good Business auditor never make Mistakes</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-6.jpg"
                        alt="success"
                      />
                      <figcaption>
                        <h2>Training</h2>
                        <p>
                          Success in business required training and Development.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-2.jpg"
                        alt="Meeting"
                      />
                      <figcaption>
                        <h2>Meeting</h2>
                        <p>A great strategy meeting is meeting of minds.</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-7.jpg"
                        alt="Solution"
                      />
                      <figcaption>
                        <h2>Solution</h2>
                        <p>{`business is all about solving people's problem.`}</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-8.jpg"
                        alt="critical thinking"
                      />
                      <figcaption>
                        <h2>critical thinking</h2>
                        <p>
                          critical thinking and curiosity are the key to
                          creative
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-1.jpg"
                        alt="Discussion"
                      />
                      <figcaption>
                        <h2>Discussion</h2>
                        <p>
                          A good Discussion increases the dimensions of everyone
                          who takes part.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-5.jpg"
                        alt="Communication"
                      />
                      <figcaption>
                        <h2>Communication</h2>
                        <p>
                          Communication is your ticket to success , if you pay
                          attention and learn to do it effectively.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-3.jpg"
                        alt="Brainstorm"
                      />
                      <figcaption>
                        <h2>Brainstorm</h2>
                        <p>
                          Let your ideas and thoughts give Inspiration. all
                          creativity comes from your imagination.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-4.jpg"
                        alt="listening"
                      />
                      <figcaption>
                        <h2>listening</h2>
                        <p>
                          One of the most sincere forms of respect is actually
                          listening to what another has to say.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-11.jpg"
                        alt="Development"
                      />
                      <figcaption>
                        <h2>Staff Development</h2>
                        <p>{`You Don't build a business you build people and then people build the
                                                    business`}</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review.jpg"
                        alt="Feedback"
                      />
                      <figcaption>
                        <h2>Feedback</h2>
                        <p>Feedback is the Breakfast of Champions</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-10.png"
                        alt="success"
                      />
                      <figcaption>
                        <h2>success</h2>
                        <p>
                          there are no secrets to success. it is the result of
                          preparation, hard work, and learning from failure.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item mx-2">
                    <figure className="effect-oscar">
                      <img
                        src="/images/mix-img/online-training.webp"
                        alt="success"
                      />
                      <figcaption>
                        <h2 className="mt-0">Online Training</h2>
                        <p>{`Whether you're looking to expand your knowledge, enhance your skills, or
                                                    pursue a new passion, our online training offers a convenient and effective
                                                    way to learn.`}</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </Slider>
              </div>
              <div className="d-block d-md-none">
                <Slider {...Glimpse}>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-9.jpg"
                        alt="Business Audit"
                      />
                      <figcaption>
                        <h2>Business Audit</h2>
                        <p>A good Business auditor never make Mistakes</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-6.jpg"
                        alt="success"
                      />
                      <figcaption>
                        <h2>Training</h2>
                        <p>
                          Success in business required training and Development.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-2.jpg"
                        alt="Meeting"
                      />
                      <figcaption>
                        <h2>Meeting</h2>
                        <p>A great strategy meeting is meeting of minds.</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-7.jpg"
                        alt="Solution"
                      />
                      <figcaption>
                        <h2>Solution</h2>
                        <p>{`business is all about solving people's problem.`}</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-8.jpg"
                        alt="critical thinking"
                      />
                      <figcaption>
                        <h2>critical thinking</h2>
                        <p>
                          critical thinking and curiosity are the key to
                          creative
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-1.jpg"
                        alt="Discussion"
                      />
                      <figcaption>
                        <h2>Discussion</h2>
                        <p>
                          A good Discussion increases the dimensions of everyone
                          who takes part.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-5.jpg"
                        alt="Communication"
                      />
                      <figcaption>
                        <h2>Communication</h2>
                        <p>
                          Communication is your ticket to success , if you pay
                          attention and learn to do it effectively.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-3.jpg"
                        alt="Brainstorm"
                      />
                      <figcaption>
                        <h2>Brainstorm</h2>
                        <p>
                          Let your ideas and thoughts give Inspiration. all
                          creativity comes from your imagination.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-4.jpg"
                        alt="listening"
                      />
                      <figcaption>
                        <h2>listening</h2>
                        <p>
                          One of the most sincere forms of respect is actually
                          listening to what another has to say.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-11.jpg"
                        alt="Development"
                      />
                      <figcaption>
                        <h2>Staff Development</h2>
                        <p>{`You Don't build a business you build people and then people build the
                                                    business`}</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review.jpg"
                        alt="Feedback"
                      />
                      <figcaption>
                        <h2>Feedback</h2>
                        <p>Feedback is the Breakfast of Champions</p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="item">
                    <figure className="effect-oscar">
                      <img
                        src="/images/review/takshak-review-10.png"
                        alt="success"
                      />
                      <figcaption>
                        <h2>success</h2>
                        <p>
                          there are no secrets to success. it is the result of
                          preparation, hard work, and learning from failure.
                        </p>
                        <a href="javascript:void(0);">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-7 text-center pt-5">
              <div className="coach-box">
                <span>Testimonial</span>
              </div>
            </div>
          </div>
          <div className="row mt-md-4 mt-3 mb-5">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="video-card">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      data-src="/images/banner/banner-4.webp"
                      width="100%"
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                      alt="client journey"
                      src="/images/banner/banner-4.webp"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("dS4gYgLCaEw")}
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="video-content">
                  <h4>Chirag Pandey (FGIIT Manager)</h4>
                  <a
                    onClick={() => openVideoModal("dS4gYgLCaEw")}
                    className="custom"
                  >
                    <i className="fas fa-play mr-1"></i> Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="video-card mt-3 mt-md-0 ">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className=""
                      data-src="/images/review/review-video-3.webp"
                      width="100%"
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                      alt="client journey"
                      src="/images/review/review-video-3.webp"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("2-49dtoYAv8")}
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="video-content">
                  <h4>Pavan Rana (Stallon Manager)</h4>
                  <a
                    onClick={() => openVideoModal("2-49dtoYAv8")}
                    className="custom"
                  >
                    <i className="fas fa-play mr-1"></i> Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contianer-fluid py-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box">
                  <span style={{ fontSize: "16px" }}>Latest Blog</span>
                  <h2 className="w-100">
                    Top Challenges Businesses Face and How Management
                    Consultants Services Can Help?
                  </h2>
                </div>
                <div className="agency-design">
                  <div className="d-block d-md-none">
                    <img
                      src="/images/blog/blog-img.webp"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <p className="mt-3">
                    {`
                                        In today's competitive business landscape, companies face numerous
                                        challenges that can impact their growth and success. From increasing
                                        market competition to rapid technological advancements, businesses
                                        need to adapt and evolve to stay ahead. However, navigating these
                                        challenges can be daunting, especially for small and medium-sized
                                        enterprises (SMEs) that may not have the necessary expertise and
                                        resources in-house. This is where management consultants can play a
                                        crucial role in..`}
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <a
                    href="/blog/managing-business-challenges-how-management-consulting-services-can-help-you-succeed"
                    className="btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/blog/blog-img.webp"
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
