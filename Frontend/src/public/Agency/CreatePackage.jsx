import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreatePackage.css";

const CreatePackage = () => {
  // State to store form inputs
  const [packageName, setPackageName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      packageName,
      price,
      description,
      image,
    });

    // Here, you can send data to the backend
    alert("Package Created Successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">The Explorer</div>
        <ul className="nav-menu">
          <li><Link to="/agencydashboard">Dashboard</Link></li>
          <li><Link to="/createpackage" className="active">Create Package</Link></li>
          <li><Link to="/managepackages">Manage Packages</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/profilesettings">Profile Settings</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Create a New Travel Package</h1>
          <p>Fill in the details below to create a package for your customers.</p>
        </header>

        {/* Package Form */}
        <form className="package-form" onSubmit={handleSubmit}>
          <label htmlFor="package-name">Package Name:</label>
          <input
            type="text"
            id="package-name"
            placeholder="Enter package name"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />

          <label htmlFor="price">Price (in NPR):</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Write a brief description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">Create Package</button>
        </form>
      </main>
    </div>
  );
};

export default CreatePackage;
