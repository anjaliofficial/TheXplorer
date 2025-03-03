import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AgencyLogin.css";

const AgencyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }

    const loginData = { email, password };

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", loginData, {
        headers: { "Content-Type": "application/json" },
      });

      setLoading(false);
      setMessage("Login successful! Redirecting to dashboard...");

      // Save token in local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to agency dashboard after 2 seconds
      setTimeout(() => navigate("/agencydashboard"), 2000);
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Agency Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default AgencyLogin;