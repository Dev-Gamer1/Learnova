import React, { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          margin: 0;
          background: linear-gradient(135deg, #eef2ff, #fdf2f8);
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* BRAND */
        .logo {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 3px;
          padding: 14px 44px;
          border-radius: 50px;
          margin-bottom: 32px;
          color: white;
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
          box-shadow: 0 20px 50px rgba(147, 51, 234, 0.4);
        }

        /* CARD */
        .card {
          width: 900px;
          max-width: 95%;
          display: flex;
          border-radius: 24px;
          overflow: hidden;
          background: white;
          box-shadow: 0 30px 80px rgba(0,0,0,0.15);
        }

        /* LEFT IMAGE PANEL */
        .left {
          width: 45%;
          background-image:
            linear-gradient(
              rgba(37, 99, 235, 0.7),
              rgba(147, 51, 234, 0.7),
              rgba(236, 72, 153, 0.7)
            ),
            url("https://images.unsplash.com/photo-1588072432836-e10032774350");
          background-size: cover;
          background-position: center;
        }

        .right {
          width: 55%;
          padding: 40px;
        }

        .right h2 {
          color: #2563eb;
          margin-bottom: 6px;
        }

        .right p {
          color: #6b7280;
          margin-bottom: 22px;
        }

        /* ROLE TOGGLE */
        .toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #eef2ff;
          padding: 6px;
          border-radius: 14px;
          margin-bottom: 22px;
        }

        .toggle button {
          border: none;
          padding: 14px;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          background: transparent;
          color: #6b7280;
          transition: 0.3s;
        }

        .toggle .active {
          background: linear-gradient(135deg, #2563eb, #9333ea);
          color: white;
          box-shadow: 0 10px 30px rgba(37,99,235,0.4);
        }

        /* INPUTS */
        input {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          font-size: 14px;
        }

        input:focus {
          outline: none;
          border-color: #9333ea;
        }

        /* BUTTON */
        .signin {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
        }

        /* LINKS */
        .links {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
        }

        .links a {
          text-decoration: none;
          font-size: 14px;
          color: #2563eb;
        }

        @media (max-width: 768px) {
          .card {
            flex-direction: column;
          }

          .left {
            height: 200px;
            width: 100%;
          }

          .right {
            width: 100%;
          }
        }
      `}</style>

      <div className="page">
        <div className="logo">LEARNOVA</div>

        <div className="card">
          <div className="left"></div>

          <div className="right">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account</p>

            <div className="toggle">
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

            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />

            <button className="signin">Sign In</button>

            <div className="links">
              {role === "student" && <a href="#">Create account</a>}
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
