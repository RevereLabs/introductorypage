import React from 'react'
import style from '../../styles/Social.module.css'
import Button from '../../components/Button'
import SocialCard from '../../components/SocialCard'
import data from '../../data/socialData.json'

function Social() {
  return (
    <div id="Social" className="w-screen h-screen flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">

        <div className={style.Line} style={{marginTop:'0'}}></div>
        <span className="text-textMain w-[30%] text-center text-[3.6rem] leading-[4.4rem]">So are they!
          <span className="text-main"> EveryDay!</span>
        </span>
        <div>
            <Button Content={'Checkout our Discord'} Link={''} />
        </div>
        <div className="mt-10 grid grid-cols-3">
        {data.map((item, i) =>(
          <SocialCard key={i} DiscordName={item.name} DiscordId={item.id} Review={item.comment} ProfilePic={item.pp}/>
        ))}
        </div>
        <div className={style.Line} style={{marginBottom:'0', marginTop:'3em'}}></div>
    </div>
  )
}

export default Social