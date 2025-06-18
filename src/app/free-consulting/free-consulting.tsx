"use client";
import React, { useEffect, useState } from "react";
import "../../css/bootstrap.css";
import "../../css/gcs.css";
import "../../css/landing.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { submitForm } from "@/utils/submitForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faBookOpen, faChartLine, faChevronLeft, faChevronRight, faMinus, faMobileAlt, faPencilRuler, faPhone, faPlay, faPlayCircle, faPlus, faStar, faVideo, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/header/Header";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-scroll";
import Swal from "sweetalert2";


export default function GCSWebinarPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [showMore, setShowMore] = useState(false);
    const [showMoreI, setShowMoreI] = useState(false);
    const [showMoreII, setShowMoreII] = useState(false);
    const [showMoreIII, setShowMoreIII] = useState(false);
    const [showMoreIIII, setShowMoreIIII] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: false,
                },
            },
        ],
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        submitForm(event);
        setShow(false);
    };
    const CourseSpartans = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
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
                    autoplay: true,
                    dots: false,
                },
            },
        ],
    };
    function SampleNextArrow(props: any) {
        const { className, style, onClick, right } = props;
        const rightStyle = right ? { "--right": right } : {};

        return (
            <div
                className={`slider-button-right  ${right ? "slider-button-right-important" : ""
                    }`}
                style={{ ...style, ...rightStyle, display: "block", border: "2px solid maroon" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-black" />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick, left } = props;
        const leftStyle = left ? { "--left": left } : {};

        return (
            <div
                className={`slider-button-left ${left ? "slider-button-left-important" : ""
                    }`}
                style={{ ...style, ...leftStyle, display: "block", border: "2px solid maroon" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-black" />
            </div>
        );
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionData = [
        {
            question: 'What exactly do I get with the GCS course?',
            answer: 'You all receive access to comprehensive business training in Marketing, Management, and Finance. On top of that, you get three valuable bonuses: a free website, ERP software, and marketing services, worth over ₹89,000',
        },
        {
            question: 'How long will I have access to the course content?',
            answer: 'You will have 1-year full access to our online training modules through our member dashboard, available on both mobile and desktop.',
        },
        {
            question: 'Is the ERP software difficult to use?',
            answer: ' No, the ERP software is user-friendly and designed for ease of use. We also provide support to help you get the most out of its features, from invoice tracking to client management.',
        },
        {
            question: 'How does the free marketing services bonus work?',
            answer: ' Our team of marketing experts will work with you to optimize your social media presence, run paid advertisements, and improve your website SEO. These services are valued at ₹50,000, but you get them free with the course.',
        },
        {
            question: 'Is there a payment plan available?',
            answer: 'Yes, we offer flexible payment options to make the course affordable for everyone. Contact our counselor at +91 6354 051 487 to learn more about payment plans.',
        },
        {
            question: 'Who should take this course?',
            answer: 'This course is perfect for fitness professionals, business owners, and aspiring entrepreneurs who want to take their business to the next level by mastering marketing, management, and financial strategies.',
        },
        {
            question: 'How do I get started?',
            answer: 'Simply reach out to our counselor at +91 6354 051 487 or click the "Enroll Now" button to secure your spot. Don’t wait—spots are limited!',
        },
    ];



    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const convertToEmbedUrl = (url: any) => {
        let embedUrl = '';

        if (url.includes('youtube.com/shorts/')) {
            const videoId = url.split('/shorts/')[1]?.split('?')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('watch?v=')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else {
            embedUrl = url; // Fallback, in case URL structure is different
        }

        return embedUrl;
    };

    const openVideoModal = (url: any) => {
        const embedUrl = convertToEmbedUrl(url);
        console.log("Embed URL: ", embedUrl);
        setIsVideoOpen(true);
        setVideoUrl(embedUrl);
    };


    const closeVideoModal = () => {
        setIsVideoOpen(false);
        setVideoUrl("");
    };

    const [showw, setShoww] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Check local storage to see if the form has already been submitted
    useEffect(() => {
        const isFormSubmitted = localStorage.getItem("formSubmitted");
        if (isFormSubmitted) {
            setFormSubmitted(true);
        }
    }, []);

    const handleShoww = () => setShoww(true);
    const handleClosee = () => setShoww(false);

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        // Save submission status in local storage
        localStorage.setItem("formSubmitted", "true");
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setPhoneNumber] = useState("");

    const handleApplyForInquiry = async (e: any) => {
        e.preventDefault();
        try {
            if (!name || !email || !mobile) {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Please fill out all fields in the form.",
                  confirmButtonText: "OK",
                });
                return;
              }
            await submitForm(
                name,
                email,
                mobile,
                "Gomzi consulting services webinar",
                window.location.href
            );

            // Clear form fields
            setName("");
            setEmail("");
            setPhoneNumber("");

            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Thank you for connecting with us. We will contact you soon.",
                confirmButtonText: "OK",
            });

            // Mark form as submitted in state and local storage
            setFormSubmitted(true);
            localStorage.setItem("formSubmitted", "true");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong. Please try again later.",
                confirmButtonText: "OK",
            });
        }
        setShoww(false);
    };


    return (
        <body style={{ backgroundColor: "white !important" }}>
            <header>
                <Link
                    href="https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to boost my income with GCS."
                    className="float"
                    target="_blank"
                >
                    {/* <i className="fab fa-whatsapp mt-3"></i> */}
                    <img
                        src="/images/achievements/whatsapp.png"
                        style={{ borderRadius: "10px" }}
                        className="img-fluid whatsapp-btn"
                        alt="whatsapp-btn"
                        width="32px"
                    />
                </Link>
            </header>
            <section className="webinar-gcs">
                <div className="container">
                    <div className="header-wrapper">
                        <h2 className="text-center">For Fitness Coaches, Nutritionists, Doctors &amp; Gym Owners</h2>
                    </div>
                </div>
            </section>


            <section className="mt-4 wow animate__ animate__fadeInDown animated webinar-gcs">
                <div className="container-fluid">
                    <div className="container">
                        <h5
                            className="mb-0 text-center d-none d-md-block"
                            style={{ fontSize: "2.5rem", color: "black", fontWeight: "800" }}
                        >
                            <span style={{ color: "#C6392D", fontWeight: "bold" }}>Build, Launch & Scale </span>your fitness business from <span style={{ color: "#C6392D", fontWeight: "bold" }}>10k to 10 lakh/month </span>
                            in just 90 days
                        </h5>

                        <h5
                            className="mb-0 text-center text-black d-block d-md-none"
                            style={{ fontSize: "25px", color: "black", lineHeight: "32px" }}
                        >
                            <span style={{ color: "#C6392D", fontWeight: "bold" }}>Build, Launch & Scale </span>your fitness business from <span style={{ color: "#C6392D", fontWeight: "bold" }}>10k to 10 lakh/month </span>
                            in just 90 days
                        </h5>
                        <div className="row justify-content-center">
                            <div className="col-md-12 text-center" data-aos="fade-left">
                                {formSubmitted ? (
                                    <>
                                        <div style={{ width: '100%' }} className="d-none d-md-block mt-4">
                                            <iframe
                                                width="100%"
                                                height="600px"
                                                src="https://www.youtube.com/embed/W-VpjqhmR0s?autoplay=1&mute=1&si=lp5nu5XQ_SIKfKhj"
                                                title="YouTube video player"
                                                style={{
                                                    borderRadius: '10px',
                                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                }}
                                                allow="autoplay; fullscreen;"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <div style={{ width: '100%' }} className="d-block d-md-none mt-4">
                                            <iframe
                                                width="100%"
                                                height="300px"
                                                src="https://www.youtube.com/embed/W-VpjqhmR0s?autoplay=1&mute=1&si=lp5nu5XQ_SIKfKhj"
                                                title="YouTube video player"
                                                style={{
                                                    borderRadius: '10px',
                                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                }}
                                                allow="autoplay; fullscreen;"
                                                allowFullScreen
                                            ></iframe>
                                        </div>                 </>
                                ) : (
                                    <>

                                        <div className="video-modal-container mt-3">
                                            <div
                                                className="image-container"
                                                style={{ position: 'relative', cursor: 'pointer' }}
                                            >
                                                <img
                                                    src="/images/webinar/thumbnail.webp"
                                                    alt="Open Video"
                                                    className="img-fluid mx-auto"
                                                    style={{
                                                        width: '100%',
                                                        borderRadius: '10px',
                                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                                                        transition: 'transform 0.3s ease',
                                                    }}
                                                    onClick={handleShoww}
                                                />
                                                <a
                                                    onClick={handleShoww}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        borderRadius: '50%',
                                                        fontSize: '20px',
                                                        backgroundColor: '#C6392D',
                                                        color: '#fff',
                                                        border: 'none',
                                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                                    }}
                                                    className="play-button"
                                                >
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                        <div className="button-wrapper">
                            <img className="arrow-image up-arrow" src="/images/webinar/up.png" alt="Up Arrow" />
                            <a className="animated-button" href="/services/schedual-call">
                                <span className="button-content-wrapper">
                                    <span className="button-text">
                                        <div className="row gap-2 p-1">
                                        <img src="/images/webinar/call.png" alt="" style={{width:"20px",height:"20px"}} className="mt-1"/>
                                         <span>SCHEDULE YOUR FREE CALL</span>
                                        </div>
                                        <span className="small">
                                         Join our family for freedom through fitness!
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <img className="arrow-image down-arrow" src="/images/webinar/down.png" alt="Down Arrow" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="margintop">
                <div className="gggg">
                    <div className="card">
                        <div className="rating-section">
                            <div className="image-rating row justify-content-center">
                                <div>
                                    <svg className="google-reviews__img" xmlns="http://www.w3.org/2000/svg" width="60px" height="62px" viewBox="0 0 60 62" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Google" fill-rule="nonzero">
                                                <path d="M60,31.3072761 C60,28.7706593 59.7984568,26.9195955 59.3622814,25 L31,25 L31,36.4490413 L47.6480196,36.4490413 C47.3125,39.2942869 45.5,43.57917 41.4721451,46.458445 L41.4156852,46.8417497 L50.3833142,53.9366673 L51.0046039,54 C56.7105196,48.6181377 60,40.6996586 60,31.3072761" id="Path" fill="#4285F4" /><path d="M30.5657629,62 C38.8970642,62 45.8912635,59.2297813 51,54.4515421 L41.2628153,46.8336198 C38.6571564,48.668815 35.1599385,49.9499666 30.5657629,49.9499666 C22.4058244,49.9499666 15.4801702,44.5138451 13.0113651,37 L12.6494943,37.0310322 L3.12456298,44.4756517 L3,44.8253605 C8.07422764,55.0053471 18.4970996,62 30.5657629,62" id="Path" fill="#34A853" /><path d="M13,37.2106585 C12.3634086,35.2805499 11.9949894,33.2123897 11.9949894,31.0755601 C11.9949894,28.9384929 12.3634086,26.8705703 12.9665073,24.9404616 L12.9496455,24.5293958 L3.52481299,17 L3.2164496,17.1508826 C1.17270482,21.3558724 0,26.0779022 0,31.0755601 C0,36.0732179 1.17270482,40.7950102 3.2164496,45 L13,37.2106585" id="Path" fill="#FBBC05" /><path d="M30.4481731,12.0497947 C36.2176437,12.0497947 40.1094593,14.577485 42.3286132,16.6898214 L51,8.10250167 C45.6744072,3.08173398 38.7439347,0 30.4481731,0 C18.4309922,0 8.05258203,6.99441421 3,17.1744008 L12.9345323,25 C15.4269324,17.4861549 22.3230431,12.0497947 30.4481731,12.0497947" id="Path" fill="#EB4335" /></g></g></svg>
                                    <p className="text-black text-center" style={{ marginRight: "10px", marginTop: "6px" }}>4.9</p>

                                </div>
                                <div className="stars">
                                    <p className="rating text-black mb-0">Google Rating</p>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                            </div>
                        </div>
                        <div className="reviews">100+ Reviews</div>

                    </div>

                    <div className="card">
                        <div className="featured-section">
                            <Slider {...settings}>
                                <div>
                                    <img
                                        src="/images/webinar/slim.webp"
                                        alt="Platform 1"
                                        className="platform-logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/webinar/spinex.webp"
                                        alt="Platform 2"
                                        className="platform-logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/webinar/fgiit.webp"
                                        alt="Platform 3"
                                        className="platform-logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/webinar/fwg-logo.png"
                                        alt="Platform 4"
                                        className="platform-logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/webinar/spine-align.webp"
                                        alt="Platform 4"
                                        className="platform-logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/webinar/stallon.webp"
                                        alt="Platform 4"
                                        className="platform-logo"
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="reviews">Trusted By</div>

                    </div>
                </div>
            </section>
            <section className="margintop testimonials-section webinar-gcs">
                <div className="container">
                    <h3
                        className="mb-0 text-center text-black mb-4 d-none d-md-block"
                        style={{ fontSize: "2.5rem", color: "black", fontWeight: "800" }}
                    >
                        The Proof Is Right In <span style={{ color: "#C6392D", fontWeight: "bold" }}>Front Of You:</span>
                    </h3>
                    <h3
                        className="mb-0 text-center text-black mb-4 d-block d-md-none"
                        style={{ fontSize: "30px", color: "#4c4c4c" }}
                    >
                        The Proof Is Right In <span style={{ color: "#C6392D", fontWeight: "bold" }}>Front Of You:</span>
                    </h3>
                    <h5
                        className="mb-0 text-center text-black d-none d-md-block mb-3"
                        style={{ fontSize: "1.2rem", color: "#4c4c4c", lineHeight: "30px" }}
                    >
                        We have a community of <span style={{ color: "#C6392D", fontWeight: "bold" }}>16,000+ students of fitness industry </span>from which many of them have acheived remarkable results after completing our Business Development Program
                    </h5>
                    <h5
                        className="mb-0 text-center text-black d-block d-md-none"
                        style={{ fontSize: "15px", color: "#4c4c4c", lineHeight: "30px" }}
                    >
                        We have a community of <span style={{ color: "#C6392D", fontWeight: "bold" }}>16,000+ students of fitness industry </span> from which many of them have acheived remarkable results after completing our Business Development Program
                    </h5>
                    <div className="row">
                        <div className="testimonial-card">
                            <div className="testimonial-media">
                                <img src="/images/webinar/cp.webp" alt="Webinar Success" />
                                <div className="video-btn">
                                    <a
                                        onClick={() => openVideoModal("https://www.youtube.com/watch?v=lwZDpNZAZ-s")}
                                        className="custom"
                                    >
                                        <span className="newthing">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="testimonial-profile">
                                <img src="/images/webinar/chirag.webp" alt="Kush R" className="profile-image" />

                                <div className="profile-info">
                                    <h3>Chirag Pandey</h3>
                                    <p className="role">Fitness Trainer</p>
                                    <a className="followers d-none d-md-block" href="https://www.instagram.com/chirag_pandey16/"><FontAwesomeIcon icon={faInstagram} /> 56.4K Followers</a>
                                    <a className="followers d-block d-md-none" href="https://www.instagram.com/chirag_pandey16/"><FontAwesomeIcon icon={faInstagram} /> 56.4K Followers</a>
                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <p>"This course changed my life! I boosted my income to ₹2.5 lakh/month, gained 50K followers, and generated massive revenue for my business."</p>
                            </div>
                        </div>
                        {/* <div className="testimonial-card">
              <div className="testimonial-media">
                <img src="/images/webinar/cc.webp" alt="Webinar Success" />
                <div className="video-btn">
                  <a
                    onClick={() => openVideoModal("https://www.youtube.com/watch?v=lwZDpNZAZ-s")}
                    className="custom"
                  >
                    <span className="newthing">
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="testimonial-profile">
                <img src="/images/webinar/chnad.webp" alt="Kush R" className="profile-image" />
                <div className="profile-info">
                  <h3>Chirag Chandleker</h3>
                  <p className="role">Fitness Trainer</p>
                  <a className="followers d-none d-md-block" href="https://www.instagram.com/chirag_chandlekar/"><FontAwesomeIcon icon={faInstagram} /> 752 Followers</a>
                  <a className="followers d-block d-md-none" href="https://www.instagram.com/chirag_chandlekar/"><FontAwesomeIcon icon={faInstagram} /> 752 Followers</a>
                </div>
              </div>
              <div className="testimonial-quote">
                <p> "From ₹15K to ₹1 lakh/month! These strategies helped me close more clients and completely transformed my business. Truly grateful!"</p>
              </div>
            </div> */}
                        <div className="testimonial-card">
                            <div className="testimonial-media">
                                <img src="/images/webinar/milan.webp" alt="Webinar Success" />
                                <div className="video-btn">
                                    <a
                                        onClick={() => openVideoModal("https://www.youtube.com/embed/AljwdDjKUw0?si=ADwERvxxAicqFg6c")}
                                        className="custom"
                                    >
                                        <span className="newthing">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="testimonial-profile">
                                <img src="/images/webinar/milan-modi.webp" alt="Kush R" className="profile-image" />
                                <div className="profile-info">
                                    <h3>Dr. Milan Modi</h3>
                                    <p className="role">Doctor</p>
                                    <a className="followers d-none d-md-block" href="https://www.instagram.com/dr.milanmodi/"><FontAwesomeIcon icon={faInstagram} /> 1337 Followers</a>
                                    <a className="followers d-block d-md-none" href="https://www.instagram.com/dr.milanmodi/"><FontAwesomeIcon icon={faInstagram} /> 1337 Followers</a>

                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <p>"This course tripled my income and helped me land a promotion as branch manager. I finally achieved my potential, and it's all thanks to GCS!"</p>
                            </div>
                        </div>
                        {/* <div className="testimonial-card">
              <div className="testimonial-media">
                <img src="/images/webinar/rushabh.webp" alt="Webinar Success" />
                <div className="video-btn">
                  <a
                    onClick={() => openVideoModal("ZYoKVIfbJzY")}
                    className="custom"
                  >
                    <span className="newthing">
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="testimonial-profile">
                <img src="/images/webinar/rush.webp" alt="Kush R" className="profile-image" />
                <div className="profile-info">
                  <h3>Rushabh Joshi</h3>
                  <p className="role">Fitness Trainer</p>
                  <a className="followers d-none d-md-block" href="https://www.instagram.com/rushabh.joshi53/"><FontAwesomeIcon icon={faInstagram} /> 987 Followers</a>
                  <a className="followers d-block d-md-none" href="https://www.instagram.com/rushabh.joshi53/"><FontAwesomeIcon icon={faInstagram} /> 987 Followers</a>

                </div>
              </div>
              <div className="testimonial-quote">
                <p>"The freelance marketing strategy skyrocketed my income to ₹50K+/month. My earnings are now growing steadily, thanks to this amazing course!"</p>
              </div>
            </div> */}
                        <div className="testimonial-card">
                            <div className="testimonial-media">
                                <img src="/images/webinar/satish-1.webp" alt="Webinar Success" />
                                <div className="video-btn">
                                    <a
                                        onClick={() => openVideoModal("https://youtube.com/shorts/sgpOd4Thk4E?si=rJLPci9XNhqbU9KL")}
                                        className="custom"
                                    >
                                        <span className="newthing">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="testimonial-profile">
                                <img src="/images/webinar/sarish.webp" alt="Kush R" className="profile-image" />
                                <div className="profile-info">
                                    <h3>Satish Nishad</h3>
                                    <p className="role">Fitness Trainer</p>
                                    <a className="followers d-none d-md-block" href="https://www.instagram.com/_nishadsatish/"><FontAwesomeIcon icon={faInstagram} /> 927 Followers</a>
                                    <a className="followers d-block d-md-none" href="https://www.instagram.com/_nishadsatish/"><FontAwesomeIcon icon={faInstagram} /> 927 Followers</a>

                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <p>"The freelance marketing strategy skyrocketed my income to ₹50K+/month. My earnings are now growing steadily, thanks to this amazing course!"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-media">
                                <img src="/images/webinar/kaushik-1.webp" alt="Webinar Success" />
                                <div className="video-btn">
                                    <a
                                        onClick={() => openVideoModal("https://www.youtube.com/shorts/Dh0ywhSHWrQ")}
                                        className="custom"
                                    >
                                        <span className="newthing">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="testimonial-profile">
                                <img src="/images/webinar/kaushik.webp" alt="Kaushik J" className="profile-image" />
                                <div className="profile-info">
                                    <h3>Kaushik Jadav</h3>
                                    <p className="role">Fitness Trainer</p>
                                    <a className="followers d-none d-md-block" href="https://www.instagram.com/_invincible_kaushik/"><FontAwesomeIcon icon={faInstagram} /> 1290 Followers</a>
                                    <a className="followers d-block d-md-none" href="https://www.instagram.com/_invincible_kaushik/"><FontAwesomeIcon icon={faInstagram} /> 1290 Followers</a>
                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <p>"I took my personal training career global, earning ₹60K/month, with international clients. The marketing, finance, and management training made all the difference!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="web-gcs mt-6 margintop">
                <div className="container-fluid">
                    <div className="container">
                        <h3
                            className="mb-0 text-center text-black mb-4 d-none d-md-block"
                            style={{ fontSize: "2.5rem", color: "black", fontWeight: "800" }}
                        >
                            Earn 6 figure income with our
                            <span style={{ color: "#C6392D", fontWeight: "bold" }}> "Business Development Program"</span>
                        </h3>
                        <h3
                            className="mb-0 text-center text-black mb-4 d-block d-md-none"
                            style={{ fontSize: "26px", color: "black" }}
                        >
                            Earn 6 figure income with our
                            <span style={{ color: "#C6392D", fontWeight: "bold" }}> "Business Development Program"</span>
                        </h3>
                        <h1 className="text-center text-black mb-4" style={{ fontSize: "1.2rem", color: "#4c4c4c", lineHeight: "25px" }}>
                            Building on our legacy as <span style={{ color: "#C6392D", fontWeight: "bold" }}>fitness industry pioneers,</span> we've empowered many aspiring professionals to turn their passion into a career, and we're excited to do the same for you</h1>
                        <div className="row">
                            <div className="steps">
                                <div className="step-header">
                                    <h3 className="text-center">MONTH 1</h3>
                                    <p className="text-center">Curriculum</p>
                                </div>
                                <div className="step-body text-center">
                                    <FontAwesomeIcon icon={faBook} className="step-icon" />
                                    <h5>Marketing</h5>
                                </div>
                                <div className="step-content">
                                    <h6>Creating Digital Infrastructure</h6>
                                    <ul className="a">
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Social Media Mastery:</span> Establish a powerful online presence.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Website Excellence: </span> Design and develop a professional website.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Content Creation:</span> Create compelling content that resonates.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Lead Generation: </span> Learn strategies to attract and retain clients.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Sales Mastery: </span> Close more deals with expert sales training.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="steps">
                                <div className="step-header">
                                    <h3 className="text-center">MONTH 2</h3>
                                    <p className="text-center">Curriculum</p>
                                </div>
                                <div className="step-body text-center">
                                    <FontAwesomeIcon icon={faBook} className="step-icon" />
                                    <h5>Management</h5>
                                </div>
                                <div className="step-content">
                                    <h6 className="text-center">Build a Winning Team </h6>
                                    <ul>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Team Management: </span> Lead your team to success.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Hiring & Training: </span> Find and develop the right talent.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Leadership & Soft Skills: </span> Cultivate the skills that inspire and motivate.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Business Research:  </span> How to do research of your business in your particular area.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Automation:  </span> Learn how to run your business while staying at home.</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="steps">
                                <div className="step-header">
                                    <h3 className="text-center">MONTH 3</h3>
                                    <p className="text-center">Curriculum</p>
                                </div>
                                <div className="step-body text-center">
                                    <FontAwesomeIcon icon={faBook} className="step-icon" />
                                    <h5>Finance</h5>
                                </div>
                                <div className="step-content">
                                    <h6 className="text-center"> Keep Your Business Profitable </h6>
                                    <ul>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Profit Maximization: </span> Identify & focus on high margin services</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Cost Optimization: </span> Identify & eliminate unnecessary costs</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Tax Management: </span> Understand and comply with tax laws and regulations.</li>
                                        <li><span style={{ color: "maroon", fontSize: "16px" }}>Financial Reports Mastery: </span> Profit & Loss Sheet, Cost Analysis sheet, Improve Financial efficiency & Balance sheet Maintain</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-gcs">
                <div className="container">
                    <h3
                        className="mb-0 text-center text-black mb-4 d-none d-md-block"
                        style={{ fontSize: "1.5rem", color: "black", fontWeight: "800" }}
                    >
                        Its your time to shine now with that
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> income goals</span> you've always wanted
                    </h3>
                    <h3
                        className="mb-0 text-center text-black mb-4 d-block d-md-none"
                        style={{ fontSize: "28px", color: "black" }}
                    >
                        Its your time to shine now with that
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> income goals</span> you've always wanted
                    </h3>
                    <h1 className="text-center text-black mb-4" style={{ fontSize: "1.2rem", color: "#4c4c4c", lineHeight: "30px" }}>
                        We are the pioneers of the fitness industry educators and we commit ourselves for the growth of the <span style={{ color: "#C6392D", fontWeight: "bold" }}>fitness industry in India since 2014</span>
                    </h1>
                    <div className="button-container">
                        <button className="animatedd-button">
                            <a href="/services/schedual-call" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                                Join Now
                            </a>
                        </button>
                    </div>
                </div>
            </section>
            <section className="page-gcs">
                <div className="container">
                    <h3
                        className="mb-0 text-center text-black mb-4 d-none d-md-block"
                        style={{ fontSize: "2.5rem", color: "black", fontWeight: "800" }}
                    >
                        Exclusive Bonuses Worth
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> ₹1.9 Lakh </span>
                    </h3>
                    <h3
                        className="mb-0 text-center text-black mb-4 d-block d-md-none"
                        style={{ fontSize: "28px", color: "black" }}
                    >
                        Exclusive Bonuses Worth
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> ₹1.9 Lakh </span>
                    </h3>
                    <h1 className="text-center text-black mb-4" style={{ fontSize: "1.2rem", color: "#4c4c4c", lineHeight: "30px" }}>
                        Transform your fitness business with our <span style={{ color: "#C6392D", fontWeight: "bold" }}>exclusive bonuses, carefully crafted </span> to enhance your success and accelerate your growth.
                    </h1>

                    <h2 style={{ fontSize: "1.9rem" }} className="text-center mt-4">
                        Bonus 1 ( Inclusive in our program) : <span style={{ color: "#C6392D", fontWeight: "bold" }}>ERP Software</span>
                    </h2>
                    <p style={{ fontSize: "1.3rem" }} className="text-center">Value: ₹24,000/year</p>
                    <div className="d-none d-md-block">
                        <div className="row page-wrapper">
                            <div className="page-intro col-md-6">
                                <h2 style={{ fontSize: "1.8rem" }}>
                                    Efficient <span style={{ color: "#C6392D", fontWeight: "bold" }}>Invoice & Expense </span>Management
                                </h2>
                                Unlock the full potential of ERP software to manage your invoices and track expenses effortlessly, streamlining your business operations.

                            </div>
                            <div className="col-md-6">
                                <img src="/images/webinar/web-2.webp" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className=" d-block d-md-none">
                        <div className="row page-wrapper">
                            <div className="col-md-6">
                                <img src="/images/webinar/web-2.webp" alt="" />
                            </div>
                            <div className="page-intro col-md-6">
                                <h2 style={{ fontSize: "1.8rem" }}>
                                    Efficient <span style={{ color: "#C6392D", fontWeight: "bold" }}>Invoice & Expense </span>Management
                                </h2>
                                Unlock the full potential of ERP software to manage your invoices and track expenses effortlessly, streamlining your business operations.

                            </div>

                        </div>

                    </div>
                    <div className="page-wrapper row">
                        <div className="col-md-6">
                            <img src="/images/webinar/web-1.webp" alt="" />
                        </div>
                        <div className="page-intro col-md-6">
                            <h2 style={{ fontSize: "1.8rem" }}>
                                <span style={{ color: "#C6392D", fontWeight: "bold" }}>Revenue Management</span> Made Easy
                            </h2>
                            <p>Gain access to revenue management features that help you monitor and optimize your income streams, all included in your free ERP package.</p>
                        </div>

                    </div>

                    <div className="d-none d-md-block">
                        <div className="page-wrapper row">

                            <div className="page-intro col-md-6">
                                <h2 style={{ fontSize: "1.8rem" }}>
                                    Detailed <span style={{ color: "#C6392D", fontWeight: "bold" }}>Sales Reports & Business</span> Overview</h2>
                                <p>Keep an eye on your business's performance with comprehensive sales reports and an overall business overview, ensuring you stay on top of your growth.</p>
                            </div>
                            <div className="col-md-6">
                                <img src="/images/webinar/web-3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none">
                        <div className="page-wrapper row">
                            <div className="col-md-6">
                                <img src="/images/webinar/web-3.webp" alt="" />
                            </div>
                            <div className="page-intro col-md-6">
                                <h2 style={{ fontSize: "1.8rem" }}>
                                    Detailed <span style={{ color: "#C6392D", fontWeight: "bold" }}>Sales Reports & Business</span> Overview</h2>
                                <p>Keep an eye on your business's performance with comprehensive sales reports and an overall business overview, ensuring you stay on top of your growth.</p>
                            </div>

                        </div>
                    </div>


                    <div className="page-wrapper row">
                        <div className="col-md-6">
                            <img src="/images/webinar/web-4.webp" alt="" />
                        </div>
                        <div className="page-intro col-md-6">
                            <h2 style={{ fontSize: "1.8rem" }}>
                                <span style={{ color: "#C6392D", fontWeight: "bold" }}>Manage Clients </span> & Generate Exercise Plans</h2>
                            <p>Effortlessly manage your clients and create personalized exercise plans using our cutting-edge ERP system, ensuring your clients stay on track with their fitness goals.</p>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="container">
                    <h2 style={{ fontSize: "1.9rem" }} className="text-center mt-4 text-black">
                        Bonus 2 ( Inclusive in our program) : <span style={{ color: "#C6392D", fontWeight: "bold" }}>Your Own Website</span>
                    </h2>
                    <p style={{ fontSize: "1.3rem", color: "black !important" }} className="text-center text-black">Value: ₹25,000</p>
                    <div className="card-wrapper row justify-content-between">
                        <div className="cardBox col-md-3 mt-3">
                            <div className="carddd">
                                <FontAwesomeIcon icon={faPencilRuler} className="card-icon" />
                                <h2>Custom Design</h2>
                                <div className="content">
                                    <h3>Custom Design</h3>
                                    <p>Receive a professionally designed website that reflects your brand's identity, engaging your target audience effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardBox col-md-3 mt-3">
                            <div className="carddd">
                                <FontAwesomeIcon icon={faChartLine} className="card-icon" />
                                <h2>SEO Optimized</h2>
                                <div className="content">
                                    <h3>SEO Optimized</h3>
                                    <p>Your website will be fully optimized for search engines, enhancing your online visibility and attracting more traffic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardBox col-md-3 mt-3">
                            <div className="carddd">
                                <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
                                <h2>Mobile Responsive</h2>
                                <div className="content">
                                    <h3>Mobile Responsive</h3>
                                    <p>In today's mobile-first world, your site will be responsive across all devices, offering a seamless experience to all users.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                <div className="container">
                    <h2 style={{ fontSize: "1.9rem" }} className="text-center mt-4 text-black">
                        Bonus 3 ( Inclusive in our program) : <span style={{ color: "#C6392D", fontWeight: "bold" }}>Digital Marketing Service ( 3 Months )</span>
                    </h2>
                    <p style={{ fontSize: "1.3rem" }} className="text-center text-black">Value: ₹1,50,000</p>
                    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">

                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
                                </div>
                                <h3>Social Media Marketing</h3>
                                <p>
                                    We'll manage and grow your social media presence, creating compelling content that resonates with your audience and drives engagement.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
                                </div>
                                <h3>Content Creation</h3>
                                <p>
                                    Receive high-quality content tailored to your brand, including blog posts, videos, and graphics that tell your story and convert visitors into customers.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
                                </div>
                                <h3>Paid Advertising</h3>
                                <p>
                                    Maximize your ROI with targeted paid ads across platforms like Facebook, Instagram, and Google, designed to reach your ideal customers and drive sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-gcs">
                <div className="container">
                    <h3
                        className="mb-0 text-center text-black mb-4 d-none d-md-block"
                        style={{ fontSize: "2.5rem", color: "black", fontWeight: "800" }}
                    >
                        Bringing you
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> 10 Years of Expertise </span>
                    </h3>
                    <h3
                        className="mb-0 text-center text-black mb-4 d-block d-md-none"
                        style={{ fontWeight: "700", fontSize: "28px" }}
                    >
                        Bringing you
                        <span style={{ color: "#C6392D", fontWeight: "bold" }}> 10 Years of Expertise </span>
                    </h3>

                </div>

                <div className="d-none d-md-block">
                    <Slider {...CourseSpartans}>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2014.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2015.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2019.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2020.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2021.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2022.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2024.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2024-1.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="d-block d-md-none">
                    <Slider {...settings2}>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2014.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2015.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2019.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2020.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2021.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2022.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2024.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                        <div className="item  col-12">
                            <div className="review-box">
                                <img
                                    src="/images/webinar/2024-1.webp"
                                    style={{ borderRadius: "10px" }}
                                    alt="Certificate"
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="page-gcs">
                <div className="container">
                    <div className="page-wrapper row">

                        <div className="page-intro col-md-6">
                            <h2 style={{ lineHeight: "35px" }}>
                                Incredible Bonuses with <span style={{ color: "#C6392D", fontWeight: "bold" }}>GCS's Business Transformation Course! </span></h2>
                            <h5 className="mb-3">Exclusive Bonuses:</h5>

                            <p>Free Website for Your Business (Worth ₹15,000)</p>
                            <p>Free ERP Software (Worth ₹24,000)</p>
                            <p>Free Marketing Services (Worth ₹50,000)</p>

                        </div>
                        <div className="col-md-6">
                            <img src="/images/webinar/about.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="margintop gcs-review">
                <div className="container-fluid">
                    <div className="container">
                        <h3 className="mb-0 text-center text-black mb-4 d-none d-md-block" style={{ fontWeight: "700", fontSize: "30px" }}>
                            Google <span style={{ color: "#C6392D", fontWeight: "bold" }}>Reviews</span>
                        </h3>
                        <h3 className="mb-0 text-center text-black mb-4 d-block d-md-none" style={{ fontWeight: "700", fontSize: "28px" }}>
                            Google <span style={{ color: "#C6392D", fontWeight: "bold" }}>Reviews</span>
                        </h3>
                        <div className="row mt-md-5">
                            <div className="col-md-6">
                                <div className="testimonial-box">
                                    <div className="box-top">
                                        <div className="profile">
                                            <div className="profile-img">
                                                <img
                                                    src="/images/webinar/spinex.webp"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="name-user">
                                                <p className="text-black">Spinex Global</p>
                                            </div>
                                        </div>
                                        <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                        </div>
                                    </div>
                                    <div className="client-comment">
                                        <p>
                                            "The Business Development Program by GCS was a game-changer for us. We optimized our revenue streams, increased client engagement, and managed our business more efficiently using the ERP software. Our income skyrocketed, and our online presence grew tremendously. This program is a must for anyone in the fitness industry looking to scale!"💯
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
                                                    src="/images/webinar/slim.webp"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="name-user">
                                                <p className="text-black">SlimFit Physio Care</p>
                                            </div>
                                        </div>
                                        <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                            <FontAwesomeIcon icon={faStar} className="ml-2" />
                                        </div>
                                    </div>
                                    <div className="client-comment">
                                        <p>
                                            "GCS's program provided us with the perfect blend of marketing, management, and financial strategies. We went from a local clinic to attracting clients globally, all thanks to their guidance. The ERP software and digital marketing services were invaluable in helping us manage operations seamlessly and grow our revenue beyond expectations!"
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="page-gcs">
                <div className="container">
                    <div className="accordion__wrapper">
                        <h3 className="mb-0 text-center text-black mb-4 d-none d-md-block" style={{ fontWeight: "700", fontSize: "30px" }}>
                            Frequently Asked <span style={{ color: "#C6392D", fontWeight: "bold" }}>Questions</span>
                        </h3>
                        <h3 className="mb-0 text-center text-black mb-4 d-block d-md-none" style={{ fontWeight: "700", fontSize: "28px" }}>
                            Frequently Asked <span style={{ color: "#C6392D", fontWeight: "bold" }}>Questions</span>
                        </h3>
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion">
                                <div className="accordion__header" onClick={() => toggleAccordion(index)}>
                                    <h2 className="accordion__question">{item.question}</h2>
                                    <span className={`accordion__icon ${activeIndex === index ? 'accordion__icon--open' : ''}`}>
                                        <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
                                    </span>
                                </div>
                                <div className={`accordion__content ${activeIndex === index ? 'accordion__content--open' : ''}`}>
                                    <p className="accordion__answer">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="social-media">
                        <a href="https://www.instagram.com/gomziconsultingservices/" className="social-icon"><FontAwesomeIcon icon={faInstagram} className="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100090555890586" className="social-icon"><FontAwesomeIcon icon={faFacebook} className="" /></a>
                        <a href="https://www.youtube.com/@gomziconsultingservices/featured" className="social-icon"><FontAwesomeIcon icon={faYoutube} className="" /></a>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Your GCS. All rights reserved.</p>
                </div>
            </footer>


            <div style={{
                backgroundColor: "#C6392D",
                color: "white",
                fontWeight: "bold",
                boxShadow: "none",
                position: "fixed",
                zIndex: "9999",
                width: '100%',
                bottom: "0px",
                padding: "15px",
                textAlign: "center"
            }}>
                <div className="row justify-content-center gap-2">
                    <img src="/images/webinar/book.png" alt="" style={{ width: '30px', height: "30px"}} />
                    <a
                        href="/services/schedual-call"
                        className="text-white"
                    >
                        Schedule Your Free Call Here !
                    </a>
                </div>
            </div>

            <Modal show={isVideoOpen} onHide={closeVideoModal} centered>
                <div className="modal-dialog m-0" role="document">
                    <div className="modal-content bg-changes bg-fwg-popup">
                        <div className="modal-body mb-0 p-0">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src={videoUrl}
                                    title="YouTube video player"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal show={showw} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="text-black" style={{ color: 'black' }}>
                        {formSubmitted ? 'Watch Video' : 'Please Fill Out the Form'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ position: 'relative' }}>
                    <Form onSubmit={handleFormSubmit}>
                        {/* Form Fields */}
                        <Form.Group controlId="name" className="mt-3">
                            <Form.Label className="text-black">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    padding: '12px',
                                    transition: 'border-color 0.3s',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                }}
                                onFocus={(e) => (e.target.style.borderColor = '#ff7504')}
                                onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="mt-3">
                            <Form.Label className="text-black">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    padding: '12px',
                                    transition: 'border-color 0.3s',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                }}
                                onFocus={(e) => (e.target.style.borderColor = '#ff7504')}
                                onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                            />
                        </Form.Group>
                        {/* Number Input Field */}
                        <Form.Group controlId="number" className="mt-3">
                            <Form.Label className="text-black">Enter a Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter a number"
                                required
                                value={mobile}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    padding: '12px',
                                    transition: 'border-color 0.3s',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                }}
                                onFocus={(e) => (e.target.style.borderColor = '#ff7504')}
                                onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                            />
                        </Form.Group>
                        <button type="submit"
                            className="mt-4 submit-button"
                            onClick={handleApplyForInquiry}
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleClosee}
                            style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '15px',
                                backgroundColor: '#C6392D',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                            }}
                            aria-label="Close Video"
                        >
                            &times;
                        </button>
                    </Form>

                </Modal.Body>
            </Modal>


        </body>
    );
}
