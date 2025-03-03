import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExplorePackages.css";

const ExplorePackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/packages"); // Replace with actual API URL
        if (!response.ok) throw new Error("Failed to fetch packages");

        const data = await response.json();
        setPackages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Explore Travel Packages</h1>
          <p>Choose the perfect package for your next adventure!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {loading && <p className="loading">Loading packages...</p>}
        {error && <p className="error">{error}</p>}

        <section className="packages-grid">
          {packages.length === 0 && !loading && !error && (
            <p className="no-packages">No travel packages available yet.</p>
          )}

          {packages.map((pkg) => (
            <div key={pkg.id} className="package-box">
              <div className="package-content">
                <h2 className="package-title">{pkg.name}</h2>
                <p className="package-description">{pkg.description}</p>
                <p><strong>Price:</strong> NPR {pkg.price.toLocaleString()}</p>
                <p><strong>Duration:</strong> {pkg.duration}</p>
            
              </div>
            
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ExplorePackages;