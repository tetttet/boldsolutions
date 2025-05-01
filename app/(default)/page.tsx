export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { StickyScrollRevealDemo } from "@/components/demo/StickyScrollRevealDemo";
import { TimelineDemo } from "@/components/demo/TimelineDemo";
import { WobbleCardDemo } from "@/components/demo/WobbleCardDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <div id="timeline">
        <TimelineDemo />
      </div>
      <FeaturesPlanet />
      <LargeTestimonial />
      <div id="sticky-scroll-reveal">
        <StickyScrollRevealDemo />
      </div>
      <div id="wobble-card">
        <WobbleCardDemo />
      </div>
      <Cta />
    </>
  );
}
