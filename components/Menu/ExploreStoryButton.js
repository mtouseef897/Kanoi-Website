import { ExploreModeContext } from '@/context/ExploreModeContext';
import { StoryPageContext } from '@/context/StoryPageContext';
import React, { useContext } from 'react'

const ExploreStoryButton = () => {
    const {handleIsExploreMode}=useContext(ExploreModeContext);
    const {resetStoryPageCount}=useContext(StoryPageContext);
    
  return (
    <div className="relative bg-[#F1F1F1] rounded-[8px] border border-[#CBCBCB] gap-[20px] w-[373px]  flex flex-col md:flex-row justify-end items-center p-3 "  >
            <div>
                <div className="text-[#707070] whitespace-nowrap text-[18px] leading-[20px] font-[400] tracking-[-1px]">
                    The beginning of the
                </div>
                <div className="w-[153px] h-[40px]">
                    <img
                    className="w-full h-full object-cover"
                    src="/illustrations/title1.png"
                    />
                </div>
            </div>

            <div  onClick={()=>{handleIsExploreMode(true);resetStoryPageCount();} } className=" bg-black text-white rounded-lg px-[16px] py-[25px] text-[20px] leading-[14px] font-[400] whitespace-nowrap tracking-[-1px] cursor-pointer w-full text-center">
                Explore the Story
            </div>
    </div>
  )
}

export default ExploreStoryButton