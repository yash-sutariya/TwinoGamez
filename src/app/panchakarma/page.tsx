import type { Metadata } from "next";
import PanchaKarma from "./panchakarma";

export const metadata: Metadata = {
  title: "Prakriti By Jiya",
};

export default function GomziConsultingPage() {
  return (
    <>
      <PanchaKarma />
    </>
  );
}
