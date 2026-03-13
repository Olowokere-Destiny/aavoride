import Image, { StaticImageData } from "next/image";

interface RideCardProps {
  image: StaticImageData | string;
  title: string;
  tag: string;
  description: string;
  specs: { icon: string; label: string }[];
}

export default function RideCard({
  image,
  title,
  tag,
  description,
  specs,
}: RideCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden p-2">
      {/* card image */}
      <div className="relative w-full h-36 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* card body */}
      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-xs">{tag}</p>
        <p className="text-xs leading-relaxed text-[#5E5E5E]">{description}</p>

        {/* specs row */}
        <div className="flex flex-wrap gap-3 mt-2">
          {specs.map((spec) => (
            <span
              key={spec.label}
              className="flex items-center gap-1 text-xs"
            >
              <Image src={spec.icon} alt={spec.label} />
              <span>{spec.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
