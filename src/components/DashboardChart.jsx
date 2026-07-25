import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 6100 },
  { month: "Apr", revenue: 7800 },
  { month: "May", revenue: 8400 },
  { month: "Jun", revenue: 9700 },
  { month: "Jul", revenue: 11800 },
];

export default function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

        <XAxis
          dataKey="month"
          stroke="#cbd5e1"
        />

        <YAxis stroke="#cbd5e1" />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#60a5fa"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}