import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/95"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-40 right-16 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-accent/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '-3s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-accent font-medium text-sm">Професійна юридична допомога</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Адвокат <span className="gradient-text">Никифорак</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Володимир</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Кваліфікована юридична допомога, спрямована на забезпечення 
            <span className="text-accent font-semibold"> легкості та спокою </span>
            у вашому житті
          </p>

          <div className="mb-12">
            <div className="glass-effect inline-block rounded-2xl p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Консультація безкоштовно
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Отримайте професійну консультацію та оцінку вашої ситуації
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-blue-600 hover:from-accent/90 hover:to-blue-600/90 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="absolute bottom-0 left-0 right-0 glass-effect border-t-0 rounded-t-3xl">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="p-2 bg-accent/10 rounded-full">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <span className="font-medium">м. Чернівці, вул. Героїв Майдану, 62</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-full">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">Безкоштовна консультація</p>
                <a
                  href="tel:+380505167216"
                  className="text-accent hover:text-accent/80 transition-colors font-bold text-xl"
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