import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PrinciplesSection />
      <FAQSection />
      <ArticlesSection />
      <CaseStudiesSection />
      <ContactSection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
