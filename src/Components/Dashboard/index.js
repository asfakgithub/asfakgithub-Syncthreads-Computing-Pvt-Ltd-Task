import { useNavigate } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const cards = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-grid">
        {cards.map((id) => (
          <div
            key={id}
            className="dashboard-card"
            onClick={() => navigate("/map")}
          >
            Card {id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
