import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./CustomerLogin.css";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });

    // After successful login, navigate to the welcome page
    navigate("/welcomepage");
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
