import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ManagePackages.css";

const ManagePackages = () => {
  // Sample package data
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Everest Base Camp Trek",
      description: "An unforgettable trekking experience to Everest Base Camp.",
      price: "NPR 150,000",
    },
    {
      id: 2,
      name: "Pokhara Adventure",
      description: "Explore the beauty of Pokhara with this exciting package.",
      price: "NPR 70,000",
    },
  ]);

  // Edit package function
  const editPackage = (packageId) => {
    alert(`Editing package ID: ${packageId}`);
    // You can navigate to an edit page with package data here
  };

  // Delete package function
  const deletePackage = (packageId) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter((pkg) => pkg.id !== packageId));
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

        {/* Package Table */}
        <section className="manage-packages">
          <table className="packages-table">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td>{pkg.name}</td>
                  <td>{pkg.description}</td>
                  <td>{pkg.price}</td>
                  <td>
                    <button className="edit-btn" onClick={() => editPackage(pkg.id)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deletePackage(pkg.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ManagePackages;
