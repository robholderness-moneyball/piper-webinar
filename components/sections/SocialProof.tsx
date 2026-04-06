const stats = [
  { value: "1,000+", label: "Property Management Companies" },
  { value: "1.6M+", label: "Postcards Mailed" },
  { value: "9.1M+", label: "Emails Sent" },
];

export function SocialProof() {
  return (
    <section className="relative bg-white border-y border-[#E5E7EB] noise-light">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i < stats.length - 1
                  ? "sm:border-r sm:border-[#E5E7EB]"
                  : ""
              }
            >
              <p className="text-4xl lg:text-5xl font-extrabold text-[#FCC749]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[#6B7280] uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
