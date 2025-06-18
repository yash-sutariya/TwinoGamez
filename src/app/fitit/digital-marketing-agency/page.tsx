import type { Metadata } from "next";
import DigitalMarketingAgency from "./digital-marketing-agency";

export const metadata: Metadata = {
  title: "Expert Digital Marketing Agency - Fit IT",
  description: "GCS Consultant is a top-rated digital marketing agency providing comprehensive online marketing solutions for businesses. Trust our experts to boost your online presence and drive growth today.",
  keywords: "digital marketing, social media marketing, website development, paid advertising, SEO, content creation, PR activity, online presence",
};

export default function GomziConsultingPage() {
  return (
    <>
      <DigitalMarketingAgency />
    </>
  );
}
