import Image from "next/image";
import heroImg from "../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section className="relative w-full h-105 sm:h-120 lg:h-130 overflow-hidden">
      {/* bg image */}
      <Image
        src={heroImg}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 flex items-center justify-center lg:justify-start gap-6 sm:gap-16 lg:gap-40">

        <div className="hidden sm:flex shrink-0 w-48 h-48 lg:w-72 lg:h-72 bg-white rounded-2xl items-center justify-center shadow-2xl">
          <span className="text-xl font-bold tracking-widest text-black uppercase">
            Coming Soon
          </span>
        </div>

        {/* text content */}
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Smart Car Rentals for City &amp; Outstation Travel
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Book trusted car rentals and comfortable outstation trips with
            professional drivers at the best prices.
          </p>
        </div>
      </div>
    </section>
  );
}
