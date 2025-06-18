/* eslint-disable @next/next/no-img-element */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function AffordableFlexibleCourses() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);
  const [showMoreII, setShowMoreII] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const toggleReadMoreI = () => {
    setShowMoreI(!showMoreI);
  };
  const toggleReadMoreII = () => {
    setShowMoreII(!showMoreII);
  };

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url: any) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
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
        mobileLogoURL={"/images/logos/takshak-logo.png"}
        altLogo={"takshak Logo"}
      />
      <section className="margintop">
        <div className="container-fluid px-0">
          <div className="">
            <div
              className="background-imgs"
              style={{
                backgroundImage: `url(/images/mix-img/flexible-course.webp)`,
              }}
            >
              <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                  <div className="takshak-title">
                    <h1 className="d-none d-md-block">
                      <span>Welcome to</span> Most affordable Courses in all
                      over India
                    </h1>
                    <h1 className="d-block d-md-none">
                      <span>Welcome to</span>
                      <br />
                      Most affordable Courses in all over India
                    </h1>
                    <a href="#course" className="btn-readmore">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid py-5"
          style={{ borderBottom: "1px solid #882d00" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center pb-md-5 pb-4">
                <div className="coach-box">
                  <span>Best Flexible Courses</span>
                </div>
              </div>
              <div className="col-md-5 text-center">
                <div className="video-img">
                  <div className="ply1 black-before">
                    <img
                      data-src="/images/mix-img/digital-marketing-recorded-thumbnail.webp"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src="/images/mix-img/digital-marketing-recorded-thumbnail.webp"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("74kE0mOXdQY")}
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
              <div className="col-md-7" id="course">
                <div className="tabataa">
                  <a href="/courses/recorded-digital-marketing-course">
                    <h2>Digital Marketing Course</h2>
                  </a>
                  <p>
                    This Course Is Designed To Deliver All The Digital
                    Marketing-Related Information Required To Become a Digital
                    Marketing Expert From Beginner to Advanced.
                  </p>
                  <p>Purchase the course and start learning right away</p>
                </div>
                <div className="price mb-4">
                  <p className="mt-2">₹499/- only</p>
                  {/* <!-- <span style="font-size:20px!important;">₹<del>1769/-</del></span>
                                    <span className="p1 mx-md-2 ml-0" style="font-size:20px!important;"><b>80.10% OFF</b></span> --> */}
                </div>
                <div className="meal mt-4 mt-md-2">
                  <a
                    href="/courses/recorded-digital-marketing-course"
                    style={{ borderRadius: "10px" }}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid py-5"
          style={{ borderBottom: "1px solid #882d00" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 text-center">
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
                        onClick={() => openVideoModal("445FSt6uMmE")}
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
              <div className="col-md-7">
                <div className="tabataa">
                  <a href="/courses/recorded-diploma-in-business-management-course">
                    <h2>Diploma in Business Management Course</h2>
                  </a>
                  <p>
                    This Diploma in Business Management Course is designed to
                    deliver all the foundational and advanced knowledge
                    necessary to become a skilled business professional, from
                    beginner to advanced level.
                  </p>
                  <p>Purchase the course and start learning right away</p>
                </div>
                <div className="price mb-4">
                  <p className="mt-2">₹499/- only</p>
                  {/* <!-- <span style="font-size:20px!important;">₹<del>1769/-</del></span>
                            <span className="p1 mx-md-2 ml-0" style="font-size:20px!important;"><b>80.10% OFF</b></span> --> */}
                </div>
                <div className="meal mt-4 mt-md-2">
                  <a
                    href="/courses/recorded-diploma-in-business-management-course"
                    style={{ borderRadius: "10px" }}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid py-5"
          style={{ borderBottom: "1px solid #882d00" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 text-center">
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
                        onClick={() => openVideoModal("wB3WMsnxgj4")}
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
              <div className="col-md-7">
                <div className="tabataa">
                  <a href="/courses/recorded-stock-market-101-course">
                    <h2>Stock Market 101 Course</h2>
                  </a>
                  <p>
                    This Course Is Designed To Deliver All The Stock
                    Market-Related Information Required To Gain Proficiency in
                    Stock Trading and Investing From Beginner to Advanced.
                  </p>
                  <p>Purchase the course and start learning right away</p>
                </div>
                <div className="price mb-4">
                  <p className="mt-2">₹499/- only</p> <br />
                  {/* <!-- <span style="font-size:20px!important;">₹<del>1769/-</del></span>
                                        <span className="p1 mx-md-2 ml-0" style="font-size:20px!important;"><b>80.10% OFF</b></span> --> */}
                </div>
                <div className="meal mt-4 mt-md-2">
                  <a
                    href="/courses/recorded-stock-market-101-course"
                    style={{ borderRadius: "10px" }}
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
                      className="m-auto"
                      data-src="/images/icons/book-material.webp"
                      alt=""
                      width="20%"
                      src="/images/icons/book-material.webp"
                    />
                    <h5 className="mt-3"> Enjoy E-Book Material</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <img
                      className="m-auto"
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
                      className="m-auto"
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
                      className="m-auto"
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
                      className="m-auto"
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
                      className="m-auto"
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
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <img
                      src="/images/certificate/takshak-certificate.jpeg"
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      alt="Certificate Logo"
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <img
                      src="/images/certificate/AtoZ-certificate.jpeg"
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      alt="Certificate Logo"
                    />
                  </div>
                  <div className="col-md-6 mt-3">
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
        </div>
      </section>
      <section className="py-md-5 mt-5 mt-md-5 py-5 bg-dark">
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
                          alt=""
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
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>
                      I recently took the stock market trading course offered by
                      A2Z Finance in Surat and it was excellent!
                      {showMore ? (
                        <span>
                          The instructors were knowledgeable and the course was
                          well-structured. {`It's`} the best stock market
                          trading course in Surat, highly recommended.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        onClick={toggleReadMore}
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
                          src="/images/placement/placement.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="name-user">
                        <strong>Kuashik Parmar</strong>
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
                      I recently completed the Business Management course with
                      Takshak Management, and
                      {showMoreI ? (
                        <span>
                          it exceeded my expectations. The content was
                          comprehensive, the instructors were knowledgeable, and
                          the practical approach enhanced my learning. Highly
                          recommended!
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        onClick={toggleReadMoreI}
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
                          src="/images/atoz/review-2.webp"
                          className="img-fluid"
                          alt=""
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
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment mb-md-3">
                    <p>
                      Fit {`IT's`} Digital Marketing course exceeded my
                      expectations! The content was comprehensive, practical,
                      and up-to-date. Highly recommended for anyone looking to
                      enhance their marketing skills.
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
                          alt=""
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
                      If {`you're`} looking for the best stock market trading
                      course in Surat, look no further than A2Z Finance.
                      {showMoreII ? (
                        <span>
                          Mr. Yashpal Chavada, the professor of the course, is
                          highly knowledgeable and provides comprehensive
                          material. I highly recommend this course to anyone
                          looking to learn about stock market trading.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="mt-md-3 mt-4">
                      <a
                        onClick={toggleReadMoreII}
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
                          src="/images/atoz/review-4.webp"
                          className="img-fluid"
                          alt=""
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
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment mb-md-3">
                    <p>
                      Fit {`IT's`} Digital Marketing course is exceptional! The
                      comprehensive curriculum and expert guidance have boosted
                      my skills and career prospects. Highly recommended!
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
                          src="/images/fitit/team-1.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="name-user">
                        <strong>Manish Pandey</strong>
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
                  <div className="client-comment mb-md-3 mt-3">
                    <p>
                      Taking Takshak {`Management's`} Business Management course
                      was a game-changer for my career. Highly recommended!
                    </p>
                  </div>
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
