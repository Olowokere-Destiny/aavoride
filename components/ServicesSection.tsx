import ServiceCard from "./ServiceCard";
import cityImg from "../assets/images/city-car.png";
import outstationImg from "../assets/images/outstation-car.png";
import airportImg from "../assets/images/airport-car.png";

const services = [
  {
    image: cityImg,
    tag: "Local Car Rentals",
    title: "Explore Your City in Comfort",
    description:
      "Reliable city rentals with transparent pricing and on-time pickups.",
    href: "#",
  },
  {
    image: outstationImg,
    tag: "Outstation With Driver",
    title: "Outstation Trips Made Easy",
    description:
      "Comfortable outstation travel with experienced drivers and clear pricing.",
    href: "#",
  },
  {
    image: airportImg,
    tag: "Airport Transfers",
    title: "Reliable Airport Rides",
    description:
      "Safe, on-time airport pickups and drops at fixed prices.",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-10 mt-8">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Travel your way with AAVORide
        </h2>

        {/* cards grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}