import { StoryPageContext } from "@/context/StoryPageContext";

import React, { useContext, useEffect, useState } from "react";
import { GiDiamonds } from "react-icons/gi";

import { Bebas_Neue } from 'next/font/google'
const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})


const TextStoryCard = ({storyText}) => {
  const { storyPageCount } = useContext(StoryPageContext);
  const pageNumberString = String(storyPageCount+1);
  const formattedPageNumber = pageNumberString.length === 1 ? `0${pageNumberString}` : pageNumberString;

  const [key, setKey] = useState(0);

  useEffect(() => {
    // Increment the key to force re-rendering
    setKey(prevKey => prevKey + 1);
  }, [storyText]); // Re-render whenever the storyText prop changes

  return (
    <div key={key} className="absolute bottom-[40px] left-0 right-0 mx-auto text-white max-w-[343px] md:max-w-[780px]">
      <h2 key={key + 'h2'} className={`${bebas_neue.className} text-center text-[16px]  leading-[11px] flex gap-[4px] justify-center items-center tracking-[1.5px] fade-in`}> {formattedPageNumber}  <img src='/illustrations/Star9.png'/> THE STORY OF THE KANOI</h2>
      <div key={key + 'div'} className="text-center text-[16px] md:text-[23px] tracking-[-1px] leading-[20px] md:leading-[28px] mt-[16px] md:mt-[20px] w3-animate-opacity fade-in" dangerouslySetInnerHTML={{ __html: storyText }}/>
           
    </div>
  );
};

export default TextStoryCard;
