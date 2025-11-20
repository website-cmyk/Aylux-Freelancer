"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdHealthAndSafety, MdStorefront, MdPublic } from "react-icons/md";
import CircularButton from "./CircularButton";

const Services = () => {
  const services = [
    {
      icon: MdHealthAndSafety,
      emoji: "Medical Goods",
      title: "Medical Goods Importation & Compliance",
      description:
        "We navigate Australia’s stringent regulatory landscape to import high-quality medical devices, equipment, and supplies — ensuring full TGA compliance, safety, and seamless delivery to healthcare providers.",
      color: "from-teal-500 to-cyan-600",
      hover: "hover:shadow-teal-500/25",
    },
    {
      icon: MdStorefront,
      emoji: "Shopping Cart",
      title: "Australian Market Entry & Retail Channel Access",
      description:
        "From customs clearance to shelf placement — we help global FMCG brands enter Australia with strategic distribution, retail partnerships, and end-to-end logistics support.",
      color: "from-orange-500 to-pink-600",
      hover: "hover:shadow-orange-500/25",
    },
    {
      icon: MdPublic,
      emoji: "Globe",
      title: "International FMCG Import & Export (Australia & South Asia)",
      description:
        "Dual-market expertise: Import trending consumer goods into Australia. Export Australian and global brands into high-growth South Asian markets with local insight and reliable supply chains.",
      color: "from-indigo-500 to-purple-600",
      hover: "hover:shadow-indigo-500/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28">
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
            Our Core Services
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To be the{" "}
            <span className="text-cyan-600 font-semibold">trusted</span>,{" "}
            <span className="text-cyan-600 font-semibold">reliable</span>, and{" "}
            <span className="text-cyan-600 font-semibold">efficient link</span>
            in the global supply chain, ensuring uninterrupted access to quality
            medical and consumer products across Australia and South Asian
            markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group bg-white rounded-3xl shadow-lg ${service.hover} transition-all duration-300 overflow-hidden relative pb-[70px]`}
            >
              {/* Header */}
              <div className={`bg-linear-to-r ${service.color} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12" />
                  <span className="text-4xl">{service.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="absolute bottom-6 right-6 ">
                <div className="flex justify-end">
                  <CircularButton text="Learn More" size="sm" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to streamline your supply chain?
          </p>
          <CircularButton text="Partner with Aylux" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
