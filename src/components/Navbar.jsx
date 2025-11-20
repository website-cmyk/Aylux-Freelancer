"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import CircularButton from "./CircularButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-22 lg:h-24">

            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer"
            >
              <Image
                src="/ayluxLogo.png"
                alt="Aylux Logo"
                width={160}
                height={100}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-cyan-600 font-semibold border-b-2 border-cyan-600"
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 cursor-pointer pb-1"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={600} offset={-80}>
                <CircularButton text="Contact Us" border={false} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Open menu"
            >
              <HiMenu className="w-7 h-7 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Image
                  src="/Logo.jpg"
                  alt="Aylux"
                  width={140}
                  height={60}
                  className="object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <HiX className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    activeClass="text-cyan-600 font-semibold"
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-medium text-gray-700 hover:text-cyan-600 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t bg-gray-50">
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  <CircularButton text="Contact Us" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;