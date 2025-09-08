import Navigation from "@/components/Navigation";
import PrinciplesSection from "@/components/PrinciplesSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold text-foreground mb-8 text-center">
            Про мене
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/759a99e6-4460-4973-b8f5-be1a830b06a0.png"
                  alt="Володимир Никифорак"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-foreground mb-6">
                  Володимир Никифорак
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Досвідчений адвокат, експерт у різних галузях права. За багаторічну практику 
                  успішно захистив сотні клієнтів у найскладніших судових справах. Його професійна 
                  експертиза та страстна відданість справі забезпечують найвищий рівень 
                  правового захисту для кожного клієнта.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Володію глибоким розумінням судових процедур та правових нюансів, завжди готовий 
                  взяти на себе відповідальність за справедливість та права своїх клієнтів. 
                  Незалежно від складності справи, завжди готовий знайти ефективні рішення та 
                  гарантує найвищий стандарт юридичних послуг для своїх клієнтів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrinciplesSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;