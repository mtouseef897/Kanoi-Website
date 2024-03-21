import React from "react";

const HeroSection = () => {
  return (
    <div className="w-[97%] mx-auto h-[191px] md:h-[699px] bg-[url('/wp/herobg.png')] mt-[40px] bg-center bg-cover justify-between bg-no-repeat flex items-end bebas-neue-regular md:px-[32px] px-[12px] rounded-lg">
      <h1 className="uppercase text-[40px] md:text-[120px] 2xl:text-[194px] text-white tracking-normal font-bold 2xl:leading-[219px] md:leading-[150px] leading-[46px]">
        WHITEPAPER
      </h1>
      <h1 className="uppercase text-[40px] md:text-[120px] 2xl:text-[194px] text-white tracking-normal font-bold 2xl:leading-[219px] md:leading-[150px]  leading-[46px]">
        version 1.0
      </h1>
    </div>
  );
};

export default HeroSection;
