// eslint-disable-next-line @next/next/no-img-element
"use client";

import React, { useEffect, useState } from "react";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import $ from "jquery";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";

const SipCalculatorOnline = () => {
  function formatCurrency(value: any) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updateNumberValue(inputId: any, outputId: any) {
    const inputElement = document.getElementById(
      inputId
    ) as HTMLInputElement | null;
    const outputElement = document.getElementById(
      outputId
    ) as HTMLInputElement | null;
    if (inputElement && outputElement) {
      outputElement.value = (inputElement as HTMLInputElement).value;
    }
  }

  function updateRangeValue(rangeId: any, outputId: any) {
    const rangeElement = document.getElementById(
      rangeId
    ) as HTMLInputElement | null;
    const outputElement = document.getElementById(
      outputId
    ) as HTMLInputElement | null;
    if (rangeElement && outputElement) {
      outputElement.value = rangeElement.value;
    }
  }

  function calculateSIP() {
    const durationElement = document.getElementById("duration-value");
    const returnElement = document.getElementById("return-value");
    const sipElement = document.getElementById("sip-value");

    if (durationElement && returnElement && sipElement) {
      const duration = parseInt((durationElement as HTMLInputElement).value);
      const returnRate = parseFloat((returnElement as HTMLInputElement).value);
      const monthlySIP = parseFloat((sipElement as HTMLInputElement).value);

      const monthlyRate = returnRate / 1200;
      const totalMonths = duration * 12;
      const maturityAmount =
        monthlySIP *
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
        (1 + monthlyRate);
      const totalInvestedAmount = monthlySIP * totalMonths;
      const returns = maturityAmount - totalInvestedAmount;

      const maturityAmountElement = document.getElementById("maturity-amount");
      const returnsElement = document.getElementById("returns");
      const investedAmountElement = document.getElementById("invested-amount");

      if (maturityAmountElement && returnsElement && investedAmountElement) {
        maturityAmountElement.innerHTML =
          "₹ " + formatCurrency(maturityAmount.toFixed(2));
        returnsElement.innerHTML = "₹ " + formatCurrency(returns.toFixed(2));
        investedAmountElement.innerHTML =
          "₹ " + formatCurrency(totalInvestedAmount.toFixed(2));
      }

      const chartData = {
        datasets: [
          {
            data: [totalInvestedAmount, returns],
            backgroundColor: ["#ff8024", "#ffb37c"],
            borderColor: ["#000"],
            borderWidth: 1,
          },
        ],
        labels: ["Invested Amount", "Returns"],
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
      };

      setChartData(chartData);
      setChartOptions(chartOptions);
    }
  }

  function generateDefaultValues() {
    const durationElement = document.getElementById(
      "duration-value"
    ) as HTMLInputElement | null;
    const returnElement = document.getElementById(
      "return-value"
    ) as HTMLInputElement | null;
    const sipElement = document.getElementById(
      "sip-value"
    ) as HTMLInputElement | null;

    if (durationElement && returnElement && sipElement) {
      durationElement.value = "6";
      returnElement.value = "12";
      sipElement.value = "1000";

      calculateSIP();
    }
  }

  useEffect(() => {
    generateDefaultValues();
  }, []);

  const [chartData, setChartData] = useState<any>({
    datasets: [
      {
        data: [],
        backgroundColor: ["#ff8024", "#ffb37c"],
        borderColor: ["#000"],
        borderWidth: 1,
      },
    ],
    labels: ["Invested Amount", "Returns"],
  });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    $(document).ready(function () {
      $(".accordion a").click(function () {
        $(this).toggleClass("active");
        $(this).next(".content").slideToggle(400);
      });
    });
  }, []);

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
        "SIP calculator online",
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm(event);
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
          <div>
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
                    <h2>Calculate SIP with our sip calculator</h2>
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
            <div className="row">
              <div className="col-md-7">
                <div className="Services d-none d-md-block">
                  <h2 className="mb-4">
                    <b>SIP Calculator</b>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 sip-calculator inner-service">
                <div className="row">
                  <div className="col-md-7 px-0">
                    <div className="p-4">
                      <div className="Services d-block d-md-none">
                        <h2 className="mb-4">
                          <b>SIP Calculator</b>
                        </h2>
                      </div>
                      <div className="form-group">
                        <div className="d-flex align-items-center justify-content-between">
                          <h4>Investment Duration :-</h4>
                          <div className="range-side range-side-2">
                            <input
                              type="text"
                              id="duration-value"
                              className="form-control position-relative"
                              min="1"
                              max="30"
                              step="1"
                            />
                            <span>year</span>
                          </div>
                        </div>
                        <input
                          type="range"
                          id="investment-duration"
                          className="form-control-range slider"
                          min="1"
                          max="30"
                          step="1"
                          onChange={() =>
                            updateRangeValue(
                              "investment-duration",
                              "duration-value"
                            )
                          }
                        />
                      </div>
                      <div className="form-group mt-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <h4>Expected Return Rate (p.a) :-</h4>
                          <div className="range-side range-side-1">
                            <input
                              type="text"
                              id="return-value"
                              className="form-control position-relative"
                              min="1"
                              max="30"
                              step="1"
                            />
                            <span>%</span>
                          </div>
                        </div>
                        <input
                          type="range"
                          id="expected-return"
                          className="form-control-range slider"
                          min="1"
                          max="30"
                          step="1"
                          onChange={() =>
                            updateRangeValue("expected-return", "return-value")
                          }
                        />
                      </div>
                      <div className="form-group mt-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <h4>Monthly SIP Range:</h4>
                          <div className="range-side">
                            <input
                              type="text"
                              id="sip-value"
                              className="form-control position-relative"
                              min="500"
                              max="1000000"
                              step="500"
                            />
                            <span>₹</span>
                          </div>
                        </div>
                        <input
                          type="range"
                          id="monthly-sip"
                          className="form-control-range slider"
                          min="500"
                          max="1000000"
                          step="500"
                          onChange={() =>
                            updateRangeValue("monthly-sip", "sip-value")
                          }
                        />
                      </div>

                      <div className="carded-content mt-4 pt-3">
                        <a onClick={calculateSIP} className="btn">
                          Calculate
                        </a>
                      </div>
                      <div className="result row mt-4">
                        <div className="col-md-6">
                          <h5>Invested Amount:</h5>
                          <h4 id="invested-amount">
                            <b>₹10,00,00</b>
                          </h4>
                        </div>
                        <div className="col-md-6">
                          <h5>Returns :-</h5>
                          <h4 id="returns">
                            <b>₹5,00,000</b>
                          </h4>
                        </div>
                        <div className="col-md-12 mt-3">
                          <h5>Maturity Amount :-</h5>
                          <h4 id="maturity-amount">
                            <b>₹10,000,00</b>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-5 px-0"
                    style={{ backgroundColor: "#080808" }}
                  >
                    <div className="sip-chart-data p-4 text-center">
                      <div>
                        {/* <canvas id="chart"></canvas> */}
                        <Doughnut
                          data={chartData}
                          options={chartOptions}
                          style={{ maxHeight: "400px", width: "100%" }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="mt-3">
                          <a
                            href="tel:6354051487"
                            className="btn invest-btn text-white"
                          >
                            Invest Now
                          </a>
                        </div>
                        <p className="mt-4">
                          Check out our other Finance service{" "}
                          <a
                            href="/services/investment-management-services"
                            target="_blank"
                          >
                            here
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 px-0 px-md-3 pt-4 pt-md-0">
                <div className="how-to-use inner-service p-4">
                  <h4>How to Use</h4>
                  <ul className="mt-3 mb-5">
                    <li>
                      <i className="fas fa-check-circle"></i> Use the button for
                      selecting the SIP investment
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Use the slider for
                      selecting investment amount
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Select the tenure
                      in years or months using slider
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Use the slider for
                      selecting expected rate of Interest
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Recalculate your
                      SIP by changing the input sliders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <h2>Frequently Asked Questions</h2>

            <div className="accordion">
              <div className="accordion-item">
                <a>1. What is an SIP calculator?</a>
                <div className="content">
                  <p>
                    An SIP calculator is a tool that helps investors estimate
                    the potential returns on their mutual fund investments made
                    through a systematic investment plan.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <a>2. How does an SIP calculator work?</a>
                <div className="content">
                  <p>
                    An SIP calculator uses the investment amount, tenure,
                    expected rate of return, and frequency of investment to
                    calculate the future value of investments and projected
                    returns.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <a>3. Why should I use an SIP calculator?</a>
                <div className="content">
                  <p>
                    {" "}
                    Using an SIP calculator allows you to determine the
                    potential growth of your investments, make informed
                    investment decisions, and set realistic financial goals.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <a>4. How accurate are SIP calculators?</a>
                <div className="content">
                  <p>
                    SIP calculators provide estimates based on the inputs
                    provided. While they are a useful tool, remember that they
                    rely on assumptions and historical data, and actual returns
                    may vary.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <a>
                  5. Are SIP calculators only for individuals or can businesses
                  use them too?
                </a>
                <div className="content">
                  <p>
                    {" "}
                    SIP calculators can be used by both individuals and
                    businesses to evaluate the potential returns on their mutual
                    fund investments.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <a>6. Are SIP calculators available online?</a>
                <div className="content">
                  <p>
                    Yes, there are several online platforms and financial
                    websites that provide SIP calculators free of charge, making
                    them easily accessible to investors.
                  </p>
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
                    <p>{`Yashpal Chavada is a highly experienced financial advisor and a renowned professor of
                                            stock market trading courses. With years of expertise in investment management, Mr.
                                            Chavada provides comprehensive financial planning services, including estate
                                            planning and investment strategies that align with clients' goals and risk
                                            tolerance and helping
                                            clients achieve their financial objectives by providing customized investment
                                            solutions and expert guidance.`}</p>
                  </div>
                </div>
                <div className="col-md-5 text-center order-1 order-md-2">
                  <div>
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
                  <div>
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
                    <a href="/gautam_jani_official" className="select-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="margintop">
                <div className="container-fluid pb-md-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                                <div className="Services d-none d-md-block">
                                    <h2 className="mb-1">AtoZ finances Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-md-2">
                            <div className="d-none d-md-block">
                                <Slider {...settings}>
                                    <div className="col-12">
                                        <div className="card-box card-style-1 text-start">
                                            <div className="inner-service">
                                                <div className=""><img src="/images/atoz/introduction-img.png" style={{ width: '95%' }}
                                                    alt="Strategic Consulting" /></div>
                                                <div className="content-service">
                                                    <h4>Investment planning</h4>
                                                    <p className="">
                                                        Our team of experienced financial advisors will work
                                                        with you to create a personalised investment plan that
                                                        aligns with
                                                        {showMore ? (
                                                            <span style={{ fontSize: '17px', fontWeight: '100' }}> your short term and long-term financial goals.
                                                                We'll provide you with expert advice on where to invest
                                                                your money, and help you navigate the complex world of
                                                                investing.We trade on behalf of client in their account on profit
                                                                sharing model.
                                                                <br />
                                                                <b>NOTE : Client can expect around 2 to 2.5% per month </b></span>
                                                        ) : (
                                                            <span id="dotsx" style={{ fontSize: '17px', fontWeight: '100' }}>...</span>
                                                        )}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span onClick={toggleReadMore} id="myBtnn" style={{ cursor: 'pointer' }}
                                                            className="about-btn moreless-button">
                                                            {showMore ? 'Read less' : 'Read more'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-box card-style-1 text-start">
                                            <div className="inner-service">
                                                <div className=""><img src="/images/atoz/Retirement.png" className="w-75"
                                                    alt="Retirement Planning" /></div>
                                                <div className="content-service">
                                                    <h4>Retirement Planning</h4>
                                                    <p className="mb-0">
                                                        We'll help you plan for a comfortable retirement by
                                                        creating a customised
                                                        {showMoreI ? (
                                                            <span style={{ fontSize: '17px', fontWeight: '100' }}> retirement plan that takes
                                                                into account your current
                                                                financial situation and future goals.
                                                                We'll help you identify the best retirement savings options
                                                                and create a plan to maximise your retirement income.</span>
                                                        ) : (
                                                            <span id="dotsx" style={{ fontSize: '17px', fontWeight: '100' }}>...</span>
                                                        )}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span onClick={toggleReadMoreI} id="myBtnn" style={{ cursor: 'pointer' }}
                                                            className="about-btn moreless-button">
                                                            {showMoreI ? 'Read less' : 'Read more'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-box card-style-1 text-start">
                                            <div className="inner-service">
                                                <div className="service-width"><img src="/images/atoz/tax-planning.png"
                                                    className="m-auto" alt="Financial Consulting" /></div>
                                                <div className="content-service">
                                                    <h4>Tax Planning</h4>
                                                    <p className="">
                                                        Our tax planning services will help you minimise
                                                        your tax liability and maximise your after-tax income.
                                                        {showMoreII ? (
                                                            <span style={{ fontSize: '17px', fontWeight: '100' }}> We'll work with you to identify tax-saving strategies that
                                                                align with your financial goals and help you stay compliant
                                                                with tax laws.</span>
                                                        ) : (
                                                            <span id="dotsx" style={{ fontSize: '17px', fontWeight: '100' }}>...</span>
                                                        )}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span onClick={toggleReadMoreII} id="myBtnn" style={{ cursor: 'pointer' }}
                                                            className="about-btn moreless-button">
                                                            {showMoreII ? 'Read less' : 'Read more'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-box card-style-1 text-start">
                                            <div className="inner-service">
                                                <div className=""><img src="/images/atoz/estate-planing.png" width="120%"
                                                    className="m-auto" alt="Marketing Consulting" /></div>
                                                <div className="content-service">
                                                    <h4>Estate Planning</h4>
                                                    <p className="">
                                                        Our estate planning services will help you protect
                                                        your assets and ensure they are distributed according to
                                                        {showMoreIII ? (
                                                            <span style={{ fontSize: '17px', fontWeight: '100' }}> your wishes after you pass away. We'll work with you to
                                                                create a comprehensive estate plan that addresses all your
                                                                concerns and helps you avoid costly mistakes</span>
                                                        ) : (
                                                            <span id="dotsx" style={{ fontSize: '17px', fontWeight: '100' }}>...</span>
                                                        )}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span onClick={toggleReadMoreIII} id="myBtnn" style={{ cursor: 'pointer' }}
                                                            className="about-btn moreless-button">
                                                            {showMoreIII ? 'Read less' : 'Read more'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-box card-style-1 text-start">
                                            <div className="inner-service">
                                                <div className=""><img src="/images/atoz/insurse-planing.png" style={{ width: '70%' }}
                                                    className="m-auto" alt="Financial Consulting" /></div>
                                                <div className="content-service">
                                                    <h4>Insurance Planning</h4>
                                                    <p className="">
                                                        We'll help you identify the right insurance products
                                                        to protect your assets, income, and family. Our team of
                                                        {showMoreIIII ? (
                                                            <span style={{ fontSize: '17px', fontWeight: '100' }}> insurance experts will provide you with advice on the best
                                                                insurance options and help you understand the benefits
                                                                and limitations of each product.</span>
                                                        ) : (
                                                            <span id="dotsx" style={{ fontSize: '17px', fontWeight: '100' }}>...</span>
                                                        )}
                                                    </p>
                                                    <div className="mt-2">
                                                        <span onClick={toggleReadMoreIIII} id="myBtnn" style={{ cursor: 'pointer' }}
                                                            className="about-btn moreless-button">
                                                            {showMoreIIII ? 'Read less' : 'Read more'}</span>
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
                                            <span style={{ fontSize: '16px' }}>What we Provide ?</span>
                                            <h2 className="w-100">AtoZ finances Services</h2>
                                        </div>
                                        <p>At AtoZ finances, we offer a wide range of Finance Services to help
                                            you to achieve their goals. Our services include:</p>
                                        <div className="details-line compnay-selects mt-3">
                                            <details open>
                                                <summary>INVESTMENT PLANNING</summary>
                                                <div className="compnay-content content-1">
                                                    <h5>Our team of experienced financial advisors will work
                                                        with you to create a personalised investment plan that
                                                        aligns with your short term and long-term financial goals.
                                                        We'll provide you with expert advice on where to invest
                                                        your money, and help you navigate the complex world of
                                                        investing.
                                                        We trade on behalf of client in their account on profit
                                                        sharing model.</h5>
                                                    <p>NOTE : Client can expect around 2 to 2.5% per month</p>
                                                </div>
                                            </details>
                                            <details>
                                                <summary>RETIREMENT PLANNING</summary>
                                                <div className="compnay-content content-1">
                                                    <h5>We'll help you plan for a comfortable retirement by
                                                        creating a customised retirement plan that takes into
                                                        account your current financial situation and future goals.
                                                        We'll help you identify the best retirement savings options
                                                        and create a plan to maximise your retirement income.</h5>
                                                </div>
                                            </details>
                                            <details>
                                                <summary>TAX PLANNING</summary>
                                                <div className="compnay-content content-1">
                                                    <h5>Our tax planning services will help you minimise
                                                        your tax liability and maximise your after-tax income.
                                                        We'll work with you to identify tax-saving strategies that
                                                        align with your financial goals and help you stay compliant
                                                        with tax laws.</h5>
                                                </div>
                                            </details>
                                            <details>
                                                <summary>ESTATE PLANNING</summary>
                                                <div className="compnay-content content-1">
                                                    <h5>Our estate planning services will help you protect
                                                        your assets and ensure they are distributed according to
                                                        your wishes after you pass away. We'll work with you to
                                                        create a comprehensive estate plan that addresses all your
                                                        concerns and helps you avoid costly mistakes.</h5>
                                                </div>
                                            </details>
                                            <details>
                                                <summary>INSURANCE PLANNING</summary>
                                                <div className="compnay-content content-1">
                                                    <h5>We'll help you identify the right insurance products
                                                        to protect your assets, income, and family. Our team of
                                                        insurance experts will provide you with advice on the best
                                                        insurance options and help you understand the benefits
                                                        and limitations of each product.</h5>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
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
                    <p>{`"I had an excellent experience with A2Z Finance! They provided the best investment
                                            planning services in Surat, and their team was knowledgeable and helpful. Highly
                                            recommend!`}</p>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-6.webp"
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
                        data-src="/images/atoz/review-client.webp"
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
                    {`Are you interested in investing in the stock market but feel overwhelmed by the
                                        complexities of the financial world? Don't worry, our Stock Market Course is here to
                                        empower you with the knowledge and skills you need to invest with confidence. In this
                                        article, we will provide a comprehensive overview of our Stock Market Course, covering
                                        various topics such as technical...`}
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <a
                    href="/blog/invest-with-confidence-empower-yourself-with-our-stock-market-course"
                    className="btn"
                  >
                    Read More
                  </a>
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
                <div>
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
                  <a
                    href="/blog/roadmap-to-financial-freedom-strategies-for-achieving-personal-prosperity"
                    target="_blank"
                    className="btn"
                  >
                    Read More
                  </a>
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
};

export default SipCalculatorOnline;
