import React from "react";
import { Link } from "react-router-dom";
import "./AgencyDashboard.css";

const AgencyDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">The Explorer</div>
        <ul className="nav-menu">
          <li><Link to="/agencydashboard" className="active">Dashboard</Link></li>
          <li><Link to="/createpackage">Create Package</Link></li>
          <li><Link to="/editpackages">Edit Packages</Link></li>
          <li><Link to="/managepackages">Manage Packages</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/profilesettings">Profile Settings</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <h1>Welcome to the Agency Dashboard</h1>
          <p>Manage your travel agency effortlessly.</p>
        </header>

        {/* Statistics Section */}
        <section className="statistics">
          <div className="stat-card">
            <h2>Total Packages</h2>
            <p>35</p>
          </div>
          <div className="stat-card">
            <h2>Total Bookings</h2>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h2>Inquiries</h2>
            <p>45</p>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions">
            <Link to="/createpackage" className="action-btn">Create New Package</Link>
            <Link to="/managepackages" className="action-btn">Manage Packages</Link>
            <Link to="/editpackages" className="action-btn">Edit Existing Package</Link>
            <Link to="/booking" className="action-btn">View Bookings</Link>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="activities-section">
          <h2>Recent Activities</h2>
          <div className="activities">
            <div className="activity-card">
              <h3>Booking #1234</h3>
              <p>Booking made by John Doe for Everest Trek.</p>
            </div>
            <div className="activity-card">
              <h3>Inquiry about Annapurna Trek</h3>
              <p>Customer inquiry regarding the Annapurna Trek package.</p>
            </div>
          </div>
        </section>

        {/* Upcoming Travel Packages Section */}
        <section className="upcoming-packages">
          <h2>Upcoming Travel Packages</h2>
          <div className="upcoming">
            <div className="upcoming-card">
              <h3>Everest Base Camp Trek</h3>
              <p>Starts in 5 days. Book your spot today!</p>
            </div>
            <div className="upcoming-card">
              <h3>Pokhara Adventure</h3>
              <p>Group tour starting next month. Join now!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyDashboard;
