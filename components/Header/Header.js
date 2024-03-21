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
       className={`z-[10] w-[97%] mx-auto border mt-[20px]  flex flex-col  justify-between pl-[16px] pr-[8px] rounded-md sticky top-[20px] 
       ${isExploreMode?"bg-black/[0.34] backdrop-blur border-[#1F1F1F] opacity-[1] md:opacity-[0] md:hover:opacity-[1] transition-all duration-500 ease-out":"bg-[#111111]/[0.04] border-gray-300"} 
       ${isWhitePaperMode && "bg-[#FAFAFA] border-[#E5E5E7]"}`}>
         <div className="flex justify-between items-center py-[12px]">
              <HeaderLogo/>
              <HeaderButton/>
          </div>
         {isDropDownActive&& <div onClick={()=>{handleIsWhitePaperMode(true);handleIsDropDownActive();handleIsExploreMode(false)}} className={`${isExploreMode?"text-white":""} py-[12px] bebas-neue-regular border-t-[1px] border-[#E5E5E7] text-[28px]`}>
            WHITEPAPER
          </div>}
      </header>
      {/* <div className="flex flex-col  justify-center w-[97%] mx-auto bg-[#1D1D1B]/[0.02] border-[#E5E5E7] border rounded-lg pl-[16px] pr-[8px] ">
          <div className="flex justify-between items-center py-[12px]">
              <HeaderLogo/>
              <HeaderButton/>
          </div>
          <div className="py-[12px] bebas-neue-regular border-t-[1px] border-[#E5E5E7] text-[28px]">
            WHITEPAPER
          </div>
      </div> */}
      </>
    )
  }
  
  export default Header