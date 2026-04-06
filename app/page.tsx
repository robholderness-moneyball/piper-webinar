import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { PiperFeatures } from "@/components/sections/PiperFeatures";
import { SocialProof } from "@/components/sections/SocialProof";
import { AiMarketingTease } from "@/components/sections/AiMarketingTease";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Meet PIPER — Free Webinar | Vintory",
  description:
    "Join us April 22 for a first look at PIPER, Vintory's real-time homeowner data engine. Find homeowners faster. Register free.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Meet PIPER — Find Homeowners Faster",
    description:
      "Free webinar: Get a first look at Vintory's real-time homeowner data engine. April 22 at 1 PM ET.",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <PiperFeatures />
      <SocialProof />
      <AiMarketingTease />
      <FinalCta />
    </>
  );
}
