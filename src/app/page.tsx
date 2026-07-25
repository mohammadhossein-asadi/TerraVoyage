import { Hero } from "@/components/home/hero";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { CategoryGrid } from "@/components/home/category-grid";
import { TrendingAccommodations } from "@/components/home/trending-accommodations";
import { StatsBar } from "@/components/home/stats-bar";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <CategoryGrid />
      <TrendingAccommodations />
      <StatsBar />
      <CTASection />
    </>
  );
}
