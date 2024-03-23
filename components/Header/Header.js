import { useContext } from "react"
import { ExploreModeContext } from "@/context/ExploreModeContext"
import HeaderButton from "./HeaderButton"
import HeaderLogo from "./HeaderLogo"
import { WhitePaperModeContext } from "@/context/WhitePaperModeContext"
import { DropDownMenuContext } from "@/context/DropDownMenuContext"



const Header = () => {
   const {isExploreMode,handleIsExploreMode}=useContext(ExploreModeContext);
   const {isWhitePaperMode,handleIsWhitePaperMode}=useContext(WhitePaperModeContext);
   const { isDropDownActive, handleIsDropDownActive }=useContext(DropDownMenuContext);
    return (
      <>
      <header
       className={`z-[60] w-[91.4%] md:w-[95.8%] mx-auto border   flex flex-col  justify-between pl-[16px] pr-[8px] rounded-md sticky top-[12px] md:top-[20px] mt-[12px] md:mt-[20px]
       ${isExploreMode?"bg-black/[0.34] backdrop-blur border-[#1F1F1F] opacity-[1] md:opacity-[0] md:hover:opacity-[1] transition-all duration-500 ease-out":"bg-[#111111]/[0.04] border-gray-300"} 
       ${isWhitePaperMode && "bg-[#FAFAFA] border-[#E5E5E7]"}`}>
         <div className={`flex justify-between items-center py-[12px] ${isDropDownActive?"border-b-[1px] border-[#E5E5E7]":""}`}>
              <HeaderLogo/>
              <HeaderButton/>
          </div>
         {isDropDownActive&& <div onClick={()=>{handleIsWhitePaperMode(true);handleIsDropDownActive();handleIsExploreMode(false)}} className={`${isExploreMode?"text-white":""} py-[12px] bebas-neue-regular  text-[28px] slide-down`}>
            WHITEPAPER
          </div>}
     
      </header>
      </>
    )
  }
  
  export default Header