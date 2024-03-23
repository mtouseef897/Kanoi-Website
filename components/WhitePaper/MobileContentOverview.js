import { WhitePaperIndexContext } from "@/context/WhitePaperIndexContext";
import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown,MdOutlineKeyboardArrowUp  } from "react-icons/md";

const MobileContentOverview = () => {

  const [isActiveMenu,setIsActiveMenu]=useState(false);
  const [activeSection, setActiveSection] = useState("The Kanoi trading card game");
  const {handlecurrentWhitePaperIndex}=useContext(WhitePaperIndexContext);

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(
        sectionId==="Kanoi trading"?"The Kanoi trading card game":
        sectionId==="digital asset"?"Card as a digital asset":
        sectionId==="Kanoi ecosystem"?"Kanoi ecosystem":
        sectionId==="Play to earn"?"Play to earn":
        sectionId==="Beyond the TCG"?"Beyond the TCG":
        sectionId==="Legal notice"?"Legal notice and risk disclosure":""
    );
    setIsActiveMenu(!isActiveMenu)
    handlecurrentWhitePaperIndex(sectionId);
  };
  
  return (
    <>
    {/* onClick={()=>handleSectionClick('Kanoi trading')} */}

        <div className="h-fit w-[91.4%] md:w-[95.8%] mx-auto sticky mt-[17px] md:mt-[25px] top-[81px] z-20 ">
        <div onClick={()=>setIsActiveMenu(!isActiveMenu)} className="flex justify-between items-center xl:hidden w-full mx-auto text-[16px] font-[500] leading-[22px]  p-[12px] rounded-md  bg-[#FAFAFA] border border-[#E5E5E7] ">
                {activeSection} {isActiveMenu?<MdOutlineKeyboardArrowUp className="text-[20px]"/>:<MdKeyboardArrowDown className="text-[20px]"/>}
        </div>
        <ul className={`${isActiveMenu?"flex":"hidden"} slide-fade-in-top absolute  left-0 right-0 wpmobilemenu  xl:hidden   mx-auto text-[16px] font-[500] leading-[22px] mt-[3px] p-[12px] rounded-md  top-[50px] bg-[#FAFAFA] border border-[#E5E5E7] `}>
                <li onClick={()=>handleSectionClick('Kanoi trading')}>The Kanoi trading card game</li>
                <li onClick={()=>handleSectionClick('digital asset')}>Card as a digital asset</li>
                <li onClick={()=>handleSectionClick('Kanoi ecosystem')}>Kanoi ecosystem</li>
                <li onClick={()=>handleSectionClick('Play to earn')}>Play to earn</li>
                <li onClick={()=>handleSectionClick('Beyond the TCG')}>Beyond the TCG</li>
                <li onClick={()=>handleSectionClick('Legal notice')}>Legal notice and risk disclosure</li>
        </ul>
        </div>




    </>
  );
};

export default MobileContentOverview;
