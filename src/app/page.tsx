import type { Metadata, Viewport } from "next";
import Home from "./main-page";

export const metadata: Metadata = {
  title: "Why Choose Gomzi Consulting Services (GCS)?",
  description: "Purpose and objective of the event was to motivate and nurture the students for the full year to concern field of health and fitness.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <Home />
    </>
  );
}
