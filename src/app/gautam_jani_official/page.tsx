import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Dr.Gautam Jani",
  description: "purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness.",
};

const GautamJaniOfficial = dynamic(() => import("./gautam_jani_official"), {
  ssr: false,
});

export default function GomziConsultingPage() {
  return (
    <>
      <GautamJaniOfficial />
    </>
  );
}
