import React , { useContext, useState } from 'react'
import { Bebas_Neue } from 'next/font/google'
import { StoryPageContext } from '@/context/StoryPageContext';
import { motion  } from "framer-motion";
 
//Font
const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})

const NextButton = () => {
    const [isActive, setIsActive] = useState(false);
    const {storyPageCount,handleStoryPageCount}=useContext(StoryPageContext);


  

const yValues=[50,50,42,53,52,52,52,33,33,33,33,61,61,47,42,65];
const xValues=[69,69,54,69,76,76,76,38,38,38,38,85,85,69,65,65];

 const [xoffset,setXOffSet]=useState(xValues[storyPageCount]);
 const [prevXoffset,setPrevXoffset]=useState(xValues[storyPageCount]);
const [yoffset,setYOffSet]=useState(yValues[storyPageCount]);
const [prevYoffset,setPrevYoffset]=useState(yValues[storyPageCount]);

    const handlePosition=async ()=>{
      setPrevXoffset(xValues[storyPageCount]);
  setPrevYoffset(yValues[storyPageCount]);
  setXOffSet(xValues[storyPageCount + 1]);
  setYOffSet(yValues[storyPageCount + 1]);

    }
  
  console.log("X value :",xoffset," Y value : ",yoffset);

  return (


          <motion.div 
   
   initial={{ x: `${prevXoffset}vw`, y: `${prevYoffset}vh` }}
   animate={{ x: `${xoffset}vw`, y: `${yoffset}vh` }}
   transition={{
     type: "spring",
     stiffness: 75,
     // duration:0.3
   }}
   
   
   style={{   
     // position: "absolute",
     // left: `${xoffset}%`,
     // top: `${yoffset}%`,
 }} 
 className={`relative hidden md:flex items-center justify-center w-[68px] h-[68px] rounded-full z-[100] ${bebas_neue.className} 

 `} >
  {/* transition-all ease-linear duration-500 */}
       {/* Wrapper */}
       <div className={` absolute border-2 rounded-full  ${isActive ? 'border-solid' : 'border-dashed'} 
       ${isActive ? 'w-[52px] h-[52px]' : "w-[68px] h-[68px] spinner"}`}></div>

       {/* Button */}
       <button  className={`z-[100] text-[16px]  leading-[48px]
             bg-white text-black rounded-full w-[44px] h-[44px] cursor-pointer ${isActive?'':''}`}
               onMouseDown={()=>setIsActive(true) } onMouseUp={()=>setIsActive(false)} onClick={()=>{handleStoryPageCount();handlePosition();}}>     {storyPageCount===15?'FINISH':'NEXT' }  </button>

   </motion.div>

  )
}

export default NextButton


