import DashboardLayout from "../layouts/DashboardLayout";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsGrid from "../components/dashboard/StatsGrid";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

import RecentWorkflows from "../components/dashboard/RecentWorkflows";
import AIInsights from "../components/dashboard/AIInsights";
import ActivityPanel from "../components/dashboard/ActivityPanel";
import QuickActions from "../components/dashboard/QuickActions";
import { useWorkflow } from "../context/WorkflowContext";
function Dashboard() {
  const { workflows } = useWorkflow();
  console.log(workflows);
  return (
    <DashboardLayout>

      <WelcomeBanner />

      <StatsGrid />

      <AnalyticsChart />

      <div className="dashboard-grid">

        <RecentWorkflows />

        <AIInsights />

        <ActivityPanel />

        <QuickActions />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;