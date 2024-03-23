import React from "react";
import VestingTerms from "@/data/VestingTerms";

const WpVestingTable = () => {
  const datalength = VestingTerms.length-1;

  return (
<>
    <div className="hidden md:block border max-w-[343px] md:max-w-[800px] border-[#EDEDEF] bg-[#FAFAFA] md:bg-white rounded-[8px] md:rounded-[14px] mt-[20px] md:mt-[32px] overflow-hidden ">
      {/* HEADINGs */}
      <div className="hidden md:flex bg-[#FAFAFA] text-[20px] leading-[20px] text-[#787A83] tracking-[-1px] px-[16px] py-[20px]">
        <div className="flex-[17]">Bucket</div>
        <div className="flex-[10]">Duration</div>
        <div className="flex-[8]">Cliff</div>
        <div className="flex-[35]">Note</div>
      </div>
      {/* CONTENT */}
      <div className="px-[12px] md:px-[16px]">
        {/* ROW */}
        {VestingTerms.map((Row, index) => (
          <div
            key={index}
            className={`flex flex-col gap-[4px] md:gap-0 md:flex-row items-start md:items-center text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[-1px] py-[12px] md:py-[20px] font-medium ${index===datalength?"":"border-b-[#EDEDEF] border-b"} `}
          >
            <div className="md:flex-[17]">{Row.Col1}</div>
            <div className="md:flex-[10]">{Row.Col2}</div>
            <div className="md:flex-[8]">{Row.Col3}</div>
            <div className="md:flex-[35]">{Row.Col4}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="md:hidden border  border-[#EDEDEF] bg-[#FAFAFA]  rounded-[8px]  mt-[20px] overflow-hidden ">

      <div className="px-[12px] md:px-[16px]">
        {/* ROW */}
        {VestingTerms.map((Row, index) => (
          <div
            key={index}
            className={`flex flex-col gap-[4px]  text-[16px] leading-[22px] tracking-[-1px] py-[12px] font-medium ${index===datalength?"":"border-b-[#EDEDEF] border-b"} `}
          >
            <div className="flex">
            <div className="">{Row.Col1}</div>
            <div className="ml-auto flex gap-[12px]"><span className="text-[#787A83] ">Duration</span>{Row.Col2}</div>
            </div>
            <div className="flex gap-[12px]"><span className="text-[#787A83]">Cliff</span>{Row.Col3}</div>
            <div className="">{Row.Col4}</div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default WpVestingTable;
