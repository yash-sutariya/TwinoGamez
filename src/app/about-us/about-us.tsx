"use client";
// eslint-disable-next-line @next/next/no-img-element

import React from "react";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import Header from '@/app/header/simpleHeader';
import Footer from '@/app/footer/Footer';


export default function AboutUs() {

    return (
        <>
            <Header logoURL={'/images/logos/gcs-logo-white.png'} mobileLogoURL={'/images/logos/fitit-logo.png'} altLogo={'Fitit Logo'} />
            <section className="margintop" style={{ marginBottom: '100px' }}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="privacy-policy">
                            <h1>About GCS Consultant</h1>
                            <h4>Business Consulting, HR Consulting, Legal Consulting, and More</h4>
                            <div className="inprivacy">
                                <p>Welcome to GCS Consultant, a full-service consulting firm specializing in business solutions,
                                    human resources, and legal services. Our team of experts has years of experience in digital
                                    marketing, SEO, PPC, social media marketing, content marketing, web design, and web
                                    development,
                                    as well as business, HR, and legal consulting.</p>
                            </div>
                            <div className="inprivacy">
                                <h4>Our Services</h4>
                                <p>At GCS Consultant, we offer a wide range of services to help businesses and organizations
                                    reach their full potential. Our services include:
                                </p>
                                <ul className="mt-md-3 ml-md-5">
                                    <li>Digital marketing</li>
                                    <li>SEO</li>
                                    <li>PPC</li>
                                    <li>Social media marketing</li>
                                    <li>Content marketing</li>
                                    <li>Web design</li>
                                    <li>Web development</li>
                                    <li>HR consulting</li>
                                    <li>Legal consulting</li>
                                    <li>Business consulting</li>
                                </ul>
                            </div>
                            <div className="inprivacy">
                                <h4>Our Approach</h4>
                                <p>{`Our team of experts takes a personalized approach to each client's needs, offering customized
                                    solutions that address the unique challenges facing their business. We believe in building
                                    long-term relationships with our clients, and we work closely with them to understand their
                                    goals and objectives.`}
                                </p>
                            </div>
                            <div className="inprivacy">
                                <h4>Our Commitment to Excellence</h4>
                                <p>{`At GCS Consultant, we are committed to delivering the highest quality of service to our
                                    clients. We measure our success by their success, and we work tirelessly to ensure that our
                                    clients achieve their goals. Our team of experts is dedicated to delivering results that
                                    exceed our clients' expectations.`}</p>
                            </div>
                            <div className="inprivacy">
                                <h4>Contact Us</h4>
                                <p>{`Thank you for considering GCS Consultant for your consulting needs. If you have any questions
                                    or would like to learn more about our services, please don't hesitate to contact us. We look
                                    forward to the opportunity to work with you and help you achieve your objectives.`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

