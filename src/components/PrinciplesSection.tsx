import { Award, CheckCircle, Clock, MessageCircle, Search } from "lucide-react";

const PrinciplesSection = () => {
  const principles = [
    {
      icon: Award,
      title: "Спеціалізація у сфері права"
    },
    {
      icon: CheckCircle,
      title: "Постановка цілей і гарантії виконання"
    },
    {
      icon: Clock,
      title: "Оперативність в роботі"
    },
    {
      icon: MessageCircle,
      title: "Постійний зв'язок із клієнтом"
    },
    {
      icon: Search,
      title: "Деталічність та уважність"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-border flex-1 max-w-32"></div>
            <div className="mx-6 w-16 h-16 rounded-full border-2 border-border bg-background flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-foreground rounded-full"></div>
              </div>
            </div>
            <div className="h-px bg-border flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Принципи діяльності
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-accent transition-colors duration-300 flex items-center justify-center bg-background group-hover:bg-accent/5">
                  <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-foreground leading-tight max-w-32 mx-auto">
                  {principle.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;