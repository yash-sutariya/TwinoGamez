// eslint-disable-next-line @next/next/no-img-element
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/landing.css";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/media.css";
import "../js/popper.min.js";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faTrophy,
  faAnchor,
  faGears,
  faPaperPlane,
  faPeopleRoof,
  faChartPie,
  faClock,
  faLayerGroup,
  faCodeCompare,
  faDiamond,
  faHandHoldingHeart,
  faUserPlus,
  faArrowUpRightDots,
  faParachuteBox,
  faPeopleCarryBox,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { submitForm } from "@/utils/submitForm";
import Swal from "sweetalert2";

export default function Home() {
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
        "Gomzi consulting services",
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
    arrows: false,
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
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
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

  const settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
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

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
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
  const CourseSpartans = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        },
      },
    ],
  };

  useEffect(() => {
    $(document).ready(function () {
      $(".content-box-1").click(function () {
        $(".content-box-1").addClass("compnay-select-active");
        $(
          ".content-box-2, .content-box-3, .content-box-4, .content-box-5, .content-box-6"
        ).removeClass("compnay-select-active");
        $(".content-1").show();
        $(".content-2, .content-3, .content-4, .content-5, .content-6").hide();
      });
      $(".content-box-2").click(function () {
        $(".content-box-2").addClass("compnay-select-active");
        $(
          ".content-box-1, .content-box-3, .content-box-4, .content-box-5, .content-box-6"
        ).removeClass("compnay-select-active");
        $(".content-2").show();
        $(".content-1, .content-3, .content-4, .content-5, .content-6").hide();
      });
      $(".content-box-3").click(function () {
        $(".content-box-3").addClass("compnay-select-active");
        $(
          ".content-box-2, .content-box-1, .content-box-4, .content-box-5"
        ).removeClass("compnay-select-active");
        $(".content-3").show();
        $(".content-2, .content-1, .content-4, .content-5, .content-6").hide();
      });
      $(".content-box-4").click(function () {
        $(".content-box-4").addClass("compnay-select-active");
        $(
          ".content-box-2, .content-box-3, .content-box-1, .content-box-5, .content-box-6"
        ).removeClass("compnay-select-active");
        $(".content-4").show();
        $(".content-2, .content-3, .content-1, .content-5, .content-6").hide();
      });
      $(".content-box-5").click(function () {
        $(".content-box-5").addClass("compnay-select-active");
        $(
          ".content-box-2, .content-box-3, .content-box-1, .content-box-4, .content-box-6"
        ).removeClass("compnay-select-active");
        $(".content-5").show();
        $(".content-2, .content-3, .content-1, .content-4, .content-6").hide();
      });
      $(".content-box-6").click(function () {
        $(".content-box-6").addClass("compnay-select-active");
        $(
          ".content-box-2, .content-box-3, .content-box-1, .content-box-4, .content-box-5"
        ).removeClass("compnay-select-active");
        $(".content-6").show();
        $(".content-2, .content-3, .content-1, .content-5, .content-4").hide();
      });
    });
  }, []);

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   submitForm(event);
  // };
  const values = [
    {
      title: "Commitment to Excellence",
      iccon: { faDiamond },
      description: `We strive for the highest standards in everything we do. Our dedication to excellence drives us to deliver top-quality solutions and services, ensuring that our clients achieve their goals with precision and efficiency.`,
    },
    {
      title: "Customer-Centric Approach",
      iccon: { faDiamond },
      description: `Our clients are at the heart of our business. We listen to your needs, understand your challenges, and tailor our solutions to provide exceptional value and support. Your satisfaction and success are our top priorities.`,
    },
    {
      title: "Innovation and Growth",
      iccon: { faDiamond },
      description: `We embrace innovation to stay ahead of industry trends and continuously improve our offerings. By fostering a culture of creativity and growth, we ensure that our solutions evolve to meet the ever-changing needs of the fitness industry.`,
    },
    {
      title: "Integrity and Transparency",
      iccon: { faDiamond },
      description: `We conduct our business with the utmost integrity and transparency. We believe in honest communication, ethical practices, and building trust with our clients and partners. Our transparent approach ensures that you always know where you stand.`,
    },
    {
      title: "Collaboration and Teamwork",
      iccon: { faDiamond },
      description: `We believe in the power of collaboration and teamwork. Our diverse team works together harmoniously to achieve common goals, leveraging each member’s expertise and perspectives to drive success.`,
    },
    {
      title: "Passion for Fitness",
      iccon: { faDiamond },
      description: `Our passion for fitness and wellness fuels our mission to support and enhance gym operations. We are dedicated to helping fitness professionals thrive and make a positive impact on their communities.`,
    },
  ];

  const games = [
    {
      title: "Help Vikings in love affairs!",
      link: "https://www.tiguandesign.com/gameleon/dark/help-vikings-in-love-affairs/",
      image:
        "/images/games/https___apptrigger.com_files_2020_10_Gears-5-302x180.jpg",
    },
    {
      title: "Our friends are coming back again!",
      link: "https://www.tiguandesign.com/gameleon/dark/our-friends-are-coming-back-again/",
      image: "/images/games/outridersutsettestil_3280183b-302x180.jpg",
    },
    {
      title: "A great theme for your gaming site",
      link: "https://www.tiguandesign.com/gameleon/dark/a-great-theme-for-your-gaming-site/",
      image: "/images/games/The-Ascent-Keyart-LANDSCAPE-Logo-302x180.jpg",
    },
    {
      title: "I can take you as far as Anchorhead",
      link: "https://www.tiguandesign.com/gameleon/dark/i-can-take-you-as-far-as-anchorhead/",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
    },
  ];

  const highlights = [
    {
      title: "Fortnite Food Truck Locations",
      category: "Arcade",
      image:
        "/images/games/Fortnite_untitled-page_10StW_Evergreens_Red_NewsHeader-1920x1080-6d3fdd4fdabd9e97336bdd012776eb05f5e91ce9-302x180.jpg",
      link: "/game-page",
    },
    {
      title: "The Ability to Destroy a Car",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "/game-page",
    },
    {
      title: "A Rune 2 Patch is Finally Coming Now",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "/game-page/",
    },
    {
      title: "Epic’s Weekly Free Games",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "/game-page",
    },
  ];

  const posts = [
    {
      title: "The New Pop Culture Optimism",
      date: "Feb 15, 2021",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
    {
      title: "Game of the Year 2021",
      date: "Oct 14, 2020",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
    {
      title: "My Favorite Hotel Game",
      date: "Oct 14, 2020",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
    {
      title: "One Side of This Galaxy",
      date: "Oct 14, 2020",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
    {
      title: "May the Force Be With You",
      date: "Jul 14, 2020",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
    {
      title: "Doom Eternal Has a New Trailer",
      date: "Jun 25, 2020",
      image: "/images/games/yahttvis7wy31-302x180.jpg",
      link: "#",
    },
  ];

 const WeeklyGames = [
  "/game-logo-webp/1.webp",
  "/game-logo-webp/2.webp",
  "/game-logo-webp/3.webp",
  "/game-logo-webp/4.webp",
  "/game-logo-webp/5.webp",
  "/game-logo-webp/6.webp",
  "/game-logo-webp/7.webp",
  "/game-logo-webp/8.webp",
  "/game-logo-webp/9.webp",
  "/game-logo-webp/10.webp",
  "/game-logo-webp/11.webp",
  "/game-logo-webp/12.webp",
  "/game-logo-webp/13.webp",
  "/game-logo-webp/14.webp",
  "/game-logo-webp/15.webp",
  "/game-logo-webp/16.webp",
  "/game-logo-webp/17.webp",
  "/game-logo-webp/18.webp",
  "/game-logo-webp/19.webp",
  "/game-logo-webp/20.webp",
  "/game-logo-webp/21.webp",
  "/game-logo-webp/22.webp",
  "/game-logo-webp/23.webp",
  "/game-logo-webp/24.webp",
  "/game-logo-webp/25.webp",
  "/game-logo-webp/26.webp"
];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="background-wrapper">
        <img src="/images/nature.jpg" alt="" className="background-image" />
        <div className="background-overlay"></div>
      </div>


      <Header />
      <div className="container-fluid">
        <div className="container background p-2 px-4">
          <div className="row g-0 flex-wrap">
            <div className="col-lg-8 col-12 p-0">
              <div className={`card large`}>
                <Image
                  src={"/images/games/6-610x420.png"}
                  fill
                  alt={"6-610x420.png"}
                  className={"image"}
                />
                <div className={"overlay"}>
                  <h1 className="text-lg md:text-xl text-white font-bold uppercase">
                    Mirror’s Edge refines the game
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="row g-0 p-0">
                {games.map((game, index) => (
                  <div key={index} className="col-6 p-0">
                    <div
                      className="card position-relative"
                      style={{ height: "200px", overflow: "hidden" }}
                    >
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          padding: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        <p className="mb-0">{game.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white container-fluid ">
        <div className="container p-3 mx-auto px-4 background">
          <div className="flex justify-between items-center mb-6 bg-black p-3">
            <h1 className="text-lg sm:text-xl font-bold">
              <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                Today Highlights
              </span>
              <span className="text-danger fw-bold fst-italic ms-2">Top</span>
            </h1>
            <Link href="https://www.tiguandesign.com/gameleon/dark/category/arcade/">
              <div className="bg-red-600 text-white px-3 py-1 text-xs cursor-pointer font-semibold uppercase px-4 py-3">
                view all
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="relative group overflow-hidden bg-dark p-2"
              >
                <Link href={item.link}>
                  <div className="relative w-full h-[220px] sm:h-[200px] md:h-[240px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <p className="text-xm  font-semibold text-white uppercase">
                        {item.category}
                      </p>
                      <h2 className="text-base sm:text-lg font-bold uppercase text-white leading-tight">
                        {item.title}
                      </h2>
                    </div>
                    <div className="absolute bottom-4 right-4 z-10 ">
                      <button className="flex items-center bg-[#1a1a1a] text-white text-sm font-bold uppercase hover:bg-red-500  transition-colors duration-100">
                        <span className="px-4" style={{ fontFamily: "roboto" }}>
                          Play
                        </span>
                        <span className="w-px h-12 bg-white/40"></span>
                        <span className="px-4 text-3xl">&#8250;</span>{" "}
                        {/* › character */}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-white container-fluid  ">
        <div className="container py-3 mx-auto px-4 background">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 bg-black p-3">
            <h1 className="text-lg sm:text-xl font-bold ">
              <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
                Popular
              </span>
              <span className="text-danger fw-bold fst-italic ms-2">HOT</span>
            </h1>
            <a
              href="https://www.tiguandesign.com/gameleon/dark/category/defense/"
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-3 uppercase font-bold"
            >
              View All
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-dark p-2 rounded overflow-hidden shadow-md cursor-pointer"
              >
                <a href={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-3">
                  <h2 className="text-lg font-semibold mb-1 hover:text-red-400 transition duration-200">
                    <a href={post.link} className="text-white">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-sm" style={{ color: "#f63a3a" }}>
                    {post.date}
                    <span className="text-gray-400 ml-2">- No Comments</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container text-white py-4 rounded background">
          <h1 className="text-lg sm:text-xl font-bold mb-6 bg-black p-3">
            <span className="text-white mr-2 border-l-4 border-red-600 pl-2">
              Weekly Games
            </span>
            <span className="text-danger fw-bold fst-italic ms-2">BEST</span>
          </h1>

          <div className="d-flex flex-wrap  justify-content-center gap-6">
            {WeeklyGames.map((src, index) => (
              <div
                key={index}
                className="rounded bg-dark p-1 overflow-hidden m-1 cursor-pointer"
                style={{
                  width: "80px",
                  height: "80px",
                  flex: "0 0 auto",
                }}
              >
                <Image
                  src={src}
                  alt={`Game ${index + 1}`}
                  width={60}
                  height={60}
                  className="img-fluid rounded"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
