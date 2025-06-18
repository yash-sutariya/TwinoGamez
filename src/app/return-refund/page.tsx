import type { Metadata } from "next";
import RefundPage from "./refund-page";

export const metadata: Metadata = {
  title: "Return & Refunds policy for your safety.",
  description:
    "here we have represented our return & refunds policy details and please read to know more about it.",
};

export default function ReturnRefundPage() {
  return (
    <>
      <RefundPage />
    </>
  );
}
