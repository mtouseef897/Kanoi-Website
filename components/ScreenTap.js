import React , { useContext, useEffect, useState } from 'react'
import { StoryPageContext } from '@/context/StoryPageContext';
 


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
          const interval = setInterval(toggleState, 500);
      
          // Clean up the interval on component unmount
          return () => clearInterval(interval);
        }, [isActiveTap]);

  return (
    <div className='md:hidden h-full w-full absolute left-0 top-0 '  onClick={() => {
        userActive ? handleStoryPageCount() : setUserActive(true);
      }} >

     <div className={`${userActive?"hidden":""} md:hidden bg-black/[0.7] h-full w-full absolute left-0 top-0 z-50 flex flex-col items-center justify-center`}>
                <div className=" w-[71px] h-[42px]">
                    <img
                    className="w-full h-full object-cover"
                    src={`${isActiveTap?"/illustrations/tapon.png":"/illustrations/tapoff.png"}`}
                    />
                </div>
            <p className='italic text-white'>Tap the screen to read the story</p>
     </div>

    </div>
  )
}

export default ScreenTap


