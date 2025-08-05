import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArticlesSection = () => {
  const articles = [
    {
      title: "Нові зміни в трудовому законодавстві України 2025",
      excerpt: "Аналіз останніх змін у трудовому кодексі та їх вплив на роботодавців та працівників.",
      date: "15 січня 2025",
      author: "Володимир Никифорак",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "5 хв читання"
    },
    {
      title: "Захист прав споживачів: що потрібно знати",
      excerpt: "Основні права споживачів та способи їх захисту в сучасних умовах.",
      date: "10 січня 2025",
      author: "Володимир Никифорак",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "7 хв читання"
    },
    {
      title: "Сімейне право: розлучення та поділ майна",
      excerpt: "Практичні поради щодо оформлення розлучення та справедливого поділу спільного майна.",
      date: "5 січня 2025",
      author: "Володимир Никифорак",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "6 хв читання"
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
            Статті
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair font-semibold group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                    Читати далі
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;