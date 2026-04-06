import { ArrowUp } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative bg-[#041E42] noise py-16 lg:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(45,172,220,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#2DACDC] mb-3">
          Don&apos;t Miss Out
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Reserve Your Spot
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
          Wednesday, April 22 at 1 p.m. Eastern. Free to attend. Register now to
          lock in your seat and get the recording even if you can&apos;t make it
          live.
        </p>
        <a
          href="#register"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FCC749] text-[#041E42] font-bold hover:bg-[#E5AF2A] transition-colors shadow-md"
        >
          Register Now — It&apos;s Free
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
