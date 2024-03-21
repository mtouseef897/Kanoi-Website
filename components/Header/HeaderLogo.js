import { DropDownMenuContext } from "@/context/DropDownMenuContext";
import { ExploreModeContext } from "@/context/ExploreModeContext"
import { WhitePaperModeContext } from "@/context/WhitePaperModeContext";
import { useContext } from "react";

const HeaderLogo = () => {
const {isExploreMode,handleIsExploreMode}=useContext(ExploreModeContext);
const {handleIsWhitePaperMode}=useContext(WhitePaperModeContext);
const { isDropDownActive, handleIsDropDownActive }=useContext(DropDownMenuContext);

  return (
   <>
  { !isDropDownActive&&  <div className=" h-[36px] w-[36px] md:h-[42px] md:w-[42px] cursor-pointer" onClick={()=>{handleIsExploreMode(false); handleIsWhitePaperMode(false)}} >
           { !isExploreMode&& <img className="h-full w-full object-cover"
                  src="/Header/logo_black.png"
                />}
          {isExploreMode&&  <img className="h-full w-full object-cover"
                  src="/Header/logo_white.png"
                />}
    </div>}
    {
      isDropDownActive&&  <button 
      className={` ${isExploreMode?"bg-white text-black !important":"bg-black text-white"} rounded-lg  flex items-center justify-center w-[146px] h-[42px]  gap-[4px]  text-[16px] font-[400] tracking-[-1px] leading-[14px] `}   >
        {!isExploreMode&&<img  className="w-[12px] h-[12px]" src="/Header/twitter_white.png"      />    }
        {isExploreMode&&<img  className="w-[12px] h-[12px]" src="/Header/twitter_black.png"      />    }
         Follow for updates
     </button>
    }
   </>
  )
}

export default HeaderLogo