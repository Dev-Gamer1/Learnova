import { useState } from "react";
import {
  Home,
  BookOpen,
  User,
  Search,
  Clock,
  BarChart2,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Dummy user stats
  const stats = [
    { title: "Courses Enrolled", value: 4 },
    { title: "Hours Learned", value: 126 },
    { title: "Avg Progress", value: "72%" },
  ];

  const courses = [
    {
      title: "Web Development Fundamentals",
      progress: 80,
      hours: 40,
    },
    {
      title: "Advanced React",
      progress: 65,
      hours: 32,
    },
    {
      title: "UI / UX Design",
      progress: 90,
      hours: 28,
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: linear-gradient(135deg, #eef2ff, #fdf2f8);
        }

        .layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .sidebar {
          width: 260px;
          background: linear-gradient(180deg, #2563eb, #9333ea, #ec4899);
          color: white;
          padding: 30px 20px;
        }

        .logo {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 40px;
        }

        .menu button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: transparent;
          color: white;
          font-size: 15px;
          cursor: pointer;
          margin-bottom: 10px;
          transition: 0.3s;
        }

        .menu button.active,
        .menu button:hover {
          background: rgba(255,255,255,0.2);
        }

        /* MAIN */
        .main {
          flex: 1;
          padding: 30px;
        }

        /* TOP BAR */
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .search {
          display: flex;
          align-items: center;
          background: white;
          padding: 10px 14px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          width: 320px;
        }

        .search input {
          border: none;
          outline: none;
          margin-left: 8px;
          width: 100%;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat {
          background: white;
          padding: 24px;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .stat h3 {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .stat p {
          font-size: 28px;
          font-weight: 800;
          color: #2563eb;
        }

        /* COURSES */
        .courses {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .course {
          background: white;
          padding: 22px;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .course h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress {
          height: 100%;
          background: linear-gradient(135deg, #2563eb, #9333ea);
        }

        .course-info {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>

      <div className="layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="logo">LEARNOVA</div>

          <div className="menu">
            <button
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              <Home size={20} /> Home
            </button>

            <button
              className={activeTab === "courses" ? "active" : ""}
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen size={20} /> Courses Enrolled
            </button>

            <button
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              <User size={20} /> Profile Update
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main">
          {/* TOP BAR */}
          <div className="topbar">
            <h2>User Dashboard</h2>

            <div className="search">
              <Search size={18} />
              <input placeholder="Search new courses..." />
            </div>
          </div>

          {/* HOME */}
          {activeTab === "home" && (
            <>
              <div className="stats">
                {stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <h3>{s.title}</h3>
                    <p>{s.value}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ marginBottom: "16px" }}>
                Learning Performance
              </h3>

              <div className="courses">
                {courses.map((c, i) => (
                  <div className="course" key={i}>
                    <h4>{c.title}</h4>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${c.progress}%` }}
                      ></div>
                    </div>

                    <div className="course-info">
                      <span>{c.progress}% Completed</span>
                      <span>
                        <Clock size={14} /> {c.hours} hrs
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* COURSES */}
          {activeTab === "courses" && (
            <h2>Courses Enrolled (Coming Soon)</h2>
          )}

          {/* PROFILE */}
          {activeTab === "profile" && (
            <h2>Profile Update (Coming Soon)</h2>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;