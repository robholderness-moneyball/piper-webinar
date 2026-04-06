import Image from "next/image";

export function WhyPiper() {
  return (
    <section id="why-piper" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2DACDC] mb-3">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041E42] leading-tight">
            Why We Named This Platform PIPER
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] italic">
            &ldquo;This platform isn&apos;t just named after a teammate.
            It&apos;s named after one of the strongest people we know.&rdquo;
          </p>
        </div>

        {/* Photo */}
        <div className="flex justify-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
            <Image
              src="/piper.png"
              alt="Piper"
              width={225}
              height={225}
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>

        {/* Story */}
        <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
          <p>At Vintory, we build things for a reason.</p>
          <p>
            Sometimes that reason is a market opportunity. Sometimes it&apos;s a
            problem we want to solve.
          </p>
          <p>But sometimes it&apos;s something much more human.</p>
          <p>This platform is named after someone on our team.</p>
          <p className="text-[#041E42] font-semibold text-xl">
            Her name is Piper.
          </p>

          <p>
            Piper joined Vintory on April 25, 2022 as a Sales Development
            Representative. From the first day she showed up, everyone noticed
            the same thing: her energy, her warmth, her optimism, and the way she
            lifted the people around her.
          </p>

          <p>
            Piper is one of those people who lights up a room.
            <br />
            Positive. Friendly. Joyful.
            <br />
            The kind of teammate who makes everyone around them better.
          </p>

          <p>And the truth is — she has every reason not to be.</p>

          <p className="text-[#041E42] font-semibold">
            Piper has endured more than most people could ever imagine.
          </p>

          <p>
            Over the years, Piper experienced multiple pregnancy losses —
            including miscarriages and the devastating stillbirth of two
            daughters, Addie and Viola, late in pregnancy. In total, she is the
            mother of six children, five of whom are in Heaven. Through it all,
            she has her incredible son Charlie, who means the world to her.
          </p>

          <p>
            Loss like that would break most people.
            <br />
            But not Piper.
            <br />
            She kept going.
          </p>

          <p>
            Then in early 2023, Piper received devastating news. She was
            diagnosed with Glioblastoma, an aggressive form of brain cancer.
          </p>

          <p>
            Since then, she has endured round after round of chemotherapy and
            treatment.
          </p>

          <p>
            And yet if you talk to Piper, you&apos;d never know the weight she
            is carrying.
          </p>

          <p>
            She shows up with the same smile.
            <br />
            The same kindness.
            <br />
            The same positive spirit.
          </p>

          <p>
            I&apos;ve never met someone with more genuine joy and good energy
            than Piper. Seriously.
          </p>

          <p>
            Even in the middle of the hardest battle of her life, she continues
            to bring light into this company and into the lives of the people
            around her.
          </p>

          <p className="text-[#041E42] font-semibold">
            That&apos;s resilience.
          </p>

          <p>
            And that&apos;s exactly the spirit we wanted this platform to
            represent.
          </p>

          <p>
            So when it came time to name it, the answer became obvious.
          </p>

          {/* PIPER callout */}
          <div className="my-10 py-8 px-6 rounded-2xl bg-[#041E42] text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2DACDC] mb-3">
              We Named It
            </p>
            <p className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              PIPER
            </p>
            <p className="text-lg text-white/70">
              Property Intelligence Platform for Enrichment and Retrieval
            </p>
          </div>

          <p>
            It represents the next chapter of Vintory — a powerful data platform
            designed to help our customers see their markets more clearly, enrich
            their data, and retrieve the intelligence they need to grow their
            businesses.
          </p>

          <p>But behind the technology is a deeper meaning.</p>

          <p className="text-[#041E42] font-semibold text-xl">
            Resilience matters.
          </p>

          <p>
            Startups are hard.
            <br />
            Building meaningful technology is hard.
            <br />
            There are setbacks, challenges, and moments where the easier path
            would be to quit.
          </p>

          <p>
            But the best companies — and the best people — keep going.
          </p>

          <p>
            They keep building.
            <br />
            They keep pushing forward.
            <br />
            They keep showing up.
          </p>

          <p className="text-[#041E42] font-semibold">Just like Piper.</p>

          <p>
            And every day we work on this platform, we&apos;re reminded of
            someone who embodies that spirit better than anyone we know.
          </p>

          <p className="text-[#041E42] font-bold text-2xl text-center my-8">
            PIPER.
          </p>

          <p className="text-[#041E42] font-semibold italic">
            Piper — thank you for reminding all of us what resilience truly looks
            like.
          </p>

          {/* Signature */}
          <div className="pt-8 border-t border-[#E5E7EB] mt-10">
            <p className="text-[#041E42] font-bold">Brooke Pfautz</p>
            <p className="text-sm text-[#6B7280]">Founder &amp; CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
