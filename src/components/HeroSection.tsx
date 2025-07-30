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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Адвокат Олександр Пилип'юк
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Кваліфікована юридична допомога, спрямована на забезпечення легкості та спокою у вашому житті.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Консультація безкоштовно
            </h2>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              ЗАПИСАТИСЯ
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium">м. Чернівці, вул. Героїв Майдану, 62</span>
            </div>
            
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-medium">Безкоштовна консультація</span>
              <a 
                href="tel:+380976864633" 
                className="text-accent hover:text-accent/80 transition-colors font-semibold text-lg"
              >
                +38 097 686 46 33
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;