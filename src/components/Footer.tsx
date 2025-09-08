import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Scale } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-accent mr-3" />
              <span className="text-2xl font-playfair font-bold text-foreground">
                Володимир Никифорак
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Професійний адвокат з багаторічним досвідом. Надаю якісні юридичні послуги 
              у сфері цивільного, сімейного, трудового та адміністративного права.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Швидкі посилання</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors ${
                    location.pathname === "/" 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`transition-colors ${
                    location.pathname === "/about" 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  Про мене
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`transition-colors ${
                    location.pathname === "/services" 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  Послуги
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts" 
                  className={`transition-colors ${
                    location.pathname === "/contacts" 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Контактна інформація</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">+380 50 123 45 67</p>
                  <p className="text-sm text-muted-foreground/80">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">volodymyr.lawyer@email.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">м. Чернівці, вул. Центральна 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Володимир Никифорак. Всі права захищені.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;