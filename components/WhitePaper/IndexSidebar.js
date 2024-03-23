import React, { useContext, useState } from "react";
import wp_subheadings from "@/data/WpContent";
import { WhitePaperIndexContext } from "@/context/WhitePaperIndexContext";

const IndexSidebar = () => {

  const [showSubHeading,setShowSubHeading]=useState(true);
  const {currentWhitePaperIndex}=useContext(WhitePaperIndexContext);
  return (
    <div className="hidden xl:flex w-[200px] h-fit gap-[5px] flex-col  sticky top-[140px] ml-auto  md:mr-[40px]">
      
      <h2 
      className="text-[24px] font-bold leading-[32px] tracking-[-0.05em] cursor-pointer">
        ON THIS PAGE
      </h2>
        {wp_subheadings.map((x, index) => (
          <div key={index} className={`${showSubHeading?"flex":"hidden"}  flex-col gap-3 font-[500] border-l-[4px] border-[#1D1D1B] pl-[8px]`}> 
            {x.mainHeading===currentWhitePaperIndex && x.subheadings.map((y, subIndex) => (
              <p key={subIndex} className="text-[22px] leading-[30px] tracking-[-0.05em]">{y}</p>
            ))}
          </div>
        ))}
       
 
    </div>
  );
};

export default IndexSidebar;
