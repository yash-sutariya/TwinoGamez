// eslint-disable-next-line @next/next/no-img-element
"use client";
import React from "react";
import Head from "next/head";
import "../../css/style.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import Header from "@/app/header/simpleHeader";
import Footer from "@/app/footer/Footer";

export default function TermAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - GCS Consultant</title>
        <meta
          name="description"
          content="Read the terms and conditions for using the GCS Consultant website."
        />
        <meta
          property="og:title"
          content="Terms and Conditions - GCS Consultant"
        />
        <meta
          property="og:description"
          content="Read the terms and conditions for using the GCS Consultant website."
        />
        <meta property="og:url" content="https://gcsconsultant.com/terms" />
        <meta
          property="og:image"
          content="https://gcsconsultant.com/images/terms-og-image.jpg"
        />
        <meta
          name="twitter:title"
          content="Terms and Conditions - GCS Consultant"
        />
        <meta
          name="twitter:description"
          content="Read the terms and conditions for using the GCS Consultant website."
        />
        <meta
          name="twitter:image"
          content="https://gcsconsultant.com/images/terms-og-image.jpg"
        />
      </Head>
      <Header
        logoURL={"/images/logos/gcs-logo-white.png"}
        mobileLogoURL={"/images/logos/fitit-logo.png"}
        altLogo={"Fitit Logo"}
      />
      <section className="margintop" style={{ marginBottom: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="privacy-policy">
              <h1>Terms and Conditions</h1>
              <div className="inprivacy">
                <p>{`Welcome to GCS Consultant's website <a href="https://gcsconsultant.com/">https://gcsconsultant.com/</a>. By accessing or using
                  the Site, you agree to comply with and be bound by the following terms and conditions of use
                  (the "Terms"). If you do not agree to the Terms, you should not use or access the Site. GCS
                  Consultant reserves the right to modify or update the Terms at any time without notice. Your
                  continued use of the Site following any changes to the Terms constitutes your acceptance of
                  those changes.
                `}</p>
              </div>
              <div className="inprivacy">
                <h4>Use of the Site</h4>
                <p>{`The content of the Site is for your general information and use only. It is subject to change
                  without notice. You may use the Site only for lawful purposes and in accordance with the
                  Terms.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Intellectual Property</h4>
                <p>{`All content on the Site, including but not limited to text, graphics, logos, images, and
                  software, is the property of GCS Consultant or its content suppliers and is protected by
                  copyright and other intellectual property laws. You may not use any content from the Site
                  without the prior written consent of GCS Consultant.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Disclaimer of Warranties</h4>
                <p>{`The Site and its content are provided on an "as is" and "as available" basis. GCS Consultant
                  makes no representations or warranties of any kind, express or implied, as to the operation
                  of the Site or the information, content, materials, or products included on the Site.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Limitation of Liability</h4>
                <p>{`In no event shall GCS Consultant be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use
                  or inability to use the Site or its content, even if GCS Consultant has been notified orally
                  or in writing of the possibility of such damage.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Indemnification</h4>
                <p>{`You agree to indemnify and hold GCS Consultant and its affiliates, officers, agents, and
                  employees harmless from any claim or demand, including reasonable attorneys' fees, made by
                  any third-party due to or arising out of your use of the Site, your violation of the Terms,
                  or your violation of any rights of another.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Governing Law and Jurisdiction</h4>
                <p>{`The Terms shall be governed by and construed in accordance with the laws of India, without
                  regard to its conflict of law provisions. You agree that any dispute arising out of or
                  relating to the Terms or your use of the Site shall be brought in the courts located in
                  India.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Termination</h4>
                <p>{`GCS Consultant reserves the right to terminate your access to the Site or any portion
                  thereof, at any time, without notice.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Entire Agreement</h4>
                <p>{`The Terms constitute the entire agreement between you and GCS Consultant with respect to the
                  use of the Site and supersede all prior or contemporaneous communications and proposals,
                  whether oral or written, between you and GCS Consultant.`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
