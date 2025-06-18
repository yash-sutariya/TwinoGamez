import type { Metadata } from "next";
import TermAndConditions from "./term-and-conditions";

export const metadata: Metadata = {
  title: "Terms and Conditions of GCS",
  description: "purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <TermAndConditions />
    </>
  );
}
