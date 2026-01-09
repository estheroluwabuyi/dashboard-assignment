import OrderFile from "./OrderFile";
import RevenueCard from "./RevenueCard";

function Dashboard() {
  return (
    <div className="px-10">
      <h1 className="font-medium leading-[23px] tracking-wide text-[18px] text-[#1F384C] pt-6">
        Dashboard
      </h1>
      <div className="flex justify-between items-center pt-[50px] ">
        <RevenueCard />
        <OrderFile />

        <div className=""></div>
      </div>
    </div>
  );
}

export default Dashboard;
