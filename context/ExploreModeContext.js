import { useContext,createContext,useState } from "react";

export const ExploreModeContext=createContext();

export const ExploreModeContextProvider = ({ children }) => {
    const [isExploreMode, setIsExploreMode] = useState(false);
  
    const handleIsExploreMode = newValue => {
        setIsExploreMode(newValue);
    };
  
    return (
      <ExploreModeContext.Provider value={{ isExploreMode, handleIsExploreMode }}>
        {children}
      </ExploreModeContext.Provider>
    );
  };