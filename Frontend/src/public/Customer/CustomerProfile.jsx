import React from "react";
import { Link } from "react-router-dom";
import "./CustomerProfile.css";

const CustomerProfile = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">TheXplorer</div>
        <ul className="nav-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/explorepackages">Explore</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/profile" className="active">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="main-header">
          <h1>Welcome, John Doe</h1>
          <p>View and manage your account information and bookings.</p>
        </div>

        <div className="profile-card">
          <img src="profile-pic-placeholder.jpg" alt="Profile" />
          <h2>John Doe</h2>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Joined:</strong> January 2023</p>
          {/* Edit Profile Button that links to EditProfile Page */}
          <Link to="/editprofile">
            <button className="btn-primary">Edit Profile</button>
          </Link>
        </div>

        <div className="bookings">
          <h2>Your Bookings</h2>
          <div className="booking-item">
            <h3>Everest Base Camp Trek</h3>
            <p><strong>Date:</strong> March 10, 2025</p>
            <button className="btn-secondary">View Details</button>
          </div>
          <div className="booking-item">
            <h3>Pokhara Adventure</h3>
            <p><strong>Date:</strong> February 5, 2025</p>
            <button className="btn-secondary">View Details</button>
          </div>
        </div>

        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>Earn points for every booking.</li>
            <li>Personalized travel suggestions.</li>
            <li>Exclusive discounts and offers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
