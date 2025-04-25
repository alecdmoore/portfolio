// components/HeroSection.tsx
import React from "react";
import { Download } from "lucide-react";

const WorksSection = () => {
  return (
    <div className="flex flex-col z-[10] min-h-[100vh] text-white justify-center items-center mx-10 sm:mx-20">
      <span className="font-thin text-gray-100 mb-3">Based In California</span>

      <div className="flex flex-col z-10 items-center justify-center text-5xl md:text-6xl">
        <span className="inline-block animate-[fadeIn_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
          Software Engineer{" "}
        </span>
        <span className="inline-block animate-[fadeIn_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s] text-blue-600">
          Specializing In Web{" "}
        </span>
        <span className="inline-block animate-[fadeIn_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:1s]">
          Applications
        </span>
      </div>

      <span className="text-gray-300 mt-6">
        Hi, I'm Alec! I create fullstack software solutions{" "}
      </span>

      <div className="flex justify-center gap-x-3 mt-4">
        <div
          className="px-3 py-1 bg-gray-800 border-blue-500 border-2 rounded-md gradient-border-glow"
          onClick={(): void => alert("see work")}
        >
          <span className="text-sm">See My Work</span>
        </div>

        <div
          className="flex items-center bg-transparent gap-x-1 rounded-md"
          onClick={(): void => alert("download resume")}
        >
          <Download />
          <span className="flex text-end gap-x-1 text-sm">Download CV</span>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
