import type { Metadata } from "next";
import AffordableFlexibleCourses from "./affordable-flexible-courses";

export const metadata: Metadata = {
  title: "Best & Most Affordable Courses In India",
  description: "Explore affordable and flexible courses in digital marketing, business management, and stock market trading. Learn from experts and receive e-certificates. Enroll now for just ₹499!",
  keywords: "affordable courses, flexible courses, digital marketing, business management, stock market, e-certificates, expert instructors, Surat, India",
};

export default function GomziConsultingPage() {
  return (
    <>
      <AffordableFlexibleCourses />
    </>
  );
}
