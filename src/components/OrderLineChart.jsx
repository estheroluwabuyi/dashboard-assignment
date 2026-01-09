import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import SectionTitle from "./SectionTitle";
import ViewReportBtn from "./ViewReportBtn";
import { FaArrowDownLong } from "react-icons/fa6";

const data = [
  { day: "01", cur: 1500, prev: 1500 },
  { day: "02", cur: 800, prev: 2200 },
  { day: "03", cur: 1800, prev: 1000 },
  { day: "04", cur: 1600, prev: 2400 },
  { day: "05", cur: 1000, prev: 1800 },
  { day: "06", cur: 2500, prev: 2000 },
];

function OrderLineChart() {
  return (
    <div className="h-[362px] ">
      <section className="flex justify-between">
        <SectionTitle text="Revenue" />
        <ViewReportBtn />
      </section>
      <section>
        <h2 className="font-medium text-[20px] tracking-wide leading-[28px] text-black">
          2.568
        </h2>

        <div className="flex gap-2 items-center mt-[12px]">
          <FaArrowDownLong className="text-[#F2383A] " />
          <p className="font-semibold tracking-wide leading-[11px] text-[#000000]/50 ">
            <span className="text-[#F2383A] ">2.1%</span> vs last week
          </p>
        </div>

        <p className="text-[13px] leading-[21px] tracking-wide text-[#000000]/50 mt-[21px]">
          Sales from 1-12 Dec, 2020
        </p>
      </section>

      <div className="h-[141px] mt-6">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="day"
              hide={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#737B8B" }}
            />
            <Line
              type="linear"
              dataKey="cur"
              stroke="#5A6ACF"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
            />
            <Line
              type="linear"
              dataKey="prev"
              stroke="#E9ECEF"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <section className="flex  gap-5 mt-5">
        <div className="flex items-center gap-2">
          <div className="w-[9px] h-[9px] bg-[#5A6ACF] rounded-full"></div>
          <div className="text-[#121212]/70 tracking-wide leading-[12px]">
            Last 5 days
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[9px] h-[9px] bg-[#D8D9DB] rounded-full"></div>
          <div className="text-[#121212]/70 tracking-wide leading-[12px]">
            Last Week
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderLineChart;
