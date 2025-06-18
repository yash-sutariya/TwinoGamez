import type { Metadata } from "next";
import UnderstandingBusinessTaxes from "./understanding-business-taxes";

export const metadata: Metadata = {
  title: "Understanding Business Taxes: Different Types of Taxes",
  description: "Business Learn about the various types of taxes that businesses encounter, including income tax, sales tax, property tax, corporate tax, capital gains tax, excise tax, and payroll tax. Gain insights into how each tax works and its impact on businesses.", 
  keywords: "business taxes, types of taxes, income tax, sales tax, property tax, corporate tax, capital gains tax, excise tax, payroll tax",
};

export default function GomziConsultingPage() {
  return (
    <>
      <UnderstandingBusinessTaxes />
    </>
  );
}
