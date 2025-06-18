import type { Metadata } from "next";
import PrakritiByJiya from "./prakriti_by_jiya";

export const metadata: Metadata = {
  title: "Prakriti By Jiya",
};

export default function GomziConsultingPage() {
  return (
    <>
      <PrakritiByJiya />
    </>
  );
}
