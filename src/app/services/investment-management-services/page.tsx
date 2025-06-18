import type { Metadata } from "next";
import InvestmentManagementServices from "./investment-management-services";

export const metadata: Metadata = {
  title: "Investment Management Services - A2Z Finance",
  description: "Trust A2Z Finance's dedicated experts to expertly manage your money and achieve financial goals with confidence. Effortless transactions, portfolio migration, and outperforming in any market. Unlock your investment potential. Request a call back and embark on a journey to financial success!",
  keywords: "financial advisory services, insurance planning, investment planning, retirement planning, tax planning, estate planning",
};

export default function GomziConsultingPage() {
  return (
    <>
      <InvestmentManagementServices />
    </>
  );
}
