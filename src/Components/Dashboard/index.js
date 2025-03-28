import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaHeart, FaRandom } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [randomLocations, setRandomLocations] = useState([]);

  // Generate some random exciting locations
  const generateRandomLocations = () => {
    const locations = [
      { id: 101, name: "Neon Pink Dunes", image: "https://source.unsplash.com/random/300x200/?pink,sand", description: "Vibrant pink sand under electric skies" },
      { id: 102, name: "Fusteria Plaza", image: "https://source.unsplash.com/random/300x200/?mosaic,art", description: "Whimsical mosaic wonderland" },
      { id: 103, name: "Bubblegum Bay", image: "https://source.unsplash.com/random/300x200/?pink,beach", description: "Cotton candy waves at sunset" },
      { id: 104, name: "Pixel Paradise", image: "https://source.unsplash.com/random/300x200/?digital,art", description: "8-bit dreams come alive" },
      { id: 105, name: "Lollipop Lookout", image: "https://source.unsplash.com/random/300x200/?candy,mountain", description: "Sweetest views in the world" },
      { id: 106, name: "Disco Desert", image: "https://source.unsplash.com/random/300x200/?mirror,desert", description: "Dance under mirrored skies" }
    ];
    setRandomLocations(locations);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard")
      .then((res) => {
        console.log("Dashboard Data:", res.data.cards);
        setData(res.data.cards);
        generateRandomLocations();
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleRandomAdventure = () => {
    const randomIndex = Math.floor(Math.random() * randomLocations.length);
    navigate(`/map/${randomLocations[randomIndex].id}`);
  };

  return (
    <div className="dashboard-container" style={{ background: "linear-gradient(135deg, #fff0f5 0%, #ffe6ee 100%)" }}>
      <div className="dashboard-header">
        <h2 className="dashboard-title" style={{ color: "#ff66b3", textShadow: "2px 2px 4px rgba(255, 102, 179, 0.3)" }}>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          Explore Fusteresia
        </h2>
        <button 
          onClick={handleRandomAdventure}
          className="random-button"
          style={{
            background: "linear-gradient(45deg, #ff66b3, #ff8fab)",
            border: "none",
            padding: "10px 15px",
            borderRadius: "25px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(255, 102, 179, 0.3)"
          }}
        >
          <FaRandom style={{ marginRight: "8px" }} />
          Random Adventure
        </button>
      </div>

      <div className="section-title" style={{ color: "#ff66b3", margin: "20px 0 10px" }}>
        <FaHeart style={{ marginRight: "8px" }} />
        Your Saved Places
      </div>
      <div className="dashboard-grid">
        {data?.map((card) => (
          <div
            key={card.id}
            className="dashboard-card"
            onClick={() => navigate(`/map/${card.id}`)}
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 12px rgba(255, 102, 179, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
          >
            <img 
              src={card.image} 
              alt={card.description} 
              className="card-image"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderBottom: "2px solid #ffccdd"
              }} 
            />
            <p className="card-description" style={{
              padding: "15px",
              margin: "0",
              color: "#ff66b3",
              fontWeight: "500",
              background: "linear-gradient(to right, #fff0f5, white)"
            }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="section-title" style={{ color: "#ff66b3", margin: "30px 0 10px" }}>
        <FaMapMarkerAlt style={{ marginRight: "8px" }} />
        Discover Fusterestic Wonders
      </div>
      <div className="dashboard-grid">
        {randomLocations.map((location) => (
          <div
            key={location.id}
            className="dashboard-card"
            onClick={() => navigate(`/map/${location.id}`)}
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 12px rgba(255, 102, 179, 0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
          >
            <img 
              src={location.image} 
              alt={location.description} 
              className="card-image"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderBottom: "3px solid #ff66b3"
              }} 
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ 
                color: "#ff3385", 
                margin: "0 0 5px 0",
                fontSize: "1.1em"
              }}>
                {location.name}
              </h3>
              <p style={{ 
                color: "#cc6699", 
                margin: "0",
                fontSize: "0.9em"
              }}>
                {location.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;