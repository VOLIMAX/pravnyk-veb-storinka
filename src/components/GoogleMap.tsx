import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

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

  const loadGoogleMaps = () => {
    if (!apiKey.trim()) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = () => {
      setIsLoaded(true);
      initializeMap();
    };
    
    document.head.appendChild(script);
  };

  useEffect(() => {
    if (apiKey && !isLoaded) {
      loadGoogleMaps();
    }
  }, [apiKey, isLoaded]);

  if (!apiKey) {
    return (
      <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-muted/50 flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Налаштування Google Maps</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Введіть ваш Google Maps API ключ для відображення карти
          </p>
          <input
            type="text"
            placeholder="Введіть Google Maps API ключ"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 border rounded mb-3 text-sm"
          />
          <button
            onClick={loadGoogleMaps}
            className="bg-accent text-accent-foreground px-4 py-2 rounded text-sm hover:bg-accent/90"
          >
            Завантажити карту
          </button>
          <p className="text-xs text-muted-foreground mt-2">
            Отримати API ключ: <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" className="text-accent">Google Maps Platform</a>
          </p>
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