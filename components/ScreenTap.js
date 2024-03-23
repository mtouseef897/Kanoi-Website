import React , { useContext, useEffect, useState } from 'react'
import { StoryPageContext } from '@/context/StoryPageContext';
 
import { AnimatePresence, motion } from "framer-motion";

const ScreenTap = () => {
    const [isActiveTap, setIsActiveTap] = useState(false);
    const [userActive, setUserActive] = useState(false);
    const {storyPageCount,handleStoryPageCount}=useContext(StoryPageContext);
  
    const handleMobileTap = () => {
        console.log('Tapped on mobile!');
      
      };

      

      useEffect(() => {
          // Function to toggle the state every 10 seconds
          const toggleState = () => {
            setIsActiveTap(prevState => !prevState);
          };
      
          // Set up the interval to toggle the state every 10 seconds
          const interval = setInterval(toggleState, 1800);
      
          // Clean up the interval on component unmount
          return () => clearInterval(interval);
        }, [isActiveTap]);

  return (
    <AnimatePresence>
    <div className='md:hidden h-full w-full absolute left-0 top-0 '  onClick={() => {
        userActive ? handleStoryPageCount() : setUserActive(true);
      }} >

<motion.div
    key="Screentapoverlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ x: 100, transition: { duration: 10.3, ease: 'easeOut' } }}
    transition={{ duration: 0.5, ease: 'easeIn' }} className={`md:hidden ${userActive?"bg-black/[0]":"bg-black/[0.7]"} h-full w-full absolute left-0 top-0 z-50 flex flex-col gap-[8px] items-center justify-center transition-all duration-[1500]    ease-in-out`}>
           {!userActive&&<> <div className='flex flex-col items-center justify-center'>
            <div className=" w-[38px] h-[38px]">
                    {isActiveTap&&<img
                    className="w-full h-full  fade-in-3"
                    src="/illustrations/tapon.png"
                    />}
                    {!isActiveTap&&<img
                    className="w-full h-full  fade-in-3"
                    src="/illustrations/tapoff.png"
                    />}
                </div>
                <div className=" w-[71px] h-[12px] mt-[-5px]">
                    {isActiveTap&&<img
                    className="w-full h-full  fade-in-active"
                    src="/illustrations/tapred.png"
                    />}
                    {!isActiveTap&&<img
                    className="w-full h-full  fade-in-inactive"
                    src="/illustrations/tapwhite.png"
                    />}
                </div>
            </div>
            <p className='italic text-white'>Tap the screen to read the story</p></>}
     </motion.div>

    </div>
    </AnimatePresence>
  )
}

export default ScreenTap


