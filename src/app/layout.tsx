import type { Metadata } from "next";
import "react-modal-video/css/modal-video.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Marketing Guru Services | Boost Your Online Presence Today ",
  description: "Grow your business with Marketing Guru Services. Our team offers website design, social media marketing, paid ads, SEO, content creation, and PR activities. Contact us to enhance your online presence and engage with your audience effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/logos/gcs-logo-normal.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
