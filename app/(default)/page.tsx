export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { InfiniteMovingCardsDemo } from "@/components/demo/InfiniteMovingCards";
import { StickyScrollRevealDemo } from "@/components/demo/StickyScrollRevealDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <InfiniteMovingCardsDemo />
      <FeaturesPlanet />
      <LargeTestimonial />
      <StickyScrollRevealDemo />
      <Cta />
    </>
  );
}
