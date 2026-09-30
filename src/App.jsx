import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [dashboardTab, setDashboardTab] = useState("overview");
  const [loggedIn, setLoggedIn] = useState(false);

  const courses = [
    {
      id: "react",
      name: "React",
      description: "Learn React from fundamentals to advanced concepts.",
      duration: "6 Weeks",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Master modern JavaScript programming.",
      duration: "8 Weeks",
    },
    {
      id: "python",
      name: "Python",
      description: "Learn Python programming from scratch.",
      duration: "10 Weeks",
    },
    {
      id: "java",
      name: "Java",
      description: "Learn Java and object-oriented programming.",
      duration: "12 Weeks",
    },
  ];

  const courseTopics = [
    "Fundamentals",
    "Practical Coding",
    "Projects",
    "Interview Preparation",
  ];

  function goHome() {
    setPage("home");
  }

  function goCourses() {
    setPage("courses");
  }

  function openCourse(course) {
    setSelectedCourse(course);
    setPage("details");
  }

  function goLogin() {
    setPage("login");
  }

  function login() {
    setLoggedIn(true);
    setPage("dashboard");
    setDashboardTab("overview");
  }

  function logout() {
    setLoggedIn(false);
    setPage("home");
  }

  function goDashboard() {
    if (loggedIn) {
      setPage("dashboard");
    } else {
      setPage("login");
    }
  }

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Student Portal</div>

        <div className="nav-links">
          <button
            className={page === "home" ? "nav-button active" : "nav-button"}
            onClick={goHome}
          >
            Home
          </button>

          <button
            className={
              page === "courses" || page === "details"
                ? "nav-button active"
                : "nav-button"
            }
            onClick={goCourses}
          >
            Courses
          </button>

          {!loggedIn && (
            <button
              className={page === "login" ? "nav-button active" : "nav-button"}
              onClick={goLogin}
            >
              Login
            </button>
          )}

          {loggedIn && (
            <>
              <button
                className={
                  page === "dashboard"
                    ? "nav-button active"
                    : "nav-button"
                }
                onClick={goDashboard}
              >
                Dashboard
              </button>

              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <main className="home-page">
          <div className="home-card">
            <h1>Welcome to Student Portal</h1>

            <p>
              Learn programming, explore courses, and manage your student
              profile.
            </p>

            <button className="primary-button" onClick={goCourses}>
              Explore Courses
            </button>
          </div>
        </main>
      )}

      {/* COURSES PAGE */}
      {page === "courses" && (
        <main className="content-page">
          <h1 className="page-title">Available Courses</h1>

          <div className="course-grid">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <h2>{course.name}</h2>

                <p>{course.description}</p>

                <p className="duration">
                  <strong>Duration:</strong> {course.duration}
                </p>

                <button
                  className="primary-button"
                  onClick={() => openCourse(course)}
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* COURSE DETAILS PAGE */}
      {page === "details" && selectedCourse && (
        <main className="details-page">
          <div className="details-card">
            <h1>Course Details</h1>

            <h2 className="course-name">
              {selectedCourse.name.toUpperCase()}
            </h2>

            <p>
              You selected the{" "}
              <strong>{selectedCourse.name.toLowerCase()}</strong> course.
            </p>

            <p>Course ID: {selectedCourse.id}</p>

            <h3>Topics</h3>

            <ul>
              {courseTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            <button className="primary-button" onClick={goCourses}>
              ← Back to Courses
            </button>
          </div>
        </main>
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <main className="login-page">
          <div className="login-card">
            <h1>Student Login</h1>

            <p>Login to access your student dashboard.</p>

            <button className="primary-button" onClick={login}>
              Login
            </button>
          </div>
        </main>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && loggedIn && (
        <main className="dashboard-page">
          <h1>Student Dashboard</h1>

          <p className="dashboard-subtitle">
            Manage your student account.
          </p>

          {/* DASHBOARD TABS */}
          <div className="dashboard-tabs">
            <button
              className={
                dashboardTab === "overview" ? "tab active-tab" : "tab"
              }
              onClick={() => setDashboardTab("overview")}
            >
              Overview
            </button>

            <button
              className={
                dashboardTab === "profile" ? "tab active-tab" : "tab"
              }
              onClick={() => setDashboardTab("profile")}
            >
              Profile
            </button>

            <button
              className={
                dashboardTab === "settings" ? "tab active-tab" : "tab"
              }
              onClick={() => setDashboardTab("settings")}
            >
              Settings
            </button>
          </div>

          {/* OVERVIEW */}
          {dashboardTab === "overview" && (
            <div className="dashboard-card">
              <h2>Dashboard Overview</h2>

              <div className="stats-grid">
                <div className="stat-box">
                  <h3>4</h3>
                  <p>Enrolled Courses</p>
                </div>

                <div className="stat-box">
                  <h3>82%</h3>
                  <p>Average Progress</p>
                </div>

                <div className="stat-box">
                  <h3>12</h3>
                  <p>Assignments</p>
                </div>
              </div>

              <p className="welcome-message">
                Welcome back! Continue your learning journey.
              </p>
            </div>
          )}

          {/* PROFILE */}
          {dashboardTab === "profile" && (
            <div className="dashboard-card">
              <h2>My Profile</h2>

              <div className="profile-box">
                <p>
                  <strong>Name:</strong> T.Harshini
                </p>

                <p>
                  <strong>Email:</strong> harshini311@gmail.com
                </p>

                <p>
                  <strong>Course:</strong> Full Stack Development
                </p>

                <p>
                  <strong>Year:</strong> final Year
                </p>
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {dashboardTab === "settings" && (
            <div className="dashboard-card">
              <h2>Settings</h2>

              <div className="settings-box">
                <label>
                  <input type="checkbox" defaultChecked />
                  Enable Email Notifications
                </label>

                <label>
                  <input type="checkbox" />
                  Enable Course Reminders
                </label>
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;