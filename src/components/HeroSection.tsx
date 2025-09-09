import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-white/95 to-accent/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-accent/10 border border-accent/20 mb-8">
            <span className="text-accent font-medium text-sm">Професійна юридична допомога</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Адвокат <span className="accent-text">Никифорак</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Володимир</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Кваліфікована юридична допомога з <span className="accent-text">досвідом понад 15 років</span>, 
            спрямована на захист ваших інтересів та прав
          </p>

          <div className="mb-12">
            <div className="professional-glass inline-block rounded-lg p-6 mb-8 max-w-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                Безкоштовна консультація
              </h2>
              <p className="text-muted-foreground mb-4 text-base">
                Професійна оцінка вашої правової ситуації
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-3 rounded-md subtle-animation"
              >
                ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="absolute bottom-0 left-0 right-0 professional-glass border-t rounded-t-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="p-2 bg-accent/10 rounded-md">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium">м. Чернівці, вул. Героїв Майдану, 62</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-md">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground">Безкоштовна консультація</p>
                <a
                  href="tel:+380505167216"
                  className="text-accent hover:text-accent/80 subtle-animation font-semibold text-lg"
                >
                  +38 050 516 72 16
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;