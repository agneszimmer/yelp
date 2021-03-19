import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CityMap = ({ museums }) => {
  console.log(museums)
  return (
    <div>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {museums.map((museum) => (<Marker position={[museum.lat, museum.lon]}>
        <Popup>
          {museum.name} <br /> {museum.link}
        </Popup>
      </Marker>))}
    </MapContainer>

    </div>
  );
};

export default CityMap;
