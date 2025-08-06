import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const chernivtsiLocation = { lat: 48.2921, lng: 25.9358 };

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 15,
      center: chernivtsiLocation,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ weight: "2.00" }]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [{ color: "#9c9c9c" }]
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [{ visibility: "on" }]
        }
      ]
    });

    new window.google.maps.Marker({
      position: chernivtsiLocation,
      map: map,
      title: 'Володимир Никифорак - Адвокат',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2C13.383 2 8 7.383 8 14c0 9 12 22 12 22s12-13 12-22c0-6.617-5.383-12-12-12zm0 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#8B5CF6"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(40, 40),
      }
    });
  };

  const loadGoogleMaps = async () => {
    try {
      // Try to get the API key from Supabase Edge Function
      const response = await fetch('/api/google-maps-key');
      const { apiKey } = await response.json();
      
      if (!apiKey) {
        throw new Error('No API key found');
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = () => {
        setIsLoaded(true);
        setIsLoading(false);
        initializeMap();
      };
      
      script.onerror = () => {
        setIsLoading(false);
      };
      
      document.head.appendChild(script);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGoogleMaps();
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-muted/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-2"></div>
          <p className="text-muted-foreground">Завантаження карти...</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-muted/50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-accent-foreground" />
          </div>
          <p className="text-foreground font-medium">м. Чернівці, вул. Центральна 1</p>
          <p className="text-muted-foreground text-sm mt-2">Карта буде доступна після налаштування</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-2"></div>
            <p className="text-muted-foreground">Завантаження карти...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;