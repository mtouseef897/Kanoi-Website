import { useContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import NextButton from "./NextButton";
import { StoryPageContext } from "@/context/StoryPageContext";
import TextStoryCard from "./StoryCard/TextStoryCard";
import Stories from "@/data/Stories";
import CharacterstoryCard from "./StoryCard/CharacterStoryCard";
import HotSpot from "./HotSpot";
import OpacityWrapper from "@/transitonEffects/OpacityWrapper";
import SlidingWrapper from "@/transitonEffects/SlidingWrapper";
import ShowStories from "./StoryCard/ShowStories";
import Preloader from "./Preloader";
import PreloaderEffect from "@/transitonEffects/PreloaderEffect";
import { AnimatePresence, motion } from "framer-motion";
import ExploreStoryButton from "./Menu/ExploreStoryButton";
import TheEnd from "./Menu/TheEnd";
import ScreenTap from "./ScreenTap";

const StoryPage = () => {
  const isMobile = window.innerWidth <= 768;
  const { storyPageCount } = useContext(StoryPageContext);
  const [playGif2, setPlayGif2] = useState(false);
  const Story = Stories[storyPageCount];
  const classNamesArray = [
    "img-hover-zoom--sp2",
    "img-hover-zoom--sp3",
    "img-hover-zoom--sp4",
    "img-hover-zoom--sp5",
    "img-hover-zoom--sp6",
    "img-hover-zoom--sp7",
    "img-hover-zoom--sp8",
  ];
  const classNamesMobile = [
    "mobile-story-mode--sp2",
    "mobile-story-mode--sp3",
    "mobile-story-mode--sp4",
    "mobile-story-mode--sp5",
    "mobile-story-mode--sp6",
    "mobile-story-mode--sp7",
    "mobile-story-mode--sp8",
    "mobile-story-mode--sp9",
    "mobile-story-mode--sp10",
    "mobile-story-mode--sp11",
    "mobile-story-mode--sp12",
    "mobile-story-mode--sp13",
    "mobile-story-mode--sp14",
    "mobile-story-mode--sp15",
  ];

  const handleGifFinish = () => {
    // Set playGif to false after a delay of 2000 milliseconds (2 seconds)
    setTimeout(() => {
      setPlayGif2(false);
    }, 500);
  };

  useEffect(() => {
    if (storyPageCount===13 || storyPageCount === 12 ) {
      setPlayGif2(true);
    }
  }, [storyPageCount]);

  return (
    <>
      <div
        // className={`absolute top-0 left-0 h-full w-full 
        // md:img-hover-zoom md:${storyPageCount > 0 && classNamesArray[storyPageCount - 1]} 
        // mobile-story-mode ${storyPageCount > 0 && classNamesMobile[storyPageCount - 1]} 
        //  overflow-hidden    `}
        className={`absolute top-0 left-0 h-full w-full 
        ${!isMobile ? 'img-hover-zoom' : ''}
        ${storyPageCount > 0 && !isMobile ? classNamesArray[storyPageCount - 1] : ''} 
        ${isMobile ? 'mobile-story-mode' : ''}
        ${storyPageCount > 0 && isMobile ? classNamesMobile[storyPageCount - 1] : ''}
        overflow-hidden`}
      >
        {/* { 
        <AnimatePresence>
          storyPageCount === 0 && <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: '-100vw',opacity:0, transition: { duration: 0.5, ease: 'easeOut' } }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
          key='videobg1'
         src= "/storypage/bgstorypage1.mp4"
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 h-full w-full object-cover -z-10  "
       ></motion.video>
       </AnimatePresence>
       } */}


{/* {
        storyPageCount!==13&&storyPageCount > 0 &&<video
          src={`${  storyPageCount < 13 ? "/storypage/Miyako Night.mp4": "/storypage/Miyako Fire.mp4" }`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover -z-10 "
        ></video>
        
        }  */}

       {/* {  storyPageCount > 0 && storyPageCount < 13 && <video
         src= "/storypage/Miyako Night.mp4"
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 h-full w-full object-cover -z-10 "
       ></video>} */}

        {/* {storyPageCount===13 && playGif2 && <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, type:"tween" }}
              > <img src="/Transitions/transition.gif"    onLoad={handleGifFinish}   className="absolute top-0 left-0 h-full w-full object-cover z-20 "/></motion.div> } */}
      {storyPageCount===13 && !isMobile &&<motion.div

initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6, delay: 0.2, ease: 'easeIn' }}> <video
                      src={`/Transitions/transition2.webm`}
                      autoPlay
                      loop={false}
                      muted
                      playsInline
                      className="absolute top-0 left-0 h-full w-full object-cover  "
                    ></video></motion.div> }

        {storyPageCount===13 && <div
             
              ><img className="absolute top-0 left-0 w-full h-full object-cover -z-10" src="/illustrations/sp14.gif" /></div> }


       {/* {  storyPageCount > 13 && <video
         src= "/storypage/Miyako Fire.mp4"
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 h-full w-full object-cover -z-10 "
       ></video>} */}
        
 
        {
        storyPageCount!==13&& <video
          src={`${
            storyPageCount === 0 ? "/storypage/bgstorypage1.mp4":
             storyPageCount < 13 ? "/storypage/Miyako Night.mp4": "/storypage/Miyako Fire.mp4"
          }`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover -z-10 "
        ></video>
        
        }


      </div>


     {/* Displaying the overlay for better readability*/}
      <div className="overlay"></div>

      {/* Displaying the PopUp StoryCard */}
      {/* {storyPageCount===12 && playGif2 && <motion.div

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
    > <img src="/Transitions/transition.gif"    onLoad={handleGifFinish}   className="absolute top-0 left-0 h-full w-full object-cover z-20 "/></motion.div> } */}
      {storyPageCount===12 && !isMobile &&<
        motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: 'easeIn' }}
      > <video
                      src={`/Transitions/transition2.webm`}
                      autoPlay
                      loop={false}
                      muted
                      playsInline
                      className="absolute top-0 left-0 h-full w-full object-cover   "
                    ></video></motion.div> }

      {storyPageCount === 12 && (
        <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeIn' }}
        >
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/[0.7] backdrop-blur-sm flex items-center justify-center">
        <div className="max-w-[85%] lg:max-w-[50%] max-h-[60%] w-full h-full flex items-center justify-center relative">
          <img className="w-full h-full" src="/illustrations/old_paper.png" />
          <div className="w-full absolute z-[1] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[24px] lg:text-[1.75rem] 2xl:text-[2.5rem] text-center free-hand max-w-[80%] lg:max-w-[58%]">
                     "For the sake of peace, under the Emperor's name, we invoke the
                  'Night Law' tonight. Curse Masters hiding among us, use your
                  forbidden arts to command Yōkai as your pawns and fight against
                   other Curse Masters. After your battles, we will grant the wish of
                   the one who achieves the most."
          </div>
        </div>
      </div>
      </motion.div>
      )}

        {/* Displaying the HotSpot Points on Slide 15 */}
      {
        storyPageCount === 14 && <>
          <HotSpot tooltip={'A MASSIVE BARRIER'} xoffset={43} yoffset={20}/>
          <HotSpot tooltip={'A VILLAGE ON FIRE'} xoffset={60} yoffset={33}/>
        </>
      }

        {/* Displaying the last Page Logo on Slide 16 */}
      {storyPageCount === 15 && (
        <div className="overlay-last-page flex items-center justify-center absolute left-0 top-0 w-full h-full bg-black/[0.7] backdrop-filter backdrop-blur-sm">
          <div className="md:w-[780px] md:h-[246px] w-[343px] h-[108px]">
            <img
              className="h-full w-full object-cover"
              src="/illustrations/logolastpage.png"
            />
          </div>
        </div>
      )}

      {storyPageCount === 15 &&<TheEnd/>}
      <Header />
      <NextButton />
      <ScreenTap/>
      <ShowStories Story={Story}/>
    </>
  );
};

export default StoryPage;
