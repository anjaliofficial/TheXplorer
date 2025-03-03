import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileSetting.css";

const ProfileSettings = () => {
  // State for form data
  const [formData, setFormData] = useState({
    agencyName: "",
    email: "",
    contact: "",
    address: "",
    logo: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      logo: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
    console.log("Updated Profile Data:", formData);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">The Explorer</div>
        <ul className="nav-menu">
          <li><Link to="/agencydashboard">Dashboard</Link></li>
          <li><Link to="/createpackage">Create Package</Link></li>
          <li><Link to="/managepackages">Manage Packages</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/profilesettings" className="active">Profile Settings</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Profile Settings</h1>
          <p>Update your agency's information.</p>
        </header>

        <section className="profile-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="agencyName">Agency Name</label>
              <input
                type="text"
                id="agencyName"
                name="agencyName"
                placeholder="Enter your agency name"
                value={formData.agencyName}
                onChange={handleChange}
                required
              />
            </div>

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
                type="text"
                id="contact"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Agency Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your agency's address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="logo">Agency Logo</label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="save-btn">Save Changes</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;
