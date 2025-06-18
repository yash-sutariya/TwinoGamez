import type { Metadata } from "next";
import TheRoadToExcellence from "./the-road-to-excellence";

export const metadata: Metadata = {
  title: "Enhancing Skills and Professional Development",
  description: "Learn how to achieve excellence in your business with the help of Takshak Management Consultant . We offer a wide range of services to help you improve your operations, boost your profits, and achieve your goals.",
  keywords: "skill enhancement, professional development, onboarding, technical training, leadership development, sales techniques, customer service, compliance, ethics, soft skills, personal growth",
};

export default function GomziConsultingPage() {
  return (
    <>
      <TheRoadToExcellence />
    </>
  );
}
