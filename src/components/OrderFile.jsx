import { orderData } from "../data/chart-data";
import CustomOrderToolTip from "./CustomOrderToolTip";
import SectionTitle from "./SectionTitle";
import ViewReportBtn from "./ViewReportBtn";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function OrderFile() {
  return (
    <div className="w-[362px] h-[322px] ">
      <section className="flex justify-between">
        <SectionTitle text="Order Time" />
        <ViewReportBtn />
      </section>
      <p className="text-[13px] leading-[21px] tracking-wide text-[#000000]/50 ">
        From 1-6 Dec, 2020
      </p>

      {/* Chart Section */}
      <div className="h-[200px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>          
             <Pie
            data={orderData}
            cx="50%"           
            cy="50%"           
            innerRadius={40}   
            outerRadius={62}    
            paddingAngle={0}    
            dataKey="value"
            stroke="none"
            startAngle={90}
            endAngle={-270}
          >
            {orderData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie> 
     
            <Tooltip content={<CustomOrderToolTip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {orderData.map((item) => (
          <div key={item.name} className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="font-medium text-[#121212]/70 tracking-wide leading-[12px] ">{item.name}</span>
            </div>
            <span className="tracking-wide leading-[12px] mt-3 text-[#121212]/70  ml-3.5">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderFile;
