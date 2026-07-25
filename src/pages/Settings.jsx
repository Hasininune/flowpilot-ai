import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/dashboardPages.css";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="page-container">
        <div className="page-header">
          <h1>Settings</h1>
          <p>Manage your account preferences and application settings.</p>
        </div>

        {/* Account Settings */}
        <div className="card">
          <h2>Account</h2>

          <div className="setting-item">
            <div>
              <h4>Email Address</h4>
              <p>hasini@example.com</p>
            </div>
            <button className="primary-btn">Change</button>
          </div>

          <div className="setting-item">
            <div>
              <h4>Password</h4>
              <p>Last updated 30 days ago</p>
            </div>
            <button className="primary-btn">Update</button>
          </div>
        </div>

        {/* Preferences */}
        <div className="card">
          <h2>Preferences</h2>

          <div className="setting-item">
            <div>
              <h4>Dark Mode</h4>
              <p>Switch between light and dark themes.</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div>
              <h4>Email Notifications</h4>
              <p>Receive workflow alerts and updates.</p>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div>
              <h4>Language</h4>
              <p>Select your preferred language.</p>
            </div>

            <select className="select-box">
              <option>English</option>
              <option>Telugu</option>
            </select>
          </div>
        </div>

        {/* Security */}
        <div className="card">
          <h2>Security</h2>

          <div className="setting-item">
            <div>
              <h4>Two-Factor Authentication</h4>
              <p>Add an extra layer of protection.</p>
            </div>

            <button className="secondary-btn">
              Enable
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h4>Active Devices</h4>
              <p>Windows • Chrome • Hyderabad</p>
            </div>

            <button className="secondary-btn">
              Manage
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card danger-card">
          <h2>Danger Zone</h2>

          <p>
            Deleting your account will permanently remove all workflows and
            settings.
          </p>

          <button className="danger-btn">
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}