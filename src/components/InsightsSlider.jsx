"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ← ADD Pagination HERE
import "swiper/css";
import "swiper/css/pagination"; // ← ADD THIS CSS IMPORT
import Image from "next/image";

const InsightsSlider = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const imageArray = [
    {
      imgSrc: "/images/insights/everydayEssentials.png",
      alt: "Everyday Essentials",
    },
    {
      imgSrc: "/images/insights/globalConnectivity.png",
      alt: "Global Connectivity",
    },
    {
      imgSrc: "/images/insights/hardwareBuilding.png",
      alt: "Hardware Building",
    },
    {
      imgSrc: "/images/insights/marketAccess.png",
      alt: "Market Access",
    },
    {
      imgSrc: "/images/insights/medicalGoods.png",
      alt: "Medical Goods",
    },
  ];

  return (
    <main className="py-10 flex flex-col justify-center max-w-7xl mx-auto">
      <section className="px-8">
        <div
          className="pb-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1200: { slidesPerView: 1 },
              1300: { slidesPerView: 1 },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} inline-block w-8 h-2 rounded-full bg-gray-400 transition-all duration-300"></span>`;
              },
            }}
            ref={swiperRef}
          >
            {imageArray.map((data, index) => (
              <SwiperSlide className="pb-10" key={index}>
                <div className="w-full h-full cursor-grab shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image
                      src={data.imgSrc}
                      alt={data.alt}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom styling for active pagination bullet */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #9ca3af; /* gray-400 */
            opacity: 1;
            width: 32px;
            height: 4px;
            border-radius: 9999px;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active {
            background: #06b6d4 !important; /* cyan-500 */
          }
        `}</style>
      </section>
    </main>
  );
};

export default InsightsSlider;
