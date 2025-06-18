"use client";
// eslint-disable-next-line @next/next/no-img-element

import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Razorpay from "razorpay";

const RecordedStockMarket = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const toggleReadMoreI = () => {
    setShowMoreI(!showMoreI);
  };

  let HOST = "http://localhost";
  let razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";

  function payment() {
    if (
      localStorage.getItem("GCS_user_authorization") == null ||
      localStorage.getItem("user_info") == null
    ) {
      modalLogin();
    } else {
      var orderId = "";

      $(document).ready(function () {
        var settings = {
          url: HOST + "/create/orderId",
          method: "POST",
          timeout: 0,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            amount: "499",
          }),
        };

        // Create new orderId
        $.ajax(settings).done(function (response) {
          orderId = response.orderId;
          $("#rzp-button1").show();
        });
      });

      const button = document.getElementById("rzp-button1");
      if (button) {
        button.onclick = function (e) {
          var options: any = {
            key: razorpayMerchantId,
            amount: 499 * 100,
            currency: "INR",
            name: "GCS Services",
            description: "Find one",
            image: "https://gcsconsultant.com/images/logos/gcs-logo-normal.png",
            order_id: orderId,
            handler: function (response: {
              razorpay_payment_id: string;
              razorpay_order_id: string;
              razorpay_signature: string;
            }) {
              var verifySettings = {
                url: HOST + "/verifyPayment",
                method: "POST",
                timeout: 0,
                headers: {
                  "Content-Type": "application/json",
                },
                data: JSON.stringify({ response }),
              };

              // Verify payment
              $.ajax(verifySettings).done(function (response) {
                alert(JSON.stringify(response));
                if (response.signatureIsValid) {
                  Swal.fire({
                    icon: "success",
                    title: "Payment verified successfully",
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Payment verification failed",
                  });
                }
              });
            },
            theme: {
              color: "#ff8024",
            },
            notes: {
              item_name: "Recorded Stoke Markate 101 course",
              payment_via: "GCS Company",
            },
          };

          const rzp1: any = new Razorpay(options);
          rzp1.open();
          e.preventDefault();
        };
      }
    }
  }
  return (
    <div>
      <Header />
      <section style={{ marginTop: "120px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className=""
                      data-src="/images/mix-img/Stock-Market-recorded-thumbnail.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src="/images/mix-img/Stock-Market-recorded-thumbnail.webp"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtu.be/UQQz5SgVyaQ"
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
              <div className="col-lg-6 w">
                <div className="tabata d-inline-block">
                  <h1>Stock Market 101 Course (Recorded)</h1>
                </div>
                <div className="mt-2 mb-2 meal">
                  <i
                    className="fas fa-star"
                    id="overall_top_1"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_1"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_2"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_2"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_3"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_3"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_4"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_4"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_5"
                    style={{ color: "#ffbb00" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_5"
                    style={{ display: "none" }}
                  ></i>
                  <span id="span_overall_rating">5.0</span>
                </div>
                <div className="price">
                  <div>
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Recorded
                        Lecture Videos
                      </li>
                      <li>
                        <i className="fas fa-video"></i> Case Study Based
                        Project{" "}
                      </li>
                      <li>
                        <i className="fas fa-credit-card"></i> Receive Your
                        E-certificate{" "}
                      </li>
                      <li>
                        <i className="fas fa-credit-card"></i> Team Chat Support{" "}
                      </li>
                    </ul>
                  </div>
                  <p className="mt-2" style={{ fontSize: "30px" }}>
                    ₹499 + 18%GST
                  </p>
                </div>
                <div className="meal mt-4 d-flex">
                  <a
                    onClick={() => payment()}
                    id="rzp-button1"
                    className="btn ml-3"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-lg-12 px-0 px-md-3">
              <div className="">
                <h2 className="new-h2">Course Info</h2>
              </div>
              <div className="course-p">
                <p>
                  A2Z Finance's stock market 101 course, taught by Mr. Yashpal
                  Chavada, offers beginners a solid foundation in stock market
                  investing. Covering technical analysis, fundamental analysis,
                  options trading, and more, participants gain valuable insights
                  to navigate the dynamic world of stock market investing with
                  confidence.
                </p>
                <div className="mt-md-3">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> INTRODUCTION
                          TO STOCK MARKET INVESTING
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> TECHNICAL
                          ANALYSIS
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> FUNDAMENTAL
                          ANALYSIS
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Price Action
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Swing Trading
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> OPTIONS
                          TRADING
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Options
                          Strategy
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Trading
                          Psychology
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> 3 Trading
                          Setups that works
                        </li>
                      </ul>
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
            <div>
              <div className="col-sm-12 text-center">
                <div className="coach-box mt-4 mb-3">
                  <div className="">
                    <span>Course Included</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-3 ">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/book-material.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/book-material.webp"
                    />
                    <h5 className="mt-3"> Enjoy Book Material</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/study-project.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/study-project.webp"
                    />
                    <h5 className="mt-3">Case Study Based Project</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/recorded-videos.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/recorded-videos.webp"
                    />
                    <h5 className="mt-3">Recorded Lecture Videos</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/e-certificate.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/e-certificate.webp"
                    />
                    <h5 className="mt-3">Receive Your E-certificate</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/team-chat.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/team-chat.webp"
                    />
                    <h5 className="mt-3"> Team Chat Support</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/cashless-payment.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/cashless-payment.webp"
                    />
                    <h5 className="mt-3"> Pay Via The Link</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-md-4 margin-top" style={{ marginTop: "50px" }}>
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
      <section className="py-md-5 py-5 bg-dark">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div className="">
                    <span>Student Review</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-md-3">
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-1.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Daksh Sharma</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      I recently took the stock market trading course offered by
                      A2Z Finance in Surat and it was excellent!
                      {showMore ? (
                        <span
                          style={{
                            color: "#aca8a8",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          {" "}
                          The instructors were knowledgeable and the course was
                          well-structured. It's the best stock market trading
                          course in Surat, highly recommended.
                        </span>
                      ) : (
                        <span
                          id="dotsx"
                          style={{
                            color: "#aca8a8",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          ...
                        </span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-2.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Amir Tarhun</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment mb-md-3">
                    <p>
                      A2Z Finance offers the best stock market trading course in
                      Surat. The course material was comprehensive, and the
                      instructors were highly knowledgeable. Highly recommend!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-3.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Nitin Patel</strong>
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
                      If you're looking for the best stock market trading course
                      in Surat, look no further than A2Z Finance.
                      {showMoreI ? (
                        <span
                          style={{
                            color: "#aca8a8",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          {" "}
                          Mr. Yashpal Chavada, the professor of the course, is
                          highly knowledgeable and provides comprehensive
                          material. I highly recommend this course to anyone
                          looking to learn about stock market trading.
                        </span>
                      ) : (
                        <span
                          id="dotsx"
                          style={{
                            color: "#aca8a8",
                            fontSize: "17px",
                            fontWeight: "100",
                          }}
                        >
                          ...
                        </span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <span
                        onClick={toggleReadMoreI}
                        id="myBtnn"
                        style={{ cursor: "pointer" }}
                        className="about-btn moreless-button"
                      >
                        {showMoreI ? "Read less" : "Read more"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/atoz/review-4.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Rahul Varma</strong>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment mb-md-3">
                    <p>
                      A2Z Finance's stock market trading course in Surat is
                      exceptional! It provides in-depth knowledge and practical
                      experience. Definitely the best course in the city
                    </p>
                  </div>
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

export default RecordedStockMarket;
