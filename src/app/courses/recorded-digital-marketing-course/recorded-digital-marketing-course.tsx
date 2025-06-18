"use client";
// eslint-disable-next-line @next/next/no-img-element

import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Razorpay from "razorpay";

const RecordedDigitalMarketingCourse = () => {
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
              item_name: "Recorded Digital Marketing Course",
              payment_via: "GCS Company",
            },
          };

          var rzp1: any = new Razorpay(options);
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
            <div className="row resip">
              <div className="col-lg-7">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      className="lazy"
                      data-src="/images/mix-img/digital-marketing-recorded-thumbnail.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src="/images/mix-img/digital-marketing-recorded-thumbnail.webp"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtu.be/bVL9zT_H8vI"
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
              <div className="col-lg-5 w">
                <div className="tabata d-inline-block">
                  <h1>Digital Marketing Course (Recorded)</h1>
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
                    ₹ 499 + 18%GST
                  </p>
                </div>
                <div className="meal d-flex mt-3">
                  <a onClick={payment} id="rzp-button1" className="btn ml-3">
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
                  Digital Marketing Is The Process Of Promoting Products Or
                  Services Using Digital Channels, Such As The Internet, Social
                  Media, Search Engines, Mobile Devices, And Email. The Goal Of
                  Digital Marketing Is To Reach And Engage Customers Where They
                  Spend Most Of Their Time, Which Is Increasingly Online.Some Of
                  The Key Concepts And Techniques Covered In A Digital Marketing
                  Course.
                </p>
                <div className="mt-md-3">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Best Graphic
                          Designing Tool- Canva Tutorial
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> 360 Degree
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Guerila
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Facebook
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Instagram
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Linkdin
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Youtube
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Twitter
                          Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Promote Your
                          Products And Services
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Target
                          Potential Audience
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Conversion
                          Campaign
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Video Editing
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Domin Hosting
                          & Web Hosting
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Application
                          Download Ads
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Analyze Ad
                          Performance
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Google Ads
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Create Logo
                          For Frees
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Google
                          Analytics
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> SEO(Search
                          Engine Optimization)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> How To Develop
                          Funnel Increase Revenue
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>{" "}
                          Email/WhatsApp/SMS Marketing
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Market
                          Research & Analysis
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Blog Vs Vlog -
                          Points & Clear Differnces
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Influencer
                          Marketing & Affiliate Marketing
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
            <div className="margin-top" style={{ marginTop: "50px" }}>
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
                      className="lazy"
                      data-src="/images/icons/book-material.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> Enjoy E-Book Material</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 pt-5 pt-4 imgty text-center">
                    <img
                      className="lazy"
                      data-src="/images/icons/study-project.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-4">Give Exam And Project Over App</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className="lazy"
                      data-src="/images/icons/recorded-videos.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3">Recorded Lecture Videos</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className="lazy"
                      data-src="/images/icons/e-certificate.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3">Receive Your E-certificate</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className="lazy"
                      data-src="/images/icons/team-chat.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3"> Team Chat Support</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className="lazy"
                      data-src="/images/icons/cashless-payment.webp"
                      alt=""
                      width="20%"
                    />
                    <h5 className="mt-3">Pay Via The Link</h5>
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
                    src="/images/certificate/fitIT-certificate.jpeg"
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
            <div className="row mt-md-5">
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src="/images/fitit/divyesh-patel.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Divyesh Patel</strong>
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
                      It is I Divyesh Patel who started the journey of digital
                      marketing at the time of covid-19 because I didn't get
                      enough{" "}
                    </p>
                    <p className="moretext4">
                      clients due to the lockdown. I was from the non-technical
                      field so initially capturing all this information was very
                      difficult. Now I got 3-4 clients each week from google
                      location, and 2-3 from Instagram and I also set an online
                      appointment segment so anyone can book my appointment as
                      per my preferred time and place. I recommend this course
                      to each and every person who wants to grow in his career
                      and especially belongs to the health and fitness industry.
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        href="javascript:void(0);"
                        className="about-btn moreless-button4"
                      >
                        Read more
                      </a>
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
                          src="/images/fitit/debug-review.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Desai Shubham</strong>
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
                      Helpful guidance I would like to thank you for the helpful
                      guidance provided by the Anirudh sir. I am happy with my{" "}
                    </p>
                    <p className="moretext3">
                      tutor who is very efficient and shared his knowledge and
                      experience with me.
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        href="javascript:void(0);"
                        className="about-btn moreless-button3"
                      >
                        Read more
                      </a>
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
                          src="/images/fitit/debug-review-3.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Harsh bhootra</strong>
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
                      One of the BEST institute. Lots to learn from the
                      professional coach ANIRUDH KHURANA. This place offers more
                      than expected.{" "}
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
                          src="/images/fitit/debug-review-2.webp"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-user">
                        <strong>Aditya Jaiswal</strong>
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
                      Best place to upgrade and learn new skills to excel in
                      Software Industry. Highly recommended for exponential
                      growth. 💯
                    </p>
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
                  <div className="">
                    <span>Our Alumini</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              <div
                id="owl-review-1"
                className="owl-carousel owl-theme mb-md-5 mt-md-3"
              >
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/fgiit/new-1.2.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cpt-certi-6.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cnc-certi-4.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cnc-certi-7.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none pb-5 py-md-0">
              <div id="owl-review-2" className="owl-carousel owl-theme mb-5">
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/fgiit/new-1.2.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cpt-certi-6.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cnc-certi-4.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item m-3">
                  <div className="review-box">
                    <img
                      src="https://fggroup.in/images/img/cnc-certi-7.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
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

export default RecordedDigitalMarketingCourse;
