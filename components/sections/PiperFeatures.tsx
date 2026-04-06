import {
  MapPin,
  SlidersHorizontal,
  UserCheck,
  Search,
  CreditCard,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Interactive Map Search",
    description:
      "Search any market on an interactive map. Draw boundaries around target neighborhoods and instantly see every vacation rental property inside.",
  },
  {
    icon: SlidersHorizontal,
    title: "25+ Smart Filters",
    description:
      "Filter by property type, estimated value, OTA presence, permit status, host type, review count, and more. Drill down to your ideal owner profile.",
  },
  {
    icon: UserCheck,
    title: "STR-Verified Owner Data",
    description:
      "Every record is STR-verified. Get owner names, emails, phone numbers, and mailing addresses — ready for outreach in minutes, not weeks.",
  },
  {
    icon: Search,
    title: "Search by Manager, RBO & Reviews",
    description:
      "New powerful search modes: find properties by current manager, owner-operated rentals (RBOs), number of reviews, and average review rating.",
  },
  {
    icon: CreditCard,
    title: "Pay for What You Need",
    description:
      "No more data subscriptions or download restrictions. Purchase the records you need and use the data however you like. You own it.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Data",
    description:
      "Piper works in real-time. Go from discovering target properties to launching marketing to homeowners in hours instead of weeks.",
  },
];

export function PiperFeatures() {
  return (
    <section className="relative bg-[#FAFAF8] noise-light py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2DACDC] mb-3">
            The Data Engine
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#041E42] leading-tight">
            See every vacation rental owner in your market.
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Piper gives you instant access to STR-verified homeowner data — so
            you can stop guessing and start growing.
          </p>
        </div>

        {/* Video demo */}
        <div className="mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster="/videos/piper-demo.mp4#t=0.1"
            >
              <source src="/videos/piper-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8F7FB] mb-4">
                <feature.icon className="h-6 w-6 text-[#2DACDC]" />
              </div>
              <h3 className="text-lg font-bold text-[#041E42] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
