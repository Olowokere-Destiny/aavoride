import RideCard from "./RideCard";
import hatchbackImg from "../assets/images/hatchback.png";
import sedanImg from "../assets/images/sedan.png";
import suvImg from "../assets/images/suv.png";
import comfortVanImg from "../assets/images/comfort-van.png";
import seaterIcon from "../assets/icons/seater-icon.svg";
import bagIcon from "../assets/icons/bag-icon.svg";
const rides = [
  {
    image: hatchbackImg,
    title: "Hatchback",
    tag: "Budget Friendly",
    description: "Perfect for quick city rides and short road trips.",
    specs: [
      { icon: seaterIcon, label: "4 Seater" },
      { icon: bagIcon, label: "2 Bags" },
    ],
  },
  {
    image: sedanImg,
    title: "Sedan",
    tag: "Comfort Ride",
    description: "Ideal for business trips and comfortable long drives.",
    specs: [
      { icon: seaterIcon, label: "4 Seater" },
      { icon: bagIcon, label: "3 Bags" },
    ],
  },
  {
    image: suvImg,
    title: "SUV",
    tag: "Family Trips",
    description: "Spacious and powerful — perfect for family outstation trips.",
    specs: [
      { icon: seaterIcon, label: "6-7 Seater" },
      { icon: bagIcon, label: "4-5 Bags" },
    ],
  },
  {
    image: comfortVanImg,
    title: "Comfort Van",
    tag: "Group Travel",
    description: "Best choice for group tours and special events.",
    specs: [
      { icon: seaterIcon, label: "9-10 Seater" },
      { icon: bagIcon, label: "Large Storage" },
    ],
  },
];

export default function RidesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 my-8 max-w-7xl mx-auto">
      <div className="mx-auto">

        {/* heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Choose Your Ride
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rides.map((ride) => (
            <RideCard key={ride.title} {...ride} />
          ))}
        </div>

      </div>
    </section>
  );
}