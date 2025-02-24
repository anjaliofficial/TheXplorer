import React from "react";
import { Link } from "react-router-dom";
import "../Agency/AgencyDashboard.css";

const WelcomePage = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar" aria-label="Main Navigation">
        <div className="logo">TheXplorer</div>
        <ul className="nav-menu">
          <li><Link to="/welcomepage" className="active">Home</Link></li>
          <li><Link to="/explorepackages">Explore Packages</Link></li>
          <li><Link to="/mybookings">My Bookings</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/customerprofile">Profile</Link></li>
          <li><Link to="/paymenthistory">Payments</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/customersupport">Support</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/interactive-map">Interactive Map</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <h1>Welcome, <span>John Doe</span>!</h1>
          <p>Your next adventure is just a click away.</p>
        </header>

        {/* Promotional Section */}
        <section className="promo-section">
          <img
            src="travel-banner.jpg"
            alt="Scenic view of Nepal with mountains and nature"
            className="promo-image"
          />
          <p>Discover the best travel packages tailored just for you.</p>
        </section>

        {/* Featured Section */}
        <section className="featured-section">
          <div className="featured-card">
            <h2>Explore Nepal</h2>
            <p>
              Discover hidden gems, breathtaking landscapes, and rich culture
              with our curated guides.
            </p>
            <button className="btn-explore">
              <Link to="/explore-nepal">Explore Now</Link>
            </button>
          </div>
          <div className="featured-card">
            <h2>Set Your Travel Goals</h2>
            <p>
              Plan your next adventure and track your travel aspirations for the
              year.
            </p>
            <button className="btn-goals">Set Goals</button>
          </div>
          <div className="featured-card">
            <h2>Join the Community</h2>
            <p>
              Share your travel experiences and connect with fellow adventurers.
            </p>
            <button className="btn-join">Get Started</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
