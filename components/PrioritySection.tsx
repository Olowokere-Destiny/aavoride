import Image from "next/image";
import bgImage from "../assets/images/priority-bg.png";

const bullets = [
  "Sanitized cars",
  "GPS tracking",
  "24/7 support",
  "Emergency assistance",
];

export default function PrioritySection() {
  return (
    <section className="relative w-full overflow-hidden min-h-70 sm:min-h-80 my-8">
      {/* background */}
      <Image
        src={bgImage}
        alt="Family riding safely in a car"
        fill
        className="object-cover object-center"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />


      <div className="relative z-10 h-full px-6 sm:px-8 lg:px-16 py-12 sm:py-16 flex flex-col justify-center gap-5 max-w-7xl mx-auto">
        <div className="max-w-md flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            Your Safety Is Our Priority
          </h2>
          <p className="text-sm text-white leading-relaxed">
            Every ride is secured with sanitized vehicles, GPS tracking, and 24/7
            support for a safe and worry-free journey.
          </p>


          <ul className="flex flex-col gap-1.5">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                <span className="text-gray-400">·</span>
                {item}
              </li>
            ))}
          </ul>


          <button className="mt-2 w-fit px-5 py-2.5 rounded-md text-sm font-semibold bg-white">
            Ride Safely with AAVORide
          </button>
        </div>
      </div>
    </section>
  );
}