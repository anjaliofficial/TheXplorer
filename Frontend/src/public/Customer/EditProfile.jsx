import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    bio: "Love traveling and exploring new places.",
    profilePic: null,
  });
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user profile data (replace with API call later)
    setFormData({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      bio: "Love traveling and exploring new places.",
      profilePic: null, // This should be fetched from the database if available
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      const previewImage = document.getElementById("preview");
      previewImage.src = reader.result;
    };
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true); // Start loading
    console.log("Updated Profile Data:", formData);

    // Simulate saving (replace with actual logic later)
    setTimeout(() => {
      setIsSaving(false); // Stop loading after a few seconds
      alert("Changes saved successfully!");
    }, 2000);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    
    if (confirmDelete) {
      // Simulate account deletion (you'll replace this with actual logic)
      console.log("Account deleted.");
      alert("Your account has been deleted.");

      // Redirect to login page or homepage after deletion
      navigate("/login");
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">TheXplorer</div>
        <ul className="nav-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/explorepackages">Explore</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/profile" className="active">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </aside>

      <div className="main-content">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-picture">
              <img
                id="preview"
                src={formData.profilePic ? URL.createObjectURL(formData.profilePic) : "profile-placeholder.jpg"}
                alt="Profile"
                className="profile-img"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
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
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="3"
                  placeholder="Write a short bio..."
                  value={formData.bio}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="profile-pic">Upload Profile Picture</label>
                <input
                  type="file"
                  id="profile-pic"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <button type="submit" className="btn-primary" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
              <button type="button" className="btn-danger" onClick={handleDelete}>
                Delete Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
