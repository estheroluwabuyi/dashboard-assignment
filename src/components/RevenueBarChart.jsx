import { barChartData } from "../data/chart-data";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RevenueBarChart() {
  return (
    <div className="h-[141px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barChartData}
          margin={{ top: 20, right: 0, left: -17, bottom: 0 }}
          barCategoryGap={4}
          barGap={2}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E2E7E7"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737B8B", fontSize: 11, fontWeight: 400 }}
            dy={10}
            interval={0}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666", fontSize: 10 }}
            domain={[0, 5000]}
            hide={true}
          />

          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #E2E7E7",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
            }}
          />

          <Bar
            dataKey="current"
            fill="#5A6ACF"
            radius={[2, 2, 0, 0]}
            barSize={8}
            isAnimationActive={false}
          />

          <Bar
            dataKey="previous"
            fill="#E9ECEF"
            radius={[2, 2, 0, 0]}
            barSize={8}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueBarChart;
