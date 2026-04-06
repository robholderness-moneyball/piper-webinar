import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FbPixelInit } from "@/components/tracking/FbPixel";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["600", "700", "800"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://vintory.com"
  ),
  title: {
    default: "Meet PIPER — Free Webinar | Vintory",
    template: "%s | Vintory",
  },
  description:
    "Join us April 22 for a first look at PIPER, Vintory's real-time homeowner data engine. Find homeowners faster. Register free.",
  openGraph: {
    siteName: "Vintory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vintory",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <FbPixelInit />
      </head>
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
