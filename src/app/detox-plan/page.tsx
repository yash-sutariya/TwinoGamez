import type { Metadata } from "next";
import DetoxPlan from "./detox-plan";

export const metadata: Metadata = {
  title: "Prakriti By Jiya",
};

export default function GomziConsultingPage() {
  return (
    <>
      <DetoxPlan />
    </>
  );
}
