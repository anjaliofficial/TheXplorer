import React, { useState } from "react";
import "../Customer/CustomerSupport.css"; // CSS for styling

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to an API or backend here

    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="customer-support-container">
      <header className="main-header">
        <h1>Customer Support</h1>
        <p>We are here to help you with any issues or questions!</p>
      </header>

      <section className="support-form-section">
        <h2>Contact Us</h2>

        {isSubmitted && (
          <div className="success-message">
            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
          </div>
        )}

        <form className="support-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default CustomerSupport;
