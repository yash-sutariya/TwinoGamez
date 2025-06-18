/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../css/gcs.css";
import "../../../css/media.css";
import "../../../js/popper.min.js";
import "../../../css/landing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import { submitForm } from "@/utils/submitForm";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ErpSoftware() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreI, setShowMoreI] = useState(false);
  const [showMoreII, setShowMoreII] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const toggleReadMoreI = () => {
    setShowMoreI(!showMoreI);
  };
  const toggleReadMoreII = () => {
    setShowMoreII(!showMoreII);
  };
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

  var digitalTeam = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const handleSubmit = (event: any) => { };

  return (
    <>
      <Header
        logoURL={"/images/logos/gcs-logo-white.png"}
        mobileLogoURL={"/images/logos/gcs-logo-white.png"}
        altLogo={"GCS Logo"}
      />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 content-column order-2 order-md-1">
                <div className="fitit-box">
                  <h1
                    style={{ fontSize: "28px" }}
                    className="d-none d-md-block"
                  >
                    Supercharge Your Gym Business with Our All-in-One ERP
                    Software!
                  </h1>
                  <h1 className="d-block d-md-none">
                    {" "}
                    Supercharge Your Gym Business with Our All-in-One ERP
                    Software!
                  </h1>
                  <p>
                    {" "}
                    Unlock efficiency with diet and exercise PDF creation,
                    seamless invoicing, expense management, and customized
                    branding for your {`company's`} success. Try it now!
                  </p>
                  <ul className="mt-3">
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Effortless Invoice Creation
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Seamless Expense Management
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Empower Your Clients :- Personalized Diet & Exercise PDFs
                    </li>
                    <li className="p-1">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#f96424" }}
                      ></i>{" "}
                      Customized Branding.
                    </li>
                  </ul>
                  <div className="btn-box banner-btn mt-md-3 mt-2">
                    <Button
                      // onClick={handleShow}
                      href="#form"
                      className="theme-btn style-two"
                    >
                      Book Demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 image-column order-1 order-md-2">
                <div className="image-box boximg d-none d-md-block">
                  <figure className="image image-1">
                    <img
                      src="/images/fitit/main-Dasboard-app.webp"
                      alt="ERP Software"
                      className="lazy"
                      width="120%"
                    />
                  </figure>
                </div>
                <div className="image-box boximg d-md-none d-block">
                  <figure className="image image-1">
                    <img
                      src="/images/fitit/main-Dasboard-app.webp"
                      alt="ERP Software"
                      className="lazy"
                      width="100%"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="coach-box text-center">
                <div className="">
                  <span>Amazing Features</span>
                </div>
              </div>
            </div>
            <div className="row mt-md-4">
              <div className="col-md-4">
                <div className="feature-box light-green">
                  <i
                    className="fas fa-user-check"
                    style={{ color: "#c3ff38" }}
                  ></i>
                  <div className="feature-box-text">
                    <h4>User-Friendly Interface</h4>
                    <p>
                      Get more done in less time with our streamlined,
                      user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box orange">
                  <i className="fas fa-lock" style={{ color: "#fe4d4d" }}></i>
                  <div className="feature-box-text">
                    <h4>Data Security</h4>
                    <p>
                      Robust encryption for utmost protection of your sensitive
                      information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box dark-green">
                  <i
                    className="fas fa-dumbbell"
                    style={{ color: "#86e637" }}
                  ></i>
                  <div className="feature-box-text">
                    <h4>Diet & Exercise PDF</h4>
                    <p className="">
                      Create and Update Personalized fitness and Diet plans for
                      clients in PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box dark-green">
                  <i className="fas fa-print" style={{ color: "#24ff5b" }}></i>
                  <div className="feature-box-text">
                    <h4>Effortless Invoice Creation</h4>
                    <p className="">
                      Create professional invoices with just a few clicks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box dark-green">
                  <i
                    className="fas fa-dollar-sign"
                    style={{ color: "#deff24" }}
                  ></i>
                  <div className="feature-box-text">
                    <h4>Seamless Expense Management:</h4>
                    <p className="">
                      Tracking and Categorizing expenses effortlessly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box dark-green">
                  <i className="fas fa-medal" style={{ color: "#2469f" }}></i>
                  <div className="feature-box-text">
                    <h4>Customized Branding</h4>
                    <p className="">
                      Impress clients with branded invoices and a professional
                      image.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box light-green">
                  <i
                    className="fas fa-envelope"
                    style={{ color: "#c3ff38" }}
                  ></i>
                  <div className="feature-box-text">
                    <h4>Auto Email For Wishes and Due Amount</h4>
                    <p>
                      Autometic send reminder email to clients for there
                      Birthday, Anniversary and Due Amount
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box light-green">
                  <i className="fas fa-tags" style={{ color: "#38ff6a" }}></i>
                  <div className="feature-box-text">
                    <h4>Offer Email</h4>
                    <p>
                      Send Offer Email to your Clients and User. you can send
                      your new offer direct to your Clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box light-green">
                  <i className="fas fa-qrcode" style={{ color: "#d138ff" }}></i>
                  <div className="feature-box-text">
                    <h4>Attendance with QR</h4>
                    <p>
                      attendance tracking with the simplicity of a QR code scan
                      - effortlessly capture client attendance in a single Tap!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="mt-md-4 mt-3 carded-content">
                <a  href="#form" className="btn">
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 bg-dark subsec">
        <div className="col-md-12 mt-4">
          <div className="coach-box text-center">
            <div className="">
              <span>Plans Features</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="subscription-card mt-4 col-lg-3 col-md-4 col-sm-6 col-12 ms-3">
            <div className="card-content">
              <h2 className="card-title">7 Day Free Trial</h2>
              <div className="plans">
                <label className="plan-option">
                  <span style={{ color: "white" }}>Let's Start Your Free Trial</span>
                </label>
                <div className="prize-info">
                  <span className="new-prize">Free Demo</span>
                </div>
              </div>
              <div className="features subli">
                <ul>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Effortless Invoice Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Diet PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Exercise PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Lead Management</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Boost Your Business with Personalized Offer Email Services</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Streamlined Attendance Management with QR Code and Manual Options</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Secure Your Data</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="mt-md-4 mt-3 carded-content">
                  <a  href="#form" className="btn">
                    Book Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-card mt-4 col-lg-3 col-md-4 col-sm-6 col-12 ms-3">
            <div className="card-content">
              <h2 className="card-title">Standard Plan</h2>
              {/* <div className="badge best-seller">Best Seller</div> */}
              <div className="plans">
                <label className="plan-option">
                  <span style={{ color: "white" }}>7 days free Trial</span>
                </label>
                <div className="prize-info">
                  <span className="new-prize">₹ 6000</span>
                  <span className="old-prize ms-1">₹ 12000</span>

                </div>
                {/* <div className="discount-badge">50% OFF</div> */}
              </div>
              <div className="features subli">
                <ul>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Effortless Invoice Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Diet PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Exercise PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Lead Management</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Boost Your Business with Personalized Offer Email Services</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Streamlined Attendance Management with QR Code and Manual Options</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Secure Your Data</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="mt-md-4 mt-3 carded-content">
                  <a  href="#form" className="btn">
                    Book Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-card mt-4 col-lg-3 col-md-4 col-sm-6 col-12 ms-3">
            <div className="card-content">
              <h2 className="card-title">Enter Prize Plan</h2>
              {/* <div className="badge trending">Trending</div> */}
              <div className="plans">
                <label className="plan-option">
                  <span style={{ color: "white" }}>7 days free Trial</span>
                </label>
                <div className="prize-info">
                  <span className="new-prize">₹ 20000</span>
                  <span className="old-prize ms-1">₹ 60000</span>
                </div>
                {/* <div className="discount-badge">50% OFF</div> */}
              </div>
              <div className="features subli">
                <ul>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Effortless Invoice Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Diet PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Exercise PDF Creation</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Lead Management</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Boost Your Business with Personalized Offer Email Services</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Streamlined Attendance Management with QR Code and Manual Options</li>
                  <li><FontAwesomeIcon icon={faStar} className="mr-2" />Secure Your Data</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="mt-md-4 mt-3 carded-content">
                  <a href="#form" className="btn">
                    Book Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="mt-5 mb-5 subsec">
        <div className="col-md-12">
          <div className="coach-box text-center">
            <div className="">
              <span>Connect Instantly</span>
            </div>
          </div>
        </div>
        <div className="row p-4 mt-4 justify-content-center">
          <div className="box col-md-5">
            <h2>Your Digital Gym Partner</h2>
            <p>Choose the leading gym management software to MANAGE, STREAMLINE & SUCCEED.</p>
            <p>Maximize your gym's operations with our cutting-edge software designed to simplify management, enhance member experience, and drive your success.</p>
            <ul>
              <p>Start with a FREE DEMO</p>
              <li>Discover how our software can streamline your gym's processes. Experience the powerful tools and features tailored to your needs.</li>
              <p>Seamless Transition to Subscription</p>
              <li>After your demo, easily move to a subscription plan and unlock the full capabilities of our software. Equip your gym with the resources to grow and succeed.</li>
            </ul>
          </div>
          <div className="col-md-6 ms-2">
            <div className="box mt-2">
              <h2>Book Your Personalized Demo Today!</h2>
              <p>Curious about the impact our software can have on your gym? Try it out for free and see the transformation.</p>
              <p>Ready to take the next step? Request your personalized demo now!</p>
              <div className="button-group">
                <a className="btn-info" href="https://calendly.com/gomziconsultingservices">Request Your Demo</a>
              </div>
            </div>
            <div className="contact-info box">
              <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />
              <p>Call us<span>Talk to our expert</span> +91 97731 74522</p>
              </div>
              <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />
              <p>Message Us<span>Have questions? Send us a message!</span> +91 97731 74522</p>
              </div>
              <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black" />
                <p>Email us<span>Connect with our dedicated support team at:</span> gomziconsultingservices@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 order-md-1 order-2">
                <div>
                  <h2 className="mt-3 mt-md-0">Easy Access Admin Dashboard</h2>
                  <p className="mt-2 mt-md-0">
                    Manage your operations effortlessly with our user-friendly
                    interface. From tracking analytics to organizing data, our
                    dashboard empowers you to streamline tasks and make informed
                    decisions. Experience seamless control today!
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <div>
                  <img
                    src="/images/fitit/laptop-view.webp"
                    width="100%"
                    className="lazy"
                    alt=""
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
            <div className="row align-items-center">
              <div className="col-md-6 px-0">
                <div className="d-none d-md-block">
                  <img
                    src="/images/fitit/invoice-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                    style={{ marginLeft: "-50px" }}
                  />
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/fitit/invoice-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 px-4 pt-4 pt-md-0">
                <div>
                  <h2>Effortless Invoice Creation</h2>
                  <p className="mt-2 mt-md-0">
                    Streamline your invoicing process with our Invoice
                    Management module. Create and send professional invoices to
                    your clients or customers, track payments, and stay on top
                    of your finances with ease.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop bg-dark">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 order-md-1 order-2">
                <div>
                  <h2 className="mt-3 mt-md-0">Diet PDF Creation</h2>
                  <p className="mt-2 mt-md-0">
                    Effortlessly create diet plans and nutritional guides with
                    our Diet PDF Creation feature. Whether {`you're`} a
                    nutritionist, dietitian, or health coach, this tool will
                    simplify the process of designing and sharing dietary
                    recommendations with your clients.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <div>
                  <img
                    src="/images/fitit/diet-plan-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
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
            <div className="row align-items-center">
              <div className="col-md-6 px-0">
                <div className="d-none d-md-block">
                  <img
                    src="/images/fitit/exercise-plan-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                    style={{ marginLeft: "-50px" }}
                  />
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/fitit/exercise-plan-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 px-4 pt-4 pt-md-0">
                <div>
                  <h2>Exercise PDF Creation</h2>
                  <p className="mt-2 mt-md-0">
                    Help your clients stay fit and active by generating
                    customized exercise plans. With our Exercise PDF Creation
                    feature, you can easily create, share, and print exercise
                    routines tailored to individual needs.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop bg-dark">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 order-md-1 order-2">
                <div>
                  <h2 className="mt-3 mt-md-0">Lead Management</h2>
                  <p className="mt-2 mt-md-0">
                    Effortlessly capture, track, and nurture leads with our Lead
                    Management module. Convert prospects into valuable clients,
                    all within our comprehensive ERP system.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <div>
                  <img
                    src="/images/fitit/lead-screen.webp"
                    width="100%"
                    className="lazy"
                    alt=""
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
            <div className="row align-items-center">
              <div className="col-md-6 px-0">
                <div className="d-none d-md-block">
                  <img
                    src="/images/fitit/offer-email.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                    style={{ marginLeft: "-50px" }}
                  />
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/fitit/offer-email.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 px-4 pt-4 pt-md-0">
                <div>
                  <h2>
                    Boost Your Business with Personalized Offer Email Services
                  </h2>
                  <p className="mt-2 mt-md-0">
                    {" "}
                    Elevate your client communication with our seamless offer
                    email delivery service. Empower clients to effortlessly
                    reach their users, ensuring timely and impactful promotions.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark margintop">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 order-md-1 order-2">
                <div>
                  <h2 className="mt-3 mt-md-0">
                    Streamlined Attendance Management with QR Code and Manual
                    Options
                  </h2>
                  <p className="mt-2 mt-md-0">
                    Simplify attendance tracking with our comprehensive
                    solution. Utilize QR codes for swift check-ins or opt for
                    manual entry, ensuring flexibility and efficiency in
                    managing attendance processes.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <div>
                  <img
                    src="/images/fitit/attendance.webp"
                    width="100%"
                    className="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 px-0">
                <div className="d-none d-md-block">
                  <img
                    src="/images/fitit/lock.png"
                    width="100%"
                    className="lazy"
                    alt=""
                    style={{ marginLeft: "-50px" }}
                  />
                </div>
                <div className="d-block d-md-none">
                  <img
                    src="/images/fitit/lock.png"
                    width="100%"
                    className="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 px-4 pt-4 pt-md-0">
                <div>
                  <h2>Secure Your Data</h2>
                  <p className="mt-2 mt-md-0">
                    Secure Your Data: Choose the Best Service Provider for
                    Unmatched Protection! Safeguard your valuable information
                    with our top-notch data security solutions. Trust the{" "}
                    {`industry's`} finest service provider to ensure your data
                    remains safe and confidential. Discover peace of mind today!
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop bg-dark">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 px-0">
                <div id="owl-active1" className="d-flex mt-4">
                  <div className="item">
                    <div className="d-flex justify-content-center">
                      <img
                        className="lazy"
                        src="/images/logos/fgiit.png"
                        data-src="/images/logos/fgiit.png"
                        style={{ width: "70%" }}
                        alt="FGIIT"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="d-flex justify-content-center mt-4">
                      <img
                        className="lazy"
                        src="/images/logos/fwg.png"
                        data-src="/images/logos/fwg.png"
                        style={{ width: "50%" }}
                        alt="FWG"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 px-4 pt-4 pt-md-0">
                <div>
                  <h2>Boosting Fitness & Business Success with Our ERP</h2>
                  <p className="mt-2 mt-md-0">
                    Fitnesswithgomzi and FGIIT rely on our ERP software to
                    supercharge their operations. From personalized fitness
                    plans to efficient invoicing, our solution powers their
                    growth and success.
                  </p>
                  <div className="mt-md-4 mt-3 carded-content">
                    <a href="#form" className="btn">
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="coach-box text-center">
                  <div>
                    <span>Digital Team</span>
                  </div>
                  <h2 className="w-100 d-none d-md-block">
                    No matter how brilliant your mind or strategy. if you are
                    playing a solo game, you will always lose out to a team.
                  </h2>
                </div>
                <div className="">
                  <Slider {...digitalTeam}>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/takshak/coach-2.png"
                            width="100%"
                            alt="Owner"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Dr.Gautam Jani</h5>
                          <p>Owner</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-4.webp"
                            width="100%"
                            alt="Full Stack Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Smit Luvani</h5>
                          <p>Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-5.webp"
                            width="100%"
                            alt="Full Stack Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Jenil Narola</h5>
                          <p>Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-3.webp"
                            width="100%"
                            alt="Digital Marketer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Rozal Gohil</h5>
                          <p>Digital Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-1.webp"
                            width="100%"
                            alt="Video Grapher & Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Harshad Dave</h5>
                          <p>Video Grapher & Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-2.webp"
                            width="100%"
                            alt="Owner"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Divyesh Baraiya</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-7.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Yash Sutariya</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-8.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Umang Rathod</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-9.webp"
                            width="100%"
                            alt="Web Developer"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Brijesh Prajapati</h5>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-10.webp"
                            width="100%"
                            alt="Video Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Suresh Pagi</h5>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-11.webp"
                            width="100%"
                            alt="Video Editor"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Vedant Makani</h5>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-12.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Krishi Shah</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-13.webp"
                            width="100%"
                            alt="SEO Executive"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Heer Shah</h5>
                          <p>SEO Executive</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-14.webp"
                            width="100%"
                            alt="SEO Executive"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Prem Beshan</h5>
                          <p>SEO Executive</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-15.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Isha Patel</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="box-coach shadow-sm p-4">
                        <div className="image-wrapper mb-3">
                          <img
                            className="lazy"
                            src="/images/fitit/team-16.webp"
                            width="100%"
                            alt="Social Media Manager"
                          />
                        </div>
                        <div className="box-desc">
                          <h5>Amee Mistri</h5>
                          <p>Social Media Manager</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              {/* <div className="d-block d-md-none">
                <Slider {...settingssss}>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/takshak/coach-2.png"
                          width="100%"
                          alt="Owner"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Dr.Gautam Jani</h5>
                        <p>Owner</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-4.webp"
                          width="100%"
                          alt="Full Stack Developer"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Smit Luvani</h5>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-5.webp"
                          width="100%"
                          alt="Full Stack Developer"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Jenil Narola</h5>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-3.webp"
                          width="100%"
                          alt="Digital Marketing Specialist"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Rozal Gohil</h5>
                        <p>Digital Marketing Specialist</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-1.webp"
                          width="100%"
                          alt="Video Grapher & Editor"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Harshad Dave</h5>
                        <p>Video Grapher & Editor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-6.webp"
                          width="100%"
                          alt="Graphic Designer"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Yash Sangani</h5>
                        <p>Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-2.webp"
                          width="100%"
                          alt="Owner"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Divyesh Baraiya</h5>
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-7.webp"
                          width="100%"
                          alt="Owner"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Suresh Pagi</h5>
                        <p>Junior Video Editor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/team-8.webp"
                          width="100%"
                          alt="Owner"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Vedant Makani</h5>
                        <p>Junior Video Editor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="lazy"
                          src="/images/fitit/hem-mehta.jpeg"
                          width="100%"
                          alt="Owner"
                        />
                      </div>
                      <div className="box-desc">
                        <h5>Hem Mehta</h5>
                        <p>Social media manager</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container-fluid py-4 py-md-5">
          <div className="container">
            <div className="row mt-md-3 align-items-center">
              <div className="col-md-6">
                <div className="coach-box mb-3 ">
                  <span style={{ fontSize: "16px" }}>Our Approach</span>
                </div>
                <div className="agency-design approach-1">
                  <p>
                    <span>At Fit IT,</span> we believe that every business is
                    unique and requires a customized digital marketing strategy.
                    That is why we take a data-driven approach to understand
                    your business, your audience, and your goals. We then create
                    a customized strategy that addresses your specific needs and
                    objectives. Our team of experts works closely with you to
                    execute the strategy and achieve the desired results.We also
                    provide regular reports and updates to ensure that you are
                    informed of the progress and performance of your campaigns.
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <a
                    href="/services/marketing-guru-services"
                    className="btn mx-1"
                  >
                    Know More
                  </a>
                  <a
                    href="/pdf/FITIT-PACKAGE.pdf"
                    className="btn mx-1"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/banner/baner.webp"
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
      <section className="bg-dark pt-md-5 pt-4">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <div className="coach-box">
                  <div>
                    <span>Why Choose Fit IT?</span>
                  </div>
                  <h2
                    className="w-100 d-none d-md-block"
                    style={{ fontSize: "18px" }}
                  >
                    There are many reasons why businesses choose Fit IT as their
                    digital marketing agency. Here are a few:
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-md-4">
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-star"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Expertise</h2>
                    <p>
                      Our team of professionals has years of experience in
                      digital marketing, and we stay
                      {showMore ? (
                        <span>
                          up-to-date with the latest trends and techniques.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
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
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Customization</h2>
                  </div>
                  <p>
                    We do not believe in a one-size-fits-all approach. We
                    customize our strategies
                    {showMoreI ? (
                      <span>to meet your specific needs and objectives.</span>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                  </p>
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
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Results-driven</h2>
                    <p className="mb-md-4 pb-2">
                      We are committed to delivering results that help you
                      achieve your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-box">
                  <div className="media-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="about-box-content">
                    <h2>Transparency</h2>
                    <p>
                      We believe in being transparent with our clients. We
                      provide regular
                      {showMoreII ? (
                        <span>
                          reports and updates to ensure that you are informed of
                          the progress and performance of your campaigns.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMoreII}
                      id="myBtnn"
                      style={{ cursor: "pointer" }}
                      className="about-btn moreless-button"
                    >
                      {showMoreII ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
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
                      src="/images/blog/fitit/fitit-blog-thumbnail.webp"
                      alt="HR Agency"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <h2 className="w-100">
                    From Clicks to Conversions : How a Digital Marketing Agency
                    Can Skyrocket Your Sales
                  </h2>
                </div>
                <div className="agency-design">
                  <p>
                    In {`today's`} digital age, businesses need to have a strong
                    online presence to stay competitive. Simply attracting
                    clicks to your website is not enough; the real goal is to
                    convert those clicks into valuable sales. This is where a
                    digital marketing agency can be your secret weapon....
                  </p>
                </div>
                <div className="mt-md-4 mt-3 carded-content">
                  <a
                    href="/blog/how-a-digital-marketing-agency-can-skyrocket-your-sales"
                    className="btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src="/images/blog/fitit/fitit-blog-thumbnail.webp"
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
      <section id="form">
        <div
          className="bg-full-bd"
          style={{
            backgroundImage: "url(/images/gcs/contact-us.webp)",
            backgroundAttachment: "local",
          }}
        >
          <div className="subsec container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="contact-us">
                  <h2>
                    Get A <br /> Free Quote
                  </h2>
                </div>
                <div className="button-group">
                <a className="btn-info" href="https://calendly.com/gomziconsultingservices">Request Your Demo</a>
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          style={{ backgroundColor: "black", borderBottom: "none" }}
        >
          <Modal.Title style={{ color: "#ffffff", lineHeight: "3rem" }}>
            Book Demo for ERP Software
          </Modal.Title>
          <Button
            variant="link"
            onClick={handleClose}
            style={{
              fontSize: "1.5rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "#ffffff" }}>
          <form id="myForm2" className="mt-3">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                className="form-control in-put p-3"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="form-control in-put p-3"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="hidden"
              name="source"
              id="source"
              value="ERP Demo Inquiry"
            />
            <div>
              <label>Mobile No.</label>
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                id="mobile"
                className="form-control in-put p-3"
                required
                value={mobile}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="messages"
                placeholder="Messages"
                id="messages"
                className="form-control in-put p-3"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-end">
              <button
                type="button"
                className="submit-btn"
                onClick={handleApplyForInquiry}
                style={{ backgroundColor: "orange" }}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
