import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;