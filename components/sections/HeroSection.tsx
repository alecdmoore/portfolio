// components/HeroSection.tsx
import React from "react";
import CTAButtons from "@/components/CTAButtons";
import AnimatedTitle from "@/components/AnimatedTitle";

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-[100vh] z-[10] text-white justify-center items-center mx-10 sm:mx-20">
      <span className="font-thin text-gray-100 mb-3">Based In California</span>

      <AnimatedTitle />

      <span className="text-gray-300 mt-6">
        Hi, I'm Alec! I create fullstack software solutions{" "}
      </span>

      <CTAButtons />
    </div>
  );
};

export default HeroSection;
