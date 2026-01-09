import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

function TopBarMain() {
  return (
    <div className="flex px-10 justify-between">
      <div className=" my-4 h-8 w-156.25 relative">
        <FiSearch className="absolute text-[12px] top-1/2 right-2 transform -translate-y-1/2 text-[#627B87]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F6F6FB] rounded-[5px] h-full w-full placeholder:text-[#1F384C]/30 leading-3.25 tracking-wide p-3"
        />
      </div>

      <div className="w-[218px] flex justify-center items-center gap-4">
        <div className="w-8 h-8 bg-[#FFE6CC] rounded-full flex items-center justify-center">
          <img src="/img/Emoticon.png" alt="burger" className=" w-4 h-3.25 " />
        </div>

        <div className="flex items-center gap-2 cursor-pointer w-fit">
          <p className="text-[#1F384C] leading-[13px] tracking-wide">
            Delicious Burger
          </p>

          <FaChevronDown className="text-[#1F384C]/50 text-[12px]" />
        </div>

        <button className="relative ">
          <IoIosNotifications className="text-[20px] text-[#B0C3CC]" />
          <div className="absolute top-0 right-0 w-1.5 mr-1 mt-px h-1.5 bg-[#EC5252] rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default TopBarMain;
