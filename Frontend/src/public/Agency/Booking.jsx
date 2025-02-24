import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>My Bookings</h1>
          <p>Manage your travel bookings with ease.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <section className="bookings-list">
          {/* Booking 1 */}
          <div className="booking-card">
            <div className="booking-info">
              <h2 className="package-title">Everest Base Camp Trek</h2>
              <p>
                <strong>Booking Date:</strong> 12th January 2025
              </p>
              <p>
                <strong>Status:</strong> Confirmed
              </p>
            </div>
            <div className="booking-actions">
              <button className="btn-primary">View Details</button>
              <button className="btn-secondary">Cancel Booking</button>
            </div>
          </div>

          {/* Booking 2 */}
          <div className="booking-card">
            <div className="booking-info">
              <h2 className="package-title">Pokhara Adventure</h2>
              <p>
                <strong>Booking Date:</strong> 8th January 2025
              </p>
              <p>
                <strong>Status:</strong> Pending Confirmation
              </p>
            </div>
            <div className="booking-actions">
              <button className="btn-primary">View Details</button>
              <button className="btn-secondary">Cancel Booking</button>
            </div>
          </div>

          {/* Booking 3 */}
          <div className="booking-card">
            <div className="booking-info">
              <h2 className="package-title">Lumbini Spiritual Tour</h2>
              <p>
                <strong>Booking Date:</strong> 5th January 2025
              </p>
              <p>
                <strong>Status:</strong> Completed
              </p>
            </div>
            <div className="booking-actions">
              <button className="btn-primary">View Details</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Booking;
