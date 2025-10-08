import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GoogleMap = () => {
  const chernivtsiLocation: [number, number] = [48.2921, 25.9358];

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={chernivtsiLocation}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={chernivtsiLocation}>
          <Popup>
            Володимир Никифорак - Адвокат<br />
            м. Чернівці, вул. Центральна 1
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
