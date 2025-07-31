import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Адвокат Володимир Никикфорак
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Кваліфікована юридична допомога, спрямована на забезпечення легкості та спокою у вашому житті.
          </p>

          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
              Консультація безкоштовно
            </h2>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              ЗАПИСАТИСЯ
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-muted-foreground text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              <span className="font-medium text-center sm:text-left">м. Чернівці, вул. Героїв Майдану, 62</span>
            </div>

            <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3 text-muted-foreground text-sm sm:text-base">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              <span className="font-medium hidden sm:inline">Безкоштовна консультація</span>
              <a
                href="tel:+380505167216"
                className="text-accent hover:text-accent/80 transition-colors font-semibold text-base sm:text-lg"
              >
                +38 050 516 72 16
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;