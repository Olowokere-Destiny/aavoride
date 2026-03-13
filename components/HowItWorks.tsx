import Image from "next/image";
import search from "../assets/icons/search-select.svg";
import checkCircle from "../assets/icons/confirm-booking.svg";
import car from "../assets/icons/enjoy-ride.svg";
import StepsArrow from "./StepsArrow";
import React from "react";

const steps = [
  {
    icon: search,
    title: "Search & Select",
    description: "Choose location, date, and car",
  },
  {
    icon: checkCircle,
    title: "Confirm Booking",
    description: "Transparent pricing & instant confirmation.",
  },
  {
    icon: car,
    title: "Enjoy Your Ride",
    description: "Professional driver at your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5E] max-w-sm mx-auto leading-relaxed">
            Book your ride in just a few simple steps and enjoy a smooth travel
            experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 sm:gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center w-full sm:w-1/3 gap-4"
              >
                {/* icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "#FF3E1D" }}
                >
                  <Image src={step.icon} alt={step.title} className="w-7 h-7" />
                </div>

                {/* text */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {step.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-40 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div
                  className={`flex items-center justify-center sm:mt-8 ${
                    i === 1
                      ? "scale-x-[-1] scale-y-[1] sm:scale-x-[1] sm:scale-y-[-1] md:-translate-y-2"
                      : "md:-translate-y-6"
                  }`}
                >
                  <div className="rotate-90 sm:rotate-0">
                    <StepsArrow />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
