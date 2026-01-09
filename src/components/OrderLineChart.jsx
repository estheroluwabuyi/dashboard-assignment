import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { day: '01', cur: 1000, prev: 1500 },
    { day: '02', cur: 800, prev: 2200 },
    { day: '03', cur: 1800, prev: 1000 },
    { day: '04', cur: 1600, prev: 2400 },
    { day: '05', cur: 1000, prev: 1800 },
    { day: '06', cur: 2500, prev: 2000 },
  ];

function OrderLineChart() {
  

  return (
    <div className="h-full">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold">Order</h3>
        <button className="text-[10px] text-blue-500 border border-blue-50 px-2 py-1 rounded">View Report</button>
      </div>
      <p className="text-lg font-bold">2.568</p>
      <p className="text-[10px] text-red-500 mb-4">↓ 2.1% <span className="text-gray-400">vs last week</span></p>
      
      <div className="h-[120px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" hide={false} axisLine={false} tickLine={false} tick={{fontSize: 10}} />
            <Line type="monotone" dataKey="cur" stroke="#5A6ACF" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="prev" stroke="#E9ECEF" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OrderLineChart;
