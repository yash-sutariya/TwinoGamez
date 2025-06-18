import type { Metadata } from "next";
import TakshakBusinessManagementServices from "./takshak-management-consultants-business-management-services";

export const metadata: Metadata = {
  title: "Takshak Management Consultants - Business Management Services",
  description: "Takshak Management Consultants offers a range of consulting services to help businesses achieve their goals, including strategic, operations, financial, marketing, technology, legal, social media, sales, wellness, growth marketing, career coaching, PR, leadership, product development, and compliance consulting.",
  keywords: "business management services, strategic consulting, operations consulting, financial consulting, marketing consulting, technology consulting, legal consultant, social media consultant, sales consultant, wellness consultant, growth marketing consultant, career coaching consultancy, PR consultancy, leadership consulting, product development consulting, compliance consulting, Takshak Management Consultants.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <TakshakBusinessManagementServices />
    </>
  );
}
