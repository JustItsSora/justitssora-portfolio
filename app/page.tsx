import { Background } from "@/components/layout/Background";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CardColumn } from "@/components/sections/CardColumn";
import { Projects } from "@/components/sections/Projects";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { callToAction, footer, profile, sections, skills, tooling } from "@/config/site";

/**
 * PAGE LAYOUT
 * Single column on phones, then a wide left column and a narrow right column
 * from the large breakpoint upwards. All copy lives in config/site.ts.
 */
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <Navbar />

      {/* Page heading */}
      <section className="px-4 pb-4 pt-2 text-center sm:pt-4">
        <h1 className="font-garesin text-4xl font-normal tracking-[0.06em] text-white drop-shadow-[0_3px_18px_rgba(230,34,77,0.45)] sm:text-5xl lg:text-6xl">
          {profile.heading}
        </h1>
        <p className="mx-auto mt-2 max-w-md text-[11px] tracking-[0.3em] text-white/60 sm:text-xs">
          {profile.tagline}
        </p>
      </section>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-4 pb-10 sm:px-6 lg:grid-cols-[1.55fr_1fr] lg:gap-6 lg:px-10 xl:gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          <Hero />
          <TechStack className="lg:flex-1" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 lg:h-full">
          <CardColumn title={sections.skills} cards={skills} />
          <CardColumn title={sections.tooling} cards={tooling} />

          <div className="flex items-center justify-center gap-4 pt-1 lg:mt-auto">
            <a
              href={callToAction.href}
              className="glass rounded-full px-10 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-95"
            >
              {callToAction.label}
            </a>

            {/* Desktop only, the mobile copy sits in the footer instead. */}
            <span className="hidden text-[11px] tracking-wide text-white/50 lg:inline">
              {footer.copyright}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-10">
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
