import "../styles/dashboard.css";
import { FaCheckCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <section className="dashboard-section">

      <div className="dashboard-container">

        <div className="dashboard-left">

          <span className="dashboard-tag">
            Product Preview
          </span>

          <h2>See your business in real time.</h2>

          <p>
            Monitor revenue, automate workflows, and make smarter
            decisions with AI-powered analytics.
          </p>

          <div className="dashboard-list">

            <div><FaCheckCircle /> AI Powered Analytics</div>
            <div><FaCheckCircle /> Live Team Performance</div>
            <div><FaCheckCircle /> Workflow Automation</div>
            <div><FaCheckCircle /> Enterprise Grade Security</div>

          </div>

        </div>

        <div className="dashboard-right">

          <div className="dashboard-preview">

            <div className="top-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="graph"></div>

            <div className="progress-card">
              <p>Automation Progress</p>

              <div className="progress">
                <div className="progress-fill"></div>
              </div>

              <h3>86%</h3>
            </div>

            <div className="stats-row">

              <div className="mini-card">
                <h4>Revenue</h4>
                <p>$87K</p>
              </div>

              <div className="mini-card">
                <h4>Users</h4>
                <p>12.4K</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;