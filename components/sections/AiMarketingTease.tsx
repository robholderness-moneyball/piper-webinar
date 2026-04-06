import { Sparkles, Paintbrush, PieChart, Radar } from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "AI Brand Intelligence Reports",
    description:
      "Enter your website URL. AI analyzes your brand — colors, voice, archetypes, competitive position — and produces a report that agencies charge tens of thousands for.",
  },
  {
    icon: Paintbrush,
    title: "AI-Generated Campaign Assets",
    description:
      "AI generates branded postcards, cold email sequences, and ad creative — trained on your voice and proven marketing frameworks. Every piece is unique to your business.",
  },
  {
    icon: PieChart,
    title: "Smart Budget Allocation",
    description:
      "Channel Affinity Scoring across 50+ marketing channels tells you exactly where to spend your budget for maximum impact.",
  },
  {
    icon: Radar,
    title: "Competitive Intelligence",
    description:
      "Monitor your competitive landscape: Map Pack positions, review velocity, ad activity, and market share — updated continuously.",
  },
];

export function AiMarketingTease() {
  return (
    <section className="relative bg-[#041E42] noise py-16 lg:py-24 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FCC749] mb-3">
            Coming Soon
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            AI-powered marketing that actually knows your brand.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            A $50K agency report — in minutes. Get a sneak peek at the webinar.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#062B5E] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2DACDC]/15">
                  <cap.icon className="h-5 w-5 text-[#2DACDC]" />
                </div>
                <span className="inline-flex items-center rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
