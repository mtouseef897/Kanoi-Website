"use client"
import Image from "next/image";
import PreLoader from "../components/Preloader";
import { useState } from "react";
import TopPage from "@/components/TopPage/TopPage";

import { ExploreModeContextProvider } from "@/context/ExploreModeContext";
import { StoryPageContextProvider } from "@/context/StoryPageContext";
import { WhitePaperModeContextProvider } from "@/context/WhitePaperModeContext";

export default function Home() {

  //States Defination 
  const [isLoaded,setIsLoaded]=useState(false);

  //Handle Methods
  const handleIsLoaded=()=>{
    setIsLoaded(true);
  }

//Return Content
  return (

      <ExploreModeContextProvider>
        <WhitePaperModeContextProvider>
      <StoryPageContextProvider>
      {!isLoaded && <PreLoader handleIsLoaded={handleIsLoaded}/>  }
      { isLoaded && <TopPage/>}
      </StoryPageContextProvider>
      </WhitePaperModeContextProvider>
      </ExploreModeContextProvider>
    
  );
}
