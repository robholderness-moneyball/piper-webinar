"use client";

import { Calendar, CheckCircle } from "lucide-react";
import { HubSpotForm } from "@/components/forms/HubSpotForm";

const bullets = [
  "How to quickly use Piper to find the exact properties you want to target.",
  "Why our premium STR-verified data saves you thousands of dollars in wasted marketing spend.",
  "Why we killed data subscriptions and restrictions on downloading data (pay for what you need and use the data however you like).",
  "New features like searching by manager or RBO, by number of reviews and by average review rating.",
  "New data included in exports, like links to Airbnb and VRBO listings (where applicable).",
  "An exclusive sneak peek at our soon-to-be-launched AI marketing platform that creates your campaigns in minutes.",
];

export function HeroSection() {
  return (
    <section
      id="register"
      className="relative bg-[#041E42] noise overflow-hidden"
    >
      {/* Radial gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 5% 50%, rgba(45,172,220,0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 95% 80%, rgba(4,30,66,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
        {/* Full-width headline */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FCC749] mb-4">
            Meet Piper
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Find Homeowners Faster, with{" "}
            <span className="text-[#2DACDC]">PIPER</span>
          </h1>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT column — content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Get a first look at our new real-time homeowner data engine.
            </h2>

            {/* Date badge */}
            <div className="inline-flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-3">
              <Calendar className="h-5 w-5 text-[#FCC749] shrink-0" />
              <span className="text-white font-semibold">
                Wednesday, April 22 at 1 p.m. Eastern
              </span>
            </div>

            <p className="text-lg text-[#FCC749] font-semibold">
              Stay &apos;til the end for a sneak peek at our AI-powered
              marketing engine.
            </p>

            <p className="text-base text-white/60 leading-relaxed">
              Vintory 1.0 is dead. Come see the next generation of the
              industry&apos;s leading homeowner acquisition system. Easy-to-use
              software tools custom designed for vacation rental managers that
              work in real-time, so you can go from discovering target properties
              to launching marketing to homeowners in a few hours, instead of
              weeks.
            </p>

            <div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wide mb-4">
                In this webinar, we&apos;ll cover:
              </p>
              <ul className="space-y-3">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-[#2DACDC] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT column — form card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#041E42] text-center mb-6">
                Reserve Your Spot
              </h3>
              <HubSpotForm
                formId="361e3d97-cad6-4f0b-84da-b7f3bc756b59"
                redirectUrl="/thank-you"
              />
            </div>
          </div>
        </div>

        {/* Below columns note */}
        <p className="text-center text-white/40 text-sm mt-10 max-w-xl mx-auto">
          Can&apos;t make the webinar? Sign up anyway to get the recording and
          the bonuses!
        </p>
      </div>
    </section>
  );
}
