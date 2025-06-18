// eslint-disable-next-line @next/next/no-img-element

"use client";
import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Razorpay from "razorpay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OnlineDiplomaInBusinessManagement = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
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
              item_name: "Online Diploma in business management course",
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
  };
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
                      className=""
                      data-src="/images/takshak/mgt-course.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src="/images/takshak/mgt-course.webp"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtu.be/-xllOIjd_KE
                                    "
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
                  <h1>Diploma in Business Management Course (Online)</h1>
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
                        <i className="fas fa-chalkboard-teacher"></i> Zoom
                        Sessions
                      </li>
                      <li>
                        <i className="fas fa-video"></i> Case Study Based
                        Project{" "}
                      </li>
                      <li>
                        <i className="fas fa-credit-card"></i> Recorded Video
                      </li>
                      <li>
                        <i className="fas fa-credit-card"></i> EMI Option
                        Available{" "}
                      </li>
                    </ul>
                  </div>
                  <p className="mt-2" style={{ fontSize: "30px" }}>
                    ₹4,999 + 18% GST
                  </p>
                </div>
                <div className="meal mt-3 d-flex">
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
                  If Businesses Or Individuals Want Greater Success, Then The
                  Answer Resides Within The Ability To Improve Motivation,
                  Improve The Use Of Energy And To Improve Talent. Yet, Almost
                  Every Time, The Emphasis Is On Talent Or The Hard Skills With
                  Little Or No Focus On Developing One's Own Personality.
                </p>
                <p>
                  GYM MANAGEMENT COURSE That Is Designed To Help Emerging
                  Leaders Create A More Dynamic, Loyal And Energized Personality
                  And Replicate It In Their Workplace.
                </p>
                <div className="mt-md-3">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Introduction
                          Of Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Management
                          Skills
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Introduction
                          Of Marketing Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Introduction
                          Of Finance Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Human Resource
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Organization
                          Behavior
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Service Model
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Strategic
                          Management
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="p-0 course-li">
                        <li>
                          <i className="fas fa-check-circle"></i> Personality
                          Development
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Organization
                          Ethics
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Training
                          Methodology
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>{" "}
                          Lecture-Cum-Discussion
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Powerpoint
                          Presentation
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Group
                          Discussion Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Case Studies
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i> Different
                          Management Tools
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
            <div className="">
              <div className="col-sm-12 text-center">
                <div className="coach-box">
                  <div className="">
                    <span>Course Included</span>
                  </div>
                </div>
              </div>
              <div className="row mt-md-4">
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/social-media.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/social-media.webp"
                    />
                    <h5 className="mt-3"> 1.5 Month</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
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
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/online-class.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/online-class.webp"
                    />
                    <h5 className="mt-3"> Zoom Classes</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/study-project.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/study-project.webp"
                    />
                    <h5 className="mt-3"> Case Study Based Project</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 pt-2 pb-1 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/recorded-videos.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/recorded-videos.webp"
                    />
                    <h5 className="mt-3">Recorded Sessions Are Included</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="blog2 py-3 imgty text-center">
                    <img
                      className=""
                      data-src="/images/icons/certified.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/certified.webp"
                    />
                    <h5 className="mt-3">Certificate</h5>
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
      <section className="margintop">
        <div className="container-fluid">
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
      <section className="margintop mb-10 pb-10">
        <div className="container-fluid">
          <div className="container">
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
              <Slider {...settings}>
                <div className="col-12">
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
                <div className="col-12">
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
                <div className="col-12">
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
                <div className="col-12">
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
              <div id="owl-review-2" className="owl-carousel owl-theme mb-5">
                <div className="item m-3">
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
                <div className="item m-3">
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
                <div className="item m-3">
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
                <div className="item m-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OnlineDiplomaInBusinessManagement;
