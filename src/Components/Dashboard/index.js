import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const cards = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cards.map((id) => (
          <div
            key={id}
            className="p-5 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded"
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
