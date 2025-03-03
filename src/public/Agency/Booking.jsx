import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bookings from the backend
    axios.get("http://localhost:5000/api/bookings")  
      .then(response => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching bookings');
        setLoading(false);
      });
  }, []);

  const cancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);
      setBookings(bookings.filter(booking => booking.id !== bookingId));  // Remove the booking from the list
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-info">
                <h2 className="package-title">{booking.package.name}</h2>
                <p>
                  <strong>Booking Date:</strong> {booking.startDate}
                </p>
                <p>
                  <strong>Status:</strong> {booking.status}
                </p>
              </div>
              <div className="booking-actions">
                <button className="btn-primary">View Details</button>
                <button
                  className="btn-secondary"
                  onClick={() => cancelBooking(booking.id)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Booking;
