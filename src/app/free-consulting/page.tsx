import type { Metadata } from "next";
import Script from "next/script";
import GCSWebinarPage from "./free-consulting";

export const metadata: Metadata = {
  title: "Gomzi Consulting Services | Book 1:1 Strategy Call",
  description:
    "Book a free 1:1 strategy call with Dr. Gautam Jani. Scale your fitness business from 10k to 10lakh/month.",
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
  
          fbq('init', '2028783984100358');
          fbq('track', 'PageView');
        `,
      }}
    />
    
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=2028783984100358&ev=PageView&noscript=1"
      />
    </noscript>
  
    <GCSWebinarPage />
  </>
  
  );
}
