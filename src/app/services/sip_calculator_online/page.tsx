import type { Metadata } from "next";
import SipCalculatorOnline from "./sip_calculator_online";

export const metadata: Metadata = {
  title: "AtoZ Finance - SIP Calculator and Financial Services",
  description: "Calculate your SIP (Systematic Investment Plan) using our SIP calculator. Get investment advice and financial planning services from leading financial advisor Mr. Yashpal Chavada. Explore our range of finance services and read FAQs about SIP calculators.",
  keywords: "SIP calculator, financial services, investment planning, financial advisor, SIP investment, financial calculator, Yashpal Chavada, stock market trading, personal trainer, fitness industry, investment strategies, financial freedom",
};

export default function GomziConsultingPage() {
  return (
    <>
      <SipCalculatorOnline />
    </>
  );
}
