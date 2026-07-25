import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import "./DashboardLayout.css";

function DashboardLayout({ children }) {

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="dashboard-page">

          {children}

        </div>

      </div>

    </div>

  );

}

export default DashboardLayout;