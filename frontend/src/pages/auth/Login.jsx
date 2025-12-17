import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const Login = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "admin") {
      navigate("/admin-login");
    }
  };

  return (
    <>
      {/* Top Left Logo */}
      <div className="auth-header">LEARNOVA</div>

      <div className="auth-container">
        <div className="auth-layout">

          {/* Left Illustration */}
          <div className="auth-illustration">
            <img
              src="https://illustrations.popsy.co/gray/student-at-home.svg"
              alt="Learning illustration"
            />
          </div>

          {/* Login Card */}
          <div className="auth-box">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account</p>

            {/* Role Toggle */}
            <div className="role-toggle">
              <button
                className={role === "student" ? "active" : ""}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={role === "admin" ? "active" : ""}
                onClick={() => setRole("admin")}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email address" />
              <input type="password" placeholder="Password" />
              <button type="submit">
                {role === "admin" ? "Admin Sign In" : "Sign In"}
              </button>
            </form>

            {role === "student" && (
              <div className="links">
                <Link to="/register">Sign up</Link>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
