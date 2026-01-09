import SectionTitle from "./SectionTitle";

function YourRating() {
  return (
    <div className="w-[313px] h-[321px] p-2">
      <SectionTitle text="Your Rating" />
      <p className="text-[13px] pt-1 leading-[21px] tracking-wide text-black/50">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="relative h-[220px] w-full mt-10">
        <div className="absolute top-0 left-15 w-[104px] h-[104px] rounded-full bg-[#8593ED]/90 flex flex-col items-center justify-center text-white z-20 border-[3px] border-white/20 shadow-lg">
          <span className="text-[18px] font-bold">85%</span>
          <span className="text-[10px]">Hygiene</span>
        </div>
        <div className="absolute top-8 right-2 w-[169px] h-[169px] rounded-full bg-[#FF9F43] flex flex-col items-center justify-center text-white z-10 border-[5px] border-white/20 shadow-lg">
          <span className="text-[24px] font-bold">85%</span>
          <span className="text-[14px]">Food Taste</span>
        </div>

        <div className="absolute bottom-0 left-0 w-[122px] h-[122px] rounded-full bg-[#48C0D8] flex flex-col items-center justify-center text-white z-30 border-[4px] border-white/20 shadow-lg">
          <span className="text-[20px] font-bold">92%</span>
          <span className="text-[12px]">Packaging</span>
        </div>
      </div>
    </div>
  );
}

export default YourRating;
