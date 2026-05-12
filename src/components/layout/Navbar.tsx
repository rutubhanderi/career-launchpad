"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skill Building", href: "#" },
  { name: "Find Opportunities", href: "/find-opportunities"},
  { name: "Interview Prep", href: "/interview-prep" },
];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaRocket size={20} className="text-brand-teal" />
          <span>Career Launchpad</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#" variant="cta">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark-blue/95 flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl text-gray-300 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button href="#" variant="cta">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
