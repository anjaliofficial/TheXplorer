import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo"> </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="search-icon">
          <button>🔍</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover new worlds</h1>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="search-bar">
        <h2>Creating Memories, One Adventure at a Time</h2>
        <div className="container">
          <p>
            TheXplorer is more than just a travel agency; it's a platform to
            connect travelers with the best agencies in Nepal.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="service-list">
          <a href="/agencyregistration" className="service-link">
            <div className="service">
              <h3>Agency Management</h3>
              <p>Agencies can easily create profiles and manage their listings.</p>
            </div>
          </a>
          <a href="/registeration" className="service-link">
            <div className="service">
              <h3>Customer Accounts</h3>
              <p>Customers can save their favorite destinations and packages.</p>
            </div>
          </a>
          <a href="destination-insights.html" className="service-link">
            <div className="service">
              <h3>Destination Insights</h3>
              <p>Detailed information on Nepal’s stunning destinations.</p>
            </div>
          </a>
          <a href="booking-requests.html" className="service-link">
            <div className="service">
              <h3>Booking Requests</h3>
              <p>Streamlined process for requesting bookings with agencies.</p>
            </div>
          </a>
          <a href="travel-knowledge-base.html" className="service-link">
            <div className="service">
              <h3>Travel Knowledge Base</h3>
              <p>Access articles and tips for exploring Nepal effectively.</p>
            </div>
          </a>
          <a href="admin-panel.html" className="service-link">
            <div className="service">
              <h3>Admin Panel</h3>
              <p>Management tools for agencies to oversee their profiles.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <p>© 2024 TheXplorer. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
