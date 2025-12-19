import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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

        /* NAVIGATION */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          z-index: 100;
        }

        .nav-logo {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-login,
        .btn-signup {
          padding: 12px 28px;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-login {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .btn-login:hover {
          background: #eef2ff;
        }

        .btn-signup {
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
          color: white;
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(147, 51, 234, 0.5);
        }

        /* HERO SECTION */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 60px 60px;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
        }

        .hero h1 {
          font-size: 68px;
          font-weight: 900;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero p {
          font-size: 22px;
          color: #6b7280;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn-primary,
        .btn-secondary {
          padding: 18px 40px;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #9333ea, #ec4899);
          color: white;
          box-shadow: 0 12px 35px rgba(147, 51, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 45px rgba(147, 51, 234, 0.5);
        }

        .btn-secondary {
          background: white;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .btn-secondary:hover {
          background: #eef2ff;
        }

        /* FEATURES SECTION */
        .features {
          padding: 80px 60px;
          background: white;
        }

        .features h2 {
          text-align: center;
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 60px;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          padding: 35px;
          border-radius: 20px;
          background: linear-gradient(135deg, #eef2ff, #fdf2f8);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(147, 51, 234, 0.2);
        }

        .feature-icon {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: #2563eb;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar {
            padding: 16px 24px;
          }

          .nav-logo {
            font-size: 22px;
          }

          .nav-buttons {
            gap: 10px;
          }

          .btn-login,
          .btn-signup {
            padding: 10px 20px;
            font-size: 14px;
          }

          .hero {
            padding: 80px 24px 40px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero p {
            font-size: 18px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .features {
            padding: 60px 24px;
          }

          .features h2 {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Navigation */}
       <nav className="navbar">
      <div className="nav-logo">LEARNOVA</div>

      <div className="nav-buttons">
        <Link to="/login" className="btn-login">
          Login
        </Link>

        <Link to="/register" className="btn-signup">
          Sign Up
        </Link>
      </div>
    </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Without Limits</h1>
          <p>
            Unlock your potential with personalized courses, expert instructors,
            and a community of learners. Start your journey today.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn-primary">
              Get Started Free
            </a>
            <a href="/courses" className="btn-secondary">
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Learnova?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Expert-Led Courses</h3>
            <p>
              Learn from industry professionals with years of experience in
              their fields.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Learn at Your Pace</h3>
            <p>
              Flexible learning schedules that fit your lifestyle and goals.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Path</h3>
            <p>
              Customized learning recommendations based on your interests and
              progress.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Certificates</h3>
            <p>
              Earn recognized certifications to showcase your achievements.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Community Support</h3>
            <p>
              Connect with fellow learners and get help when you need it.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Learning</h3>
            <p>
              Access your courses anytime, anywhere on any device.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}