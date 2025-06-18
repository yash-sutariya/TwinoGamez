import type { Metadata } from "next";
import CancellationPolicy from "./cancellation-policy";

export const metadata: Metadata = {
  title: "Cancellation policy will save you from the any misinterpretation of the orders.",
  description: "Read the cancellation policy very well as per the policy meals order are only available via online transfers.",
};

export default function GomziConsultingPage() {
  return (
    <>
      <CancellationPolicy />
    </>
  );
}
