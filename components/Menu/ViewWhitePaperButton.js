import { WhitePaperModeContext } from '@/context/WhitePaperModeContext'
import React, { useContext } from 'react'

const ViewWhitePaperButton = () => {
  const {handleIsWhitePaperMode}=useContext(WhitePaperModeContext);
  return (
    <div onClick={()=>handleIsWhitePaperMode(true) }className="hidden relative bg-[#F1F1F1] rounded-[8px] border border-[#CBCBCB] gap-[10px] w-[373px]  md:flex justify-end items-center p-3">
                     
                  <div className="absolute left-0 bottom-0 w-[147px] h-[103px]"><img src="/illustrations/Miko.png" className="object-cover w-full h-full"  /> </div>
                  <div  className=" bg-black text-white rounded-lg p-[16px] cursor-pointer">
                     <p className="text-[#707070] whitespace-nowrap text-[14px] font-[400] leading-[10px]  tracking-[-1px]">Welcome to kanoi</p>
                    <p className="text-[20px] leading-[14px] font-[400] whitespace-nowrap tracking-[-1px] mt-2" >View the Whitepaper</p>
                  </div>
         
    </div>
  )
}

export default ViewWhitePaperButton