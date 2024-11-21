import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import { useState } from "react";
import RefreshHandler from "./RefreshHandler.js";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element=<Navigate to="/login" /> />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
