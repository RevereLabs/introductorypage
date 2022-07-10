import React from 'react'
import style from '../../styles/CTA.module.css'
import Button from '../../components/Button'
import Image from 'next/image'
import Discord from '../../public/Discord.png'
import Twitter from '../../public/Twitter.png'
import Insta from '../../public/Insta.png'

function CTA() {
  return (
    <div id='CTA' className="w-screen h-screen bg-textMain flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">
        <div className={style.Line} style={{marginTop:'0'}}></div>

        <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem] mt-0">Launching soon at your
          <span className="text-main"> nearest browser!</span>
        </span>
        
        <div>
            <Button Content={'Sign up for the news letter'} Link={''} />
        </div>

        <div className="mt-[20vh]">
            <a href="#" className={style.SocialBtn}>
              <Image src={Discord} width="50" height="50"></Image>
            </a>
            <a href="#" className={style.SocialBtn}>
              <Image src={Twitter} width="50" height="50"></Image>
            </a>
            <a href="#" className={style.SocialBtn}>
              <Image src={Insta} width="50" height="50"></Image>
            </a>
        </div>

        <div className={style.LineHorizontal}></div>

    </div>
  )
}

export default CTA