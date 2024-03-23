import React from 'react'

const WpImage = ({Image}) => {
  return (
  <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto">
    <img className="w-full h-full object-cover " src={`/wp/${Image}`} />
  </div>
  )
}

export default WpImage