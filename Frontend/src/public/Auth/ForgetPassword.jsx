import React, { useState } from "react";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div>
      {/* Background */}
      <div className="background"></div>

      <div className="container">
        {/* Radio Buttons for Form Toggle */}
        <input
          type="radio"
          id="forgot-password-toggle"
          name="form-toggle"
          className="form-toggle"
          defaultChecked
        />
        <input
          type="radio"
          id="new-password-toggle"
          name="form-toggle"
          className="form-toggle"
        />

        <div className="card" id="password-reset-form">
          <h2>Reset Password</h2>

          <div className="forgot-password-section">
            <p>Enter your email address to receive a reset link:</p>
            <form id="forgot-password">
              <input
                type="email"
                placeholder="Enter email address"
                id="email"
                required
              />
             
            </form>
          </div>
          <br />
          <div className="new-password-section">
            <form id="new-password">
              <input type="password" placeholder="Create new password" required />
              <input type="password" placeholder="Confirm your password" required />
              <button type="submit">Change</button>
              <div className="Customer-login">
                <a href="/registeration" className="dont-have-account">
                  Don't have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
