import { useContext } from "react"
import Header from "../Header/Header"
import TopPageMenu from "../Menu/TopPageMenu"
import Toppagebackground from "./Toppagebackground"
import { ExploreModeContext } from "@/context/ExploreModeContext"
import StoryPage from "../StoryPage"
import WhitePaper from "../WhitePaper/WhitePaper"
import { WhitePaperModeContext } from "@/context/WhitePaperModeContext"


const TopPage = () => {

  const {isExploreMode}=useContext(ExploreModeContext);
  const {isWhitePaperMode}=useContext(WhitePaperModeContext);

  return (
<>
{!isExploreMode && !isWhitePaperMode && <div className="absolute left-0 top-0 right-0 bottom-0 bg-[url('/toppage/bg_characters_mobile.png')] md:bg-[url('/toppage/bg_characters_desktop.png')] bg-cover bg-center bg-no-repeat"> 
      <Header/>
      <Toppagebackground/>
      <TopPageMenu/>
 </div>}
{
  isExploreMode && <StoryPage/>
}
{
  isWhitePaperMode && <WhitePaper/>
}
</>
  )
}

export default TopPage