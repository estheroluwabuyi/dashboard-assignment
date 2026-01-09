import React from "react";

function SectionTitle({ text }) {
  return (
    <div>
      <h2 className="text-[14px] tracking-wide leading-[22px] text-black">
        {text}
      </h2>
    </div>
  );
}

export default SectionTitle;
