import type { Metadata } from "next";
import { Suspense } from 'react';
import ContactUs from "./contact-us";

export const metadata: Metadata = {
  title: "TwinoGamez | Game Page",
  description:
    "TwinoGamez is a WordPress Twino Gamez for online games, gaming, HTML5 games, magazine, newspaper, reviews or blogging site.",
};

export default function TwinoGamez() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactUs />
      </Suspense>
    </>
  );
}
