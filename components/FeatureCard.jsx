import React from 'react'
import Image from 'next/Image'
import CardBase from '../public/CardBase.png'

function FeatureCard({height=400, content, headingMain, headingSecondary}) {
  return (
    <div className="font-mada  relative text-accent m-10">

      <div className="absolute top-[10%] z-10 flex flex-col justify-center text-center p-10">
        <span className="font-[600] text-[1.5rem] leading-[1.5rem]">{headingMain} 
          <span className="text-secondary"> {headingSecondary}</span>
        </span>
        <span className="font-[400] text-[1rem] leading-[1.5em] mt-10">{content}</span>
      </div>
      <Image src={CardBase} height={height} width={'300'} />
    </div>
  )
}

export default FeatureCard