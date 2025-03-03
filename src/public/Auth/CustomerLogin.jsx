import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CustomerLogin.css";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Validate if both email and password are provided
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login Successful:", response.data);

      // Store token in local storage (optional)
      localStorage.setItem("token", response.data.token);

      // Redirect to the customer's homepage or dashboard after login
      navigate("/welcomepage");
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="quote">
          <h5>TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER</h5>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="right-panel">
        <h2>TheXplorer</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn">Login</button>

          <div className="forgot-password">
            <a href="/forgetpassword">Forgot Password?</a>
          </div>

          <div className="customer-registration">
            <a href="/registeration">Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;