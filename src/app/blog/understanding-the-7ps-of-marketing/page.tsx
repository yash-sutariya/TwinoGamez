import type { Metadata } from "next";
import UnderstandingMarketing from "./understanding-the-7ps-of-marketing";

export const metadata: Metadata = {
  title: "Understanding the 7 P's of Marketing",
  description: "Understand and implement the 7 P's of marketing - product, price, promotion, place, people, process, and physical evidence - to drive success and achieve marketing objectives. Learn how to optimize each element for a cohesive and impactful marketing campaign.",
  keywords: "marketing strategy, product development, pricing, promotion, distribution channels, customer experience.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <UnderstandingMarketing />
    </>
  );
}
