import { useContext } from "react"
import { ExploreModeContext } from "@/context/ExploreModeContext"
import StoryPage from "../StoryPage"
import WhitePaper from "../WhitePaper/WhitePaper"
import { WhitePaperModeContext } from "@/context/WhitePaperModeContext"
import Homepage from "../Homepage";
import OpacityWrapper from "@/transitonEffects/OpacityWrapper"


const TopPage = () => {

  const {isExploreMode}=useContext(ExploreModeContext);
  const {isWhitePaperMode}=useContext(WhitePaperModeContext);

  return (
<>
{
  !isExploreMode && !isWhitePaperMode && <OpacityWrapper><Homepage/></OpacityWrapper>
}
{
  isExploreMode && !isWhitePaperMode && <OpacityWrapper><StoryPage/></OpacityWrapper>
}
{
  isWhitePaperMode && !isExploreMode && <OpacityWrapper> <WhitePaper/></OpacityWrapper>
}
</>
  )
}

export default TopPage