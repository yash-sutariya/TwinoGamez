import type { Metadata } from "next";
import RecordedStockMarket from "./recorded-stock-market-101-course";

export const metadata: Metadata = {
  title: "Recorded Sessions - Stock Market 101 Course",
  description: "Get a comprehensive understanding of stock market investing with our digital marketing-based course. Learn technical & fundamental analysis, price action, swing trading, options trading, trading psychology & 3 effective trading setups. Enjoy book material, recorded lecture videos, team chat support & receive your e-certificate. Enroll now!",
  keywords: "Stock Market Investing, Technical Analysis, Fundamental Analysis, Price Action, Swing Trading, Options Trading, Trading Psychology, Options Strategy, Trading Setups, Stock Market Course A2Z Finance",
};

export default function GomziConsultingPage() {
  return (
    <>
      <RecordedStockMarket />
    </>
  );
}
