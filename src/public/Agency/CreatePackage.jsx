import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreatePackage.css";

const CreatePackage = () => {
  const [newPackage, setNewPackage] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    agencyId: "0"
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Get token from localStorage (assuming it's stored there after login)
  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the package data
    const packageData = {
      name: newPackage.name,
      description: newPackage.description,
      price: parseFloat(newPackage.price), // Convert to number
      duration: newPackage.duration,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/packages", 
        packageData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add JWT token for authentication
          },
        }
      );

      setMessage(response.data.message || "Package created successfully!");
      setTimeout(() => {
        navigate("/managepackages");
      }, 2000);
    } catch (error) {
      console.error("Error creating package:", error.response?.data);
      setMessage(error.response?.data?.message || "Error creating package. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create a New Package</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Package Name"
          value={newPackage.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newPackage.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newPackage.price}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., '5 days')"
          value={newPackage.duration}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create Package</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePackage;