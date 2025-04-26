// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 pt-6 pb-4 px-4 md:px-8 z-20 relative">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Alec Moore</h2>
          <p className="text-gray-400 text-xs">
            COPYRIGHT © 2025 ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Location 1 */}
        <div className="col-span-1">
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
            LA QUINTA
          </h3>
          <h3 className=" text-sm uppercase tracking-wider mb-3">CALIFORNIA</h3>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 flex flex-col space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm uppercase tracking-wider mb-1"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Cayce"
              className="w-full bg-black border-b border-gray-700 pb-2 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm uppercase tracking-wider mb-1"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              placeholder="pollard@coolhunter.com"
              className="w-full bg-black border-b border-gray-700 pb-2 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div className="pt-2 flex justify-end">
            <button className="rounded-full border border-gray-700 p-2 hover:bg-white hover:text-black transition-colors">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
