import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Головна", href: "/" },
    { name: "Про мене", href: "/about" },
    { name: "Послуги", href: "/services" },
    { name: "Контакти", href: "/contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-accent p-2 rounded-lg">
              <Scale className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-playfair font-semibold text-foreground">
                Nykyforak Volodymyr
              </div>
              <div className="text-sm font-inter text-muted-foreground uppercase tracking-wider">
                lawyer
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;