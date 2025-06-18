// eslint-disable-next-line @next/next/no-img-element
"use client";

import React, { useState } from "react";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import { submitForm } from "@/utils/submitForm";
import { Link } from "react-scroll";
import Swal from "sweetalert2";

export default function FinancialAdvisoryServicesForSecureFuture() {
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
        "Financial advisory services for a secure future",
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
              style={{
                backgroundImage: "url(/images/mix-img/atoz-finance.webp)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1>
                      <span>AtoZ Finance Service</span>
                    </h1>
                    <h2>We Grow Together with Financial Advisory Services</h2>
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="btn-readmore"
                    >
                      Know More
                    </a>
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
                  <div className="my-md-0 my-4">
                    <span> AtoZ finances Services </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-4">
              <div className="col-md-6">
                <div>
                  <div className="video-img">
                    <div className="ply1 black-before">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        alt="client journey"
                        src="/images/mix-img/investment-plan.webp"
                      />
                      <div className="video-btn">
                        <a
                          href="https://youtu.be/QTfmyri__44"
                          data-flashy-type="video"
                          id="video-btn"
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
              <div className="col-md-6">
                <div className="coach-box">
                  <h2 className="w-100">
                    Invest in your future with our financial advisory services
                  </h2>
                </div>
                <div className="approach">
                  <p className="mb-0">
                    {`At A2Z Finance, we understand that managing your finances can be overwhelming,
                                        especially when you're trying to plan for the future. That's why we offer a range of
                                        financial advisory services to help you achieve your financial goals and secure your
                                        financial future.
                                        We help on following services,`}
                  </p>
                  <ul className="mt-md-2 mt-3">
                    <li>1. 3% to 4% Monthly Returns</li>
                    <li>2. Insurance Planning</li>
                    <li>3. Investment planning </li>
                    <li>4. Retirement Planning</li>
                    <li>5. Tax Planning</li>
                    <li>6. Estate Planning</li>
                  </ul>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <Link to="/services/sip_calculator_online" className="btn">
                      Calculate SIP
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
            <div className="col-md-12 text-center">
              <div className="reasons-box">
                <h4>
                  <span style={{ color: "#ff8024" }}>Our </span> Services
                </h4>
                <div className="gcs-line"></div>
              </div>
            </div>
            <div className="row mt-md-5 mt-4">
              <div className="col-md-6 order-2 order-md-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/monthly-returns.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6  order-md-2 order-1 d-md-block d-none">
                <div className="coach-box">
                  <h2 className="w-100">
                    Mastering Option Trading: Unlocking 3% to 4% Monthly Returns
                    with Ease
                  </h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/monthly-returns.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="d-md-block d-none">
                    At our institution, we implement highly effective option
                    trading strategies to empower our students. With our
                    structured and reliable approach, they can effortlessly
                    achieve consistent monthly returns of 3% to 4%. The
                    impressive results speak for themselves, providing our
                    students with financial confidence and success.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="/services/investment-management-services"
                      className="btn"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  order-md-2 order-1 d-lg-none">
                <div className="coach-box">
                  <h2 className="w-100">
                    Mastering Option Trading: Unlocking 3% to 4% Monthly Returns
                    with Ease
                  </h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/monthly-returns.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="mb-0">
                    At our institution, we implement highly effective option
                    trading strategies to empower our students. With our
                    structured and reliable approach, they can effortlessly
                    achieve consistent monthly returns of 3% to 4%. The
                    impressive results speak for themselves, providing our
                    students with financial confidence and success.
                  </p>
                  <div className="mt-3 d-block d-md-none">
                    <div className="d-flex">
                      <a
                        href="/services/investment-management-services"
                        className="btn"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-5 mt-4">
              <div className="coach-box d-block d-md-none">
                <h2 className="w-100">Insurance Planning</h2>
              </div>
              <div className="col-md-6 order-lg-2">
                <div>
                  <img
                    src="/images/mix-img/insurance-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Insurance Planning"
                  />
                </div>
              </div>
              <div className="col-md-6 order-lg-1">
                <div className="coach-box d-none d-md-block">
                  <h2 className="w-100">Insurance Planning</h2>
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="d-md-block d-none">
                    At a2z finance, we understand that insurance planning is an
                    integral part of your overall financial planning strategy.
                    With our professional expertise and personalized approach,
                    we help you identify the types and amounts of insurance
                    coverage you need to protect yourself, your family, and your
                    assets. We work closely with you to determine your unique
                    insurance needs and help you select the right policies from
                    our trusted partners. Our commitment to providing reliable
                    financial planning services ensures that you have peace of
                    mind knowing that you are adequately covered for any
                    unexpected events. Contact us today to learn more about our
                    insurance planning services.for Information
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-lg-1 d-block d-md-none">
                  <div className="coach-box d-none d-md-block">
                    <h2 className="w-100">Insurance Planning</h2>
                  </div>
                  <div className="approach mt-3 mt-md-0 ">
                    <p className="mb-0 mt-3">
                      At a2z finance, we understand that insurance planning is
                      an integral part of your overall financial planning
                      strategy.
                      {showMore ? (
                        <span
                          style={{
                            color: "#b4b4b4",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          {" "}
                          With our professional expertise and personalized
                          approach, we help you identify the types and amounts
                          of insurance coverage you need to protect yourself,
                          your family, and your assets. We work closely with you
                          to determine your unique insurance needs and help you
                          select the right policies from our trusted partners.
                          Our commitment to providing reliable financial
                          planning services ensures that you have peace of mind
                          knowing that you are adequately covered for any
                          unexpected events. Contact us today to learn more
                          about our insurance planning services.
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
                          href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
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
        </div>
      </section>
      <section className="mt-md-4 mt-4">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="coach-box d-block d-md-none">
                  <h2 className="w-100">Investment planning</h2>
                </div>
                <div>
                  <img
                    src="/images/mix-img/Investment-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Investment planning"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-box d-none d-md-block">
                  <h2 className="w-100">Investment planning</h2>
                </div>
                <div className="approach mt-3 d-md-block d-none mt-md-0">
                  <p>
                    At A2Z Finance, we understand the importance of investment
                    planning in achieving your financial goals. Our financial
                    planning services are designed to help you make informed
                    investment decisions that align with your long-term
                    financial objectives. We work with you to assess your risk
                    tolerance, investment preferences, and financial situation
                    to develop a personalized investment plan. Our team of
                    experienced financial advisors provides ongoing support to
                    help you monitor and adjust your investments as needed. With
                    A2Z Finance, you can feel confident that your investments
                    are well-planned and aligned with your financial goals.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="coach-box d-none d-md-block">
                  <h2 className="w-100">Investment Planning</h2>
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="mb-0 mt-3">
                    At A2Z Finance, we understand the importance of investment
                    planning in achieving your financial goals. Our financial
                    planning services are designed to help you make informed
                    investment decisions that align with your long-term
                    financial objectives.
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        We work with you to assess your risk tolerance,
                        investment preferences, and financial situation to
                        develop a personalized investment plan. Our team of
                        experienced financial advisors provides ongoing support
                        to help you monitor and adjust your investments as
                        needed. With A2Z Finance, you can feel confident that
                        your investments are well-planned and aligned with your
                        financial goals.
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
                          href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                          className="btn ml-3"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </p>
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
              <div className="col-md-6 order-2 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/Retirement-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Retirement Planning"
                  />
                </div>
              </div>
              <div className="col-md-6 order-1 d-md-block d-none">
                <div className="coach-box">
                  <h2 className="w-100">Retirement Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/Retirement-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Retirement Planning"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="d-md-block d-none">
                    Retirement planning can be a daunting task, but with the
                    right financial planning services, you can secure your
                    financial future with ease. At a2z Finance, we offer
                    professional retirement planning services that cater to your
                    unique needs and goals. Our team of experienced financial
                    planners will work with you to create a comprehensive
                    retirement plan that maximizes your savings and minimizes
                    your financial risks. From managing your investments to
                    setting up a retirement account, we provide personalized
                    solutions to ensure a comfortable retirement. With a2z
                    Finance, you can rest assured that your retirement planning
                    needs are in good hands.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-lg-1 d-block d-md-none">
                <div className="coach-box">
                  <h2 className="w-100">Retirement Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/Retirement-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Retirement Planning"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="mb-0">
                    Retirement planning can be a daunting task, but with the
                    right financial planning services, you can secure your
                    financial future with ease. At a2z Finance, we offer
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        professional retirement planning services that cater to
                        your unique needs and goals. Our team of experienced
                        financial planners will work with you to create a
                        comprehensive retirement plan that maximizes your
                        savings and minimizes your financial risks. From
                        managing your investments to setting up a retirement
                        account, we provide personalized solutions to ensure a
                        comfortable retirement. With a2z Finance, you can rest
                        assured that your retirement planning needs are in good
                        hands.{" "}
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
                          href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                          className="btn ml-3"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </p>
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
              <div className="col-md-6 order-2 order-md-1 d-none d-md-block">
                <div>
                  <img
                    src="/images/mix-img/estate-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6  order-md-2 order-1  d-md-block d-none">
                <div className="coach-box">
                  <h2 className="w-100">Estate Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/estate-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="d-md-block d-none">
                    At a2z finance, we understand the importance of tax planning
                    in your financial journey. Our team of experienced financial
                    planners are here to help you navigate the complex world of
                    tax laws and regulations, and identify opportunities to
                    minimize your tax liability. We work closely with you to
                    understand your financial goals and create a customized tax
                    plan that suits your unique needs. Our services include tax
                    preparation, tax forecasting, and strategic tax planning.
                    With a2z finance, you can feel confident that your taxes are
                    being handled with care and expertise, allowing you to focus
                    on achieving your financial objectives.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  order-md-2 order-1 d-lg-none">
                <div className="coach-box">
                  <h2 className="w-100">Estate Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/estate-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0 ">
                  <p className="mb-0">
                    At a2z finance, we understand the importance of tax planning
                    in your financial journey. Our team of experienced financial
                    planners are here to help you navigate the
                  </p>
                  {showMore ? (
                    <span
                      style={{
                        color: "#b4b4b4",
                        fontSize: "17px",
                        fontWeight: "100",
                      }}
                    >
                      {" "}
                      At a2z finance, we understand the importance of tax
                      planning in your financial journey. Our team of
                      experienced financial planners are here to help you
                      navigate the complex world of tax laws and regulations,
                      and identify opportunities to minimize your tax liability.
                      We work closely with you to understand your financial
                      goals and create a customized tax plan that suits your
                      unique needs. Our services include tax preparation, tax
                      forecasting, and strategic tax planning. With a2z finance,
                      you can feel confident that your taxes are being handled
                      with care and expertise, allowing you to focus on
                      achieving your financial objectives.{" "}
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
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
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
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-2 d-none d-md-block ">
                <div>
                  <img
                    src="/images/mix-img/tax-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
              </div>
              <div className="col-md-6  order-md-1 order-1 d-md-block d-none">
                <div className="coach-box">
                  <h2 className="w-100">Tax Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/tax-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="d-md-block d-none">
                    At a2z finance, we understand the importance of estate
                    planning in managing and distributing assets according to
                    our clients' wishes. Our team of specialists works closely
                    with clients to assess their financial situation, identify
                    their goals, and develop customized estate plans to meet
                    their specific needs. We aim to provide peace of mind by
                    minimizing taxes and maximizing wealth transfer. Trust us to
                    help secure your financial future through effective estate
                    planning.
                  </p>
                  <div className="course-price mt-md-3 d-none d-md-block">
                    <a
                      href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
                      className="btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  order-md-1 order-1 d-lg-none">
                <div className="coach-box">
                  <h2 className="w-100">Tax Planning</h2>
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/mix-img/tax-planning.webp"
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Our Approach"
                  />
                </div>
                <div className="approach mt-3 mt-md-0">
                  <p className="mb-0">
                    {`At a2z finance, we understand the importance of estate planning in managing and
                                        distributing assets according to our clients' wishes.`}
                    {showMore ? (
                      <span
                        style={{
                          color: "#b4b4b4",
                          fontSize: "17px",
                          fontWeight: "100",
                        }}
                      >
                        {" "}
                        Our team of specialists works closely with clients to
                        assess their financial situation, identify their goals,
                        and develop customized estate plans to meet their
                        specific needs. We aim to provide peace of mind by
                        minimizing taxes and maximizing wealth transfer. Trust
                        us to help secure your financial future through
                        effective estate planning.
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
                        href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about AtoZ Finance"
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
      <section className="margintop bg-dark pt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12 text-center">
              <div className="reasons-box">
                <h4>
                  <span style={{ color: "#ff8024" }}>Our </span> Clients
                </h4>
                <div className="gcs-line"></div>
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
            <div className="row align-items-center pt-md-5 py-5">
              <div className="col-md-12 mb-md-4">
                <div className="coach-box text-center">
                  <div className="mb-2">
                    <span>Learn Something New</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1 black-before">
                        <img
                          data-src="/images/atoz/mutual-funds.webp"
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
                    <div className="video-content">
                      <h4>Mutual fund sahi hai ?</h4>
                      <a
                        href="https://youtu.be/m_GpoDeW1QU"
                        data-flashy-type="video"
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1 black-before">
                        <img
                          data-src="/images/atoz/market-cap.webp"
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
                    <div className="video-content">
                      <h4>What is Market Cap ?</h4>
                      <a
                        href="https://youtu.be/m_GpoDeW1QU"
                        data-flashy-type="video"
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1 black-before">
                        <img
                          data-src="/images/atoz/candlestick-Chart.webp"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                          src="/images/atoz/candlestick-Chart.webp"
                        />
                        <div className="video-btn">
                          <a
                            href="https://youtube.com/naCd3Bh_a80"
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
                      <h4>what is candlestick Chart?</h4>
                      <a
                        href="https://youtu.be/m_GpoDeW1QU"
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
        </div>
      </section>

      <section className="bg-dark">
        <div className="contianer-fluid py-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box">
                  <span style={{ fontSize: "16px" }}>Latest Blog</span>
                  <h2 className="w-100">
                    Invest with Confidence Empower Yourself with our Stock
                    Market Course
                  </h2>
                </div>
                <div className="agency-design">
                  <div className="d-block d-md-none">
                    <img
                      src="/images/blog/atoz/atoz-main-img.jpg"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <p className="mt-3">
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
                    Contact Us For <br /> More Details
                  </h2>
                </div>
              </div>
              <div className="col-md-1"></div>
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
      </section>

      <Footer />
    </div>
  );
}
