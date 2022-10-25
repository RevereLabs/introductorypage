import React from 'react'
import style from '../../styles/Social.module.css'
import Button from '../../components/Button'
import SocialCard from '../../components/SocialCard'
import data from '../../data/socialData.json'

function Social() {
  return (
    <div id="Social" className="h-screen flex flex-col justify-between items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem  small:h-auto ">

        <div className={style.Line}></div>
        <span className="text-textMain w-[30%] text-center text-[3.6rem] leading-[4.4rem] small:text-[2rem] small:leading-[2.2rem] small:w-[60%] small:mt-10">So are they!
          <span className="text-main"> EveryDay!</span>
        </span>
        <div>
            <Button Content={'Checkout our Discord'} Link={'https://discord.gg/YUMqXbMrc8'} />
        </div>
        <div className="mt-10 grid grid-cols-3 small:grid-cols-1">
        {data.map((item, i) =>(
          <SocialCard key={i} Name={item.name} Id={item.id} Review={item.review} ProfilePic={item.pp}/>
        ))}
        </div>
        <div className={style.Line}></div>
    </div>
  )
}

export default Social
