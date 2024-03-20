import { StoryPageContext } from "@/context/StoryPageContext";

import React, { useContext } from "react";
import { GiDiamonds } from "react-icons/gi";

import { Bebas_Neue } from 'next/font/google'
const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})


const TextStoryCard = ({storyText}) => {
  const { storyPageCount } = useContext(StoryPageContext);
  const pageNumberString = String(storyPageCount+1);
  const formattedPageNumber = pageNumberString.length === 1 ? `0${pageNumberString}` : pageNumberString;
  return (
    <div className="absolute bottom-[40px] left-0 right-0 mx-auto text-white max-w-[780px] ">
      <h2 className={`${bebas_neue.className} text-center text-[16px]  leading-[11px] flex gap-[4px] justify-center items-center tracking-[1.5px]`}> {formattedPageNumber}  <img src='/illustrations/Star9.png'/> THE STORY OF THE KANOI</h2>
      {/* <p className="text-center text-[24px] tracking-[-1px] leading-[28px] mt-[20px]">
            {storyText}
      </p> */}
      <div className="text-center text-[23px] tracking-[-1px] leading-[28px] mt-[20px]" dangerouslySetInnerHTML={{ __html: storyText }}/>
           
    </div>
  );
};

export default TextStoryCard;
