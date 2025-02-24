import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgencyRegistration.css";

const AgencyRegistration = () => {
  const [agencyName, setAgencyName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState(""); // New Password State
  const [businessLicense, setBusinessLicense] = useState(null);
  const [taxRegistration, setTaxRegistration] = useState(null);
  const [addressProof, setAddressProof] = useState(null);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("agencyName", agencyName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("password", password); // Include password in formData
    formData.append("businessLicense", businessLicense);
    formData.append("taxRegistration", taxRegistration);
    formData.append("addressProof", addressProof);

    console.log("Form Data Submitted:", Object.fromEntries(formData.entries()));

    // Redirect to agency dashboard after successful registration
    navigate("/agencydashboard");
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

        {/* New Password Field */}
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* File Uploads for Business Documents */}
        <div className="form-group">
          <label htmlFor="businessLicense">Business License</label>
          <input
            type="file"
            id="businessLicense"
            accept="image/*,application/pdf"
            onChange={(e) => setBusinessLicense(e.target.files[0])}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="taxRegistration">Tax Registration Certificate</label>
          <input
            type="file"
            id="taxRegistration"
            accept="image/*,application/pdf"
            onChange={(e) => setTaxRegistration(e.target.files[0])}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressProof">Proof of Business Address</label>
          <input
            type="file"
            id="addressProof"
            accept="image/*,application/pdf"
            onChange={(e) => setAddressProof(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default AgencyRegistration;
