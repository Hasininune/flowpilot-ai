import {
  FaRobot,
  FaArrowTrendUp,
} from "react-icons/fa6";

function AIInsights() {

  return (

    <div className="dashboard-card">

      <div className="card-header">

        <h2>

          <FaRobot />

          AI Insights

        </h2>

      </div>

      <div className="insight">

        <FaArrowTrendUp />

        Productivity increased by
        <strong> 26%</strong>

      </div>

      <div className="insight">

        🤖 AI recommends creating
        a Support Automation workflow.

      </div>

      <div className="insight">

        ⚡ 143 tasks automated today.

      </div>

    </div>

  );

}

export default AIInsights;