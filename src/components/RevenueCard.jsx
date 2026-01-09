import { FaArrowUpLong } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import ViewReportBtn from "./ViewReportBtn";
import RevenueBarChart from "./RevenueBarChart";

function RevenueCard() {
  return (
    <div className=" w-[678px] h-[322px]">
      <section className="flex justify-between">
        <SectionTitle text="Revenue" />
        <ViewReportBtn />
      </section>
      <section>
        <h2 className="font-medium text-[20px] tracking-wide leading-[28px] text-black">
          IDR 7.852.000
        </h2>

        <div className="flex gap-2 items-center mt-[12px]">
          <FaArrowUpLong className="text-[#149D52] " />
          <p className="font-semibold tracking-wide leading-[11px] text-[#000000]/50 ">
            <span className="text-[#32D16D] ">2.1%</span> vs last week
          </p>
        </div>

        <p className="text-[13px] leading-[21px] tracking-wide text-[#000000]/50 mt-[21px]">
          Sales from 1-12 Dec, 2020
        </p>
      </section>

      <RevenueBarChart />

      <section className="flex  gap-5 mt-5">
        <div className="flex items-center gap-2">
          <div className="w-[9px] h-[9px] bg-[#5A6ACF] rounded-full"></div>
          <div className="text-[#121212]/70 tracking-wide leading-[12px]">
            Last 6 days
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

export default RevenueCard;
