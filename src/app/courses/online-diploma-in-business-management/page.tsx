import type { Metadata } from "next";
import OnlineDiplomaInBusinessManagement from "./online-diploma-in-business-management";

export const metadata: Metadata = {
  title: "Online Diploma in Business Management Course",
  description: "Enroll in our Diploma in Business Management Course (Online) and learn to improve your motivation, energy use, and talent. Our course covers management skills, marketing, finance, HR, organizational behavior, and more. Join our Zoom sessions, complete a case study project, and get recorded videos. EMI option available. Sign up for ₹4,999 + 18% GST.",
  keywords: "business management course, online course, diploma course, management skills, marketing management, finance management, HR management, organizational behavior, service model management, strategic management, personality development, organization ethics, training methodology, case study, Zoom sessions, recorded videos, EMI option, certificate.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <OnlineDiplomaInBusinessManagement />
    </>
  );
}
