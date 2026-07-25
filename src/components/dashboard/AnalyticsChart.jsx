import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", executions: 35 },
  { day: "Tue", executions: 42 },
  { day: "Wed", executions: 58 },
  { day: "Thu", executions: 71 },
  { day: "Fri", executions: 83 },
  { day: "Sat", executions: 97 },
  { day: "Sun", executions: 120 },
];

function AnalyticsChart() {
  return (
    <div className="dashboard-card analytics-card">

      <div className="card-header">
        <h2>Weekly AI Executions</h2>
        <small>Last 7 Days</small>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="executions"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;