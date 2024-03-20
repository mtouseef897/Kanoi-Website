import { useContext,createContext,useState } from "react";

export const WhitePaperModeContext=createContext();

export const WhitePaperModeContextProvider = ({ children }) => {
    const [isWhitePaperMode, setIsWhitePaperMode] = useState(false);
  
    const handleIsWhitePaperMode = newValue => {
        setIsWhitePaperMode(newValue);
    };
  
    return (
      <WhitePaperModeContext.Provider value={{ isWhitePaperMode, handleIsWhitePaperMode }}>
        {children}
      </WhitePaperModeContext.Provider>
    );
  };