import HeroSection from "@/components/HeroSection";
import RecipeGallery from "@/components/RecipeGallery";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueComparisonSection from "@/components/ValueComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RecipeGallery />
      <BonusSection />
      <TestimonialsSection />
      <VideoTestimonialSection />
      <ValueComparisonSection />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <FooterSection />
    </main>
  );
};

export default Index;
