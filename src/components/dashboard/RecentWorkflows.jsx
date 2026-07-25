import StatusBadge from "./StatusBadge";
import { useWorkflow } from "../../context/WorkflowContext";

function RecentWorkflows() {

  const { workflows } = useWorkflow();

  return (

    <div className="dashboard-card">

      <div className="card-header">

        <h2>Recent Workflows</h2>

        <small>View All</small>

      </div>

      {workflows.map((workflow) => (

        <div
          className="workflow-row"
          key={workflow.id}
        >

          <h4>{workflow.name}</h4>

          <StatusBadge status={workflow.status} />

        </div>

      ))}

    </div>

  );

}

export default RecentWorkflows;