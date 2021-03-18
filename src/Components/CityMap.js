import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CityMap = ({ lat, lon }) => {
  return (
    <div>
      <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {museum.map(museum => <Marker position={[lat, lon]}>
          <Popup>
            <a href={museum.link}>{museum.name}</a>
          </Popup>
        </Marker>}
      </MapContainer>
    </div>
  );
};

export default Map;