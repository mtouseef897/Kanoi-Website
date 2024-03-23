import React from 'react'

const Toppagebackground = () => {
  return (
    <>
       {/* fire on desktop */}
          <div className="invisible sm:visible  absolute w-full left-[50%] bottom-[-0.3rem] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                  <img className="w-[7.5rem]" src="/toppage/bg_fire_desktop.png" />
                  {/* <video
                      src={`/toppage/flame.webm`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" border-[2px] border-red-600"
                    ></video> */}
          </div>
           {/* <div className="invisible sm:visible  absolute w-full left-[50%] bottom-[-0.3rem] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"> */}
                  {/* <img className="w-[7.5rem]" src="/toppage/bg_fire_desktop.png" /> */}
                  {/* <video
                      src={`/toppage/flame.webm`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 h-full w-full border-[2px] border-red-600"
                    ></video> */}
          {/* // </div> */}

          {/* fire on mobile */}
          <div className="visible sm:invisible absolute w-full left-[50%] bottom-[6.6rem] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <img className="w-[5rem]" src="/toppage/bg_fire_desktop.png" />
          </div>

          <div className="w-[343px] h-[108px]  md:w-[779px] md:h-[246px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img className="w-full h-full object-cover" src="/illustrations/TopPageTitle.png" />
          </div>
        
    </>
  )
}

export default Toppagebackground