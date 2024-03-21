import React, { useContext, useState } from "react";
import wp_subheadings from "@/data/WpContent";
import { WhitePaperIndexContext } from "@/context/WhitePaperIndexContext";

const IndexSidebar = () => {

  const [showSubHeading,setShowSubHeading]=useState(false);
  const {currentWhitePaperIndex}=useContext(WhitePaperIndexContext);
  return (
    <div className="hidden xl:flex w-[200px] h-fit gap-[5px] flex-col  sticky top-[120px]">
      <h2 onClick={()=>setShowSubHeading(!showSubHeading)}className="text-[24px] font-bold leading-[32px] tracking-[-0.05em] cursor-pointer">
        ON THIS PAGE
      </h2>
      {/* <div className="flex flex-col gap-3"> */}
        {/* {wp_subheadings.map((x)=>{

// return <p className="text-[24px] leading-[30px] tracking-[-0.05em]">{x.subheadings}</p>
   
      {    
         x.subheadings.map((y)=>{
            return <p className="text-[24px] leading-[30px] tracking-[-0.05em]">{y}</p>
          })
        }
           

        })} */}

{wp_subheadings.map((x, index) => (
  <div key={index} className={`${showSubHeading?"flex":"hidden"}  flex-col gap-3 font-[500] border-l-[4px] border-[#1D1D1B] pl-[8px]`}> 
    {x.mainHeading===currentWhitePaperIndex && x.subheadings.map((y, subIndex) => (
      <p key={subIndex} className="text-[22px] leading-[30px] tracking-[-0.05em]">{y}</p>
    ))}
  </div>
))}
       
      {/* </div> */}
    </div>
  );
};

export default IndexSidebar;
