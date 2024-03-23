import React from "react";

const WpTable = ({ head1, head2, data }) => {
  const datalength = data.length-1;

  return (
    <div className="border  md:max-w-[800px] border-[#EDEDEF] bg-[#FAFAFA] md:bg-white rounded-[8px] md:rounded-[14px] mt-[20px] md:mt-[32px] overflow-hidden ">
      {/* HEADINGs */}
      <div className="hidden md:flex bg-[#FAFAFA] text-[20px] leading-[20px] text-[#787A83] tracking-[-1px] px-[16px] py-[20px]">
        <div className="flex-[3]">{head1}</div>
        <div className="flex-[7]">{head2}</div>
      </div>

      {/* CONTENT */}
      <div className="px-[12px] md:px-[16px]">
        {/* ROW */}
        {data.map((Row, index) => (
          <div
          key={index}
            className={`flex flex-col gap-[4px] md:gap-0 md:flex-row items-start md:items-center text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[-1px] py-[12px] md:py-[20px] font-medium ${index===datalength?"":"border-b-[#EDEDEF] border-b"} `}
          >
            <div className="md:flex-[3]">{Row.Col1}</div>
            <div className="md:flex-[7]">{Row.Col2}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WpTable;
