import type { Metadata } from "next";
import StrategicRulesForLeadership from "./5_strategic_rules_for_leadership";

export const metadata: Metadata = {
  title: "5 Strategic Rules for Leadership",
  description: "Discover the key components of a comprehensive skill enhancement and professional development program.From onboarding strategies to technical and leadership training, sales and customer service techniques, compliance and ethics, and soft skills development, this blog explores various aspects of personal and professional growth.",
  keywords: "skill enhancement, professional development, onboarding, technical training, leadership development, sales techniques, customer service, compliance, ethics, soft skills, personal growth",
};

export default function GomziConsultingPage() {
  return (
    <>
      <StrategicRulesForLeadership />
    </>
  );
}
