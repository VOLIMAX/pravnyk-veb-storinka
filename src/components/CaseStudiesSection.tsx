import { Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Справа про відшкодування моральної шкоди",
      category: "Цивільне право",
      result: "Виграно справу",
      amount: "150 000 грн",
      description: "Успішно захистив права клієнта у справі про відшкодування моральної шкоди внаслідок неправомірних дій державного органу.",
      duration: "3 місяці",
      icon: Award,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Трудовий спір щодо незаконного звільнення",
      category: "Трудове право",
      result: "Поновлення на роботі",
      amount: "Компенсація за вимушений прогул",
      description: "Досягнуто поновлення на роботі та отримання повної компенсації за період незаконного звільнення.",
      duration: "2 місяці",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Сімейний спір про розподіл майна",
      category: "Сімейне право",
      result: "Справедливий розподіл",
      amount: "Нерухомість вартістю 2 млн грн",
      description: "Успішно представив інтереси клієнта у складній справі про розподіл спільного майна подружжя.",
      duration: "4 місяці",
      icon: Users,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
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
            Кейси Клієнтів
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {caseStudy.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-playfair font-semibold group-hover:text-accent transition-colors duration-300">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Результат:</span>
                      <span className="text-sm text-accent font-semibold">{caseStudy.result}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Сума:</span>
                      <span className="text-sm text-muted-foreground">{caseStudy.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Тривалість:</span>
                      <span className="text-sm text-muted-foreground">{caseStudy.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;