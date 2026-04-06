import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thanks for Registering!",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative bg-[#041E42] noise min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(45,172,220,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Logo */}
        <Image
          src="/logo-white.svg"
          alt="Vintory"
          width={140}
          height={40}
          className="h-10 w-auto mx-auto mb-12"
        />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Thanks for Registering!
        </h1>

        {/* Body text */}
        <p className="text-lg text-white/70 leading-relaxed mb-4">
          You should be receiving a confirmation email shortly from Zoom, with
          information on how to join.
        </p>

        <p className="text-lg text-white/70 leading-relaxed mb-8">
          The team is already celebrating! Here&apos;s a live stream from the
          office:
        </p>

        {/* GIPHY embed */}
        <div className="flex justify-center mb-10">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://giphy.com/embed/l0MYt5jPR6QX5pnqM"
              width="480"
              height="366"
              className="max-w-full"
              allowFullScreen
              title="The Office party GIF"
            />
          </div>
        </div>

        {/* Webinar details reminder */}
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 mb-8">
          <span className="text-white/80 text-sm font-medium">
            📅 Wednesday, April 22 at 1 p.m. Eastern
          </span>
        </div>

        {/* Secondary CTA */}
        <div>
          <a
            href="https://vintory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/25 text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-colors"
          >
            Explore Vintory
          </a>
        </div>
      </div>
    </section>
  );
}
