import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import Link and useNavigate
import axios from "axios"; // To make API calls
import "./ManagePackages.css";

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [message, setMessage] = useState(""); // For success or error message
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch packages when component mounts
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/packages`, {
         
        });
        setPackages(response.data); // Set the response data to state
      } catch (error) {
        console.error("Error fetching packages", error);
        setMessage("Failed to load packages.");
      }
    };

    
      fetchPackages(); // Fetch packages only if agencyId is present
  
  },); // Only re-run if agencyId changes

  // Edit Package
  const editPackage = (pkgId) => {
    navigate(`/editpackage/${pkgId}`); // Navigate to the edit package page with the package ID
  };

  // Delete Package
  const deletePackage = async (pkgId) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      try {
        await axios.delete(`http://localhost:5000/api/packages/${pkgId}`); // Call the delete API
        setPackages(packages.filter(pkg => pkg.id !== pkgId)); // Update state after deletion
        alert("Package deleted successfully");
      } catch (error) {
        console.error("Error deleting package", error);
        setMessage("Failed to delete package.");
      }
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">The Explorer</div>
        <ul className="nav-menu">
          <li><Link to="/agencydashboard">Dashboard</Link></li>
          <li><Link to="/createpackage">Create Package</Link></li>
          <li><Link to="/managepackages" className="active">Manage Packages</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/profilesettings">Profile Settings</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Manage Packages</h1>
          <p>View, edit, or delete your travel packages.</p>
        </header>

        <section className="manage-packages">
          {message && <p>{message}</p>} {/* Show message */}
          <table className="packages-table">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Description</th>
                <th>Price (NPR)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.length > 0 ? (
                packages.map((pkg) => (
                  <tr key={pkg.id}>
                    <td>{pkg.name}</td>
                    <td>{pkg.description}</td>
                    <td>NPR {pkg.price.toLocaleString()}</td>
                    <td>
                      <button className="edit-btn" onClick={() => editPackage(pkg.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => deletePackage(pkg.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No packages available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ManagePackages;