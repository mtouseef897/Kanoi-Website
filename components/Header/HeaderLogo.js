import { ExploreModeContext } from "@/context/ExploreModeContext"
import { WhitePaperModeContext } from "@/context/WhitePaperModeContext";
import { useContext } from "react";

const HeaderLogo = () => {
const {isExploreMode,handleIsExploreMode}=useContext(ExploreModeContext);
const {handleIsWhitePaperMode}=useContext(WhitePaperModeContext);

  return (
    <div className="h-[42px] w-[42px] cursor-pointer" onClick={()=>{handleIsExploreMode(false); handleIsWhitePaperMode(false)}} >
           { !isExploreMode&& <img className="h-full w-full object-cover"
                  src="/Header/logo_black.png"
                />}
          {isExploreMode&&  <img className="h-full w-full object-cover"
                  src="/Header/logo_white.png"
                />}
    </div>
  )
}

export default HeaderLogo