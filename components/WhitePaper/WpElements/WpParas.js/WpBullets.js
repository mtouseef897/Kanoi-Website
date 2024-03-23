import React from 'react'

const WpBullet = ({children}) => {
  return (
    <div className="flex mt-[16px] items-start gap-[6px]">
    <img src="/wp/redstar.png" />
    <p className="font-[600]  text-[16px] md:text-[24px] text-[#1D1D1B] leading-[22px] md:leading-[30px] tracking-[-0.02em]">
    {children}
    </p>
  </div>
  )
}

export default WpBullet