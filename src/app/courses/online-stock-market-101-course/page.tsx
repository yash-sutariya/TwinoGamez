import type { Metadata } from "next";
import OnlineStockMarket from "./online-stock-market-101-course";

export const metadata: Metadata = {
  title: "Learn Stock Market Investing in 3 Months with Live Zoom Classes",
  description: "Join our 3-month online course on stock market investing with live zoom classes, recorded sessions, and e-book. Learn technical and fundamental analysis, options trading, trading psychology, swing trading, and price action. Get certified and pay in EMI options.",
  keywords: "stock market investing, online course, live zoom classes, technical analysis, fundamental analysis, options trading, trading psychology, swing trading, price action",
};

export default function GomziConsultingPage() {
  return (
    <>
      <OnlineStockMarket />
    </>
  );
}
