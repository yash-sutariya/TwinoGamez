import type { Metadata } from "next";
import PrivacyPolicy from "./privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy of GCS",
  description: "purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
