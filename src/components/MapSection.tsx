import { MapPin } from 'lucide-react';
import GoogleMap from './GoogleMap';

const MapSection = () => {

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
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Розташування
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мій офіс знаходиться у центрі Чернівців. Зручне розташування для клієнтів з усіх районів міста.
          </p>
        </div>

        {/* Google Map */}
        <GoogleMap />
        
        {/* Address Info */}
        <div className="mt-8 text-center">
          <p className="text-foreground font-medium mb-2">м. Чернівці, вул. Центральна 1</p>
          <p className="text-muted-foreground">Легко дістатися громадським транспортом або на автомобілі</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;