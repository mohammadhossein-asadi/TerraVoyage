import { formatPrice } from "@/lib/utils";

interface PriceTagProps {
  amount: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceTag({ amount, currency = "USD", size = "md" }: PriceTagProps) {
  return (
    <span className={`font-bold ${size === "lg" ? "text-xl" : size === "md" ? "text-lg" : "text-sm"}`}>
      {formatPrice(amount, currency)}
    </span>
  );
}
