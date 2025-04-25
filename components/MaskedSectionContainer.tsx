// components/MaskedSectionContainer.tsx
"use client";
import React, { ReactNode } from "react";

interface MaskedSectionContainerProps {
  children: ReactNode;
}

const MaskedSectionContainer = ({ children }: MaskedSectionContainerProps) => {
  return (
    <div className="relative w-full  mx-auto">
      {/* Main content with mask */}
      <div
        className="relative overflow-auto max-h-[100vh]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Add padding to offset the masked areas */}
        <div className="py-[5vh]">{children}</div>
      </div>

      {/* Optional: Glass blur effect on top and bottom for enhanced effect */}
      <div className="absolute top-0 left-0 right-0 h-[10vh] z-10 bg-black/30 backdrop-blur-sm pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[10vh] z-10 bg-black/30 backdrop-blur-sm pointer-events-none" />
    </div>
  );
};

export default MaskedSectionContainer;
