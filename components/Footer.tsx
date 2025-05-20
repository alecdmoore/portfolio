// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 pt-6 pb-4 px-4 md:px-8 z-20 relative">
      <div className="max-w-4xl mx-auto flex justify-between ">
        {/* Brand Section */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Alec Moore</h2>
          <p className="text-gray-400 text-xs">COPYRIGHT © 2025</p>
        </div>

        {/* Location 1 */}
        <div className=" text-right">
          <h3 className=" text-sm uppercase tracking-wider mb-3">LA QUINTA,</h3>
          <h3 className=" text-sm uppercase tracking-wider mb-3">CALIFORNIA</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
