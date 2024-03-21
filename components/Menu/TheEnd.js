import { ExploreModeContext } from '@/context/ExploreModeContext';
import { StoryPageContext } from '@/context/StoryPageContext';
import React, { useContext } from 'react'

const TheEnd = () => {
    const {handleIsExploreMode}=useContext(ExploreModeContext);
    const {resetStoryPageCount}=useContext(StoryPageContext);
    
  return (
    <div className=" md:hidden absolute left-0 right-0 mx-auto bottom-[20px] bg-black z-20 rounded-[8px] border border-[#E5E5E7]/[0.20] gap-[20px] md:w-[373px] w-[343px]   flex flex-col md:flex-row justify-end items-center p-3 "  >
            <div className=''>
                <div className="text-[#CFCFCF] whitespace-nowrap text-[18px] leading-[20px] font-[400] tracking-[-1px]">
                This marked the beginning of the
                </div>
                <div className="md:w-[153px] md:h-[40px]  w-[118px] h-[29px] mx-auto mt-[2px]">
                    <img
                    className="w-full h-full object-cover"
                    src="/illustrations/TheEnd.png"
                    />
                </div>
            </div>

            <div  onClick={()=>{handleIsExploreMode(false);resetStoryPageCount();} } className=" bg-white text-black rounded-lg py-[15px] px-[16px] md:py-[25px] text-[14px] md:text-[20px] leading-[14px] font-[400] whitespace-nowrap tracking-normal md:tracking-[-1px] cursor-pointer w-full text-center">
                Go to Home Page
            </div>
    </div>
  )
}

export default TheEnd;