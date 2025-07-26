// components/HomePage.jsx
import { BlogSection } from "./blog-section";
import { FeaturesSection } from "./feature-section";
import { CallToActionSection } from "./call-to-action-section";
import { TestimonialsSection } from "./TestimonialsSection";
import { HeroSection } from "./HeroSection";
import { QuickAccessSection } from "./QuickAccessSection";
// ...import others as needed

export function HomePage() {
  return (
    <>
      <BlogSection />
      <FeaturesSection />
      <CallToActionSection />
      <TestimonialsSection />
      <HeroSection />
      <QuickAccessSection />
      {/* add other home sections as needed */}
    </>
  );
}
