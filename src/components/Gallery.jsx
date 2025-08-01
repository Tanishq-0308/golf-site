import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const GolfCourseGallery = () => {
  const images = [
    "/Bardmoor1.jpg",
    "/BlackDiamond1.jpg",
    "/bloom.jpeg",
    "/bloom2.webp",
    "/crescentOaks2.jpeg",
    "/Crescentoaks1.jpg",
    "/dunedin1.jpg",
    "/HeritageHarbor1.jpeg",
    "/HeritageIsles1.webp",
    "/heroBackground.jpg",
    "/lakejovita1.jpeg",
    "/lakejovita2.jpeg",
    "/lansbrook1.webp",
    "/southernhills1.webp",
    "/TPC1.jpg",
    "/TPC2.jpg",
  ];

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#006838] text-center mb-10 mt-5">
        Gallery
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="h-[220px] w-full overflow-hidden rounded-xl shadow-lg">
                <img
                  src={`${src}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Golf Course ${index + 1}`}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"

                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GolfCourseGallery;
