import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/dashboardPages.css";

export default function Billing() {
  return (
    <DashboardLayout>
      <div className="page-container">
        <h1>Billing</h1>

        <div className="card">
          <h2>Current Plan</h2>

          <p>Professional Plan</p>

          <p>Status: Active</p>

          <p>Renewal: 20 Aug 2026</p>

          <button className="primary-btn">
            Upgrade Plan
          </button>
        </div>

        <div className="card">
          <h2>Billing History</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>20 Jul 2026</td>
                <td>$29</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}