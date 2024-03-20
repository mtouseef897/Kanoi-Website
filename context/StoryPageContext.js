import { useContext,createContext,useState } from "react";
import { ExploreModeContext } from "./ExploreModeContext";

export const StoryPageContext=createContext();


export const StoryPageContextProvider = ({ children }) => {

    const [storyPageCount, setStoryPageCount] = useState(0);
    const {handleIsExploreMode}=useContext(ExploreModeContext);
    const handleStoryPageCount = () => {
        if(storyPageCount<15)
        {
            setStoryPageCount(storyPageCount+1);
      
        }
         
        else
        {
            setStoryPageCount(0);
            handleIsExploreMode(false);
        }
       
        
    };

    const resetStoryPageCount=()=>{
        setStoryPageCount(0);
    }
  
    return (
      <StoryPageContext.Provider value={{ storyPageCount, handleStoryPageCount,resetStoryPageCount }}>
        {children}
      </StoryPageContext.Provider>
    );
  };