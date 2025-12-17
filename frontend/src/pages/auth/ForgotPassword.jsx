import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>

      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Send Reset Link</button>
      </form>

      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default ForgotPassword;
