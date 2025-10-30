import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-medium text-sm">Про мене</span>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="gradient-text">Никифорак</span>
                <br />
                Володимир
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Досвідчений адвокат</span>, експерт у різних галузях права. 
                  За багаторічну практику успішно захистив сотні клієнтів у найскладніших судових справах.
                </p>
                
                <p>
                  Його професійна експертиза та страстна відданість справі забезпечують 
                  <span className="text-accent font-semibold"> найвищий рівень правового захисту </span>
                  для кожного клієнта.
                </p>
                
                <p>
                  Володію глибоким розумінням судових процедур та правових нюансів, завжди готовий 
                  взяти на себе відповідальність за справедливість та права своїх клієнтів.
                </p>
              </div>

              <div className="pt-8">
                <Link to="/about">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-accent to-blue-600 hover:from-accent/90 hover:to-blue-600/90 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    ДЕТАЛЬНІШЕ ПРО МЕНЕ
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative modern-card p-2 bg-white">
                <img 
                  src="/src/assets/hero-picture"
                  alt="Никифорак Володимир"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;