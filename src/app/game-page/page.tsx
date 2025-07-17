import type { Metadata } from "next";
import Script from "next/script";
import GamePage from "./game-page";

export const metadata: Metadata = {
  title: "TwinoGamez | Game Page",
  description:
    "TwinoGamez is a WordPress arcade theme for online games, gaming, HTML5 games, magazine, newspaper, reviews or blogging site.",
};

export default function TwinoGamez() {
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
      <GamePage />
    </>
  );
}
