import React, { useEffect, useState } from 'react'
import { Bebas_Neue } from 'next/font/google';

const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})

const HotSpot = ({tooltip,xoffset,yoffset}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Function to toggle the state every 10 seconds
        const toggleState = () => {
          setIsActive(prevState => !prevState);
        };
    
        // Set up the interval to toggle the state every 10 seconds
        const interval = setInterval(toggleState, 1500);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, [isActive]);


  return (
    <div style={{
        left: `${xoffset}%`,
        top: `${yoffset}%`,
    }} class={`hotspot absolute t w-[36px] h-[36px] flex items-center justify-center `}>
    <div class={`absolute ${isActive?'w-[36px] h-[36px]':'w-[16px] h-[16px]'}  rounded-full bg-white/[0.3] cursor-pointer ease-in-out transition-all duration-[400ms]`}></div>
    <div class="relative w-[16px] h-[16px] rounded-full bg-[#DFDFDF] cursor-pointer"></div>
    <div class="tooltip absolute transform -translate-y-full bg-black text-white p-[10px] rounded-md ">
      <span class={`${bebas_neue.className} whitespace-nowrap text-[18px] leading-[22px] `}>{tooltip}</span>
    </div>
  </div>
  )
}

export default HotSpot