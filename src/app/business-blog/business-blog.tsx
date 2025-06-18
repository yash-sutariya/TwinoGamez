"use client";
// eslint-disable-next-line @next/next/no-img-element

import React from "react";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import { Link } from "react-scroll";

export default function BusinessBlog() {
  return (
    <>
      <Header
        logoURL={"/images/logos/gcs-logo-white.png"}
        mobileLogoURL={"/images/logos/fitit-logo.png"}
        altLogo={"Fitit Logo"}
      />
      <section className="margintop">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="col-md-12 px-2 px-md-3">
              <h1 className="blog-h1">
                {" "}
                Our Latest
                <span style={{ color: "#ff8024" }}> Blogs </span>
              </h1>
            </div>
            <div className="row mt-4">
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/takshak-blog-thumbnail.webp"
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      12/05/2023
                    </small>
                  </div>
                  <h2>
                    10 Effective Business Strategies That Will Skyrocket Your
                    Success!
                  </h2>
                  <p className="card-subtitle">
                    {`In today's competitive business landscape, having effective strategies is crucial for
                                        achieving
                                        success and staying ahead of the competition.`}
                  </p>
                  <Link
                    to="/blog/10-powerful-business-strategies-for-skyrocketing-success"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/thskshak-1/Thumbnail-9.webp"
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      22/06/2023
                    </small>
                  </div>
                  <h2>
                    {`5 Strategic Rules for Leadership: Unlocking Success in Today's World`}
                  </h2>
                  <p className="card-subtitle">
                    {`In today's rapidly changing and fast-paced world, effective leadership is of
                                        paramount
                                        importance in guiding individuals, teams, and...`}
                  </p>
                  <Link
                    to="/blog/5_strategic_rules_for_leadership"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="../images/blog/thakshak/personality.png"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      22/06/2023
                    </small>
                  </div>
                  <h2>Exploring the Five Major Personality Traits</h2>
                  <p className="card-subtitle">
                    Gaining insights into human behavior and motivations is
                    essential for understanding how individuals interact with
                    the world. Psychologists have dentified five major
                    personality traits...
                  </p>
                  <Link
                    to="/blog/personality-traits"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/fitit/fitit-blog-thumbnail.webp"
                    width="90"
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Gautam Jani
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      16/05/2023
                    </small>
                  </div>
                  <h2>
                    From Clicks to Conversions : Digital Marketing Agency Can
                    Skyrocket Your Sales
                  </h2>
                  <p className="card-subtitle">
                    {` In today's digital age, businesses need to have a strong online presence to stay
                                        competitive. Simply attracting clicks to your website is not enough; he real goal is to
                                        convert...`}
                  </p>
                  <Link
                    to="/blog/how-a-digital-marketing-agency-can-skyrocket-your-sales"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/maeket-competion.webp"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      13/04/2023
                    </small>
                  </div>
                  <h2>
                    Top Challenges Businesses Face and How Management
                    Consultants Services Can Help?
                  </h2>
                  <p className="card-subtitle">
                    {` In today's competitive business landscape, companies face numerous
                                        challenges that can impact their growth and success. rom increasing
                                        market competition to rapid ...`}
                  </p>
                  <Link
                    to="/blog/managing-business-challenges-how-management-consulting-services-can-help-you-succeed"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/atoz/atoz-blog-thumbanail.png"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Mr.Yashpal Chavada
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      12/05/2023
                    </small>
                  </div>
                  <h2>
                    The Roadmap to Financial Freedom: Strategies That Actually
                    Work
                  </h2>
                  <p className="card-subtitle">
                    Financial freedom, a cherished aspiration for many, can seem
                    distant and unattainable. However, by adopting the right
                    strategies and cultivating the appropriate mindset, you
                    can...
                  </p>
                  <Link
                    to="/blog/roadmap-to-financial-freedom-strategies-for-achieving-personal-prosperity"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/thskshak-1/Thumbnail-4.webp"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      22/06/2023
                    </small>
                  </div>
                  <h2>
                    The Road to Excellence: Strategies for Skill Enhancement and
                    Career Advancement
                  </h2>
                  <p className="card-subtitle">
                    {`n today's rapidly changing professional world, the significance of continuous skill
                                        enhancement and professional development cannot be overstated. To thrive in this
                                        environment, organisations...`}
                  </p>
                  <Link
                    to="/blog/the-road-to-excellence"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/thskshak-1/thumbnail-7.webp"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      22/06/2023
                    </small>
                  </div>
                  <h2>
                    Understanding Business Taxes: A Comprehensive Guide to
                    Different Types of Taxes
                  </h2>
                  <p className="card-subtitle">
                    As a business owner, having a comprehensive understanding of
                    the various types of taxes that may apply to your enterprise
                    is crucial.axes play a pivotal role in the functioning of
                    a...
                  </p>
                  <Link
                    to="/blog/understanding-business-taxes"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="card-container">
                <div className="card-image">
                  <img
                    src="/images/blog/thskshak-1/concepto-of-marketing.webp"
                    width="90
                            "
                    alt="a brand new sports car"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <small className="" style={{ fontSize: "13px" }}>
                      <i
                        className="fas fa-user"
                        style={{ color: "#ff8024" }}
                      ></i>{" "}
                      Dr.Chintan Shinde
                    </small>
                    <small>
                      <i
                        className="fas fa-calendar-alt ml-2"
                        style={{ color: "#ff8024" }}
                      ></i>
                      22/06/2023
                    </small>
                  </div>
                  <h2>
                    {`Understanding the 7 P's of Marketing: A Comprehensive
                                        Guide`}
                  </h2>
                  <p className="card-subtitle">
                    Marketing is the process of creating, communicating,
                    delivering, and exchanging offerings that have value for
                    customers, clients, partners, and society at large.
                  </p>
                  <Link
                    to="/blog/understanding-the-7ps-of-marketing"
                    className="card-badge card-badge-blue"
                  >
                    View more
                  </Link>
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
