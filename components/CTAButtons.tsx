// components/CTAButtons.tsx
import React from "react";
import { Download } from "lucide-react";

const CTAButtons = () => {
  return (
    <div className="flex justify-center gap-x-3 mt-4">
      <button
        className="px-3 py-1 bg-gray-800 border-blue-500 border-2 rounded-md gradient-border-glow"
        onClick={(): void => alert("see work")}
      >
        <span className="text-sm">See My Work</span>
      </button>

      <button
        className="flex items-center bg-transparent gap-x-1 rounded-md"
        onClick={(): void => alert("download resume")}
      >
        <Download />
        <span className="flex text-end gap-x-1 text-sm">Download CV</span>
      </button>
    </div>
  );
};

export default CTAButtons;
