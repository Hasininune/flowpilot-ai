import {
  FaPlus,
  FaUsers,
  FaDownload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function QuickActions() {
  const navigate = useNavigate();

  return (

    <div className="dashboard-card">

      <div className="card-header">

        <h2>Quick Actions</h2>

      </div>

      <button
    className="action-btn"
    onClick={() => navigate("/create-workflow")}
>
    Create Workflow
</button>

      <button className="action-btn">

        <FaUsers />

        Invite Team

      </button>

      <button className="action-btn">

        <FaDownload />

        Export Reports

      </button>

    </div>

  );

}

export default QuickActions;