import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./ManagePackages.css";

const ManagePackages = () => {
  const [packages, setPackages] = useState([
    {
      name: "Everest Base Camp Trek",
      description: "An unforgettable trekking experience to Everest Base Camp.",
      price: 150000,
    },
    {
      name: "Pokhara Adventure",
      description: "Explore the beauty of Pokhara with this exciting package.",
      price: 70000,
    },
  ]);

  // Edit Package
  const editPackage = (pkg) => {
    alert(`Editing package: ${pkg.name}`);
  };

  // Delete Package
  const deletePackage = (index) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter((_, i) => i !== index));
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
              {packages.map((pkg, index) => (
                <tr key={index}>
                  <td>{pkg.name}</td>
                  <td>{pkg.description}</td>
                  <td>NPR {pkg.price.toLocaleString()}</td>
                  <td>
                    <button className="edit-btn" onClick={() => editPackage(pkg)}>Edit</button>
                    <button className="delete-btn" onClick={() => deletePackage(index)}>Delete</button>
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
