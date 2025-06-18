import type { Metadata } from "next";
import BusinessConsultingServices from "./business-consulting-services";

export const metadata: Metadata = {
  title: "Takshak Management Consultants - Business Consulting Services",
  description: "Takshak Management Consultants provides expert consulting services to help businesses improve their efficiency, productivity, and profitability. Our team of experienced consultants specializes in strategic, operations, financial, marketing, and technology consulting. Contact us today to learn how we can help you achieve your business goals.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <BusinessConsultingServices />
    </>
  );
}
