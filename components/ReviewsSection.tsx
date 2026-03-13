"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import ReviewCard from "./ReviewCard";
import sliderArrow from "../assets/icons/slider-arrow.svg";
import rahulImg from "../assets/images/rahul.png";
import priyaImg from "../assets/images/priya.png";
import amitImg from "../assets/images/amit.png";

const reviews = [
  {
    avatar: rahulImg,
    name: "Rahul Mehta",
    rating: 4.6,
    review:
      "AAVORide provided a smooth and comfortable airport transfer. The driver arrived on time and the vehicle was very clean.",
  },
  {
    avatar: priyaImg,
    name: "Priya Sharma",
    rating: 4.8,
    review:
      "I booked an outstation trip and the experience was great. The driver was professional and the ride was very comfortable.",
  },
  {
    avatar: amitImg,
    name: "Amit Verma",
    rating: 4.7,
    review:
      "Excellent service with transparent pricing and smooth booking. The car arrived right on time and the entire ride experience was very comfortable.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="mx-auto">

        {/* heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="relative px-10">

          {/* prev — arrow as-is (points left) */}
          <button
            className="swiper-reviews-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-opacity bg-[#FF3E1D]"
          >
            <Image src={sliderArrow} alt="previous" className="scale-x-[-1]" width={8} height={8} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-reviews-prev",
              nextEl: ".swiper-reviews-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-reviews-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-opacity bg-[#FF3E1D]"
          >
            <Image
              src={sliderArrow}
              alt="next"
              width={8}
              height={8}
            />
          </button>

        </div>
      </div>
    </section>
  );
}