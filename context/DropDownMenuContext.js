import { useContext,createContext,useState } from "react";

export const DropDownMenuContext=createContext();

export const DropDownMenuContextProvider = ({ children }) => {
    const [isDropDownActive, setIsDropDownActive] = useState(false);
  
    const handleIsDropDownActive = () => {
        setIsDropDownActive(!isDropDownActive);
    };
  
    return (
      <DropDownMenuContext.Provider value={{ isDropDownActive, handleIsDropDownActive }}>
        {children}
      </DropDownMenuContext.Provider>
    );
  };