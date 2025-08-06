import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
        <MapSection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contacts;