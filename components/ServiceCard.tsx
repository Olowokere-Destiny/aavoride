import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowRight from "../assets/icons/arrow-right.svg";
interface ServiceCardProps {
  image: StaticImageData | string;
  tag: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  image,
  tag,
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden p-4">
      {/* card image */}
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* card body */}
      <div className="flex flex-col gap-2 p-4">
        <p className="text-xs text-black">{tag}</p>
        <h3 className="text-base font-bold text-black leading-snug">{title}</h3>
        <p className="text-sm leading-relaxed text-[#5E5E5E]">{description}</p>
        <Link
          href={href}
          className="mt-1 inline-flex items-center text-sm font-semibold transition-opacity hover:opacity-80 text-[#FF3E1D] underline underline-offset-2"
        >
          <>Book Now</>
          <Image src={arrowRight} alt="arrow right" className="w-4 h-2 translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
