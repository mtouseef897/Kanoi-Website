import React from "react";
import TokenUses from "@/data/TokenUses";

const WpTokenUsesTable = () => {
  const datalength = TokenUses.length - 1;

  return (
    <>
      <div className="hidden md:block border max-w-[343px] md:max-w-[800px] border-[#EDEDEF] bg-[#FAFAFA] md:bg-white rounded-[8px] md:rounded-[14px] mt-[20px] md:mt-[32px] overflow-hidden ">
        {/* HEADINGs */}
        <div className="flex bg-[#FAFAFA] text-[20px] leading-[20px] text-[#787A83] tracking-[-1px] px-[16px] py-[20px]">
          <div className="flex-1 md:flex-[44]">$Saisen</div>
          <div className="flex-1 md:flex-[38]">$Kanoi</div>
        </div>

        {/* CONTENT */}
        <div className="px-[12px] md:px-[16px]">
          {/* ROW */}
          {TokenUses.map((Row, index) => (
            <div
              key={index}
              className={`flex flex-row items-start md:items-center text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[-1px] py-[0px] md:py-[20px] font-medium ${
                index === datalength ? "" : "md:border-b-[#EDEDEF] md:border-b"
              } `}
            >
              <div
                className={`${
                  index === datalength
                    ? ""
                    : "border-b-[#EDEDEF] border-b border-r-[#EDEDEF] border-r md:border-none"
                } flex-1 md:flex-[44]`}
              >
                {Row.Col1}
              </div>
              <div
                className={`${
                  index === datalength
                    ? ""
                    : "border-b-[#EDEDEF] border-b border-l-[#EDEDEF] border-l md:border-none"
                }  flex-1 md:flex-[38]`}
              >
                {Row.Col2}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* For Mobile view */}

      <div className="flex md:hidden border  border-[#EDEDEF] bg-[#FAFAFA] md:bg-white rounded-[8px] md:rounded-[14px] mt-[20px] md:mt-[32px] overflow-hidden ">
        
         {/* //First Column */}
         <div className="grow">
          <div className="flex bg-[#FAFAFA] text-[20px] leading-[20px] text-[#787A83] tracking-[-1px] px-[16px] py-[20px]">
             <div className="flex-1">$Saisen</div>
             </div>
          {/* CONTENT */}
            <div className="px-[12px] md:px-[16px]">
                {/* ROW */}
                {TokenUses.map((Row, index) => (
                <div
                    key={index}
                    className={`flex flex-row items-start md:items-center text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[-1px] pb-[8px] md:py-[20px] font-medium ${
                    index === datalength ? "" : "border-b-[#EDEDEF] border-b"
                    } `}
                >
                    <div className={`flex-1`}>{Row.Col1}</div>
                </div>
                ))}
        </div>
        </div>


        {/* //Second Column */}
        <div className="border-l border-l-[#EDEDEF]  grow">
          <div className="flex bg-[#FAFAFA] text-[20px] leading-[20px] text-[#787A83] tracking-[-1px] px-[16px] py-[20px] ">
            <div className="flex-1">$Kanoi</div>
          </div>

          {/* CONTENT */}
          <div className="px-[12px] md:px-[16px]">
            {/* ROW */}
            {TokenUses.map((Row, index) => (
             Row.Col2&& <div
                key={index}
                className={`flex flex-row items-start md:items-center text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[-1px] pb-[8px] md:py-[20px] font-medium ${
                  index+2 === datalength ? "" : "border-b-[#EDEDEF] border-b"
                } `}
              >
                <div className={`flex-1`}>{Row.Col2}</div>
              </div>
            ))}
          </div>
        </div>

      
      
      
      </div>
    </>
  );
};

export default WpTokenUsesTable;
