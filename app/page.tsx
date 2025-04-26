"use client";
import HeroSection from "@/components/sections/HeroSection";
import { SpaceBackground } from "@/components/SpaceBackground";
import WorksSection from "@/components/sections/WorksSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";

// You'll need to create these additional section components
// import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-black justify-center items-center min-h-screen px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative justify-center z-[5] flex flex-col gap-8 w-full max-w-7xl mt-32">
        <SpaceBackground count={3000} size={0.1} spread={100} />
        <div className="flex flex-col justify-center">
          <section id="hero">
            <HeroSection />
          </section>

          <section id="works">
            <WorksSection />
          </section>

          <section id="education">
            <EducationSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
}
