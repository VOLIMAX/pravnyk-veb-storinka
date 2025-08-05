import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // You would need to set your Mapbox token here
    // For now, using a placeholder - replace with actual token
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbGYydGF6ZGcwMDFyM3BtcGI2NDN4Ym9sIn0.ZdJEcBwJOKJffHp7YKlpkg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [25.9358, 48.2922], // Chernivtsi coordinates
      zoom: 13,
    });

    // Add marker for the office location
    new mapboxgl.Marker({
      color: 'hsl(200, 95%, 65%)', // Using accent color
      scale: 1.2
    })
    .setLngLat([25.9358, 48.2922])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML('<div style="color: #000;"><strong>Володимир Никифорак</strong><br/>Юридичні послуги</div>')
    )
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

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

        {/* Map */}
        <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <div ref={mapContainer} className="absolute inset-0" />
        </div>
        
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