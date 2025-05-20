// components/CTAButtons.tsx
import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

const CTAButtons = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Make sure your resume file is named "resume.pdf" and placed in the public folder
  // The public directory is mapped to the root URL path
  const resumePath = "/Alec-Moore-Resume.pdf";
  const resumeFileName = "Your_Name_Resume.pdf"; // Change this to your name

  const handleSeeWorkClick = () => {
    const workSection = document.getElementById("works");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if section not found
      alert("see work");
    }
  };

  const handleDownloadClick = async () => {
    try {
      setIsDownloading(true);

      window.open(resumePath, "_blank");
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("There was an error downloading the resume. Please try again.");
    } finally {
      // Short delay before resetting state for better UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-7 sm:mt-5">
      <button
        className="px-4 py-2 hover:bg-gray-800 border-blue-500 border-2 rounded-md transition-colors duration-300"
        onClick={handleSeeWorkClick}
      >
        <span className="text-sm">See My Works</span>
      </button>

      <button
        className="flex items-center border border-gray-800 gap-x-1 rounded-md  hover:bg-gray-800 px-4 py-3 transition-colors duration-300"
        onClick={handleDownloadClick}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
        <span className="flex text-end gap-x-1 text-sm">
          {isDownloading ? "Downloading..." : "Download CV"}
        </span>
      </button>
    </div>
  );
};

export default CTAButtons;
