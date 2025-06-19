// eslint-disable-next-line @next/next/no-img-element
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/landing.css";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
    // {
    //   title: "Sustainability and Responsibility",
    //   iccon: {faDiamond},
    //   description: `We are committed to sustainability and responsible business practices. Our solutions are designed with environmental considerations in mind, and we strive to minimize our impact while contributing positively to the industry and society.`,
    // },
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
      link: "https://www.tiguandesign.com/gameleon/dark/fortnite-food-truck-locations/",
    },
    {
      title: "The Ability to Destroy a Car",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "https://www.tiguandesign.com/gameleon/dark/the-ability-to-destroy-a-car/",
    },
    {
      title: "A Rune 2 Patch is Finally Coming Now",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "https://www.tiguandesign.com/gameleon/dark/a-rune-2-patch-is-finally-coming-now/",
    },
    {
      title: "Epic’s Weekly Free Games",
      category: "Arcade",
      image:
        "/images/games/11551431038icp1zq8vwyilktwlu2cizwmzgrlscovzt98mmdhbtvhchclsdiq7z6yiiwiimlwt6luk7auwpbt8bicin-3-610x349.jpg",
      link: "https://www.tiguandesign.com/gameleon/dark/epics-weekly-free-games/",
    },
  ];

  const posts = [
    {
      title: "The New Pop Culture Optimism",
      date: "Feb 15, 2021",
      image: "/images/games/blog-g-30-610x349.jpg",
      link: "#",
    },
    {
      title: "Game of the Year 2021",
      date: "Oct 14, 2020",
      image:
        "/images/games/Fortnite_blog_e3-2019_E32019_Booth_Announce_Social_BlogHeader-1920x1080-aab86610daa3a8a93be7e42859b793ef0fffb2e1-302x180.jpg",
      link: "#",
    },
    {
      title: "My Favorite Hotel Game",
      date: "Oct 14, 2020",
      image: "/images/games/blog-g-30-610x349.jpg",
      link: "#",
    },
    {
      title: "One Side of This Galaxy",
      date: "Oct 14, 2020",
      image:
        "/images/games/Fortnite_blog_e3-2019_E32019_Booth_Announce_Social_BlogHeader-1920x1080-aab86610daa3a8a93be7e42859b793ef0fffb2e1-302x180.jpg",
      link: "#",
    },
    {
      title: "May the Force Be With You",
      date: "Jul 14, 2020",
      image: "/images/games/blog-g-30-610x349.jpg",
      link: "#",
    },
    {
      title: "Doom Eternal Has a New Trailer",
      date: "Jun 25, 2020",
      image:
        "/images/games/Fortnite_blog_e3-2019_E32019_Booth_Announce_Social_BlogHeader-1920x1080-aab86610daa3a8a93be7e42859b793ef0fffb2e1-302x180.jpg",
      link: "#",
    },
  ];

  const WeeklyGames = [
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",
    "/images/games/fortnite-tease-1222x640-1-150x150.png",

    // Add all your image paths here...
  ];

  // footer

  const tags = [
    "ARCADE",
    "HTML5",
    "CARS",
    "AVENTURE",
    "RACING",
    "WORDPRESS",
    "GIRLS",
    "GAMES",
  ];

  const RecentPosts = [
    {
      title: "New Battlefield Season Starts Soon",
      date: "Feb 25, 2021",
      plays: 4971,
    },
    {
      title: "Our Highest Review Scores of 2020",
      date: "Feb 25, 2021",
      plays: 4976,
    },
    {
      title: "This Game will Keep You up All Night",
      date: "Feb 25, 2021",
      plays: 4996,
    },
  ];

  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <section className="margintop">
        <div className="td-right-wrap">
          <div className="td-right-icons">
            <ul id="menu-listing" className="right-menu">
              <li
                id="menu-item-372"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-372"
              >
                <a href="https://www.tiguandesign.com/gameleon/dark/all-games-list/">
                  <i className="fa fa-clock"></i>
                  <span className="fontawesome-text"> Latest</span>
                </a>
              </li>
              <li
                id="menu-item-371"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-371"
              >
                <a href="https://www.tiguandesign.com/gameleon/dark/most-popular-games/">
                  <i className="fa fa-star"></i>
                  <span className="fontawesome-text"> Popular</span>
                </a>
              </li>
              <li
                id="menu-item-373"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-373"
              >
                <a href="https://www.tiguandesign.com/gameleon/dark/most-played-games/">
                  <i className="fa fa-fire"></i>
                  <span className="fontawesome-text"> Hot</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="top-bar" className="bg-[#161616] h-auto shadow-md w-full">
          <div className="container">
            <div className="flex justify-between items-center">
              {/* Hamburger for Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-xl md:hidden"
              >
                <i className="fas fa-bars"></i>
              </button>

              {/* Logo or Home (optional mobile center title) */}
              <div className="text-white text-lg md:hidden font-bold">
                <i className="fa fa-gamepad mr-2"></i>Gamelon
              </div>

              {/* Search Icon */}
              <div className="text-white md:hidden">
                <i className="fas fa-search text-xl"></i>
              </div>

              {/* Navigation - Desktop */}
              <nav className="hidden md:flex space-x-2 items-center">
                <a
                  href="/"
                  className="bg-red-600 text-white px-3 py-2 flex items-center space-x-2 rounded-sm"
                >
                  <i className="fa fa-home"></i>
                  <span className="uppercase">Home</span>
                </a>
                <a
                  href="/category/arcade"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-gamepad"></i>
                  <span className="uppercase">Arcade</span>
                </a>
                <a
                  href="/category/adventure"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-bomb"></i>
                  <span className="uppercase">Adventure</span>
                </a>
                <a
                  href="/category/action"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-car-crash"></i>
                  <span className="uppercase">Action</span>
                </a>
                <a
                  href="/most-played-games"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-fire"></i>
                  <span className="uppercase">Most Played</span>
                </a>
                <a
                  href="#"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-mobile-alt"></i>
                  <span className="uppercase">Game Format</span>
                  <i className="fa fa-caret-down ml-1"></i>
                </a>
                <div className="text-white ">
                  <i className="fas fa-search cursor-pointer hover:text-red-500 text-xl "></i>
                </div>
              </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <div className="flex flex-col mt-3 space-y-1 md:hidden">
                <a
                  href="/"
                  className="bg-red-600 text-white px-3 py-2 flex items-center space-x-2"
                >
                  <i className="fa fa-home"></i>
                  <span className="uppercase">Home</span>
                </a>
                <a
                  href="/category/arcade"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-gamepad"></i>
                  <span className="uppercase">Arcade</span>
                </a>
                <a
                  href="/category/adventure"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-bomb"></i>
                  <span className="uppercase">Adventure</span>
                </a>
                <a
                  href="/category/action"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-car-crash"></i>
                  <span className="uppercase">Action</span>
                </a>
                <a
                  href="/most-played-games"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-fire"></i>
                  <span className="uppercase">Most Played</span>
                </a>
                <a
                  href="#"
                  className="text-white px-3 py-2 flex items-center space-x-2 hover:text-red-500"
                >
                  <i className="fa fa-mobile-alt"></i>
                  <span className="uppercase">Game Format</span>
                  <i className="fa fa-caret-down ml-1"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <div className="container-fluid">
        <div id="td-modular-slider" className="mt-4 text-white container ">
          <div className="flex flex-col md:flex-row md:gap-0">
            
            <div className="relative w-full h-[220px] md:w-[610px] md:h-[349px] overflow-hidden">
              <Link href="https://www.tiguandesign.com/gameleon/dark/mirrors-edge-refines-the-game/">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/games/6-610x420.png"
                    alt="Mirror’s Edge"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                  />
                  <div className="absolute inset-0 bg-black/10 z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h1 className="text-lg md:text-xl text-white font-bold uppercase">
                      Mirror’s Edge refines the game
                    </h1>
                  </div>
                </div>
              </Link>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[448px] h-auto gap-0">
              {smallPosts.map((post) => (
                <div
                  key={post.title}
                  className="relative w-full h-[160px] md:h-[174px]"
                >
                  <Link href={post.link}>
                    <div className="relative w-full h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                      />
                      <div className="absolute inset-0 bg-black/5 z-10" />
                      <div className="absolute bottom-2 left-2 z-20">
                        <h2 className="text-xs text-white md:text-sm font-semibold leading-tight uppercase">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className={`container-fluid`}>
        <div className="container p-0">
        <div className="row g-0 flex-wrap">
          {/* Left large image block */}
          <div className="col-lg-8 col-12">
            <div className={`card large`}>
              <Image
                src={"/images/games/6-610x420.png"}
                fill
                alt={"6-610x420.png"}
                className={'image'}
              />
              <div className={'overlay'}>
                <h1 className="text-lg md:text-xl text-white font-bold uppercase">
                      Mirror’s Edge refines the game
                    </h1>
              </div>
            </div>
          </div>

          {/* Right smaller blocks */}
          <div className="col-lg-4 col-12 p-0">
            <div className="row g-0 p-0">
              {games.map((game, index) => (
                <div key={index} className="col-6 col-sm-6 col-lg-6 col-xxl-6 p-0">
                  <div className={"card"}>
                    <Image
                      src={game.image}
                      fill
                      alt={game.title}
                      className={'image'}
                    />
                    <div className={'overlaySmall'}>
                      <p>{game.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="text-white py-6">
        <div className="container  py-3 mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="d-flex align-items-center mb-3">
              <span className="text-danger fs-4 fw-bold me-2">|</span>
              Today Highlights
              <span className="text-danger fw-bold fst-italic ms-2">top</span>
            </h2>
            <Link href="https://www.tiguandesign.com/gameleon/dark/category/arcade/">
              <div className="bg-red-600 text-white px-3 py-1 text-xs cursor-pointer font-semibold uppercase">
                view all
              </div>
            </Link>
          </div>

          {/* Grid of Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {highlights.map((item) => (
              <div key={item.title} className="relative group overflow-hidden">
                <Link href={item.link}>
                  <div className="relative w-full h-[220px] sm:h-[200px] md:h-[240px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <p className="text-xm  font-semibold text-white uppercase">
                        {item.category}
                      </p>
                      <h2 className="text-base sm:text-lg font-bold uppercase text-white leading-tight">
                        {item.title}
                      </h2>
                    </div>
                    <div className="absolute bottom-4 right-4 z-10">
                      <button className="bg-white text-black text-sm px-3 py-1 flex items-center gap-1 font-bold uppercase">
                        Play <span className="text-xs">&#9654;</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-white py-10 ">
        <div className="container py-3 mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="d-flex align-items-center mb-3">
              <span className="text-danger fs-4 fw-bold me-2">|</span>
              Popular
              <span className="text-danger fw-bold fst-italic ms-2">HOT</span>
            </h2>
            <a
              href="https://www.tiguandesign.com/gameleon/dark/category/defense/"
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 uppercase font-bold"
            >
              View All
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded overflow-hidden shadow-md"
              >
                <a href={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
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

      <div className="container text-white p-4 rounded my-4">
        <h2 className="d-flex align-items-center mb-3">
          <span className="text-danger fs-4 fw-bold me-2">|</span>
          Weekly Games
          <span className="text-danger fw-bold fst-italic ms-2">BEST</span>
        </h2>

        <div className="d-flex flex-wrap  justify-content-start">
          {WeeklyGames.map((src, index) => (
            <div
              key={index}
              className="rounded overflow-hidden m-1"
              style={{
                width: "calc(100% / 13 - 8px)",
                height: "80px",
                flex: "0 0 auto",
              }}
            >
              <Image
                src={src}
                alt={`Game ${index + 1}`}
                width={67}
                height={67}
                className="img-fluid rounded"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid  text-white py-5">
        <div className="container  p-3">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-4 mb-4">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                <span className="text-danger">GAME</span>
                <span className="text-white">LEON</span>
              </h1>
              <p className="text-muted">
                Gameleon is a <strong>WordPress arcade theme</strong> for online
                games, gaming, HTML5 games, magazine, newspaper, reviews or
                blogging site.
              </p>
              <p className="text-muted">
                You can have your own unique gaming site using our WordPress
                Arcade Theme and impress your online players with this fully
                functional WordPress Theme for Online Games.
              </p>
              <p className="text-muted">
                Of course, you can use it for any other purpose: magazine, blog,
                newspaper, editorial or review site.
              </p>
            </div>

            {/* Center Column - Posts */}
            <div className="col-lg-4 mb-4">
              <h3 className="fw-bold mb-4">
                <span className="text-danger me-2">|</span>
                Recent Posts
              </h3>
              {RecentPosts.map((post, index) => (
                <div key={index} className="mb-4">
                  <h6 className="text-white fw-bold mb-1">{post.title}</h6>
                  <div className="text-danger small mb-1">{post.date}</div>
                  <div className="text-muted small">
                    <i className="fas fa-trophy me-1 text-muted"></i>
                    {post.plays} Plays
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Email + Tags */}
            <div className="col-lg-4">
              {/* Newsletter */}
              <div className="bg-black p-3 mb-4 rounded">
                <p className="mb-2 small">
                  Get the best games news into your inbox!
                </p>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="ENTER YOUR EMAIL"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <button className="btn btn-danger fw-bold px-3">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Tag Cloud */}
              <h3 className="fw-bold mb-3">
                <span className="text-danger me-2">|</span>
                Tag Cloud
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-dark text-white px-3 py-1 rounded small"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="margintop">
        <div className="container-fluid pt-5 pt-md-0">
          <div className="container p-0">
            <div className="title-compnay text-center mb-md-5 mb-3">
              <h2>
                How we help you to reach{" "}
                <span style={{ color: "#ff7b3b", margin: "0px" }}>
                  {" "}
                  your Business goals ?
                </span>
              </h2>
            </div>
            <div className="main-bar">
              <div className="proggres-holder">
                <div className="proggres-bar"></div>
              </div>

              <div className="bar-item">
                <div className="text-start blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Business Audits"
                        />{" "}
                        Business Audits :-
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="timeline-right d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/counslting.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Business audits are crucial for ensuring financial
                        accuracy, compliance with regulations, and identifying
                        areas for improvement. These comprehensive reviews
                        assess financial statements, internal controls, and
                        operational processes. By uncovering errors, risks, and
                        inefficiencies, audits provide valuable insights that
                        enable businesses to make informed decisions and enhance
                        their overall performance.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/takshak-management-consultants-business-management-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow"
                    style={{
                      backgroundImage: "url(/images/icons/trophy.png);",
                    }}
                  ></div>
                </div>
                <div className="timeline-right blog2 bg-dark d-md-block d-none text-center">
                  <img
                    src="/images/fitit/counslting.webp"
                    alt="Business audits"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                    className="lazy m-auto"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Strategic Development"
                        />{" "}
                        Strategic Development & Business management :-
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/Strategic-Devlopment.webp"
                          alt="Strategic Development & Business management"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Strategic development and business management are
                        integral to long-term success. Strategic development
                        involves setting goals, identifying opportunities, and
                        formulating plans to achieve them. Effective business
                        management entails organizing resources, making informed
                        decisions, and implementing strategies to maximize
                        profitability, efficiency, and growth. These practices
                        enable companies to adapt to changing markets, stay
                        competitive, and achieve their objectives.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/takshak-management-consultants-business-management-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-md-block d-none">
                  <img
                    src="/images/fitit/Strategic-Devlopment.webp"
                    alt="Strategic Development & Business management"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Marketing"
                        />{" "}
                        Marketing
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-md-none d-block mt-3 mb-2">
                        <img
                          src="/images/fitit/Marketing.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Marketing plays a pivotal role in promoting products or
                        services, attracting customers, and driving business
                        growth. It involves strategic planning, market research,
                        branding, advertising, and customer engagement. By
                        effectively communicating value propositions and
                        building strong customer relationships, marketing
                        enables businesses to reach their target audience,
                        increase brand awareness, and ultimately boost sales and
                        profitability.{" "}
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/marketing-guru-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-md-block d-none">
                  <img
                    src="/images/fitit/Marketing.webp"
                    alt="Marketing"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Sales automation"
                        />{" "}
                        Sales automation
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-md-none d-block mt-3 mb-2">
                        <img
                          src="/images/fitit/Sales-automation.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Sales automation refers to the use of technology and
                        software tools to streamline and optimize various sales
                        processes. It involves automating repetitive tasks such
                        as lead generation, contact management, proposal
                        creation, and follow-up reminders. Sales automation
                        increases efficiency, reduces manual errors, improves
                        sales team productivity, and enables businesses to focus
                        on building relationships with customers and closing
                        deals effectively.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/marketing-guru-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left d-none d-md-block blog2 bg-dark">
                  <img
                    src="/images/fitit/Sales-automation.webp"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Human Resource planning and development"
                        />{" "}
                        Human Resource planning and development{" "}
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/Human-Resource-planning.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          className="lazy"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Human resource planning and development is a strategic
                        process that involves forecasting and aligning the
                        workforce needs of an organization with its goals. It
                        encompasses activities such as recruitment, training,
                        performance management, and succession planning. By
                        effectively managing human capital, businesses can
                        optimize employee skills, boost productivity, and ensure
                        long-term organizational success.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/human-resource-agency-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-none d-md-block">
                  <img
                    src="/images/fitit/Human-Resource-planning.webp"
                    alt="Daily Diets &amp; Exercise Updates"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Legal documentation"
                        />{" "}
                        Legal documentation{" "}
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/Legal-documentation.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Legal documentation plays a vital role in ensuring legal
                        rights, obligations, and agreements are properly
                        recorded and enforceable. These documents include
                        contracts, agreements, wills, and deeds. Precise and
                        comprehensive legal documentation helps establish
                        clarity, protects parties involved, and provides a legal
                        framework for resolving disputes or pursuing legal
                        actions when necessary.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/takshak-management-consultants-business-management-services"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-none d-md-block">
                  <img
                    src="/images/fitit/Legal-documentation.webp"
                    alt="Daily Diets &amp; Exercise Updates"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="IT and digital infrastructure"
                        />{" "}
                        IT and digital infrastructure{" "}
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/it-and-digital.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        IT and digital infrastructure play a vital role in
                        modern businesses. They encompass hardware, software,
                        networks, and data centers that support operations and
                        facilitate communication, collaboration, and information
                        management. A robust and secure IT infrastructure
                        enables efficient workflows, enhances productivity,
                        enables remote work, and enables organizations to
                        leverage emerging technologies for innovation and
                        competitive advantage.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/fitit/digital-marketing-agency"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-none d-md-block">
                  <img
                    src="/images/fitit/it-and-digital.webp"
                    alt="Daily Diets &amp; Exercise Updates"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Financial planning"
                        />{" "}
                        Financial planning{" "}
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/Financial-planning.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        Financial planning is the process of setting and
                        achieving financial goals through careful management of
                        income, expenses, investments, and savings. It involves
                        creating budgets, analyzing cash flows, and developing
                        strategies for long-term wealth accumulation, risk
                        management, and retirement planning. Effective financial
                        planning helps individuals and businesses make informed
                        financial decisions and secure their financial future.
                      </p>
                      <div className="course-price mt-md-4 mt-2">
                        <Link
                          href="/services/financial-advisory-services-for-a-secure-future"
                          className="btn"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-none d-md-block">
                  <img
                    src="/images/fitit/Financial-planning.webp"
                    alt="Daily Diets &amp; Exercise Updates"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right blog2 bg-dark">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h3>
                        <img
                          src="/images/icons/right-arrow.webp"
                          width="25px"
                          alt="Happy business"
                        />{" "}
                        Happy business
                      </h3>
                    </div>
                    <div className="describe">
                      <div className="bar-left d-block d-md-none mt-3 mb-2">
                        <img
                          src="/images/fitit/Happy-business.webp"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                        />
                      </div>
                      <p className="my-0 ml-0">
                        A happy business is one that fosters a positive work
                        environment, prioritizes employee well-being, and values
                        customer satisfaction. It focuses on cultivating a
                        culture of collaboration, recognition, and growth
                        opportunities. By promoting happiness and a sense of
                        fulfillment among its stakeholders, a happy business can
                        achieve greater productivity, loyalty, and long-term
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{ backgroundImage: "url(/images/icons/trophy.png)" }}
                  ></div>
                </div>
                <div className="bar-left blog2 bg-dark d-none d-md-block">
                  <img
                    src="/images/fitit/Happy-business.webp"
                    alt="Daily Diets &amp; Exercise Updates"
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop">
        <div className="container">
          <a
            href=" https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about GCS
        Consulting service"
            className="gcs-button btn landing-btn mt-1 w-100"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>
      <section id="values" className="newvalue py-5 margintop">
        <div className="container">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faHandHoldingHeart}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Commitment to Excellence
                  </h3>
                  <p className="card-text">
                    We strive for the highest standards in everything we do. Our
                    dedication to excellence drives us to deliver top-quality
                    solutions and services, ensuring that our clients achieve
                    their goals with precision and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Customer-Centric Approach
                  </h3>
                  <p className="card-text">
                    Our clients are at the heart of our business. We listen to
                    your needs, understand your challenges, and tailor our
                    solutions to provide exceptional value and support. Your
                    satisfaction and success are our top priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Innovation and Growth
                  </h3>
                  <p className="card-text">
                    We embrace innovation to stay ahead of industry trends and
                    continuously improve our offerings. By fostering a culture
                    of creativity and growth, we ensure that our solutions
                    evolve to meet the ever-changing needs of the fitness
                    industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faParachuteBox}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Integrity and Transparency
                  </h3>
                  <p className="card-text">
                    We conduct our business with the utmost integrity and
                    transparency. We believe in honest communication, ethical
                    practices, and building trust with our clients and partners.
                    Our transparent approach ensures that you always know where
                    you stand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faPeopleCarryBox}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Collaboration and Teamwork
                  </h3>
                  <p className="card-text">
                    We believe in the power of collaboration and teamwork. Our
                    diverse team works together harmoniously to achieve common
                    goals, leveraging each member’s expertise and perspectives
                    to drive success.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-value card shadow-sm h-100 border">
                <div className="card-body">
                  <div className="img text-center mb-3 mx-auto">
                    <FontAwesomeIcon
                      icon={faRankingStar}
                      style={{ fontSize: "60px", color: "#ff8024" }}
                    />
                  </div>
                  <h3 className="card-title text-center">
                    Passion for Fitness
                  </h3>
                  <p className="card-text">
                    Our passion for fitness and wellness fuels our mission to
                    support and enhance gym operations. We are dedicated to
                    helping fitness professionals thrive and make a positive
                    impact on their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newvalue">
        <div className="container-fluid pt-4 py-md-5">
          <div className="container pb-md-5">
            <h2 className="text-center mb-4">Our Journey</h2>

            <div className="d-none d-md-block">
              <Slider {...CourseSpartans}>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-1.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-2.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-3.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-4.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-5.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-6.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-7.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-8.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="d-block d-md-none pb-5 py-md-0">
              <Slider {...CourseSpartans}>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-1.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-2.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-3.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-4.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-5.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-6.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-7.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div className="item  col-12">
                  <div className="review-box">
                    <img
                      src="/images/achievements/fwg-achievements-8.webp"
                      style={{ borderRadius: "10px" }}
                      alt="Certificate"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="our-values d-none d-md-block">
        <div className="container">
          <h2 className="benefits-title mb-4">Your Benefits</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faGears}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />
                    <h3>Streamlined Operations</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faGears}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Streamlined Operations</h3>
                  <p>
                    Enhance efficiency with our all-in-one gym management
                    software. Simplify scheduling, member management, and
                    financial tracking to ensure smooth daily operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />
                    <h3>Customizable Solutions</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Customizable Solutions</h3>
                  <p>
                    Tailor the software to meet the specific needs of your gym.
                    From member interactions to class scheduling, our solution
                    adapts to your unique requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faPeopleRoof}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />
                    <h3>Enhanced Member Experience</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faPeopleRoof}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Enhanced Member Experience</h3>
                  <p>
                    Improve client satisfaction with easy-to-use features like
                    online bookings, automated reminders, and personalized
                    communication tools. Create a seamless and engaging
                    experience for your members.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />

                    <h3>Advanced Reporting & Analytics</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Advanced Reporting & Analytics</h3>
                  <p>
                    Gain valuable insights into your gym's performance with
                    comprehensive reporting and analytics. Make data-driven
                    decisions to drive growth and optimize operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />

                    <h3>24/7 Support</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>24/7 Support</h3>
                  <p>
                    Access our dedicated support team whenever you need
                    assistance. We’re here to help you with any questions or
                    issues, ensuring you get the most out of our software.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />

                    <h3>Free Demo & Easy Transition</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Free Demo & Easy Transition</h3>
                  <p>
                    Start with a free demo to explore the software's
                    capabilities, and seamlessly transition to a subscription
                    plan once you're satisfied. Enjoy a hassle-free onboarding
                    experience with full support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6"></div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <FontAwesomeIcon
                      icon={faCodeCompare}
                      className="mb-3"
                      style={{ fontSize: "40px", color: "#ff8024" }}
                    />

                    <h3>Future-Proof Technology</h3>
                  </div>
                </div>
                <div className="service-content">
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="mb-3"
                    style={{ fontSize: "40px", color: "#ff8024" }}
                  />
                  <h3>Future-Proof Technology</h3>
                  <p>
                    Leverage cutting-edge technology to keep your gym ahead of
                    the curve. Our software is continuously updated with the
                    latest features and improvements to ensure you stay
                    competitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-values d-block d-md-none">
        <div className="container">
          <h2 className="benefits-title mb-4">Your Benefits</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box text-center">
                <FontAwesomeIcon
                  icon={faGears}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Streamlined Operations</h3>
                <p>
                  Enhance efficiency with our all-in-one gym management
                  software. Simplify scheduling, member management, and
                  financial tracking to ensure smooth daily operations.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Customizable Solutions</h3>
                <p>
                  Tailor the software to meet the specific needs of your gym.
                  From member interactions to class scheduling, our solution
                  adapts to your unique requirements.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Enhanced Member Experience</h3>
                <p>
                  Improve client satisfaction with easy-to-use features like
                  online bookings, automated reminders, and personalized
                  communication tools. Create a seamless and engaging experience
                  for your members.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Advanced Reporting & Analytics</h3>
                <p>
                  Gain valuable insights into your gym's performance with
                  comprehensive reporting and analytics. Make data-driven
                  decisions to drive growth and optimize operations.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>24/7 Support</h3>
                <p>
                  Access our dedicated support team whenever you need
                  assistance. We’re here to help you with any questions or
                  issues, ensuring you get the most out of our software.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Free Demo & Easy Transition</h3>
                <p>
                  Start with a free demo to explore the software's capabilities,
                  and seamlessly transition to a subscription plan once you're
                  satisfied. Enjoy a hassle-free onboarding experience with full
                  support.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-box">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  className="mb-3"
                  style={{ fontSize: "40px", color: "#ff8024" }}
                />
                <h3>Future-Proof Technology</h3>
                <p>
                  Leverage cutting-edge technology to keep your gym ahead of the
                  curve. Our software is continuously updated with the latest
                  features and improvements to ensure you stay competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="container py-5">
            <div className="text-center">
              <h4 className="why-choose d-none d-md-block">
                Why Choose Gomzi Consulting Services (GCS)?
              </h4>
              <h4 className="why-choose d-block d-md-none">
                Why Choose Gomzi Consulting Services (GCS)?
              </h4>
              <div className="d-none d-md-flex justify-content-center mt-3">
                <div className="left-line">
                  <svg
                    width="355"
                    height="85"
                    viewBox="0 0 355 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M354.98 6C354.98 8.94552 352.592 11.3333 349.647 11.3333C346.701 11.3333 344.313 8.94552 344.313 6C344.313 3.05448 346.701 0.666667 349.647 0.666667C352.592 0.666667 354.98 3.05448 354.98 6ZM333.593 34.8027L333.68 35.7989L333.636 35.8027H333.593V34.8027ZM11.3333 79C11.3333 81.9455 8.94553 84.3333 6 84.3333C3.05447 84.3333 0.666656 81.9455 0.666656 79C0.666656 76.0545 3.05447 73.6667 6 73.6667C8.94553 73.6667 11.3333 76.0545 11.3333 79ZM350.64 5.88422C351.147 10.2376 351.417 17.2421 349.34 23.3907C348.296 26.4785 346.647 29.3922 344.099 31.6349C341.541 33.8863 338.136 35.4097 333.68 35.7989L333.506 33.8065C337.578 33.4509 340.569 32.0775 342.777 30.1336C344.996 28.1811 346.482 25.6011 347.445 22.7504C349.381 17.0221 349.149 10.3701 348.653 6.11578L350.64 5.88422ZM333.593 35.8027H51.1505V33.8027H333.593V35.8027ZM51.1505 35.8027C42.5677 35.8027 31.5013 38.7482 22.6023 45.6253C13.74 52.474 7 63.2377 7 79H5C5 62.5827 12.0559 51.2478 21.3793 44.0428C30.6659 36.8661 42.1747 33.8027 51.1505 33.8027V35.8027Z"
                      fill="#769CFF"
                    />
                  </svg>
                </div>
                <div className="center-line ml-4">
                  <svg
                    width="12"
                    height="85"
                    viewBox="0 0 12 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.66679 79.4637C0.646753 82.4092 3.01827 84.8132 5.96372 84.8332C8.90917 84.8532 11.3132 82.4817 11.3332 79.5363C11.3532 76.5908 8.98173 74.1868 6.03628 74.1668C3.09083 74.1468 0.686827 76.5183 0.66679 79.4637ZM5.50002 5.9932L5.00002 79.4932L6.99998 79.5068L7.49998 6.0068L5.50002 5.9932Z"
                      fill="#00A81B"
                    />
                  </svg>
                </div>
                <div className="right-line ml-4">
                  <svg
                    width="355"
                    height="85"
                    viewBox="0 0 355 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0201187 6C0.0201187 8.94552 2.40793 11.3333 5.35345 11.3333C8.29897 11.3333 10.6868 8.94552 10.6868 6C10.6868 3.05448 8.29897 0.666667 5.35345 0.666667C2.40793 0.666667 0.0201187 3.05448 0.0201187 6ZM21.4071 34.8027L21.3201 35.7989L21.3635 35.8027H21.4071V34.8027ZM343.667 79C343.667 81.9455 346.054 84.3333 349 84.3333C351.946 84.3333 354.333 81.9455 354.333 79C354.333 76.0545 351.946 73.6667 349 73.6667C346.054 73.6667 343.667 76.0545 343.667 79ZM4.36018 5.88422C3.85273 10.2376 3.58259 17.2421 5.66033 23.3907C6.70377 26.4785 8.35328 29.3922 10.901 31.6349C13.4587 33.8863 16.8635 35.4097 21.3201 35.7989L21.4941 33.8065C17.4223 33.4509 14.4308 32.0775 12.2225 30.1336C10.0044 28.1811 8.51837 25.6011 7.55508 22.7504C5.61937 17.0221 5.85083 10.3701 6.34673 6.11578L4.36018 5.88422ZM21.4071 35.8027H303.849V33.8027H21.4071V35.8027ZM303.849 35.8027C312.432 35.8027 323.499 38.7482 332.398 45.6253C341.26 52.474 348 63.2377 348 79H350C350 62.5827 342.944 51.2478 333.621 44.0428C324.334 36.8661 312.825 33.8027 303.849 33.8027V35.8027Z"
                      fill="#EBD61E"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 pl-md-0">
                <div className="line-box text-center">
                  <div className="icon-box">
                    <img
                      src="/images/icons/experience.webp"
                      alt="Expertise"
                      className="img-fluid"
                    />
                  </div>
                  <div className="box-text">
                    <h4>Experience and Expertise</h4>
                    <p className="text-dark">
                      At GCS, we have years of experience managing businesses
                      across diverse industries. Our team of experts has
                      in-depth knowledge of market trends, consumer behavior,
                      and industry best practices. We use this expertise to
                      provide customized solutions that drive growth and
                      profitability for our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pl-md-0">
                <div className="line-box text-center center-box">
                  <div className="icon-box">
                    <img
                      src="/images/icons/execution.webp"
                      alt="Approach"
                      className="img-fluid"
                    />
                  </div>
                  <div className="box-text">
                    <h4>Comprehensive Approach</h4>
                    <p className="text-dark">
                      We understand that every business is unique, and
                      therefore, requires a customized approach. At GCS, we
                      offer a comprehensive suite of consulting services,
                      including strategy development, execution, and ongoing
                      support. Our holistic approach ensures that our clients
                      achieve their desired outcomes and stay ahead of the
                      competition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pl-md-0">
                <div className="line-box text-center right-box">
                  <div className="icon-box">
                    <img
                      src="/images/icons/happiness.webp"
                      alt="Satisfaction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="box-text">
                    <h4>Focus on Customer Satisfaction</h4>
                    <p className="text-dark">
                      {`At GCS, we put our clients' needs first. We strive to
                      provide exceptional service and support throughout our
                      engagement, ensuring that our clients feel valued and
                      supported. Our commitment to customer satisfaction has
                      earned us a reputation as a trusted partner for businesses
                      of all sizes and industries.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <a
                href=" https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about GCS
        Consulting service"
                className="gcs-button btn landing-btn mt-1 w-100"
              >
                Get Free 1:1 Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop">
        <div className="container-fluid">
          <div className="container pb-0 pb-md-5">
            <div className="title-compnay text-center">
              <h2>Companys Detail</h2>
            </div>
            <div className="d-block d-sm-none mt-4">
              <div>
                <div className="details-line compnay-selects">
                  <details className="compnay-selects-active" open>
                    <summary>Business Management</summary>
                    <div className="compnay-content content-1">
                      <h4>
                        Business Management provide objective advice and
                        expertise to solve business issues, maximize growth, and
                        improve performance. Our services include:
                      </h4>
                      <div className="row pb-3">
                        <div className="col-md-6">
                          <ul className="mb-0 mb-mb-2">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Strategy consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Marketing consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Operations consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              PR consultancy
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Leadership consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Sales consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Financial consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              HR consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Legal consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Sustainability consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              IT/technology consulting
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Wellness/fitness consulting
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>IT Services</summary>
                    <div className="compnay-content content-1">
                      <h4>Looking for the best IT services?</h4>
                      <p> Fit IT has got you covered! Our services include:-</p>
                      <div className="row pb-3">
                        <div className="col-md-5">
                          <ul className="mb-0">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Website development
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              CRM software
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Gym CRM
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Education CRM
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>
                          {" "}
                          Trust us to provide you with top-notch IT solutions.
                          Contact us today!
                        </p>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>Marketing Services</summary>
                    <div className="compnay-content content-1">
                      <h4>
                        Our team of experts is dedicated to providing customized
                        solutions to meet your unique needs and goals.{" "}
                      </h4>
                      <p>We offer the following services:</p>
                      <div className="row pb-3">
                        <div className="col-md-12">
                          <ul className="mb-0">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Digital Marketing Services
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Social Media Marketing Services
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Marketing Management Services
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Marketing Consultation
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Contact us today to learn more about how we can
                              help you achieve your marketing goals.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>
                          Contact us today to learn more about how we can help
                          you achieve your marketing goals.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>Digital Solutions</summary>
                    <div className="compnay-content content-1">
                      <h4>
                        where we provide digital solutions to help your business
                        thrive.{" "}
                      </h4>
                      <p>
                        Our team of experts offers a wide range of services to
                        help you succeed online. We offer the following
                        services:
                      </p>
                      <div className="row pb-3">
                        <div className="col-md-5">
                          <ul className="mb-0">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Website Development
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Website Design
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Video Creation, Shoot and Editing
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Social Media Account Handling
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Search Engine Optimization
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>
                          Contact us today to learn more about how we can help
                          you achieve your digital goals.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>Finance Management</summary>
                    <div className="compnay-content content-1">
                      <h4>
                        we provide comprehensive financial planning services to
                        help you achieve your financial goals.
                      </h4>
                      <p>
                        Our team of experts offers customized solutions to help
                        you manage your finances effectively. Our services
                        include:
                      </p>
                      <div className="row pb-3">
                        <div className="col-md-5">
                          <ul className="mb-0">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Investment Planning
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Retirement Planning
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Tax Planning
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Insurance Planning
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />
                              Estate Planning
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>
                          Contact us today to learn more about how our financial
                          planning services can help you secure your financial
                          future.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>Learning Academy</summary>
                    <div className="compnay-content content-1">
                      <h4>
                        Welcome to our Online Learning Academy, where we offer a
                        range of courses to help you enhance your skills and
                        advance your career.
                      </h4>
                      <p>
                        Our courses are designed to provide you with
                        high-quality education and flexibility to learn at your
                        own pace. Our services include:-
                      </p>
                      <div className="row pb-3">
                        <div className="col-md-8">
                          <ul className="mb-0">
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Business Management Course
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Stock Market Course
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Digital Marketing Course
                            </li>
                            <li>
                              <img
                                src="/images/icons/check.webp"
                                alt="check"
                                width="20px"
                                className="img-fluid"
                              />{" "}
                              Python Programming Course
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>
                          Enroll today to access our expert instructors and take
                          the first step towards achieving your career goals
                          with our online courses.
                        </p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block">
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="compnay-select">
                    <ul>
                      <li className="compnay-select-active content-box-1">
                        Business Management
                        <i className="fa fa-chevron-right"></i>
                      </li>
                      <li className="content-box-2">
                        IT Services <i className="fa fa-chevron-right"></i>
                      </li>
                      <li className="content-box-3">
                        Marketing Services{" "}
                        <i className="fa fa-chevron-right"></i>
                      </li>
                      <li className="content-box-4">
                        Digital Solutions{" "}
                        <i className="fa fa-chevron-right"></i>
                      </li>
                      <li className="content-box-5">
                        Finance Management{" "}
                        <i className="fa fa-chevron-right"></i>
                      </li>
                      <li className="content-box-6">
                        Learning Academy <i className="fa fa-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="compnay-content pl-2 content-1">
                    <h4>
                      Business Management provide objective advice and expertise
                      to solve business issues, maximize growth, and improve
                      performance. Our services include:
                    </h4>
                    <div className="row pb-3">
                      <div className="col-md-6  mt-md-0 mt-">
                        <ul className="mb-0 mb-mb-2">
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Strategy consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Marketing consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Operations consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            PR consultancy
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Leadership consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Sales consulting
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Financial consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            HR consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Legal consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Sustainability consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            IT/technology consulting
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Wellness/fitness consulting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="compnay-content pl-2 content-2">
                    <h4>Looking for the best IT services?</h4>
                    <p> Fit IT has got you covered! Our services include:-</p>
                    <div className="row pb-3">
                      <div className="col-md-5">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Website development
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            CRM software
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Gym CRM
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Education CRM
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        {" "}
                        Trust us to provide you with top-notch IT solutions.
                        Contact us today!
                      </p>
                    </div>
                  </div>
                  <div className="compnay-content pl-2 content-3">
                    <h4>
                      Our team of experts is dedicated to providing customized
                      solutions to meet your unique needs and goals.{" "}
                    </h4>
                    <p>We offer the following services:</p>
                    <div className="row pb-3">
                      <div className="col-md-12">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Digital Marketing Services
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Social Media Marketing Services
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Marketing Management Services
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Marketing Consultation
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Contact us today to learn more about how we can help
                            you achieve your marketing goals.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        Contact us today to learn more about how we can help you
                        achieve your marketing goals.
                      </p>
                    </div>
                  </div>
                  <div className="compnay-content pl-2 content-4">
                    <h4>
                      where we provide digital solutions to help your business
                      thrive.{" "}
                    </h4>
                    <p>
                      Our team of experts offers a wide range of services to
                      help you succeed online. We offer the following services:
                    </p>
                    <div className="row pb-3">
                      <div className="col-md-12">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Website Development
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Website Design
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Video Creation, Shoot and Editing
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Social Media Account Handling
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Search Engine Optimization
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        Contact us today to learn more about how we can help you
                        achieve your digital goals.
                      </p>
                    </div>
                  </div>
                  <div className="compnay-content pl-2 content-5">
                    <h4>
                      we provide comprehensive financial planning services to
                      help you achieve your financial goals.
                    </h4>
                    <p>
                      Our team of experts offers customized solutions to help
                      you manage your finances effectively. Our services
                      include:
                    </p>
                    <div className="row pb-3">
                      <div className="col-md-5">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Investment Planning
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Retirement Planning
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Tax Planning
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Insurance Planning
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />
                            Estate Planning
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        Contact us today to learn more about how our financial
                        planning services can help you secure your financial
                        future.
                      </p>
                    </div>
                  </div>
                  <div className="compnay-content pl-2 content-6">
                    <h4>
                      Welcome to our Online Learning Academy, where we offer a
                      range of courses to help you enhance your skills and
                      advance your career.
                    </h4>
                    <p>
                      Our courses are designed to provide you with high-quality
                      education and flexibility to learn at your own pace. Our
                      services include:-
                    </p>
                    <div className="row pb-3">
                      <div className="col-md-8">
                        <ul>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Business Management Course
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Stock Market Course
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Digital Marketing Course
                          </li>
                          <li>
                            <img
                              src="/images/icons/check.webp"
                              alt="check"
                              width="20px"
                              className="img-fluid"
                            />{" "}
                            Python Programming Course
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        Enroll today to access our expert instructors and take
                        the first step towards achieving your career goals with
                        our online courses.
                      </p>
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
          <div className="container-md pb-5">
            <div className="title-compnay text-center mb-md-5 mb-3">
              <h2>
                Our Happy{" "}
                <span style={{ color: "#ff7b3b", margin: "0px" }}>
                  {" "}
                  Clients review
                </span>
              </h2>
            </div>
            <div className="d-none d-md-block">
              <Slider {...settings}>
                <div className="col-md-12 item">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="365"
                        src="https://www.youtube.com/embed/g2wzrJRz7ec?si=5Jeg0RdrJgNjI4cb"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="text-center mt-2 bg-dark border border-warning">
                      <h4 className="text-center p-3">Asha Koshiya</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="365"
                        src="https://www.youtube.com/embed/m_GpoDeW1QU?si=TV3VShkcNJBHu3P8"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark mt-2 border border-warning">
                      <h4 className="text-center p-3">Dt.Chirag Pandey</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="365"
                        src="https://www.youtube.com/embed/fDjDB87BhR0?si=KxMrji5M4GphfBZh"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark m-2 border border-warning">
                      <h4 className="text-center p-3">Mr. Hiren Jogiya</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="365"
                        src="https://www.youtube.com/embed/AljwdDjKUw0?si=ADwERvxxAicqFg6c"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark mt-2 border border-warning">
                      <h4 className="text-center p-3">Dr. Milan Modi</h4>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="d-block d-md-none">
              <Slider {...settings}>
                <div className="col-md-12 item mx-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="531"
                        src="https://www.youtube.com/embed/g2wzrJRz7ec?si=5Jeg0RdrJgNjI4cb"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="text-center mt-2 bg-dark border border-warning">
                      <h4 className="text-center p-3">Shefasa Koshiya</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item mx-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="531"
                        src="https://www.youtube.com/embed/fDjDB87BhR0?si=KxMrji5M4GphfBZh"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark m-2 border border-warning">
                      <h4 className="text-center p-3">Mr. Hiren Jogiya</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item mx-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="531"
                        src="https://www.youtube.com/embed/AljwdDjKUw0?si=ADwERvxxAicqFg6c"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark mt-2 border border-warning">
                      <h4 className="text-center p-3">Dr. Milan Modi</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 item mx-2">
                  <div className="main-review">
                    <div id="video1">
                      <iframe
                        width="100%"
                        height="531"
                        src="https://www.youtube.com/embed/m_GpoDeW1QU?si=TV3VShkcNJBHu3P8"
                        title="YouTube video player"
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-dark mt-2 border border-warning">
                      <h4 className="text-center p-3">Dt.Chirag Pandey</h4>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <a
            href=" https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about GCS
        Consulting service"
            className="gcs-button btn landing-btn mt-1 w-100"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>

      <section className="margintop">
        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="container">
            <div className="title-compnay text-center mb-4">
              <h2>Our Vision Mission</h2>
            </div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-md-6 mt-4">
                  <div className="flip-card">
                    <div
                      className="flip-card-inner p-0"
                      style={{ backgroundColor: "#000" }}
                    >
                      <div className="flip-card-front">
                        <div className="tochange">
                          <img
                            src="/images/gcs/side-1.webp"
                            alt="Vision"
                            className="img-fluid"
                          />
                        </div>
                        <div className="flip-text">
                          <h4>Vision</h4>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="changeto">
                          <h2 className="p-md-3 my-0">Vision</h2>
                          <ul>
                            <li>
                              Become the most prominent consultancies
                              (management, Finance & IT) firm regionally and
                              globally, as well as the trusted advisor to
                              entrepreneurs and organizations that are seeking
                              to take the next steps in their development
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="flip-card">
                    <div
                      className="flip-card-inner p-0"
                      style={{ backgroundColor: "#000" }}
                    >
                      <div className="flip-card-front">
                        <div className="tochange">
                          <img
                            src="/images/gcs/side-2.webp"
                            alt="Vision"
                            className="img-fluid"
                          />
                        </div>
                        <div className="flip-text">
                          <h4>Mission</h4>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="changeto">
                          <h2 className="p-md-3 my-0">Mission</h2>
                          <ul>
                            <li>
                              Provide you with realistic and executable
                              recommendations to help you make the best
                              decisions for the successful growth of your
                              business and its expansion.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="row">
                <div className="col-md-6">
                  <div className="vision-mission">
                    <div className="img-vision">
                      <img
                        src="/images/icons/mission.webp"
                        alt="mission"
                        width="50%"
                        className="img-fluid"
                      />
                    </div>
                    <div className="vision-mission-content">
                      <div>
                        <h4>Mission</h4>
                      </div>
                      <p>
                        Become the most prominent consultancies (management,
                        Finance & IT) firm regionally and globally, as well as
                        the trusted advisor to entrepreneurs and organizations
                        that are seeking to take the next steps in their
                        development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="vision-mission">
                    <div className="img-vision">
                      <img
                        src="/images/icons/vision.webp"
                        alt="mission"
                        width="50%"
                        className="img-fluid"
                      />
                    </div>
                    <div className="vision-mission-content">
                      <div>
                        <h4>Vision</h4>
                      </div>
                      <p>
                        Provide you with realistic and executable
                        recommendations to help you make the best decisions for
                        the successful growth of your business and its
                        expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <a
            href=" https://api.whatsapp.com/send?phone=6354051487&text=Hello I want to know more about GCS
        Consulting service"
            className="gcs-button btn landing-btn mt-1 w-100"
          >
            Get Free 1:1 Consultation
          </a>
        </div>
      </section>

      <section className="margintop">
        <div className="container-fluid">
          <div className="container pb-5">
            <div className="title-small">
              <h6>Celebration</h6>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="main-title">
                <h2>Diwali Celebration</h2>
              </div>
            </div>
            <Slider {...settings4}>
              <div className="col-md-12 item mx-2">
                <div className="main-review">
                  <img
                    src="/images/gcs/img-4.webp"
                    alt="review"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="review-text">
                    <p>Diwali Celebration at Machingo</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 item mx-2">
                <div className="main-review">
                  <img
                    src="/images/gcs/img-2.webp"
                    alt="review"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="review-text">
                    <p>Diwali Celebration at Dr.Milan Modi Hospital</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 item mx-2">
                <div className="main-review">
                  <img
                    src="/images/gcs/img-5.webp"
                    alt="review"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="review-text">
                    <p>Diwali Celebration at kalarpan Studio</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 item mx-2">
                <div className="main-review">
                  <img
                    src="/images/gcs/img-3.webp"
                    alt="review"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="review-text">
                    <p>Diwali Celebration at SpinexGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 item mx-2">
                <div className="main-review">
                  <img
                    src="/images/gcs/img-1.webp"
                    alt="review"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="review-text">
                    <p>Diwali Celebration at OS Jeans</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="margintop">
        <div
          className="bg-full-bd"
          style={{
            backgroundImage:
              "url(/images/gcs/contact-us.webp);background-attachment: local",
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
      <Footer /> */}
    </>
  );
}
