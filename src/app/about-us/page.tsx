import type { Metadata } from "next";
import AboutUs from "./about-us";

export const metadata: Metadata = {
  title: "About Us",
  description: "Business Consulting, HR Consulting, Legal Consulting, and More",
};

export default function GomziConsultingPage() {
  return (
    <>
      <AboutUs />
    </>
  );
}
