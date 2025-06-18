import type { Metadata } from "next";
import AtoZ from "./atoz";

export const metadata: Metadata = {
  title: "Financial Advisory Services | AtoZ Finance | Learn to Invest in Stock Market",
  description: "A2Z Finance provides comprehensive financial planning services, investment management, and estate planning to help you achieve your financial goals. highly experienced financial advisor, offers customized investment solutions and expert guidance to help you secure your financial future. Learn to invest in the stock market with our courses.",
  keywords: "Financial Advisor, Investment Management, Estate Planning, A2Z Finance, Mr. Yashpal Chavada, Stock Market Trading Courses, Comprehensive Financial Planning Services, Customized Investment Solutions, Expert Guidance, Successful Investor, Stock Market 101 Course.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <AtoZ />
    </>
  );
}
