import React, { useContext, useEffect, useState } from "react";
import { GiDiamonds } from "react-icons/gi";

import { Bebas_Neue } from 'next/font/google'
import { StoryPageContext } from "@/context/StoryPageContext";
const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})


const CharacterstoryCard = ({storyCharacter}) => {
  const { storyPageCount } = useContext(StoryPageContext);
  const pageNumberString = String(storyPageCount+1);
  const formattedPageNumber = pageNumberString.length === 1 ? `0${pageNumberString}` : pageNumberString;

  const [key2, setKey2] = useState(0);

  useEffect(() => {
    // Increment the key to force re-rendering
    setKey2(prevKey => prevKey + 1);
  }, [storyCharacter]); // Re-render whenever the storyText prop changes

  return (
    <div className=" w-[343px] md:w-[1056px] md:border md:border-[#1f1f1f] absolute bottom-[40px] left-0 right-0 mx-auto rounded-lg  ">
      <div className={`h-[429px] flex-col-reverse md:h-[304px] rounded-lg bg-transparent border-none md:bg-black/[0.34] p-0 md:p-5 md:border-[#1f1f1f] md:border flex   md:backdrop-filter md:backdrop-blur-lg ${storyCharacter.side==='left'?"items-end":"items-start"}`}>
        <div className="grow story-wrapper flex flex-col justify-between mt-[-50px] md:mt-0  w-[343px] md:w-[430px] p-4  bg-[#0d0d0d] md:bg-black/[0.34] border border-white/[0.12] rounded-[10px] ">
          <div className="content ">
            <div className={`${bebas_neue.className} flex gap-[4px] items-center `}>
              <p key={key2+'p'}className="text-white tracking-[1.5px] fade-in">{formattedPageNumber}</p>
              {/* <GiDiamonds className="text-white"/> */}
              <img src='/illustrations/Star9.png'/>
              <p className="text-white text-[16px] tracking-[1.5px]">
                THE STORY OF THE KANOI
              </p>
            </div>
            <h3 className="text-white font-bold h-[29px] md:h-[42px] text-[42px] md:text-[60px] text-left">
              <span key={key2+'name'} className={`${bebas_neue.className} fade-in`}>{storyCharacter.name}{" "}</span>
              <span key={key2+'role'} className=" text-[#FFFFFF66] font-normal text-[14px] md:text-[16px] fade-in">
              {storyCharacter.role}
              </span>
            </h3>
          </div>
          <div className="quote">
            <p key={key2+'quote'} className=" text-[16px] md:text-[24px] tracking-tight	text-white text-left italic fade-in">
            {storyCharacter.quote}
            </p>
          </div>
        </div>
        
        <div className={`md:h-[516px] w-[343px] h-[294px] md:w-[604px] md:absolute md:top-auto md:bottom-0 top-0 ${storyCharacter.side==='left'? "left-0":"right-0" } `}>
            <img key={key2+'chimg'}className="w-full h-full object-cover fade-in" src={storyCharacter.image} />
        </div>
      </div>
    </div>
  );
};

export default CharacterstoryCard;
