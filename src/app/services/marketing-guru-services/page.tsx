import type { Metadata } from "next";
import MarketingGuruServices from "./marketing-guru-services";

export const metadata: Metadata = {
  title: "Marketing Guru Services | Boost Your Online Presence Today",
  description: "Grow your business with Marketing Guru Services. Our team offers website design, social media marketing, paid ads, SEO, content creation, and PR activities. Contact us to enhance your online presence and engage with your audience effectively.",
  keywords: "marketing guru services, website design, social media marketing, paid ads, SEO, content creation, PR activities, online presence, digital marketing agency.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <MarketingGuruServices />
    </>
  );
}
