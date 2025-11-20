"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "home", offset: -80 },
    { name: "About Us", to: "about", offset: -80 },
    { name: "Our Services", to: "services", offset: -80 },
    { name: "Get in Touch", to: "contact", offset: 0 },
  ];

  const socials = [
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/aylux",
      label: "LinkedIn",
    },
    { icon: MdFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-cyan-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="">
              <Image
                src="/ayluxLogo.png"
                alt="Aylux Pvt Ltd"
                width={240}
                height={100}
                className="object-center object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Australian-headquartered global trade partner in Medical Goods and
              FMCG.
            </p>
          </motion.div>

          {/* Quick Links with react-scroll */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={link.offset}
                    activeClass="text-cyan-400 font-medium"
                    className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-sm">
              <p>Info@aylux.com.au</p>
              <p>+61 402 432 903</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Aylux Pvt Ltd. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Australian Registered • ABN{" "}
            <span className="text-cyan-500">XX XXX XXX XXX</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
