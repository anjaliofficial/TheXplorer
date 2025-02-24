import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerRegisteration.css";

const CustomerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // After registration, navigate to the login page
    navigate("/login");
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
        <h2>Register with TheXplorer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <label>Gender:</label>
            <div className="gender-options">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="prefer"
                  value="Prefer not to say"
                  onChange={handleChange}
                />
                <label htmlFor="prefer">Prefer not to say</label>
              </div>
            </div>
          </div>

          <button type="submit">Register</button>

          <div>
            <a href="/login" className="Already-account">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;
