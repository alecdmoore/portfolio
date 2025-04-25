"use client";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";
import WorksSection from "@/components/sections/WorksSection";

export default function Home() {
  return (
    <div className="relative flex bg-black justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative justify-center z-[5] flex flex-col gap-8  ">
        <SpaceBackground count={3000} size={0.1} spread={100} />
        <div className="flex flex-col justify-center">
          <HeroSection />
          <WorksSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
