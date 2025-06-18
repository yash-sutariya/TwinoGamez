import type { Metadata } from "next";
import GCSWebinar from "./gcs-webinar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gomzi Consultants Services - Business Consulting Services",
  description:
    "Takshak Management Consultants provides expert consulting services to help businesses improve their efficiency, productivity, and profitability. Our team of experienced consultants specializes in strategic, operations, financial, marketing, and technology consulting. Contact us today to learn how we can help you achieve your business goals.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '793714741985467');
            fbq('track', 'PageView');
          `,
        }}
      />
      <GCSWebinar />
    </>
  );
}
