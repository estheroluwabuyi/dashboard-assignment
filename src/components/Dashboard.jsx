import BottomMainContent from "./BottomMainContent";
import OrderFile from "./OrderFile";
import RevenueCard from "./RevenueCard";

function Dashboard() {
  return (
    <div className="relative px-10">
      <h1 className="font-medium leading-[23px] tracking-wide text-[18px] text-[#1F384C] pt-6">
        Dashboard
      </h1>
      <div className="flex justify-between items-center pt-[50px] ">
        <RevenueCard />
        <OrderFile />
       
      </div>

      

      <>
        <div className="absolute w-[95%] border-[0.5px] border-[#C8CBD9] z-10  left-1/2 -translate-x-1/2 mt-10"></div>
      </>

      <BottomMainContent />
    </div>
  );
}

export default Dashboard;
