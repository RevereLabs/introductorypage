import React from 'react'
import style from '../../styles/Features.module.css'
import FeatureCard from '../../components/FeatureCard'
// import  data  from '../../data/featureData.json'

function Features() {
  return (
    <div className="w-screen h-screen bg-textMain flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">

        <div className={style.Line} style={{marginTop:'0'}}></div>
        <div className="flex">
            {/* {data.map((item,index) =>(
                <FeatureCard content={item.content} headingMain={item.headingMain} headingSecondary={item.headingSecondary} height={item.height}/>
            ))} */}
            <FeatureCard/>
        </div>

        <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem]">Features we provide.
          <span className="text-secondary"> Excited?</span>
        </span>

        <div className={style.Line} style={{marginBottom:'0'}}></div>
    </div>
  )
}

export default Features