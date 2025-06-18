"use client";
// eslint-disable-next-line @next/next/no-img-element

import React from "react";
import "../../css/gcs.css";
import "../../css/media.css";
import "../../js/popper.min.js";
import Header from "@/app/header/simpleHeader";
import Footer from "@/app/footer/Footer";

export default function CancellationPolicy() {
  return (
    <>
      <Header
        logoURL={"/images/logos/gcs-logo-white.png"}
        mobileLogoURL={"/images/logos/fitit-logo.png"}
        altLogo={"Fitit Logo"}
      />
      <section className="margintop" style={{ marginBottom: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="privacy-policy">
              <h1>Cancellation Policy</h1>
              <p>{`We Do Not Accept Any Cancellation Requests. Please Make Prior Decision Before You Pay For Any
                                Digital/Online Service Or Product.`}</p>
              <p>{`To Be Eligible For A Return, Your Item Must Be Unused And In The Same Condition That You Received
                                It. It Must Also Be In The Original Packaging.`}</p>
              <p>{`Several Types Of Goods Are Exempt From Being Returned. Perishable Goods Such As Food, Flowers,
                                Newspapers Or Magazines Cannot Be Returned. We Also Do Not Accept Products That Are Intimate Or
                                Sanitary Goods, Hazardous Materials, Or Flammable Liquids Or Gases.`}</p>
              <p>{`Additional Non-Returnable Items: Gift Cards Downloadable Software Products Some Health And
                                Personal Care Items`}</p>
              <p>{`To Complete Your Return, We Require A Receipt Or Proof Of Purchase.`}</p>
              <p>{`Please Do Not Send Your Purchase Back To The Manufacturer.`}</p>
              <p>{`There Are Certain Situations Where Only Partial Refunds Are Granted: (If Applicable) Book With
                                Obvious Signs Of Use CD, DVD, VHS Tape, Software, Video Game, Cassette Tape, Or Vinyl Record
                                That Has Been Opened. Any Item Not In Its Original Condition, Is Damaged Or Missing Parts For
                                Reasons Not Due To Our Error. Any Item That Is Returned More Than 30 Days After Delivery`}</p>
              <p>{`Refunds (If Applicable) Once Your Return Is Received And Inspected, We Will Send You An Email To
                                Notify You That We Have Received Your Returned Item. We Will Also Notify You Of The Approval Or
                                Rejection Of Your Refund. If You Are Approved, Then Your Refund Will Be Processed, And A Credit
                                Will Automatically Be Applied To Your Credit Card Or Original Method Of Payment, Within A
                                Certain Amount Of Days.`}</p>
              <p>{`Late Or Missing Refunds (If Applicable) If You Haven't Received A Refund Yet, First Check Your
                                Bank Account Again. Then Contact Your Credit Card Company, It May Take Some Time Before Your
                                Refund Is Officially Posted. Next Contact Your Bank. There Is Often Some Processing Time Before
                                A Refund Is Posted. If You've Done All Of This And You Still Have Not Received Your Refund Yet,
                                Please Contact Us At gomziconsultingservices@gmail.com.`}</p>
              <div className="inprivacy">
                <h4>Sale items (if applicable)</h4>
                <p>{`Only regular priced items may be refunded, unfortunately sale items cannot be refunded.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Exchanges (if applicable)</h4>
                <p>{`We only replace items if they are defective or damaged. If you need to exchange it for the
                                    same item, send us an email at gomziconsultingservices@gmail.com and send your item to:
                                    G-306, Sovereign Shoppers, Anand Mahal Rd, beside Sindhu Seva Samiti School, Adajan Gam,
                                    Surat, Gujarat 395009`}</p>
              </div>
              <div className="inprivacy">
                <h4>Gifts</h4>
                <p>{`If the item was marked as a gift when purchased and shipped directly to you, you'll receive a
                                    gift credit for the value of your return. Once the returned item is received, a gift
                                    certificate will be mailed to you. If the item wasn't marked as a gift when purchased, or
                                    the gift giver had the order shipped to themselves to give to you later, we will send a
                                    refund to the gift giver and he will find out about your return.`}</p>
              </div>
              <div className="inprivacy">
                <h4>Shipping</h4>
                <p>{`To return your product, you should mail your product to: G-306, Sovereign Shoppers, Anand
                                    Mahal Rd, beside Sindhu Seva Samiti School, Adajan Gam, Surat, Gujarat 395009. You will be
                                    responsible for paying for your own shipping costs for returning your item. Shipping costs
                                    are non-refundable. If you receive a refund, the cost of return shipping will be deducted
                                    from your refund. Depending on where you live, the time it may take for your exchanged
                                    product to reach you, may vary. If you are shipping an item over 200/- Rs, you should
                                    consider using a trackable shipping service or purchasing shipping insurance. We don't
                                    guarantee that we will receive your returned item.`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
