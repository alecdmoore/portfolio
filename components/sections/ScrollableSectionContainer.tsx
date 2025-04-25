// components/ScrollableSectionContainer.tsx
"use client";
import React, { ReactNode } from "react";

interface ScrollableSectionContainerProps {
  children: ReactNode;
}

const ScrollableSectionContainer = ({
  children,
}: ScrollableSectionContainerProps) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Content area with mask */}
      <div className="relative overflow-auto max-h-[80vh]">
        {/* Add padding to the top and bottom to account for the blurred areas */}
        <div className="py-[10vh]">{children}</div>
      </div>

      {/* Top blur mask */}
      <div
        className="absolute top-0 left-0 right-0 h-[10vh] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Bottom blur mask */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[10vh] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
};

export default ScrollableSectionContainer;
