import type { Metadata } from "next";
import "./mospark.css";

import HeroSection from "@/components/mospark/HeroSection";
import TickerBar from "@/components/mospark/TickerBar";
import AIPartnersSection from "@/components/mospark/AIPartnersSection";
import PlatformStorySection from "@/components/mospark/PlatformStorySection";
import ModulesSection from "@/components/mospark/ModulesSection";
import WorkflowSection from "@/components/mospark/WorkflowSection";
import TimelineSection from "@/components/mospark/TimelineSection";
import MerchantSection from "@/components/mospark/MerchantSection";
import PageFooter from "@/components/mospark/PageFooter";

export const metadata: Metadata = {
  title: "MoSpark - Web Growth Platform | MoMo",
  description:
    "MoSpark là Web Growth Platform của MoMo: BU/PM tự build landing page bằng AI, nhúng widget, chạy ads và đo full-funnel từ web đến giao dịch.",
};

export default function HomePage() {
  return (
    <main
      className="overflow-x-hidden bg-white"
      style={{ fontFamily: "var(--font-momo-trust-sans), -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <HeroSection />
      <TickerBar />
      <AIPartnersSection />
      <PlatformStorySection />
      <ModulesSection />
      <WorkflowSection />
      <TimelineSection />
      <MerchantSection />
      <PageFooter />
    </main>
  );
}
