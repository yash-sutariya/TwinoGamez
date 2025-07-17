import type { Metadata, Viewport } from "next";
import Home from "./main-page";

export const metadata: Metadata = {
  title: "TwinoGamez - Arcade Theme",
  description: "TwinoGamez is a WordPress arcade theme for online games, gaming, HTML5 games, magazine, newspaper, reviews or blogging site.",
};

export default function TwinoGamez() {
  return (
    <>
      <Home />
    </>
  );
}
