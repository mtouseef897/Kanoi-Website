import ExploreStoryButton from "./ExploreStoryButton"
import ViewWhitePaperButton from "./ViewWhitePaperButton"


const TopPageMenu = () => {
  return (
    <div className="flex items-center justify-center md:justify-between mx-auto left-0 right-0 w-[97%] bottom-10 absolute">
        <ViewWhitePaperButton/>
        <ExploreStoryButton/>
    </div>
  )
}

export default TopPageMenu