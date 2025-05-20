"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import signature from "@/public/signature.png";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Section = {
  id: string;
  label: string;
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "works", label: "Experience" },
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

    // Prevent body scrolling when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

    // Close mobile menu after clicking
    setMobileMenuOpen(false);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for menu items (staggered entrance)
  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <header className="w-full fixed z-40 flex flex-col items-center bg-black border-b border-gray-800 px-4 md:px-12">
      {/* Main navbar with logo and social links */}
      <div className="w-full 2xl:w-3/4 flex justify-between items-center py-4">
        <div className="flex-shrink-0">
          <Image
            src={signature}
            alt="Alec's Logo"
            width={200}
            className="invert"
          />
        </div>

        {/* Section tracker navbar - hidden on mobile, visible on md and up */}
        <nav className="hidden lg:block py-2 px-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-full border border-gray-800">
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

        {/* Social links - hidden on mobile, visible on sm and up */}
        <div className="hidden lg:flex gap-x-5 items-center">
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

        {/* Mobile menu button - only visible on small screens */}
        <button
          className="lg:hidden p-2 bg-gray-100 rounded-md z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Menu with slide-in animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="h-20"></div> {/* Space for the header */}
            <div className="flex-grow flex flex-col justify-center p-8">
              <nav className="w-full max-w-md mx-auto">
                <ul className="space-y-6">
                  {sections.map((section, i) => (
                    <motion.li
                      key={section.id}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-3 text-xl rounded-md ${
                          activeSection === section.id
                            ? "text-blue-400 font-bold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {section.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile social links */}
              <motion.div
                className="mt-12 flex justify-center gap-8"
                variants={itemVariants}
                custom={sections.length}
                initial="closed"
                animate="open"
              >
                <Link
                  href="https://linkedin.com/in/alecdmoore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-3 hover:bg-blue-600 transition-colors ease-in"
                >
                  <Linkedin strokeWidth={1.5} size={24} />
                </Link>
                <Link
                  href="https://github.com/alecdmoore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-3 hover:bg-gray-400 transition-colors ease-in hover:text-black"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="mailto:alecdmoore@gmail.com"
                  className="bg-gray-100 rounded-full p-3 hover:bg-purple-800 transition-colors ease-in"
                >
                  <Mail strokeWidth={1.5} size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
