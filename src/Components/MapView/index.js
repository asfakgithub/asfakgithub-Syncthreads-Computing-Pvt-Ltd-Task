import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt, FaHeart, FaRandom } from 'react-icons/fa';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom pink marker icon
const pinkIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-pink.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = () => {
  const position = [22.5726, 88.3639]; // Coordinates for Kolkata, India
  const funSpots = [
    { name: "Pink Pearl Plaza", position: [22.5826, 88.3739], description: "Sparkling fountains & bubblegum walls" },
    { name: "Fusterestic Park", position: [22.5626, 88.3539], description: "Mosaic benches and rainbow trees" },
    { name: "Cotton Candy Corner", position: [22.5726, 88.3839], description: "Sweetest street food in town" },
    { name: "Disco Docks", position: [22.5776, 88.3639], description: "Dance by the glittering river" }
  ];

  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',
      background: 'linear-gradient(135deg, #ffe6ee 0%, #ffccdd 100%)'
    }}>
      <div style={{
        padding: '20px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 2px 10px rgba(255, 102, 179, 0.2)'
      }}>
        <h1 style={{ 
          color: '#ff3385', 
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Comic Sans MS", cursive, sans-serif'
        }}>
          <FaMapMarkerAlt style={{ marginRight: '10px' }} />
          Fusterestic Kolkata Map
        </h1>
        <p style={{ color: '#cc6699', margin: '5px 0 0' }}>
          Explore the colorful wonders of the city!
        </p>
      </div>
      
      <MapContainer 
        center={position} 
        zoom={14} 
        style={{ 
          height: 'calc(100vh - 100px)', 
          width: '100%',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(255, 102, 179, 0.3)'
        }}
      >
        {/* Fun pink-themed tile layer */}
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=YOUR_STADIA_KEY"
        />
        
        {/* Main marker with custom icon */}
        <Marker position={position} icon={pinkIcon}>
          <Popup style={{
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            color: '#ff3385'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ margin: '5px 0', color: '#ff3385' }}>Kolkata Central</h3>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
                Heart of the colorful city!
              </p>
              <div style={{
                background: '#ffccdd',
                padding: '5px',
                borderRadius: '10px',
                marginTop: '5px'
              }}>
                <FaHeart style={{ color: '#ff3385' }} /> Fusterestic Hotspot
              </div>
            </div>
          </Popup>
        </Marker>
        
        {/* Fun additional markers */}
        {funSpots.map((spot, index) => (
          <Marker key={index} position={spot.position} icon={pinkIcon}>
            <Popup>
              <div style={{ 
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  margin: '5px 0', 
                  color: '#ff3385',
                  fontSize: '1.1em'
                }}>
                  {spot.name}
                </h3>
                <p style={{ 
                  margin: '5px 0', 
                  color: '#cc6699',
                  fontSize: '0.9em'
                }}>
                  {spot.description}
                </p>
                <button 
                  style={{
                    background: 'linear-gradient(45deg, #ff66b3, #ff8fab)',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    color: 'white',
                    cursor: 'pointer',
                    marginTop: '5px',
                    fontSize: '0.8em'
                  }}
                >
                  <FaRandom style={{ marginRight: '5px' }} />
                  Explore
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;