import Image, { StaticImageData } from "next/image";
import verifiedDriver from "../assets/icons/verified-driver.svg";
import outstationTrips from "../assets/icons/outstation-trips.svg";
import transparentPricing from "../assets/icons/transparent-pricing.svg";

interface FeatureItemProps {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

const features: FeatureItemProps[] = [
  {
    icon: verifiedDriver,
    title: "Verified Drivers",
    description: "Professional, background-checked drivers.",
  },
  {
    icon: outstationTrips,
    title: "Outstation Trips",
    description: "Travel anywhere, anytime.",
  },
  {
    icon: transparentPricing,
    title: "Transparent Pricing",
    description: "No hidden charges. Pay what you see.",
  },
];

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-3">
      <div className="shrink-0 w-10 h-10 relative">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "#5E5E5E" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-10 border-y-2 border-gray-200 max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-center gap-10 sm:gap-16">

        <h2 className="text-4xl sm:w-1/2 sm:text-5xl font-black text-gray-900 leading-tight shrink-0 text-center sm:text-left">
          Why Ride<br />with<br />AAVORide?
        </h2>

        <div className="flex flex-col gap-4 w-full">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}