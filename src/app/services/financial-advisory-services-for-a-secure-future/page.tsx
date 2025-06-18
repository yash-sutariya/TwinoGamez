import type { Metadata } from "next";
import FinancialAdvisoryServicesForSecureFuture from "./financial-advisory-services-for-a-secure-future";

export const metadata: Metadata = {
  title: "Financial Advisory Services for a Secure Future - A2Z Finance",
  description: "Invest in your future with A2Z Finance Services. Our financial advisory services include insurance, investment, retirement, tax, and estate planning to secure your financial future.",
  keywords: "financial advisory services, insurance planning, investment planning, retirement planning, tax planning, estate planning",
};

export default function GomziConsultingPage() {
  return (
    <>
      <FinancialAdvisoryServicesForSecureFuture />
    </>
  );
}
