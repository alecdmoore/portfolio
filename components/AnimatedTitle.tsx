// components/AnimatedTitle.tsx
import React from "react";

const AnimatedTitle = () => {
  return (
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
  );
};

export default AnimatedTitle;
