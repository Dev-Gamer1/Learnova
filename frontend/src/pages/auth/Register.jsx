import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Create Student Account</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
      </form>

      <Link to="/">Already have an account? Login</Link>
    </div>
  );
};

export default Register;
