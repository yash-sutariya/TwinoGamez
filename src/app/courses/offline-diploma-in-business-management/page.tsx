import type { Metadata } from "next";
import OfflineDiplomaInBusiness from "./offline-diploma-in-business-management";

export const metadata: Metadata = {
  title: "Offline Diploma in Business Management Course",
  description: "Enhance your management skills and develop your personality with our Diploma in Business Management Course. Learn marketing, finance, and human resource management, organization behavior, service model management, strategic management, and more through case studies and offline classes. Join now!",
  keywords: "Business Management, Personality Development, Management Skills, Marketing Management, Finance Management, Human Resource Management, Organization Behavior, Service Model Management, Strategic Management, Case Studies, Offline Class",
};

export default function GomziConsultingPage() {
  return (
    <>
      <OfflineDiplomaInBusiness />
    </>
  );
}
