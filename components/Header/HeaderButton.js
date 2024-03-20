import { ExploreModeContext } from "@/context/ExploreModeContext";
import { useContext } from "react";



const HeaderButton = () => {
    const {isExploreMode}=useContext(ExploreModeContext);
  return (
    // <a target="_blank" href="https://twitter.com/KanoiTCG" className="hover:scale-[0.95] bg-black hover:bg-red-800 transition-all duration-100 rounded-lg">
    <button 
     className={`${isExploreMode?"bg-white text-black !important":"bg-black text-white"} rounded-lg transition-all hover:scale-[0.97] flex items-center justify-center w-[190px] h-[52px]  gap-[8px]  text-[20px] font-[400] tracking-[-1px] leading-[14px] `}   >
       {!isExploreMode&&<img  className="w-[15px] h-[15px]" src="/Header/twitter_white.png"      />    }
       {isExploreMode&&<img  className="w-[15px] h-[15px]" src="/Header/twitter_black.png"      />    }
        Follow for updates
    </button>

  )
}

export default HeaderButton