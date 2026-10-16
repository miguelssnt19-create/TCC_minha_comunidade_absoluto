import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";

function Mapa() {
  return (
    <div className="mapa-container">
      <MapContainer
        center={[-14.2, -51.9]}
        zoom={4}
        scrollWheelZoom={true}
        className="mapa"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-23.5505, -46.6333]}>
          <Popup>
            São Paulo
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;