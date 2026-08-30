import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Metrics } from "@/components/sections/metrics";
import { Expertise } from "@/components/sections/expertise";
import { Skills } from "@/components/sections/skills";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ProfessionalExperience } from "@/components/sections/professional-experience";
import { BeyondDevelopment } from "@/components/sections/beyond-development";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AdditionalSystems } from "@/components/sections/additional-systems";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export function PortfolioPage() {
  return (
    <main id="main-content" className="relative text-[color:var(--ink)]">
      <div className="noise-overlay" aria-hidden="true" />
      <Hero />
      <About />
      <Metrics />
      <Expertise />
      <Skills />
      <ExperienceTimeline />
      <ProfessionalExperience />
      <BeyondDevelopment />
      <FeaturedProjects />
      <AdditionalSystems />
      <Achievements />
      {/* Renders only once content/education.ts has entries. */}
      <Education />
      <Certifications />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
