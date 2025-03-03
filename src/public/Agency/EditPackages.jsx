import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPackages.css";

const EditPackage = () => {
  const [packageData, setPackageData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get the package ID from the URL

  // Fetch the package data when the component mounts
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/packages/${id}`);
        setPackageData(response.data);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setMessage("Failed to load package data.");
      }
    };

    fetchPackage();
  }, [id]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/packages/${id}`, packageData);
      setMessage("Package updated successfully!");
      setTimeout(() => {
        navigate("/managepackages");
      }, 2000);
    } catch (error) {
      console.error("Error updating package:", error);
      setMessage("Failed to update package.");
    }
  };

  return (
    <div>
      <h2>Edit Package</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Package Name"
          value={packageData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={packageData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={packageData.price}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., '5 days')"
          value={packageData.duration}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Package</button>
      </form>
    </div>
  );
};

export default EditPackage;