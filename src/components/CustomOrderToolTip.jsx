function CustomOrderToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#323755] text-white p-4 rounded-lg shadow-xl relative mb-10">
        <p className="text-xs font-semibold opacity-90">{payload[0].name}</p>
        <p className="text-[10px] opacity-60 mb-2">1pm - 4pm</p>
        <p className="text-sm font-bold">1.890 orders</p>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#323755] rotate-45"></div>
      </div>
    );
  }
  return null;
}

export default CustomOrderToolTip;
