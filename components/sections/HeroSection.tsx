"use client";

import { Calendar, CheckCircle } from "lucide-react";
import { HubSpotForm } from "@/components/forms/HubSpotForm";

const bullets = [
  "Use Piper to find the exact properties you want to target — in real time.",
  "Premium STR-verified data that saves thousands in wasted marketing spend.",
  "No subscriptions, no download restrictions — pay for what you need.",
  "Search by manager, RBO, review count, and average rating.",
  "Exports include Airbnb and VRBO listing links (where applicable).",
  "Sneak peek at our AI marketing platform that creates campaigns in minutes.",
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
              Vintory 1.0 is dead. See the next generation of the
              industry&apos;s leading homeowner acquisition system — go from
              discovering target properties to launching marketing in hours,
              not weeks.
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
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2DACDC] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 leading-relaxed">
                    Find out why we{" "}
                    <a
                      href="#why-piper"
                      className="text-[#2DACDC] underline underline-offset-2 hover:text-[#FCC749] transition-colors"
                    >
                      named it Piper
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT column — form card */}
          <div className="lg:sticky lg:top-8 space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#041E42] text-center mb-6">
                Reserve Your Spot
              </h3>
              <HubSpotForm
                formId="361e3d97-cad6-4f0b-84da-b7f3bc756b59"
                redirectUrl="/thank-you"
              />
            </div>
            <p className="text-center text-sm">
              <span className="text-[#FCC749] font-semibold">Can&apos;t make the webinar?</span>{" "}
              <span className="text-white/70">Sign up anyway to get the recording and the bonuses!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
