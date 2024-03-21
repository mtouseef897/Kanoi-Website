import { useContext,createContext,useState } from "react";

export const WhitePaperIndexContext=createContext();

export const WhitePaperIndexContextProvider = ({ children }) => {
    const [currentWhitePaperIndex, setCurrentWhitePaperIndex] = useState("");
  
    const handlecurrentWhitePaperIndex = newValue => {
        setCurrentWhitePaperIndex(newValue);
    };
  
    return (
      <WhitePaperIndexContext.Provider value={{ currentWhitePaperIndex, handlecurrentWhitePaperIndex }}>
        {children}
      </WhitePaperIndexContext.Provider>
    );
  };