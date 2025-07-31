import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 lg:mr-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Володимир Никифорак"
                className="w-full max-w-xs mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="h-px bg-border flex-1 max-w-16"></div>
              <div className="mx-6 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <div className="h-px bg-border flex-1 max-w-16"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-6">
              Про мене
            </h2>

            <h3 className="text-xl sm:text-2xl font-playfair font-medium text-foreground mb-6">
              Володимир Никифорак
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Досвідчений адвокат, експерт у різних галузях права. За багаторічну практику 
              успішно захистив сотні клієнтів у найскладніших судових справах. Його професійна 
              експертиза та страстна відданість справі забезпечують найвищий рівень 
              правового захисту для кожного клієнта. Володію глибоким розумінням судових 
              процедур та правових нюансів, завжди готовий взяти на себе відповідальність 
              за справедливість та права своїх клієнтів. Незалежно від складності справи, 
              завжди готовий знайти ефективні рішення та гарантує найвищий стандарт 
              юридичних послуг для своїх клієнтів.
            </p>

            <Link to="/about">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-base transition-all duration-300 transform hover:scale-105"
              >
                ДЕТАЛЬНІШЕ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;