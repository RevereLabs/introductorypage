import React from 'react'
import style from '../../styles/Features.module.css'
import FeatureCard from '../../components/FeatureCard'
import  data  from '../../data/featureData.json'

function Features() {
  return (
    <div id="Features" className="h-screen bg-textMain flex flex-col justify-between items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem] small:h-auto">

        <div className={style.Line}></div>
        <div className="flex small:flex-col">
            {data.map((item,index) =>(
                <FeatureCard key={index} content={item.Content} headingMain={item.heading} headingSecondary={item.SecondaryHeading} height={item.height}/>
            ))}
        </div>

        <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem]  small:text-[2rem] small:leading-[2.2rem] small:mb-10">Features we provide.
          <span className="text-secondary"> Excited?</span>
        </span>

        <div className={style.Line}></div>
    </div>
  )
}

export default Features