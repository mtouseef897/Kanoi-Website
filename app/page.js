"use client"
import Image from "next/image";
import PreLoader from "../components/Preloader";
import { useEffect, useState } from "react";
import TopPage from "@/components/TopPage/TopPage";

import { ExploreModeContextProvider } from "@/context/ExploreModeContext";
import { StoryPageContextProvider } from "@/context/StoryPageContext";
import { WhitePaperModeContextProvider } from "@/context/WhitePaperModeContext";
import OpacityWrapper from "@/transitonEffects/OpacityWrapper";
import PreloaderEffect from "@/transitonEffects/PreloaderEffect";
import { DropDownMenuContextProvider } from "@/context/DropDownMenuContext";

export default function Home() {

  //States Defination 
  const [isLoaded,setIsLoaded]=useState(false);
  const [playGif, setPlayGif] = useState(false);

  //Handle Methods
  const handleIsLoaded=()=>{
    setIsLoaded(true);
  }

  const handleGifFinish = () => {
    // Set playGif to false after a delay of 2000 milliseconds (2 seconds)
    setTimeout(() => {
      setPlayGif(false);
    }, 550);
  };

  useEffect(() => {
    if (isLoaded) {
      setPlayGif(true);
    }
  }, [isLoaded]);

//Return Content
  return (

    <ExploreModeContextProvider>
        <WhitePaperModeContextProvider>
           <StoryPageContextProvider>
              <DropDownMenuContextProvider>
                  {!isLoaded && <PreLoader handleIsLoaded={handleIsLoaded}/>  }

                  
                  { isLoaded &&  <OpacityWrapper> <video
                      src={`/Transitions/transition2.webm`}
                      autoPlay
                      loop={false}
                      muted
                      playsInline
                      className="absolute top-0 left-0 h-full w-full object-cover  "
                    ></video></OpacityWrapper>}

                  {/* {isLoaded && playGif && <OpacityWrapper> <img src="/Transitions/transition.gif"    onLoad={handleGifFinish}   className="absolute top-0 left-0 h-full w-full object-cover z-10 "/></OpacityWrapper> } */}

                  { 
                    isLoaded &&  <PreloaderEffect>    <TopPage/>     </PreloaderEffect>
                  }
                  </DropDownMenuContextProvider>
              </StoryPageContextProvider>
    </WhitePaperModeContextProvider>  
      </ExploreModeContextProvider>
    
  );
}
