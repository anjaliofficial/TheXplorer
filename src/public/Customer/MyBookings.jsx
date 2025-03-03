import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings"); // Replace with actual API URL
        if (!response.ok) throw new Error("Failed to fetch bookings");

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to cancel booking");

      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>My Bookings</h1>
          <p>Manage your travel bookings with ease.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {loading && <p className="loading">Loading bookings...</p>}
        {error && <p className="error">{error}</p>}

        <section className="bookings-list">
          {bookings.length === 0 && !loading && !error && (
            <p className="no-bookings">You have no bookings yet.</p>
          )}

          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-info">
                <h2 className="package-title">{booking.package.name}</h2>
                <p><strong>Booking Date:</strong> {booking.startDate}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>
              <div className="booking-actions">
                <Link to={`/booking/${booking.id}`} className="btn-primary">View Details</Link>
                {booking.status !== "Completed" && (
                  <button
                    className="btn-secondary"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default MyBookings;
