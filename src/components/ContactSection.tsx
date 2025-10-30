import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          to: 'volodymyr.nykyforak@gmail.com'
        }),
      });

      if (response.ok) {
        toast({
          title: "Повідомлення надіслано",
          description: "Дякуємо за звернення! Я зв'яжуся з вами найближчим часом.",
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося надіслати повідомлення. Спробуйте ще раз.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const phoneNumber = "+380505167216";

  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleViber = () => {
    window.open(`viber://chat?number=${phoneNumber}`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${phoneNumber}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-border flex-1 max-w-32"></div>
            <div className="mx-6 w-16 h-16 rounded-full border-2 border-border bg-background flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
            <div className="h-px bg-border flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Контакти
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <Card className="border-border h-fit">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair font-semibold text-foreground mb-2">
                Зв'яжіться зі мною
              </CardTitle>
              <p className="text-muted-foreground">
                Заповніть форму нижче, і я зв'яжуся з вами для безкоштовної консультації
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ім'я та прізвище</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введіть ваше повне ім'я"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефону</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+380 XX XXX XX XX"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Повідомлення</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Опишіть вашу ситуацію або питання..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Надіслати повідомлення
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 h-fit">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-playfair font-semibold text-foreground">
                  Контактна інформація
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <p className="text-muted-foreground">{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Робочі години</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-playfair font-semibold text-foreground">
                  Швидкий зв'язок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={handlePhoneCall}
                    variant="outline" 
                    className="h-16 flex-col hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-sm">Подзвонити</span>
                  </Button>
                  
                  <Button 
                    onClick={handleViber}
                    variant="outline" 
                    className="h-16 flex-col hover:bg-accent hover:text-accent-foreground transition-colors"
                    style={{ backgroundColor: '#665CAC', color: 'white' }}
                  >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-sm">Viber</span>
                  </Button>
                  
                  <Button 
                    onClick={handleTelegram}
                    variant="outline" 
                    className="h-16 flex-col hover:bg-accent hover:text-accent-foreground transition-colors"
                    style={{ backgroundColor: '#0088cc', color: 'white' }}
                  >
                    <Send className="w-5 h-5 mb-1" />
                    <span className="text-sm">Telegram</span>
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline" 
                    className="h-16 flex-col hover:bg-accent hover:text-accent-foreground transition-colors"
                    style={{ backgroundColor: '#25D366', color: 'white' }}
                  >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-sm">WhatsApp</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;