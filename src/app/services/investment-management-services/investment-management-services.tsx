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
import ModalVideo from "react-modal-video";
import { submitForm } from "@/utils/submitForm";
import { Link } from "react-scroll";
import Swal from "sweetalert2";

export default function InvestmentManagementServices() {
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
        "Investment management services",
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
      <section
        style={{ marginTop: "100px", borderBottom: "2px solid #d35800" }}
        className="pb-5"
      >
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-md-1">
                <div className="forh">
                  <h1>Dedicated Experts To Manage Your Money</h1>
                </div>
                <div className="describe">
                  <p className="my-0 ml-0">
                    Trust our dedicated experts to expertly manage your money
                    and help you achieve your financial goals with confidence.
                  </p>
                </div>
                <div className="text-center mt-4 mt-md-5 btn-for">
                  <a className="btn mb-3 mb-md-4">Book An expert Call</a>
                  <div>
                    <a
                      onClick={() => openVideoModal("QTfmyri__44")}
                      className="custom btn-forh btn"
                    >
                      <i
                        className="fas fa-play-circle"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-md-2 text-center d-none d-md-block">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className=""
                      data-src="/images/atoz/manage-money.webp"
                      width="100%"
                      style={{ borderRadius: "10px 10px 10px 10px" }}
                      alt="client journey"
                      src="/images/atoz/manage-money.webp"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("QTfmyri__44")}
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
              <div className="col-lg-7 mb-3 order-1 order-md-2 text-center d-block d-md-none">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className="lazy"
                      data-src="/images/atoz/manage-money.webp"
                      width="100%"
                      style={{ borderRadius: "10px 10px 10px 10px" }}
                      alt="AtoZ"
                      src="/images/atoz/manage-money.webp"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtu.be/QTfmyri__44"
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
      </section>
      <section
        className="margintop"
        style={{ borderBottom: "2px solid #d35800" }}
      >
        <div className="container-fluid py-md-5">
          <div className="container mb-md-5">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="profits-text mb-3 mb-md-0 d-block d-md-none">
                  <h2
                    style={{
                      fontSize: "24px",
                      lineHeight: "30px",
                      fontWeight: "700",
                    }}
                  >
                    What good portfolio management looks like
                  </h2>
                </div>
                <div className="coach-box d-none d-md-block">
                  <div className="my-md-0 my-4">
                    <span> What good portfolio management looks like </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-md-4 mb-md-0 mb-5">
              <div className="col-md-4 mt-4">
                <div className="box-atoz">
                  <div>
                    <img
                      src="/images/mix-img/Professional-Advice-1.webp"
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                    />
                  </div>
                  <div className="box-atoz-content pb-md-5">
                    <h4>Dedicated human experts</h4>
                    <p>Available on WhatsApp when you need them</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="box-atoz">
                  <div>
                    <img
                      src="/images/mix-img/Effortless-transactions.webp"
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                    />
                  </div>
                  <div className="box-atoz-content pb-md-5">
                    <h4>Effortless transactions</h4>
                    <p>Execution and rebalancing all taken care of</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="box-atoz">
                  <div>
                    <img
                      src="/images/blog/Analyze_and_Utilize_Data.webp"
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                    />
                  </div>
                  <div className="box-atoz-content pb-md-4">
                    <h4>Migrate existing portfolio</h4>
                    <p>
                      We provide the option to manage your existing investments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="margintop"
        style={{ borderBottom: "2px solid #d35800" }}
        id="profit"
      >
        <div className="container-fluid">
          <div className="container py-md-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="profits-text mb-4 mb-md-0">
                  <h2>Designed to outperform in every market</h2>
                  <p>
                    Unlock your true investment potential with A2Z Finance, the
                    market leader in delivering exceptional results. Our
                    comprehensive suite of services is designed to outperform in
                    any market condition, ensuring maximum return on your
                    investment. Take the first step on your journey to financial
                    success today and join forces with A2Z Finance, your trusted
                    partner in the stock market realm.
                  </p>
                  <div className="mt-4 btn-for w-50 d-none d-md-block">
                    <a className="btn mb-3 mb-md-4">Book An expert Call</a>
                  </div>
                  <div className="mt-4 btn-for d-block d-md-none">
                    <a className="btn mb-3 mb-md-4">Book An expert Call</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-md-0 mb-5">
                <div className="profits-box text-center">
                  <img
                    src="/images/mix-img/profits-details.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="margintop"
        style={{ borderBottom: "2px solid #d35800" }}
      >
        <div className="container-fluid">
          <div className="container pb-5">
            <div className="row align-items-center">
              <div className="col-md-4 order-2 order-md-1">
                <div className="boxxi">
                  <img
                    src="/images/mix-img/expert-call.png"
                    className="img-fluid"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt=""
                  />
                  <div className="text-center px-4 pb-4">
                    <img
                      src="/images/atoz/yashpal-sign.png"
                      alt="sign coach"
                      width="60%"
                      className="mt-md-3 mt-2"
                    />
                    <p className="mt-2">
                      <b>7 years of experience</b>
                    </p>
                  </div>
                </div>
                <div className="mt-4 mt-md-5 btn-for d-block d-md-none">
                  <a className="btn mb-3 mb-md-4">Book An expert Call</a>
                </div>
              </div>
              <div className="col-md-1 d-none d-md-block order-2"></div>
              <div className="col-md-7 order-1 order-md-3">
                <div className="profits-text mb-4">
                  <h2>Get a call back from our expert team</h2>
                  <p>
                    Take the guesswork out of your investment strategy with A2Z{" "}
                    {`Finance's`} expert team by your side. Our knowledgeable
                    professionals are ready to provide you with personalized
                    guidance tailored to your unique financial goals. Experience
                    the advantage of working with industry-leading experts and
                    unlock your full investment potential. Request a call back
                    from our team today and embark on a journey towards
                    financial success.
                  </p>
                </div>
                <div className="mt-4 btn-for d-none d-md-block">
                  <a className="btn mb-3 mb-md-4 w-50">Book An expert Call</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pt-5">
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
                          alt=""
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
                      I had an excellent experience with A2Z Finance! They
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
                          className="img-fluid"
                          alt=""
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
                        className=""
                        data-src="/images/atoz/review-client.webp"
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        alt="client journey"
                        src="/images/atoz/review-client.webp"
                      />
                      <div className="video-btn">
                        <a
                          onClick={() => openVideoModal("eNftd_fbBOo")}
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
                      onClick={() => openVideoModal("eNftd_fbBOo")}
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
                          className=""
                          data-src="/images/atoz/mutual-funds.webp"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                          src="/images/atoz/mutual-funds.webp"
                        />
                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("f48n1lP6KC4")}
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
                        onClick={() => openVideoModal("m_GpoDeW1QU")}
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
                          className=""
                          data-src="/images/atoz/market-cap.webp"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                          src="/images/atoz/market-cap.webp"
                        />
                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("ZIijyDf5y0c")}
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
                        onClick={() => openVideoModal("m_GpoDeW1QU")}
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
                          className=""
                          data-src="/images/atoz/candlestick-Chart.webp"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                          src="/images/atoz/candlestick-Chart.webp"
                        />
                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("naCd3Bh_a80")}
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
                        onClick={() => openVideoModal("m_GpoDeW1QU")}
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
                    Are you interested in investing in the stock market but feel
                    overwhelmed by the complexities of the financial world?{" "}
                    {`Don't`} worry, our Stock Market Course is here to empower
                    you with the knowledge and skills you need to invest with
                    confidence. In this article, we will provide a comprehensive
                    overview of our Stock Market Course, covering various topics
                    such as technical...
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <Link
                    to="/blog/invest-with-confidence-empower-yourself-with-our-stock-market-course"
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
                    to="../blog/roadmap-to-financial-freedom-strategies-for-achieving-personal-prosperity"
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
