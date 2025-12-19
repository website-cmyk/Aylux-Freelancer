"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdPerson, MdWhatsapp } from "react-icons/md";
import CircularButton from "./CircularButton";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section
      id="contact"
      className="py-24 lg:py-32 bg-linear-to-br from-cyan-950 via-slate-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content & Message */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Get in Touch
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-cyan-100 leading-relaxed max-w-2xl"
            >
              Whether you are a{" "}
              <span className="text-cyan-400 font-semibold">
                global supplier
              </span>{" "}
              looking to enter the Australian market or a{" "}
              <span className="text-cyan-400 font-semibold">brand</span> seeking
              reliable export to South Asia —{" "}
              <span className="text-white font-bold">
                Aylux PTY LTD is your trusted partner
              </span>
              .
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-300"
            >
              We look forward to forging a successful, long-term partnership
              with you.
            </motion.p>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MdPerson className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Janaka</p>
                  <p className="text-lg font-medium">+61 402 432 903</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MdPerson className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Devaka</p>
                  <p className="text-lg font-medium">+61 437 416 493</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MdWhatsapp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    WhatsApp number (24/7)
                  </p>
                  <p className="text-lg font-medium">+94 722 926 615</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MdEmail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">Info@aylux.com.au</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="text-lg font-medium">Melbourne, Australia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center lg:text-left">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name."
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email."
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <input
                type="text"
                placeholder="Company (Optional)."
                className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows={5}
                placeholder="How can we help you today?"
                className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none"
              />

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="cursor-pointer inline-flex items-center gap-3 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  Send Message
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
