"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdHealthAndSafety, MdLocalShipping } from "react-icons/md";
import { FaGlobeAsia, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Story & Mission
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="text-cyan-600 font-semibold">AYLUX PTY LTD</span> —
            a globally connected, Australian-registered import-export powerhouse
            built on trust, compliance, and seamless trade.
          </p>
        </motion.div>

        {/* Hero Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Bridging Continents with Purpose
            </h3>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Founded in Australia, Aylux was born from a clear vision: to
              bridge the gap between high-quality global goods and dynamic,
              growing consumer markets. We specialize in two mission-critical
              sectors — Medical Goods and Fast-Moving Consumer Goods (FMCG) —
              delivering excellence across Australia and South Asia.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-96 overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about/bridge.jpg"
              alt="Aylux connecting Australia and South Asia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-bold">Australia ↔ South Asia</p>
              <p className="text-lg opacity-90">One Trusted Partner</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cyan-600 text-white p-10 lg:p-16 text-center mb-20 shadow-xl"
        >
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">Our Mission</h3>
          <p className="text-base lg:text-2xl max-w-5xl mx-auto leading-relaxed">
            To be the{" "}
            <span className="underline decoration-white/50">
              trusted, reliable, and efficient link
            </span>{" "}
            in the global supply chain, ensuring uninterrupted access to quality
            medical and consumer products across Australia and South Asian
            markets.
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Medical Goods */}
          <motion.article
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-xl overflow-hidden"
          >
            <div className="bg-linear-to-r from-teal-500 to-cyan-600 p-8 text-white">
              <MdHealthAndSafety className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold">Medical Goods</h3>
              <p className="text-lg opacity-90">
                Commitment to Health & Compliance
              </p>
            </div>
            <div className="p-8 lg:p-10 space-y-5 text-gray-700">
              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed"
              >
                We understand that lives depend on the reliability of medical
                supply chains.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed"
              >
                As a dedicated importer into Australia, we source only the
                highest-quality medical equipment and supplies — rigorously
                vetted to meet Australia’s strictest regulatory and safety
                standards.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg font-medium text-cyan-600"
              >
                Our promise: Australian healthcare providers never compromise on
                access, quality, or compliance.
              </motion.p>
            </div>
          </motion.article>

          {/* FMCG */}
          <motion.article
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-xl overflow-hidden"
          >
            <div className="bg-linear-to-r from-orange-500 to-pink-600 p-8 text-white">
              <MdLocalShipping className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold">FMCG Division</h3>
              <p className="text-lg opacity-90">
                Connecting Markets, Powering Growth
              </p>
            </div>
            <div className="p-8 lg:p-10 space-y-6 text-gray-700">
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-xl mb-2 text-gray-900">
                  Importing to Australia
                </h4>
                <p className="text-lg leading-relaxed">
                  We bring diverse, high-demand consumer products from trusted
                  global sources directly to Australian retailers and
                  distributors.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-xl mb-2 text-gray-900">
                  Exporting to South Asia
                </h4>
                <p className="text-lg leading-relaxed">
                  We open doors for Australian and international FMCG brands
                  into one of the world’s fastest-growing consumer regions —
                  with local insight and end-to-end logistics.
                </p>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-lg font-medium text-pink-600"
              >
                <FaGlobeAsia className="inline mr-2" />
                Dual-market mastery. Global trends meet regional opportunity.
              </motion.p>
            </div>
          </motion.article>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mt-20 lg:mt-28"
        >
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 text-2xl lg:text-3xl font-bold text-gray-800">
            <FaHandshake className="text-cyan-600 w-12 h-12" />
            <p>
              At Aylux, we don’t just move products. <br />
              <span className="text-cyan-600">
                We build lasting partnerships across continents.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
