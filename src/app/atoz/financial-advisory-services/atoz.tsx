"use client";
// eslint-disable-next-line @next/next/no-img-element

import React, { useState } from "react";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";

export default function AtoZ() {
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
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-button-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-button-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  return (
    <div>
      <Header
        logoURL={"/images/logos/atoz-logo.png"}
        mobileLogoURL={"/images/logos/atoz-logo.png"}
        altLogo={"GCS Logo"}
      />
      <section className="margintop">
        <div className="container-fluid px-0">
          <div className="">
            <div
              className="background-imgs"
              style={{ backgroundImage: "url(/images/atoz/finace-img.jpg)" }}
            >
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1>
                      <span>Welcome to</span> AtoZ Finance
                    </h1>
                    <h2>We Grow Together with Financial Advisory Services</h2>
                    <Link
                      href="/services/financial-advisory-services-for-a-secure-future"
                      className="btn-readmore"
                    >
                      Know More
                    </Link>
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
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box">
                  <span style={{ fontSize: "16px" }}>
                    INVEST IN YOUR FUTURE
                  </span>
                  <h2 className="w-100">
                    INVEST IN YOUR FUTURE WITH OUR FINANCIAL ADVISORY SERVICES
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    At A2Z Finance, we understand that managing your finances
                    can be overwhelming, especially when you're trying to plan
                    for the future. That's why we offer a range of financial
                    advisory services to help you achieve your financial goals
                    and secure your financial future.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/services/financial-advisory-services-for-a-secure-future"
                    className="btn me-3"
                  >
                    Know More
                  </Link>
                  <a href="/images/pdf/A2Z-pdf.pdf" className="btn" download>
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/banner/baner-1.webp"
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

      <section className="margintop">
        <div className="container-fluid px-0">
          <div
            className="bg-coach-img"
            style={{ backgroundImage: "url(/images/atoz/stock-bg.webp)" }}
          >
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <div className="Services">
                    <h2 style={{ fontWeight: "700" }}>
                      Leading financial advisor
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-7 order-2 order-md-1">
                  <div className="coach-box-1">
                    <span>Know About </span>
                    <h2 className="mt-md-2">Mr.Yashpal Chavada</h2>
                    <p>
                      Yashpal Chavada is a highly experienced financial advisor
                      and a renowned professor of stock market trading courses.
                      With years of expertise in investment management, Mr.
                      Chavada provides comprehensive financial planning
                      services, including estate planning and investment
                      strategies that align with clients' goals and risk
                      tolerance and helping clients achieve their financial
                      objectives by providing customized investment solutions
                      and expert guidance.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 text-center order-1 order-md-2">
                  <div className="">
                    <img
                      src="/images/atoz/hello-world.png"
                      className="img-fluid"
                      width="100%"
                      alt="coach"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/atoz/yashpal-sign.png"
                      alt="sign coach"
                      width="60%"
                      className="mt-md-3 mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-md-5 mt-4 align-items-center">
                <div className="col-md-5 text-center">
                  <div className="">
                    <img
                      src="/images/takshak/coach-2.png"
                      className="img-fluid"
                      alt="coach"
                      width="60%"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/takshak/gautamjani.png"
                      alt="sign coach"
                      width="60%"
                      className="mt-md-3"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="coach-box-1">
                    <span>Know About </span>
                    <h2 className="mt-md-2">Dr.Gautam Jani</h2>
                    <p className="mb-4">
                      Dr. Gautam Jani is a certified personal trainer and
                      successful entrepreneur based in Gujarat, India. He
                      founded FGIIT, an institute focused on providing
                      high-quality education and training for individuals
                      interested in the fitness industry. He is a respected
                      business mentor and coach, helping entrepreneurs and
                      fitness professionals to grow their businesses. His
                      expertise and commitment to his profession have made him a
                      sought-after expert in the field.
                    </p>
                    <Link href="/gautam_jani_official" className="select-btn">
                      View More
                    </Link>
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
                  <div className="mb-3">
                    <span>AtoZ Service</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-md-5">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">
                  Yearly Stock Market Advisory Package
                </h4>
                <div className="">
                  <img
                    className=""
                    src="/images/blog/atoz/technical-analysis.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">
                    Yearly Stock Market Advisory Package
                  </h4>
                  <div className="d-block d-md-flex">
                    <p>
                      <b>Duration :-</b> 1 Year
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p>
                      <b>Package Features :-</b>
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
                          Most Potential Stocks List{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Upto 20% Returns Annually{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Customized Strategies
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Regular Market Updates
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Dedicated Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="course-price mt-md-3 mt-3"
                  id="recorded-price-1"
                >
                  <h4>
                    ₹2,999/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Yearly Stock Market Advisory Package"
                    className="btn-success btn me-3"
                  >
                    Whatsapp Now
                  </a>
                  <a href="#myForm2" className="btn">
                    Inquiry Now
                  </a>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹10,000/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Yearly Stock Market Advisory Package"
                    className="btn-success btn me-3"
                  >
                    Whatsapp Now
                  </a>
                  <Link href="#myForm2" className="btn">
                    Inquiry Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop">
        <div className="container-fluid pb-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div className="Services d-none d-md-block">
                  <h2 className="mb-1">AtoZ finances Services</h2>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              <Slider {...settings}>
                <div>
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="">
                          <img
                            src="/images/atoz/introduction-img.png"
                            style={{ width: "95%" }}
                            alt="Strategic Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Investment planning</h4>
                          <p className="">
                            Our team of experienced financial advisors will work
                            with you to create a personalised investment plan
                            that aligns with you to create a personalised
                            investment plan
                          </p>
                          <p className="moretext4">
                            your short term and long-term financial goals. We'll
                            provide you with expert advice on where to invest
                            your money, and help you navigate the complex world
                            of investing.We trade on behalf of client in their
                            account on profit sharing model.
                            <br />
                            <b>
                              NOTE : Client can expect around 2 to 2.5% per
                              month{" "}
                            </b>
                          </p>
                          <div className="mt-2">
                            <Link
                              className="moreless-button4"
                              href="javascript:void(0);"
                            >
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="">
                          <img
                            src="/images/atoz/Retirement.png"
                            className="w-75"
                            alt="Retirement Planning"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Retirement Planning</h4>
                          <p className="mb-0">
                            We'll help you plan for a comfortable retirement by
                            creating a customised
                          </p>
                          <p className="moretext">
                            retirement plan that takes into account your current
                            financial situation and future goals. We'll help you
                            identify the best retirement savings options and
                            create a plan to maximise your retirement income.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="service-width">
                          <img
                            src="/images/atoz/tax-planning.png"
                            className="m-auto"
                            alt="Financial Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Tax Planning</h4>
                          <p className="">
                            Our tax planning services will help you minimise
                            your tax liability and maximise your after-tax
                            income.
                          </p>
                          <p className="moretext1">
                            We'll work with you to identify tax-saving
                            strategies that align with your financial goals and
                            help you stay compliant with tax laws.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button1"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="">
                          <img
                            src="/images/atoz/estate-planing.png"
                            width="120%"
                            className="m-auto"
                            alt="Marketing Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Estate Planning</h4>
                          <p className="">
                            Our estate planning services will help you protect
                            your assets and ensure they are distributed
                            according to
                          </p>
                          <p className="moretext2">
                            your wishes after you pass away. We'll work with you
                            to create a comprehensive estate plan that addresses
                            all your concerns and helps you avoid costly
                            mistakes
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button2"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="">
                          <img
                            src="/images/atoz/insurse-planing.png"
                            style={{ width: "70%" }}
                            className="m-auto"
                            alt="Financial Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Insurance Planning</h4>
                          <p className="">
                            We'll help you identify the right insurance products
                            to protect your assets, income, and family. Our team
                            of
                          </p>
                          <p className="moretext5">
                            insurance experts will provide you with advice on
                            the best insurance options and help you understand
                            the benefits and limitations of each product.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button5"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="d-block d-md-none">
              <div className="col-md-7">
                <div className="agency-design">
                  <div className="coach-box">
                    <span style={{ fontSize: "16px" }}>What we Provide ?</span>
                    <h2 className="w-100">AtoZ finances Services</h2>
                  </div>
                  <p>
                    At AtoZ finances, we offer a wide range of Finance Services
                    to help you to achieve their goals. Our services include:
                  </p>
                  <div className="details-line compnay-selects mt-3">
                    <details open>
                      <summary>INVESTMENT PLANNING</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Our team of experienced financial advisors will work
                          with you to create a personalised investment plan that
                          aligns with your short term and long-term financial
                          goals. We'll provide you with expert advice on where
                          to invest your money, and help you navigate the
                          complex world of investing. We trade on behalf of
                          client in their account on profit sharing model.
                        </h5>
                        <p>
                          NOTE : Client can expect around 2 to 2.5% per month
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary>RETIREMENT PLANNING</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          We'll help you plan for a comfortable retirement by
                          creating a customised retirement plan that takes into
                          account your current financial situation and future
                          goals. We'll help you identify the best retirement
                          savings options and create a plan to maximise your
                          retirement income.
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>TAX PLANNING</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Our tax planning services will help you minimise your
                          tax liability and maximise your after-tax income.
                          We'll work with you to identify tax-saving strategies
                          that align with your financial goals and help you stay
                          compliant with tax laws.
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>ESTATE PLANNING</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Our estate planning services will help you protect
                          your assets and ensure they are distributed according
                          to your wishes after you pass away. We'll work with
                          you to create a comprehensive estate plan that
                          addresses all your concerns and helps you avoid costly
                          mistakes.
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>INSURANCE PLANNING</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          We'll help you identify the right insurance products
                          to protect your assets, income, and family. Our team
                          of insurance experts will provide you with advice on
                          the best insurance options and help you understand the
                          benefits and limitations of each product.
                        </h5>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-4 mt-5 pt-5 pt-md-0">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <span>Testimonial</span>
                </div>
              </div>
            </div>
            <div className="row mt-md-4 mt-3">
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-5.webp"
                          alt="Himanshu Patel"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Himanshu Patel</strong>
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
                      "I had an excellent experience with A2Z Finance! They
                      provided the best investment planning services in Surat,
                      and their team was knowledgeable and helpful. Highly
                      recommend!
                    </p>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-6.webp"
                          alt="fenil Patel"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>fenil Patel</strong>
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
                  <div className="client-comment mb-md-3">
                    <p>
                      I highly recommend A2Z Finance for the best investment
                      planning services in Surat. Their team is knowledgeable,
                      professional, and provides excellent customer service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video-card mt-3 mt-md-0">
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
                          href="https://youtube.com/eNftd_fbBOo"
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
                  <div className="video-content">
                    <h4>Dr.Gautam Jani (Owner Of FGIIT)</h4>
                    <a
                      href="https://youtube.com/eNftd_fbBOo"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <i className="fas fa-play mr-1"></i> Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop bg-dark">
        <div className="contianer-fluid py-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box">
                  <span style={{ fontSize: "16px" }}>Education Course</span>
                  <h2 className="w-100">
                    Learn to invest in Stock market with our courses
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    Investing in the stock market can be intimidating, but with
                    our courses, you'll gain the knowledge and skills you need
                    to become a successful investor. Our expert instructors will
                    guide you through the basics of the stock market and provide
                    you with practical tools to analyze stocks and make informed
                    investment decisions.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/courses/recorded-stock-market-101-course"
                    className="btn"
                  >
                    Enroll Now
                  </Link>
                  <a
                    href="/images/pdf/A2Z-pdf.pdf"
                    className="btn ml-2"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/atoz/course-img.png"
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

      <section className="py-md-5 bg-dark">
        <div className="container-fluid">
          <div className="container">
            <div className="row pt-3 pt-md-4 align-items-center">
              <div className="col-lg-6">
                <div className="">
                  <img
                    className=""
                    src="/images/atoz/candlestick-Chart.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="course-box">
                  <h4>STOCK MARKET 101 Course</h4>
                  <div className="d-block d-md-flex">
                    <p>
                      <b>Duration</b> :- 1 Week
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="">Syllabus :-</p>
                    </div>
                    <div className="col-sm-10 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          INTRODUCTION TO STOCK MARKET INVESTING
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          TECHNICAL ANALYSIS{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          FUNDAMENTAL ANALYSIS
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          OPTIONS TRADING{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-md-1 mt-3">Two Mode Available for study</p>
                <p className="ml-0 my-2 mt-md-1">
                  <button className="select-btn" id="recorded-btn-1">
                    Recorded
                  </button>
                  <button
                    className="select-btn select-btn-active ml-2"
                    id="online-btn-1"
                  >
                    Online
                  </button>
                </p>
                <div
                  className="course-price mt-md-3"
                  id="online-price-1"
                  style={{ display: "block" }}
                >
                  <h4 className="">
                    ₹ 19,999/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="/courses/online-stock-market-101-course"
                    className="btn"
                  >
                    Enroll Now
                  </Link>
                </div>
                <div
                  className="course-price mt-md-3"
                  id="recorded-price-1"
                  style={{ display: "none" }}
                >
                  <h4>
                    ₹ 499/- <span>+ 18%</span>
                  </h4>
                  <Link
                    href="/courses/recorded-stock-market-101-course"
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

      <section className="py-md-5 bg-dark">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center pt-md-3 py-5">
              <div className="col-md-12 mb-md-4">
                <div className="coach-box text-center">
                  <div className="mb-2">
                    <span>Demo Lecture</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/atoz/mutual-funds.webp"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtube.com/f48n1lP6KC4"
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
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/atoz/market-cap.webp"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtube.com/ZIijyDf5y0c"
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
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/atoz/stock-market.webp"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/04EWMGIgEHg"
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
              </div>
            </div>
            <div className="row align-items-center mt-md-5 pt-md-4">
              <div className="col-md-12 mb-md-4">
                <div className="coach-box text-center">
                  <div className="d-none d-md-block">
                    <span>Course Certification</span>
                  </div>
                  <h2 className="w-100 mb-md-0 mb-4">
                    Our Institute Accreditation
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
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
                    src="/images/certificate/AtoZ-certificate.jpeg"
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
        <div className="contianer-fluid py-3 pb-md-5">
          <div className="container">
            <div className="row align-items-center">
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
                      src="/images/blog/blog-img.webp"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <h2 className="w-100">
                    Invest with Confidence Empower Yourself with our Stock
                    Market Course
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    Are you interested in investing in the stock market but feel
                    overwhelmed by the complexities of the financial world?
                    Don't worry, our Stock Market Course is here to empower you
                    with the knowledge and skills you need to invest with
                    confidence. In this article, we will provide a comprehensive
                    overview of our Stock Market Course, covering various topics
                    such as technical...
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/blog/invest-with-confidence-empower-yourself-with-our-stock-market-course"
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/blog/atoz/atoz-main-img.jpg"
                    alt="Invest with Confidence Empower Yourself"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-4 align-items-center">
              <div className="col-md-6">
                <div className="">
                  <img
                    src="/images/blog/atoz/atoz-blog-thumbanail.png"
                    alt="The Roadmap to Financial Freedom"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100 mt-md-0">
                    The Roadmap to Financial Freedom: Strategies That Actually
                    Work
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    Financial freedom, a cherished aspiration for many, can seem
                    distant and unattainable. However, by adopting the right
                    strategies and cultivating the appropriate mindset, you can
                    embark on a transformative journey towards financial
                    independence. In this article, we will unveil a roadmap to
                    help you navigate the path to financial freedom. With clear
                    objectives,...
                  </p>
                </div>
                <div className="mt-md-3 mt-3 carded-content">
                  <Link
                    href="/blog/roadmap-to-financial-freedom-strategies-for-achieving-personal-prosperity"
                    target="_blank"
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
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
      <Footer />
    </div>
  );
}
