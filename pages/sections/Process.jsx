import React from 'react'
import ProcessCard from '../../components/ProcessCard'
import style from '../../styles/Process.module.css'
import data from '../../data/processData.json'
export default function Process() {
  return (
    <>
      <div className="w-screen h-auto  flex justify-center text-[4.8rem] w-[100%] leading-[4.8rem]">
        <div className={style.videoContainer}>
          <video loop autoPlay muted className={style.Video} >
                  <source src={''} type="video/mp4"/>Your browser does not support the video tag.
          </video> 
        </div>
        <div className={style.CardScroll}>
          {data.map((item, i) =>(<ProcessCard Title={item.title} Content={item.content} Key={i}/>))}
        </div>
      </div>
    </>
  )
}
