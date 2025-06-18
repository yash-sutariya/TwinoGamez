import type { Metadata } from "next";
import BusinessBlog from "./business-blog";

export const metadata: Metadata = {
  title: "GCS: Customized Business Solutions for Growth & Profitability",
  description: "Discover Gomzi Consulting Services (GCS), a leading group offering tailored solutions for business growth and profitability. Contact us at +91 97731 74522.",
  keywords: "GCS, consulting services, customized solutions, business growth, profitability",
};

export default function GomziConsultingPage() {
  return (
    <>
      <BusinessBlog />
    </>
  );
}
