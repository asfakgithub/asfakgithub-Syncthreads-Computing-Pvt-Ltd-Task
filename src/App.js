import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import MapView from "./Components/MapView";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          const decoded = jwtDecode(storedToken);
          if (decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            setToken(null);
          } else {
            setToken(storedToken);
          }
        } catch {
          setToken(null);
        }
      }
    };
    checkToken();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!token ? <Login setToken={setToken} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/map" element={token ? <MapView /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
