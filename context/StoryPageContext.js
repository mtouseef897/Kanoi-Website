import { useContext,createContext,useState } from "react";
import { ExploreModeContext } from "./ExploreModeContext";

export const StoryPageContext=createContext();

const INITIAL_STATE=0;

export const StoryPageContextProvider = ({ children }) => {

    const [storyPageCount, setStoryPageCount] = useState(INITIAL_STATE);
    const {handleIsExploreMode}=useContext(ExploreModeContext);
    const handleStoryPageCount = () => {
        if(storyPageCount<15)
        {
            setStoryPageCount(storyPageCount+1);
      
        }
         
        else
        {
            setStoryPageCount(INITIAL_STATE);
            handleIsExploreMode(false);
        }
       
        
    };

    const resetStoryPageCount=()=>{
        setStoryPageCount(INITIAL_STATE);
    }
  
    return (
      <StoryPageContext.Provider value={{ storyPageCount, handleStoryPageCount,resetStoryPageCount }}>
        {children}
      </StoryPageContext.Provider>
    );
  };