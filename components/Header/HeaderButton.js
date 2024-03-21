import { DropDownMenuContext } from "@/context/DropDownMenuContext";
import { ExploreModeContext } from "@/context/ExploreModeContext";
import { useContext } from "react";



const HeaderButton = () => {
    const {isExploreMode}=useContext(ExploreModeContext);
    const { isDropDownActive, handleIsDropDownActive }=useContext(DropDownMenuContext);
  return (
    <>
    
    <button 
     className={`hidden md:flex ${isExploreMode?"bg-white text-black !important":"bg-black text-white"} rounded-lg transition-all hover:scale-[0.97]  items-center justify-center w-[190px] h-[52px]  gap-[8px]  text-[20px] font-[400] tracking-[-1px] leading-[14px] `}   >
       {!isExploreMode&&<img  className="w-[15px] h-[15px]" src="/Header/twitter_white.png"      />    }
       {isExploreMode&&<img  className="w-[15px] h-[15px]" src="/Header/twitter_black.png"      />    }
        Follow for updates
    </button>
    <div onClick={handleIsDropDownActive} className="h-[38px] w-[38px] md:hidden">
      {!isDropDownActive&&<img src={`${isExploreMode?"/Header/menu_white.png":"/Header/menu_black.png"}`} className="w-full h-full object-cover"/>}
      {isDropDownActive&&<img src={`${isExploreMode?"/Header/ddmenuwhite.png":"/Header/ddmenublack.png"}`} className="w-full h-full object-cover"/>}
    </div>
    </>
  )
}

export default HeaderButton