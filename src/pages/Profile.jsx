import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/dashboardPages.css";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="page-container">
        <div className="page-header">
          <h1>My Profile</h1>
          <p>View and manage your personal information.</p>
        </div>

        {/* Profile Card */}
        <div className="card profile-card">
          <div className="profile-left">
            <div className="avatar">H</div>

            <div>
              <h2>Hasini</h2>
              <p>Software Engineering Student</p>

              <span className="status-badge">
                Active Account
              </span>
            </div>
          </div>

          <button className="primary-btn">
            Edit Profile
          </button>
        </div>

        {/* Personal Information */}
        <div className="card">
          <h2>Personal Information</h2>

          <div className="info-grid">

            <div className="info-item">
              <label>Full Name</label>
              <p>Hasini</p>
            </div>

            <div className="info-item">
              <label>Email</label>
              <p>hasini@example.com</p>
            </div>

            <div className="info-item">
              <label>Phone</label>
              <p>+91 93928 44022</p>
            </div>

            <div className="info-item">
              <label>Location</label>
              <p>Hyderabad, India</p>
            </div>

            <div className="info-item">
              <label>Role</label>
              <p>Administrator</p>
            </div>

            <div className="info-item">
              <label>Member Since</label>
              <p>July 2026</p>
            </div>

          </div>
        </div>

        {/* Account Statistics */}
        <div className="card">
          <h2>Account Statistics</h2>

          <div className="stats-grid">

            <div className="stat-box">
              <h3>15</h3>
              <p>Total Workflows</p>
            </div>

            <div className="stat-box">
              <h3>12</h3>
              <p>Completed</p>
            </div>

            <div className="stat-box">
              <h3>3</h3>
              <p>Active</p>
            </div>

            <div className="stat-box">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>

          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2>Recent Activity</h2>

          <ul className="activity-list">
            <li>✔ Created "Invoice Automation"</li>
            <li>✔ Updated workflow settings</li>
            <li>✔ Logged in from Chrome</li>
            <li>✔ Subscription renewed successfully</li>
          </ul>
        </div>

      </div>
    </DashboardLayout>
  );
}