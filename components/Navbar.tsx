import React from "react";
import Image from "next/image";
import Link from "next/link";
import signature from "@/public/signature.png";
import { Linkedin, Github, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed z-10 row-start-1 flex gap-6 flex-nowrap items-center justify-between">
      <div className="w-1/4 ">
        <Image src={signature} alt="Alec's Logo" className="invert" />
      </div>
      <div className="hidden sm:flex gap-x-5 items-start mt-4 ">
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
    </header>
  );
};

export default Navbar;
