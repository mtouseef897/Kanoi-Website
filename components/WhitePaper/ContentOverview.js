import { WhitePaperIndexContext } from "@/context/WhitePaperIndexContext";
import React, { useContext, useState } from "react";

const ContentOverview = () => {

  const [isActive,setIsActive]=useState(true);
  const [activeSection, setActiveSection] = useState("Kanoi trading");
  const {handlecurrentWhitePaperIndex}=useContext(WhitePaperIndexContext);

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' });
    // window.scrollBy(0, 10); // Apply the offset
    setActiveSection(sectionId);
    handlecurrentWhitePaperIndex(sectionId);
  };
  
  return (
    <>
    <div className="hidden xl:block max-w-[474px] h-fit p-3 bg-[#FAFAFA] rounded-lg border border-[#E5E5E7] font-[700] cursor-pointer sticky top-[140px] grow">
      <div className={`${activeSection === "Kanoi trading"?"bg-white border-[#E2E2E2] border":"border-transparent"} flex gap-2 items-center py-3 px-[15px] active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 壱 </p>
        <p onClick={()=>handleSectionClick('Kanoi trading')} className="text-[24px] tracking-[-1px] leading-[30px] ">
          The Kanoi trading card game
        </p>
      </div>
      <div className={`${activeSection === "digital asset"?"bg-white border-[#E2E2E2]":"border-transparent"} flex  gap-2 items-center py-3 px-[15px]  active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 弐 </p>
        <p onClick={()=>handleSectionClick('digital asset')}  className="text-[24px] tracking-tighter leading-[30px] ">
          Card as a digital asset
        </p>
      </div>
      <div className={`${activeSection === "Kanoi ecosystem"?"bg-white border-[#E2E2E2]":"border-transparent"} flex  gap-2 items-center py-3 px-[15px] active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 参 </p>
        <p onClick={()=>handleSectionClick('Kanoi ecosystem')}  className="text-[24px] tracking-tighter leading-[30px] ">
          Kanoi ecosystem
        </p>
      </div>
      <div className={`${activeSection === "Play to earn"?"bg-white border-[#E2E2E2]":"border-transparent"} flex  gap-2 items-center py-3 px-[15px] active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 肆 </p>
        <p onClick={()=>handleSectionClick('Play to earn')}  className="text-[24px] tracking-tighter leading-[30px] ">
          Play to earn
        </p>
      </div>
      <div className={`${activeSection === "Beyond the TCG"?"bg-white border-[#E2E2E2]":"border-transparent"} flex  gap-2 items-center py-3 px-[15px] active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 伍 </p>
        <p onClick={()=>handleSectionClick('Beyond the TCG')}  className="text-[24px] tracking-tighter leading-[30px] ">
          Beyond the TCG
        </p>
      </div>
      <div className={`${activeSection === "Legal notice"?"bg-white border-[#E2E2E2]":"border-transparent"} flex  gap-2 items-center py-3 px-[15px] active:bg-white active:border  border  active:border-[#E2E2E2] rounded-md`}>
        <p className=" text-[24px] leading-6 "> 漆 </p>
        <p onClick={()=>handleSectionClick('Legal notice')}  className="text-[24px] tracking-tighter leading-[30px] ">
          Legal notice and risk disclosure
        </p>
      </div>
    </div>


    </>
  );
};

export default ContentOverview;
