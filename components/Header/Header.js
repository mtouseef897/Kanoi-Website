import { useContext } from "react"
import { ExploreModeContext } from "@/context/ExploreModeContext"
import HeaderButton from "./HeaderButton"
import HeaderLogo from "./HeaderLogo"



const Header = () => {
   const {isExploreMode}=useContext(ExploreModeContext);
    return (
      <header
       className={`z-[10] w-[97%] mx-auto border mt-[20px] h-[68px] flex items-center justify-between pl-[16px] pr-[8px] rounded-md 
       ${isExploreMode?"bg-black/[0.34] backdrop-blur border-[#1F1F1F] opacity-[0] hover:opacity-[1] transition-all duration-500 ease-out":"bg-[#111111]/[0.04] border-gray-300"}`}>
          <HeaderLogo/>
          <HeaderButton/>
      </header>
    )
  }
  
  export default Header