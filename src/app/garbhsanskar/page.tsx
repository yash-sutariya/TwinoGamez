import type { Metadata } from "next";
import Garbhsanskare from "./garbhsanskar";

export const metadata: Metadata = {
  title: "Garbhsanskar",
};

export default function GomziConsultingPage() {
  return (
    <>
      <Garbhsanskare />
    </>
  );
}
