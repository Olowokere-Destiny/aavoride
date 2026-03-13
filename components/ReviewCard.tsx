import Image, { StaticImageData } from "next/image";
import ratingStars from "../assets/icons/rating-stars.png";
interface ReviewCardProps {
  avatar: StaticImageData | string;
  name: string;
  rating: number;
  review: string;
}

export default function ReviewCard({
  avatar,
  name,
  rating,
  review,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-2xl p-5 h-full">

      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-base font-bold text-gray-900">{name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <Image src={ratingStars} alt="rating stars" className="w-auto h-auto" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-[#5E5E5E]">
        {review}
      </p>
    </div>
  );
}