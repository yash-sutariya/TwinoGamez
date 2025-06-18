import type { Metadata } from "next";
import RecordedDigitalMarketingCourse from "./recorded-digital-marketing-course";

export const metadata: Metadata = {
  title: "Learn Digital Marketing with Recorded Lecture Videos",
  description: "Enhance your digital marketing skills with Fit IT's recorded course, covering social media, SEO, Google Ads, email marketing and more. Get e-book materials, team chat support, and an e-certificate upon completion. Join now for ₹499 + 18% GST.",
  keywords: "digital marketing course, recorded lectures, case study project, e-book materials, team chat support, e-certificate, social media marketing, SEO, Google Ads, email marketing, influencer marketing, affiliate marketing, market research, Funnel development, Fit IT.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <RecordedDigitalMarketingCourse />
    </>
  );
}
