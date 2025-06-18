/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Slider from "react-slick";
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

export default function BusinessConsultingServices() {
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
        "Takshak Business consulting services",
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

  const ManagementServices = {
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

  const Glimpse = {
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

  const ManagementCourse = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const CourseSpartans = {
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
          slidesToShow: 3,
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

  const StudentsVictory = {
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
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const Testimonial = {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
  };
  return (
    <>
      <Header
        logoURL={"/images/logos/takshak-logo-white.png"}
        mobileLogoURL={"/images/logos/takshak-logo.png"}
        altLogo={"takshak Logo"}
      />

      <section className="margintop">
        <div className="container-fluid px-0">
          <div>
            <div className="background-imgs">
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1>
                      <span>Welcome to</span>
                      <br /> Takshak Management Consultants
                    </h1>
                    <h2>
                      Your One-Stop Solution for Management Consulting Services
                    </h2>
                    <Link
                      href="/services/takshak-management-consultants-business-management-services"
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
        <div className="container-fluid px-0">
          <div className="bg-coach-img">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <div className="Services">
                    <h2 style={{ fontWeight: "700" }}>
                      Leading Business Success Coach
                    </h2>
                  </div>
                </div>
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
                <div className="col-md-7 order-md-1">
                  <div className="coach-box-1">
                    <span>Know About </span>
                    <h2 className="mt-md-2">Dr.Gautam Jani</h2>
                    <p className="mb-3">
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
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <div className="img-ds">
                  <img src="/images/takshak/ch.webp" alt="Coach" width="70%" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="reasons-box">
                  <h4>
                    <span style={{ color: "#ff8024" }}>Reasons to Contact</span>{" "}
                    with us
                  </h4>
                  <ul className="pl-0" style={{ textDecoration: "none" }}>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      unlock secrets of business wealth
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      learn & design strong fundational activities to win your
                      business
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      More scale & growth
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      excelater revenue and cash flow
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      360 degree transformation of your business
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      designed core competencies
                    </li>
                    <li className="d-flex align-items-center">
                      <img
                        src="/images/icons/check.webp"
                        alt="check"
                        width="20px"
                        className="img-fluid mr-2"
                      />{" "}
                      customize business models and metrics
                    </li>
                  </ul>
                  <div className="course-price mt-md-4 mt-2">
                    <Link
                      href="/services/takshak-management-consultants-business-management-services"
                      className="btn me-3"
                    >
                      Know More
                    </Link>
                    <Link
                      href="/images/pdf/TAKSHAK-BUSINESS-MANAGEMENT.pdf"
                      download="Takshak_Services"
                      className="btn"
                    >
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid py-5 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                <div className="Services">
                  <h2 style={{ fontWeight: "700" }}>
                    What will Transform your Business ?
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-md-5">
              <div className="col-md-6 order-md-1 order-2">
                <div className="content-business">
                  <h5>
                    <b>1.Perfect mindset of running Business</b>
                  </h5>
                  <p className="mt-1 mt-md-3">
                    The perfect mindset for running a business involves a
                    combination of persistence, adaptability, creativity,
                    strategic thinking, attention to detail, customer focus, and
                    a willingness to learn from failures and successes.
                  </p>

                  <h5 className="mt-md-3">
                    <b>2.Precise Strategies</b>
                  </h5>
                  <p className="mt-1 mt-md-3">
                    The ideal business mindset is one that balances
                    perseverance, agility, innovation, strategy, precision,
                    customer-centricity, and a commitment to learning from both
                    victories and setbacks.
                  </p>

                  <h5 className="mt-md-3">
                    <b>3.Polish Operational Excellence</b>
                  </h5>
                  <p className="mt-1 mt-md-3">
                    To polish operational excellence in business, one can focus
                    on improving processes, increasing efficiency, reducing
                    waste, enhancing quality, promoting teamwork, fostering a
                    culture of continuous improvement, utilizing technology, and
                    regularly measuring and analyzing performance metrics.
                  </p>
                  <div className="mt-md-3 mt-2">
                    <p>
                      <b>
                        For More detail{" "}
                        <Link href="/services/takshak-management-consultants-business-management-services">
                          Click Here
                        </Link>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="text-center">
                  <img
                    src="/images/takshak/business-3ps.png"
                    className="img-fluid d-none d-md-block"
                    alt="3 Ps"
                  />
                  <img
                    src="/images/takshak/business-3ps.png"
                    className="d-block d-md-none"
                    width="100%"
                    alt="3 Ps"
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="business-box">
                                        <img src="/images/takshak/business-how.png" alt="Transform in your Business" className="img-fluid">
                                            <div className="business-text text-center"><p>3 p's <br> Of <br> Business</p></div>
                                                <div className="business-text1"><p>Perfect mindset of running Business</p></div>
                                                <div className="business-text2"><p>Precise Strategies</p></div>
                                                <div className="business-text3"><p>Polish Operational Excellence</p></div>
                                            </div>
                                    </div>
                                </div> --> */}
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
                    <span>Takshak Packages</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-3">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">Sales Super Hero Program</h4>
                <div>
                  <img
                    src="/images/blog/Analyze_and_Utilize_Data.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">
                    Sales Super Hero Program
                  </h4>
                  <div className="d-block d-md-flex">
                    <p>
                      <b>Duration:-</b> 1 Month
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-2">
                    <p>
                      <b>Sessions Included:- </b>4 weekly sessions
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p>
                      <b>Included Services :-</b>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Communication skills{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Broadcasting{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Re-targeting{" "}
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Sales scripting{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Sales automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Customer FAQ
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Negotiations
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
                    ₹10,000/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak Sales Super Hero Program"
                    className="btn-success btn me-3"
                  >
                    Whatsapp Now
                  </a>
                  <Link href="#myForm2" className="btn">
                    Inquiry Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹10,000/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak Sales Super Hero Program"
                    className="btn-success btn"
                  >
                    Whatsapp Now
                  </a>
                  <Link href="#myForm2" className="btn">
                    Inquiry Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-4">
              <div className="col-lg-6">
                <h4 className="d-block d-md-none">Automation Program </h4>
                <div>
                  <img
                    src="/images/mix-img/Automation-Program.webp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-md-0">
                <div className="course-box">
                  <h4 className="d-none d-md-block">Automation Program</h4>
                  <div className="d-block d-md-flex">
                    <p>
                      <b>Duration:-</b> 3 Month
                    </p>
                  </div>
                  <div className="d-block d-md-flex mt-1">
                    <p>
                      <b>Included Services :-</b>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          HR Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Marketing Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Sales Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Process Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          System Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Finance Automation
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 mt-md-0 mt-2">
                      <ul className="mb-0 mb-mb-2">
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Admin Automation
                        </li>
                        <li>
                          <img
                            src="/images/icons/check.webp"
                            alt="check"
                            width="20px"
                            className="img-fluid"
                          />{" "}
                          Operations Automation
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
                    ₹45,000/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak Automation Program"
                    className="btn-success btn me-3"
                  >
                    Whatsapp Now
                  </a>
                  <Link href="#myForm2" className="btn">
                    Inquiry Now
                  </Link>
                </div>
                <div className="course-price mt-md-3" id="online-price-1">
                  <h4>
                    ₹45,000/- <span>+ 18%</span>
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about Takshak Automation Program"
                    className="btn-success btn"
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
        <div className="container-fluid pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div className="Services">
                  <h2 className="mb-1 mb-md-4 d-none d-md-block">
                    Business Management Services
                  </h2>
                  <p className="d-none d-md-block">
                    At Takshak Management Consultants, we offer a wide range of
                    consulting services to help businesses achieve their goals.
                    Our services include:
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-md-3">
              <div className="d-none d-md-block">
                <Slider {...ManagementServices}>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/ser-4.png"
                            style={{ width: "95%" }}
                            alt="Strategic Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Strategic Consulting</h4>
                          <p>
                            Our team of experts can help you develop a strategic
                            plan to achieve your business
                            {showMore ? (
                              <span>
                                goals. We can assist you in identifying growth
                                opportunities, improving operational efficiency,
                                and enhancing customer experience.
                              </span>
                            ) : (
                              <span id="dotsx">...</span>
                            )}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button4"
                              onClick={toggleReadMore}
                            >
                              {showMore ? "Read less" : "Read more"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/ser-1.png"
                            className="img-fluid"
                            alt="Operations Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Operations Consulting</h4>
                          <p>
                            We provide a range of services to help you
                            streamline your operations, reduce costs, and
                            {showMoreI ? (
                              <span>
                                improve productivity. Our consultants can help
                                you with process improvement, supply chain
                                management, and more.
                              </span>
                            ) : (
                              <span id="dotsx">...</span>
                            )}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button"
                              onClick={toggleReadMoreI}
                            >
                              {showMore ? "Read less" : "Read more"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="service-width">
                          <img
                            src="/images/takshak/ser-2.png"
                            className="m-auto"
                            alt="Financial Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Financial Consulting</h4>
                          <p>
                            Our financial experts can help you optimize your
                            financial resources, manage
                            {showMoreII ? (
                              <span>
                                risks, and maximize profits. We can assist you
                                in financial planning, budgeting, forecasting,
                                and more.
                              </span>
                            ) : (
                              <span id="dotsx">...</span>
                            )}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button"
                              onClick={toggleReadMoreII}
                            >
                              {showMore ? "Read less" : "Read more"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="service-width">
                          <img
                            src="/images/takshak/ser-3.png"
                            className="m-auto"
                            alt="Marketing Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Marketing Consulting</h4>
                          <p>
                            Our marketing consultants can help you develop a
                            marketing strategy that aligns with your
                            {showMoreIII ? (
                              <span>
                                business goals. We can assist you in market
                                research, branding, advertising, and more.
                              </span>
                            ) : (
                              <span id="dotsx">...</span>
                            )}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button"
                              onClick={toggleReadMoreIII}
                            >
                              {showMore ? "Read less" : "Read more"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/ser-5.png"
                            style={{ width: "90%" }}
                            alt="Financial Consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Technology Consulting</h4>
                          <p>
                            Our technology experts can help you leverage the
                            latest technologies to improve
                            {showMoreIIII ? (
                              <span>
                                your business processes and gain a competitive
                                edge. We can assist you in IT strategy
                                development, software selection, implementation,
                                and more.
                              </span>
                            ) : (
                              <span id="dotsx">...</span>
                            )}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button"
                              onClick={toggleReadMoreIIII}
                            >
                              {showMore ? "Read less" : "Read more"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/main-counslting.png"
                            style={{ width: "95%" }}
                            className="m-auto"
                            alt="Legal consultant "
                          />
                        </div>
                        <div className="content-service">
                          <h4>Legal consultant </h4>
                          <p>
                            provides a wide variety of legal expertise ranging
                            from improve organizations profitability and
                            efficiency, advise
                          </p>
                          <p className="moretext11">
                            solutions for client development strategies,
                            marketing and productivity, consult on legal and
                            program issues to actively manage risks, analyze
                            problems and develop solutions.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button11"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/fitit/social-media.webp"
                            style={{ width: "100%" }}
                            alt="Social media consultant"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Social media consultant</h4>
                          <p>
                            we helps brands and businesses leverage social media
                            and social media
                          </p>
                          <p className="moretext12">
                            {` strategy in general. It involves planning, developing, and improving a
                                                        brand's social media presence through digital marketing techniques. In
                                                        addition, managing crises and budget to align with the brand's
                                                        objectives.`}
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button12"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/ser-4.png"
                            style={{ width: "95%" }}
                            alt="Sales consultant"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Sales consultant </h4>
                          <p>
                            Responsible for developing and maintaining the
                            client base of the organization.
                          </p>
                          <p className="moretext14">
                            also we create sales strategies and techniques to
                            increase the client base and maintain the client
                            interaction records of the company.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button14"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/main-counslting.png"
                            style={{ width: "90%" }}
                            className="m-auto"
                            alt="Wellness/Fitness consultant"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Wellness/Fitness consultant</h4>
                          <p>
                            helping people achieve their health and fitness
                            goals. we work with individuals,
                          </p>
                          <p className="moretext15">
                            groups, and organizations to design exercise
                            programs & scientific reserach based diet that meet
                            their specific needs.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button15"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/atoz/introduction-img.png"
                            style={{ width: "85%" }}
                            alt="Growth Marketing consultant"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Growth Marketing consultant</h4>
                          <p>
                            helps a company achieve sustainable growth with a
                            well-planned and executable
                          </p>
                          <p className="moretext16">
                            business growth strategy. Not only can they achieve
                            increased sales, but they can also increase growth
                            capacities by leveraging their expertise and helping
                            build an infrastructure to support growth.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button16"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/complines.png"
                            style={{ width: "85%" }}
                            className="m-auto"
                            alt="Career coaching consultancy"
                          />
                        </div>
                        <div className="content-service pt-0">
                          <h4>Career coaching consultancy</h4>
                          <p>
                            Career Coaching Consultancy Advice about training,
                            employment options and
                          </p>
                          <p className="moretext17">
                            career progression to professionals and career
                            changers. also provide guidance to people making
                            decisions about their career.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button17"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="text-center">
                          <img
                            src="/images/fitit/pr-events.webp"
                            style={{ width: "65%" }}
                            alt="PR consultancy"
                            className="m-auto"
                          />
                        </div>
                        <div className="content-service">
                          <h4>PR consultancy</h4>
                          <p>
                            include writing, for example press releases, public
                            speaking, organizing events and more.
                          </p>
                          <p className="moretext18">
                            Public relations consultants handle the public image
                            of a company.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button18"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div className="text-center">
                          <img
                            src="/images/fitit/managment-skills.webp"
                            style={{ width: "70%" }}
                            alt="Leadership consulting"
                            className="m-auto"
                          />
                        </div>
                        <div className="content-service pt-0">
                          <h4>Leadership consulting</h4>
                          <p>
                            can assess the current state of the organization and
                            provide guidance on
                          </p>
                          <p className="moretext19">
                            how to improve leadership skills within the
                            organization. This may include developing a
                            leadership development plan, providing training for
                            high potentials, or facilitating discussions on
                            leadership principles.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button19"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/fitit/video-edit.webp"
                            style={{ width: "70%" }}
                            alt="Product development consulting/ Brand image"
                            className="m-auto"
                          />
                        </div>
                        <div className="content-service pt-0">
                          <h4>Product development consulting/ Brand image</h4>
                          <p>
                            committed to helping clients develop products that
                            fit
                          </p>
                          <p className="moretext20">
                            market needs, produce attractive margins, provide
                            platforms for add-on offerings, and enhance the
                            reputation of brands for future business growth. Our
                            work in product development includes developing,
                            defining, and implementing strategies that help
                            clients make lasting improvements to their
                            innovation and business performance.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button20"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/fitit/webdevlopment.webp"
                            style={{ width: "65%" }}
                            alt="Design consultant"
                            className="m-auto"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Design consultant</h4>
                          <p>
                            function in the fields of interior design, fashion
                            design, or graphic design.
                          </p>
                          <p className="moretext21">
                            They could help clients utilize their living space
                            by creating design plans, selecting color themes and
                            styles, arranging furniture, or fixing lighting and
                            other fixtures.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button21"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2 col-12">
                    <div className="card-box card-style-1 text-start">
                      <div className="inner-service">
                        <div>
                          <img
                            src="/images/takshak/complines.png"
                            style={{ width: "95%" }}
                            alt="Compliance consulting"
                          />
                        </div>
                        <div className="content-service">
                          <h4>Compliance consulting</h4>
                          <p>
                            compliance consulting can be defined as
                            expert-driven consulting services aimed at
                          </p>
                          <p className="moretext22">
                            assisting businesses to identify, better manage and
                            mitigate various IT and enterprise compliance risks.
                          </p>
                          <div className="mt-2">
                            <a
                              className="moreless-button22"
                              href="javascript:void(0);"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="d-block d-md-none">
                <div className="col-md-7">
                  <div className="coach-box">
                    <span style={{ fontSize: " 16px" }}>What we Provide ?</span>
                    <h2 className="w-100">Business Development Services </h2>
                  </div>
                  <div className="agency-design">
                    <p>
                      At Takshak Management Consultants, we offer a wide range
                      of consulting services to help businesses achieve their
                      goals. Our services include:
                    </p>
                    <div className="details-line compnay-selects mt-3">
                      <details>
                        <summary>Strategic Consulting</summary>
                        <div className="compnay-content content-1">
                          <h5>
                            Our team of experts can help you develop a strategic
                            plan to achieve your business goals. We can assist
                            you in identifying growth opportunities, improving
                            operational efficiency, and enhancing customer
                            experience.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Operations Consulting</summary>
                        <div className="compnay-content content-1">
                          <h5>
                            We provide a range of services to help you
                            streamline your operations, reduce costs, and
                            improve productivity. Our consultants can help you
                            with process improvement, supply chain management,
                            and more.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Financial Consulting</summary>
                        <div className="compnay-content content-1">
                          <h5>
                            {" "}
                            Our financial experts can help you optimize your
                            financial resources, manage risks, and maximize
                            profits. We can assist you in financial planning,
                            budgeting, forecasting, and more.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Marketing Consulting</summary>
                        <div className="compnay-content content-1">
                          <h5>
                            Our marketing consultants can help you develop a
                            marketing strategy that aligns with your business
                            goals. We can assist you in market research,
                            branding, advertising, and more.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Technology Consulting</summary>
                        <div className="compnay-content content-1">
                          <h5>
                            Our technology experts can help you leverage the
                            latest technologies to improve your business
                            processes and gain a competitive edge. We can assist
                            you in IT strategy development, software selection,
                            implementation, and more.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Legal consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            provides a wide variety of legal expertise ranging
                            from improve organizations profitability and
                            efficiency, advise solutions for client development
                            strategies, marketing and productivity, consult on
                            legal and program issues to actively manage risks,
                            analyze problems and develop solutions.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Social media consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            {" "}
                            we helps brands and businesses leverage social media
                            and social media strategy in general. It involves
                            planning, developing, and improving a brands social
                            media presence through digital marketing techniques.
                            In addition, managing crises and budget to align
                            with the brands objectives.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Sales Consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            {" "}
                            Responsible for developing and maintaining the
                            client base of the organization. also we create
                            sales strategies and techniques to increase the
                            client base and maintain the client interaction
                            records of the company.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Wellness/ Fitness Consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            {" "}
                            helping people achieve their health and fitness
                            goals. we work with individuals, groups, and
                            organizations to design exercise programs &
                            scientific research based diet that meet their
                            specific needs.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>growth Marketing Consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            helps a company achieve sustainable growth with a
                            well-planned and executable business growth
                            strategy. Not only can they achieve increased sales,
                            but they can also increase growth capacities by
                            leveraging their expertise and helping build an
                            infrastructure to support growth.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Career Coaching Consultancy </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            Advice about training, employment options and career
                            progression to professionals and career changers.
                            also provide guidance to people making decisions
                            about their career.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>PR Consultancy </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            include writing, for example press releases, public
                            speaking, organizing events and more. Public
                            relations consultants handle the public image of a
                            company.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Leadership Consulting </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            can assess the current state of the organization and
                            provide guidance on how to improve leadership skills
                            within the organization. This may include developing
                            a leadership development plan, providing training
                            for high potentials, or facilitating discussions on
                            leadership principles.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>
                          Product Development consulting/ Brand image{" "}
                        </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            committed to helping clients develop products that
                            fit market needs, produce attractive margins,
                            provide platforms for add-on offerings, and enhance
                            the reputation of brands for future business growth.
                            Our work in product development includes developing,
                            defining, and implementing strategies that help
                            clients make lasting improvements to their
                            innovation and business performance.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Design Consultant </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            function in the fields of interior design, fashion
                            design, or graphic design. They could help clients
                            utilize their living space by creating design plans,
                            selecting color themes and styles, arranging
                            furniture, or fixing lighting and other fixtures.
                          </h5>
                        </div>
                      </details>
                      <details>
                        <summary>Compliance consulting </summary>
                        <div className="compnay-content content-1">
                          <h5>
                            compliance consulting can be defined as
                            expert-driven consulting services aimed at assisting
                            businesses to identify, better manage and mitigate
                            various IT and enterprise compliance risks.
                          </h5>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </section>
      <section className="pt-md-5 pt-4 pt-md-0 mt-4">
        <div className="container-fluid">
          <div className="container pb-lg-5">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <span>Testimonial</span>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-3">
              <div className=" col-md-6 order-2 testimonial-box-fitit">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="https://lh3.googleusercontent.com/a/AAcHTtdGB3nnvlbTtltBVtzz30BM92qY4xohmdrzfNcS=w60-h60-p-rp-mo-br100"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Nimisha Vaniyawala</strong>
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
                      As a dietitians, i was suffering for client counselling
                      and time management which is solve by takshak management
                      consultation. Thank you so much for your help
                    </p>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/review/unnamed.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>bhaumik vaidya</strong>
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
                      Nice consulting even though remotely as we are in canada.
                      Very humble behavior of staff.
                    </p>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="https://lh3.googleusercontent.com/a/AAcHTtcZYiEax_njAiU_UX8fUVY1u62U2s3HxPnlNr0o=w60-h60-p-rp-mo-br100"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Dr.Karan Patel</strong>
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
                      Top consultants listen effectively, perform their due
                      diligence, exude confidence, and continuously deliver on
                      their promises
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1">
                <Slider {...Testimonial}>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            data-src="/images/review/milan-modi-review.webp"
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/review/milan-modi-review.webp"
                          />
                          <div className="video-btn">
                            <a
                              href="https://youtube.com/AljwdDjKUw0"
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
                        <h4>Dr.Milan Modi</h4>
                        <a
                          href="https://youtube.com/AljwdDjKUw0"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
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
                              href="https://youtu.be/dS4gYgLCaEw"
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
                        <h4>Chirag Pandey (FGIIT Manager)</h4>
                        <a
                          href="https://youtu.be/dS4gYgLCaEw"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="video-card mt-3 mt-md-0">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            data-src="/images/review/review-video-3.webp"
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                            src="/images/review/review-video-3.webp"
                          />
                          <div className="video-btn">
                            <a
                              href="https://youtu.be/2-49dtoYAv8"
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
                        <h4>Pavan Rana (Stallon Manager)</h4>
                        <a
                          href="https://youtu.be/2-49dtoYAv8"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box d-none d-md-block">
                  <div>
                    <span>Diploma in Business Management Course</span>
                  </div>
                  <h2 className="w-100">Topic Be covered in course</h2>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              <Slider {...ManagementCourse}>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/ser-4.png"
                          style={{ width: "100%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Introduction of management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div className="text-center">
                        <img
                          src="/images/takshak/managment-skills.png"
                          style={{ width: "84%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Management Skills </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div className="text-center">
                        <img
                          src="/images/takshak/ser-3.png"
                          style={{ width: "65%" }}
                          className="m-auto"
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Introduction of Marketing Management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/ser-2.png"
                          style={{ width: "65%" }}
                          className="m-auto"
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Introduction of Finance Management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/hr-img.png"
                          style={{ width: "95%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Human Resource Management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/behavior.png"
                          style={{ width: "65%" }}
                          className="m-auto"
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Organization Behavior</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/Service-Management.png"
                          style={{ width: "95%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Service Management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/Strategic-Management.png"
                          style={{ width: "100%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Strategic Management</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/Personality-Development.png"
                          style={{ width: "65%" }}
                          className="m-auto"
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Personality Development</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="card-box card-style-1 text-start sub-hover">
                    <div className="inner-service fix-height">
                      <div>
                        <img
                          src="/images/takshak/Organization-Ethics.png"
                          className="m-auto"
                          style={{ width: "65%" }}
                          alt="Strategic Consulting"
                        />
                      </div>
                      <div className="content-service text-center">
                        <h4>Organization Ethics</h4>
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
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box-1">
                  <h2 className="w-100 d-none d-md-block">
                    Select Best Path For you
                  </h2>
                </div>
              </div>
            </div>
            <div className="d-none d-md-none">
              <div className="row mt-md-4">
                <div className="col-md-4">
                  <div className="main-carded">
                    <div className="carded-up">
                      <div className="carded-icon text-center">
                        <img
                          src="/images/takshak/recorded-plan.png"
                          alt="Online Classes"
                          className="img-fluid mt-4"
                        />
                      </div>
                    </div>
                    <div className="carded-content">
                      <h4 className="text-center mt-md-3">Recorded Sessions</h4>
                      <ul className="mt-2 mt-md-3">
                        <li>
                          <i className="fas fa-book"></i> Enjoy Book Material
                        </li>
                        <li>
                          <i className="fas fa-tasks"></i> Case Study Based
                          Project
                        </li>
                        <li>
                          <i className="fas fa-video"></i> Recorded Lecture
                          Videos
                        </li>
                        <li>
                          <i className="fas fa-certificate"></i> Receive Your
                          E-certificate
                        </li>
                        <li>
                          <i className="fas fa-comments"></i> Team Chat Support
                        </li>
                      </ul>
                      <div className="price-course mt-md-5 pt-md-2">
                        <p>
                          ₹ 499 /- <span>Including GST</span>
                        </p>
                      </div>
                      <div className="text-center mb-md-2">
                        <a
                          href="./courses/recorded-diploma-in-business-management-course"
                          className="btn"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="main-carded">
                    <div className="carded-up">
                      <div className="carded-icon text-center">
                        <img
                          src="/images/takshak/online-plan.png"
                          alt="Online Classes"
                          className="img-fluid mt-4"
                        />
                      </div>
                    </div>
                    <div className="carded-content">
                      <h4 className="text-center mt-md-3">Online Classes</h4>
                      <ul className="mt-2 mt-md-3">
                        <li>
                          <i className="fas fa-clock"></i> 1.5 Month
                        </li>
                        <li>
                          <i className="fas fa-book"></i> Enjoy Book Material
                        </li>
                        <li>
                          <i className="fas fa-chalkboard-teacher"></i> Zoom
                          Classes
                        </li>
                        <li>
                          <i className="fas fa-tasks"></i> Case Study Based
                          Project
                        </li>
                        <li>
                          <i className="fas fa-video"></i> Recorded Sessions Are
                          Included
                        </li>
                        <li>
                          <i className="fas fa-file"></i> Certified From NSDC
                        </li>
                      </ul>
                      <div className="price-course">
                        <p>
                          ₹ 4,999 /- <span>Including GST</span>
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          href="/courses/online-diploma-in-business-management"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="main-carded">
                    <div className="carded-up">
                      <div className="carded-icon text-center">
                        <img
                          src="/images/takshak/offline-plan.png"
                          alt="offline Classes"
                          className="img-fluid mt-1"
                        />
                      </div>
                    </div>
                    <div className="carded-content">
                      <h4 className="text-center mt-md-3">Offline Classes</h4>
                      <ul className="mt-2 mt-md-3">
                        <li>
                          <i className="fas fa-clock"></i> 1.5 Month
                        </li>
                        <li>
                          <i className="fas fa-book"></i> Enjoy Book Material
                        </li>
                        <li>
                          <i className="fas fa-chalkboard-teacher"></i> Offline
                          Classes
                        </li>
                        <li>
                          <i className="fas fa-tasks"></i> Case Study Based
                          Project
                        </li>
                        <li>
                          <i className="fas fa-video"></i> Recorded Sessions Are
                          Included
                        </li>
                        <li>
                          <i className="fas fa-file"></i> Certified From NSDC
                        </li>
                      </ul>
                      <div className="price-course">
                        <p>
                          ₹ 14,999 /- <span>Including GST</span>
                        </p>
                      </div>
                      <div className="text-center">
                        <Link
                          href="/courses/offline-diploma-in-business-management"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-block">
              <div className="row mt-md-5 align-items-center">
                <div className="col-lg-4">
                  <div className="">
                    <img
                      className="d-block d-md-none"
                      alt="takshak"
                      src="/images/takshak/bg-coach.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                    <img
                      className="d-none d-md-block img-fluid"
                      alt="takshak"
                      src="/images/takshak/bg-coach-desktop.webp"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="course-box">
                    <h4>Diploma in Business Management Course</h4>
                    <div className="d-block d-md-flex">
                      <p>
                        <b>Duration</b> :- 1.5 month
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="">Syllabus :-</p>
                      </div>
                      <div className="col-sm-6 mt-md-0 mt-2">
                        <ul className="mb-0 mb-mb-2">
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Introduction of management
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Management Skills
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Introduction of Marketing Management
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Introduction of Finance Management
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Human Resource Management
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="">
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Organization Behavior
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Service Management
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Strategic Management
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Personality Development
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Organization Ethics
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mt-md-1">Two Mode Available for study</p>
                  <p className="ml-0 my-2 mt-md-1">
                    <button
                      className="select-btn select-btn-active"
                      id="recorded-btn"
                    >
                      Recorded
                    </button>
                    <button className="select-btn ml-2" id="online-btn">
                      Online
                    </button>
                    {/* <!-- <button className="select-btn ml-2" id="offline-btn">Offline</button> --> */}
                  </p>
                  <div className="course-price mt-md-3" id="recorded-price">
                    <h4>
                      ₹ 499/- <span>+ 18%</span>
                    </h4>
                    <Link
                      href="/courses/recorded-diploma-in-business-management-course"
                      className="btn"
                    >
                      Know More
                    </Link>
                  </div>
                  <div className="course-price mt-md-3" id="online-price">
                    <h4>
                      ₹ 4,999/- <span>+ 18%</span>
                    </h4>
                    <Link
                      href="./courses/online-diploma-in-business-management"
                      className="btn"
                    >
                      Know More
                    </Link>
                  </div>
                  {/* <!-- <div className="course-price mt-md-3" id="offline-price" style="display: none;">
                                        <h4>₹ 14,999/- <span>+ 18%</span></h4>
                                        <Link href="./courses/offline-diploma-in-business-management" className="btn">Know
                                            More</Link>
                                    </div> --> */}
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-5 pt-md-4 py-5">
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
                        className=""
                        data-src="/images/takshak/demo-lecture.jpg"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/takshak/demo-lecture.jpg"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/FpVP__GXKxU"
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
                        className=""
                        data-src="/images/takshak/demo-lecture-1.jpg"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/takshak/demo-lecture-1.jpg"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/P0psmewgWgI"
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
                        className=""
                        data-src="/images/takshak/demo-lecture-2.jpg"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="client journey"
                        src="/images/takshak/demo-lecture-2.jpg"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/eSjAqd9r770"
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
          </div>
        </div>
      </section>
      <section className="bg-dark">
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
                    src="/images/certificate/takshak-certificate.jpeg"
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
      <section className="bg-dark">
        <div className="container-fluid pt-4 py-md-5">
          <div className="container pb-md-5">
            <div className="col-md-12 mb-md-4">
              <div className="coach-box text-center">
                <div className="d-none d-md-block">
                  <span>Our Business Course Spartans</span>
                </div>
                <h2 className="d-block d-md-none w-100">
                  Our Business Course Spartans
                </h2>
              </div>
            </div>
            <div className="d-none d-md-block">
              <Slider {...CourseSpartans}>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-1.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Nandni & Naveen</h4>
                      <p>City : Maldives</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-2.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Sweeta Jha</h4>
                      <p>City : Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-3.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Amir Khan</h4>
                      <p>City : Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-4.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Mohammad Jeelani</h4>
                      <p>City : Mumbai</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="d-block d-md-none pb-5 py-md-0">
              <Slider {...CourseSpartans}>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-1.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Nandni & Naveen</h4>
                      <p>City : Maldives</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-2.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Sweeta Jha</h4>
                      <p>City : Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-3.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Amir Khan</h4>
                      <p>City : Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="item m-3 col-12">
                  <div className="review-box">
                    <img
                      src="/images/review/certificate-4.jpg"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                    <div className="text-center review-content">
                      <h4>Mohammad Jeelani</h4>
                      <p>City : Mumbai</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container-md">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-7">
                <div className="coach-box">
                  <span style={{ fontSize: "16px" }}>
                    Human Resource Agency
                  </span>
                  <h2 className="w-100">HR Agency Consultants</h2>
                </div>
                <div className="agency-design">
                  <p>
                    HR Consultants help human resource professionals improve
                    talent recruitment, management, and development processes in
                    the company. Their primary focus is the people who work in
                    the organization and the team culture that binds them
                    together. HR Consultants might specialize in:
                  </p>
                  <div className="details-line compnay-selects mt-3">
                    <details open>
                      <summary>Employee wellbeing and satisfaction</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Employee wellbeing and satisfaction, for example
                          company perks or relocation support for international
                          talent
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>Legal HR documentation</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Job descriptions are essential for explaining the
                          exact duties of different employees, Organization
                          chart, Staffing plan, Employee handbook, Compliance
                          documents, Performance metrics and documents,Time and
                          attendance policy and Exit documents.
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>Company culture</summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Company culture, defining key values and principles
                          that team members share and embody
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>Recruitment </summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Recruitment and its main areas, such as talent
                          pipeline management, interview processes, or remote
                          talent management
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>Employer branding </summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Employer branding as a cross-functional area shared
                          with marketing consultancy
                        </h5>
                      </div>
                    </details>
                    <details>
                      <summary>Training & development programme </summary>
                      <div className="compnay-content content-1">
                        <h5>
                          Training and development initiatives are educational
                          activities within an organization that are designed to
                          improve the job performance of an individual or group.
                        </h5>
                      </div>
                    </details>
                  </div>
                </div>
                <div className="mt-md-4 carded-content">
                  <Link
                    href="/services/human-resource-agency-services"
                    className="btn"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-none d-md-block">
                  <img
                    src="/images/takshak/hr-agency.webp"
                    alt="HR Agency"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-md-5 pt-md-5">
              <div className="coach-box text-center">
                {/* <!-- <span>Human Resource Agency</span> --> */}
                <div className="d-none d-md-block">
                  <span className="w-100">
                    <i className="fas fa-trophy" style={{ color: "#fff" }}></i>{" "}
                    Students Victory of Placement{" "}
                    <i className="fas fa-trophy" style={{ color: "#fff" }}></i>
                  </span>
                </div>
                <h2 className="w-100 d-block d-md-none">
                  <i className="fas fa-trophy" style={{ color: "#fff" }}></i>{" "}
                  Students Victory{" "}
                  <i className="fas fa-trophy" style={{ color: "#fff" }}>
                    {" "}
                  </i>
                  of Placement
                </h2>
              </div>
              <div className="mt-md-5 d-none d-md-block">
                <Slider {...StudentsVictory}>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Chirag Pandey</h4>
                        <p>
                          <b>Company Name :-</b> FGIIT
                        </p>
                        <p>
                          <b>Designation :-</b> Manager & Faculty
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 10,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Kaushik Parmar</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b>Manager & Personal Trainer
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 4,00,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Rahul Badgujar</h4>
                        <p>
                          <b>Company Name :-</b> JS fitness
                        </p>
                        <p>
                          <b>Designation :-</b>Personal Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 3,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Gurpreet Singh</h4>
                        <p>
                          <b>Company Name :-</b> The countryside international
                          school
                        </p>
                        <p>
                          <b>Designation :-</b> Gym Manager
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 4,50,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Ludhiana
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Hiral Malvi</h4>
                        <p>
                          <b>Company Name :-</b> The countryside international
                          school
                        </p>
                        <p>
                          <b>Designation :-</b> Nutritionist
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 2,50,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Omer Saiyad</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b> General Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 2,50,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item m-3 col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Sagar Nayak</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b> General Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 2,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="mt-md-5 d-block d-md-none">
                <Slider {...StudentsVictory}>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Chirag Pandey</h4>
                        <p>
                          <b>Company Name :-</b> FGIIT
                        </p>
                        <p>
                          <b>Designation :-</b> Manger & Faculty
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 10,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Kaushik Parmar</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b>Manager & Personal Trainer
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 4,00,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Rahul Badgujar</h4>
                        <p>
                          <b>Company Name :-</b> JS fitness
                        </p>
                        <p>
                          <b>Designation :-</b>Personal Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 3,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Gurpreet Singh</h4>
                        <p>
                          <b>Company Name :-</b> The countryside international
                          school
                        </p>
                        <p>
                          <b>Designation :-</b> Gym Manager
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 4,50,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Ludhiana
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Hiral Malvi</h4>
                        <p>
                          <b>Company Name :-</b> The countryside international
                          school
                        </p>
                        <p>
                          <b>Designation :-</b> Nutritionist
                        </p>
                        <p className="pt-0">
                          <b>Salary Package :-</b> ₹ 2,50,000/-
                        </p>
                        <p className="py-0">
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Omer Saiyad</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b> General Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 2,50,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item col-12">
                    <div className="placement-box">
                      <div className="placement-img">
                        <img
                          src="/images/placement/placement-3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="placement-dots">
                        <span className="dotss"></span>
                        <span className="dotss1"></span>
                        <span className="dotss2"></span>
                      </div>
                      <div className="placement-content">
                        <h4 className="text-center">Sagar Nayak</h4>
                        <p>
                          <b>Company Name :-</b> Stallone
                        </p>
                        <p>
                          <b>Designation :-</b> General Trainer
                        </p>
                        <p>
                          <b>Salary Package :-</b> ₹ 2,00,000/-
                        </p>
                        <p>
                          <b>City :-</b> Surat
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark margintop">
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
                      src="/images/blog/marketing.png"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <h2 className="w-100">{`Understanding the 7 P's of Marketing: A Comprehensive
                                        Guide`}</h2>
                </div>
                <div className="agency-design">
                  <p>
                    Marketing is the process of creating, communicating,
                    delivering, and exchanging offerings that have value for
                    customers, clients, partners, and society at large. It is a
                    broad discipline that encompasses a wide range of
                    activities, from product development to market research to
                    sales and customer service.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    href="/blog/understanding-the-7ps-of-marketing"
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/blog/marketing.png"
                    alt="HR Agency"
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
                    src="/images/blog/thskshak-1/thumbnail-7.webp"
                    alt="10 Effective Business Strategies"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100 mt-md-0">
                    Understanding Business Taxes: A Comprehensive Guide to
                    Different Types of Taxes
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    {` As a business owner, having a comprehensive understanding of the various types of
                                        taxes
                                        that may apply to your enterprise is crucial. Taxes play a pivotal role in the
                                        functioning of a
                                        country's economy and are an essential part of running a business. This
                                        comprehensive
                                        guide aims to provide insights into the different types of taxes that businesses
                                        encounter,
                                        shedding light on how they work and their impact on businesses.`}
                  </p>
                </div>
                <div className="mt-md-3 mt-3 carded-content">
                  <Link
                    href="/blog/understanding-business-taxes"
                    target="_blank"
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-2 align-items-center">
              <div className="col-md-6 order-lg-2">
                <div className="">
                  <img
                    src="/images/blog/professional-development.png"
                    alt="10 Effective Business Strategies"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="coach-box">
                  <h2 className="w-100 mt-md-0">
                    Enhancing Skills and Professional Development: A
                    Comprehensive Approach
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    {`  n today's rapidly changing professional world, the significance of continuous skill
                                        enhancement and professional development cannot be overstated. To thrive in this
                                        environment, organisations must prioritise the growth and development of their
                                        employees,
                                        giving them a competitive advantage. This blog post will examine the essential
                                        components
                                        of a comprehensive skill enhancement and professional development program.`}
                  </p>
                </div>
                <div className="mt-md-3 mt-3 carded-content">
                  <Link
                    href="/blog/the-road-to-excellence"
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
