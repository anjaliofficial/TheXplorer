import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AgencyRegistration.css";

const AgencyRegistration = () => {
  const [agencyName, setAgencyName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirm password
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password || !agencyName || !contact || !address) {
      setMessage("All fields are required.");
      return;
    }

    // Password and confirm password match validation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Basic contact number validation (assuming it's a valid phone number format)
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
      setMessage("Please enter a valid 10-digit contact number.");
      return;
    }

    const formData = {
      name: agencyName,
      email,
      contact,
      address,
      password,
      role: "agency",
    };

    setLoading(true);

    try {
      // Sending a POST request to the backend using Axios
      await axios.post("http://localhost:5000/agencies/agencies", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setLoading(false);
      setMessage("Registration successful! Redirecting to login...");

      // Redirect to agency login after 2 seconds
      setTimeout(() => navigate("/agencylogin"), 2000);
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Error registering agency.");
    }
  };

  // Navigate to the login page
  const handleLoginRedirect = () => {
    navigate("/agencylogin");
  };

  return (
    <div className="registration-container">
      <h1>Agency Registration</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="agencyName">Agency Name</label>
          <input
            type="text"
            id="agencyName"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username" // Added autocomplete="username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Agency Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password" // Added autocomplete="new-password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password" // Added autocomplete="new-password"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Registering..." : "Submit Registration"}
        </button>
      </form>

      {message && <div className="message">{message}</div>}

      {/* Button to navigate to Login page if agency is already registered */}
      <div className="redirect-login">
        <p>Already have an account? <button onClick={handleLoginRedirect}>Login here</button></p>
      </div>
    </div>
  );
};

export default AgencyRegistration;
