import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
  count?: number;
}

export function RatingBadge({ rating, count }: RatingBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-foreground/5 text-xs">
      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
      <span className="font-medium">{rating}</span>
      {count !== undefined && <span className="text-foreground/40">({count})</span>}
    </div>
  );
}
