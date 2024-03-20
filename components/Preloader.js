"use client";

import { useState, useEffect } from 'react';
import { Bebas_Neue } from 'next/font/google'
 
//Font
const bebas_neue = Bebas_Neue({ subsets: ['latin'],weight:['400']})

const Preloader= ({ handleIsLoaded }) => {

  const [counter, setCounter] = useState([0,14,21,37,45,58,62,73,81,94,100]);
  const [counterIndex,setCounterIndex]=useState(0);
  // Array of image paths corresponding to each counter value
  const imagePaths = [
    '/preloader/cd0.png',
    '/preloader/cd14.png',
    '/preloader/cd21.png',
    '/preloader/cd37.png',
    '/preloader/cd45.png',
    '/preloader/cd58.png',
    '/preloader/cd62.png',
    '/preloader/cd73.png',
    '/preloader/cd81.png',
    '/preloader/cd94.png',
    '/preloader/cd100.png',
  ];
 

  useEffect(() => {
    const timer = setInterval(() => {
      if (counterIndex<counter.length - 1) {
        setCounterIndex(prevIndex => prevIndex + 1);
       

      }
      else {
        handleIsLoaded();
      }
    }, 50); 

    return () => clearInterval(timer);
  }, [counterIndex]);

  return (
            <div className={`flex min-h-screen ${bebas_neue.className}`}>
            <div className='relative flex grow  items-center justify-center'>
                    
                    <div className=" absolute left-[10px] md:left-[40px] top-[20px]  text-[132px] leading-[138px]  lg:text-[200px]  lg:leading-[201px] tracking-[-4%]  ">lOADING</div>

                    <div className="w-[298px] h-[229px] lg:w-[600px] lg:h-[462px]">
                        <img src={imagePaths[counterIndex]} className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute right-[40px] bottom-[30px] text-[132px] lg:text-[200px] font-bold leading-[135px] lg:leading-[206px]">{counter[counterIndex]}</div>

            </div>
            </div>
  );
};

export default Preloader;
