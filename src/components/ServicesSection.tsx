import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, FileText, Home, Building, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Кримінальні справи",
      description: "Захист прав у кримінальних процесах",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Цивільні справи",
      description: "Вирішення цивільних спорів та конфліктів",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Адміністративні правопорушення",
      description: "Захист від адміністративних стягнень",
      icon: Building,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Сімейне право",
      description: "Юридична допомога у сімейних справах",
      icon: Home,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Трудове право",
      description: "Захист трудових прав працівників",
      icon: Users,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Договірне право",
      description: "Складання та перевірка договорів",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-border flex-1 max-w-20"></div>
            <div className="mx-6 p-3 rounded-full border border-border bg-background">
              <Scale className="h-6 w-6 text-accent" />
            </div>
            <div className="h-px bg-border flex-1 max-w-20"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Послуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Професійна юридична допомога у різних галузях права з індивідуальним підходом до кожного клієнта
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/20 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-playfair text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;