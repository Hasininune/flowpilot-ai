import {
  FaBolt,
  FaRobot,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import StatsCard from "./StatsCard";
import { useWorkflow } from "../../context/WorkflowContext";
function StatsGrid() {
  const { workflows } = useWorkflow();
  return (
    <section className="stats-grid">

      <StatsCard
        title="Active Workflows"
        value={workflows.length * 120}
        icon={<FaBolt />}
        color="#3B82F6"
      />

      <StatsCard
        title="AI Executions"
        value="1,284"
        icon={<FaRobot />}
        color="#8B5CF6"
      />

      <StatsCard
        title="Success Rate"
       value={`${Math.min(99, 95 + workflows.length)}%`}
        icon={<FaChartLine />}
        color="#10B981"
      />

      <StatsCard
        title="Team Members"
        value="14"
        icon={<FaUsers />}
        color="#F59E0B"
      />

    </section>
  );
}

export default StatsGrid;
