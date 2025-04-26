"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import signature from "@/public/signature.png";
import { Linkedin, Github, Mail } from "lucide-react";

type Section = {
  id: string;
  label: string;
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "works", label: "Works" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full fixed z-10 flex flex-col items-center bg-black border-b border-gray-800 px-12">
      {/* Main navbar with logo and social links */}
      <div className="w-full flex gap-6 flex-nowrap items-center justify-evenly py-4">
        <div className="">
          <Image
            src={signature}
            alt="Alec's Logo"
            width={200}
            className="invert"
          />
        </div>
        {/* Section tracker navbar */}
        <nav className="py-2 px-6  bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-full border border-gray-800">
          <ul className="flex space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium py-1 px-2 relative ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:flex gap-x-5 items-start">
          <Link
            href="https://linkedin.com/in/alecdmoore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-gray-100 rounded-full p-2 hover:bg-blue-600 transition-colors ease-in"
          >
            <Linkedin strokeWidth={1.5} />
          </Link>
          <Link
            href="https://github.com/alecdmoore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-full p-2 hover:bg-gray-400 transition-colors ease-in hover:text-black"
          >
            <Github />
          </Link>
          <Link
            href="mailto:alecdmoore@gmail.com"
            className="bg-gray-100 rounded-full p-2 hover:bg-purple-800 transition-colors ease-in"
          >
            <Mail strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
