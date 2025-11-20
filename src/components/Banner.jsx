"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";
import CircularButton from "./CircularButton";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const BannerSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      image: "/images/home/spoons.jpg",
      heading: "Aylux",
      subheading: "FMCG Sourcing and Import/Export (Food & Groceries)",
      description:
        "Sourcing the World's Finest. Quality Commodities for Every Market.",
      alt: "Spoons with different legumes/grains",
    },
    {
      image: "/images/home/global.jpg",
      heading: "Aylux",
      subheading: "Global Logistics and Supply Chain Management.",
      description:
        "Your Assurance in Global Trade. Seamless Logistics, Worldwide.",
      alt: "Global Map with Planes, Ships, and Trucks",
    },
    {
      image: "/images/home/medical.jpg",
      heading: "Aylux",
      subheading: "Medical Goods Importation and Supply Chain.",
      description:
        "Protecting Health. Reliable Supply of Essential Medical Goods.",
      alt: "Hands putting on medical gloves",
    },
    {
      image: "/images/home/FMCG.jpg",
      heading: "Aylux",
      subheading: "Australian Market Entry & FMCG Channel Access.",
      description:
        "From Warehouse to Aisle. Connecting Global Brands with Australian Consumers.",
      alt: "Australian Market Entry and FMCG Channel Access",
    },
  ];

  // Framer Motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  return (
    <div
      id="home"
      className="relative w-full mt-[70px] h-[400px] md:h-[1000px] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1200}
        ref={swiperRef}
        className="h-full"
        onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority={index === 0}
                className="object-center object-cover w-full h-full"
                quality={95}
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Animated Content */}
            <section className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 max-w-7xl mx-auto text-white">
              <motion.div
                className="max-w-4xl space-y-2 md:space-y-8"
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                key={index}
              >
                <motion.h1
                  custom={0}
                  variants={textVariants}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  custom={1}
                  variants={textVariants}
                  className="text-xl md:text-3xl font-semibold"
                >
                  {slide.subheading}
                </motion.p>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-base md:text-xl max-w-3xl leading-relaxed text-white/90"
                >
                  {slide.description}
                </motion.p>

                <motion.div custom={3} variants={textVariants} className="h-18">
                  <Link to="contact" smooth={true} duration={600}>
                    <CircularButton text="Partner with us" />
                  </Link>
                </motion.div>
              </motion.div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Elegant Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.swiper.slideToLoop(index)}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/80"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Active Dot Indicator via Swiper's built-in class */}
      <style jsx global>{`
        .swiper-slide-active .max-w-4xl > * {
          /* Ensures animation runs only on active slide */
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
