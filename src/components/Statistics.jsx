import "../styles/statistics.css";
import {
  FaUsers,
  FaTasks,
  FaGlobe,
  FaServer,
} from "react-icons/fa";

function Statistics() {
  return (
    <section className="statistics">

      <div className="stats-heading">

        <h2>Trusted by teams across the globe</h2>

        <p>
          Thousands of businesses rely on FlowPilot AI every day
          to automate workflows and improve productivity.
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <FaUsers className="stat-icon"/>

          <h3>25K+</h3>

          <p>Active Users</p>

        </div>

        <div className="stat-card">

          <FaTasks className="stat-icon"/>

          <h3>1.2M+</h3>

          <p>Tasks Automated</p>

        </div>

        <div className="stat-card">

          <FaGlobe className="stat-icon"/>

          <h3>120+</h3>

          <p>Countries Served</p>

        </div>

        <div className="stat-card">

          <FaServer className="stat-icon"/>

          <h3>99.9%</h3>

          <p>Platform Uptime</p>

        </div>

      </div>

    </section>
  );
}

export default Statistics;