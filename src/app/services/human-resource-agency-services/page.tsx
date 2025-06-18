import type { Metadata } from "next";
import HumunResource from "./human-resource-agency-services";

export const metadata: Metadata = {
  title: "HR Consultants for Talent Recruitment, Management & Development",
  description: "Our HR Consultants specialize in training & development, employee wellbeing, legal HR documentation, company culture, recruitment, and employer branding. We help organizations create a positive work environment, attract and retain top talent, and reduce legal risks.",
  keywords: "HR Consultants, Talent Recruitment, Management, Development, Training & Development, Employee Wellbeing, Legal HR Documentation, Company Culture, Recruitment, Employer Branding, Positive Work Environment, Top Talent, Legal Risks, Employee Engagement, Retention.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <HumunResource />
    </>
  );
}
