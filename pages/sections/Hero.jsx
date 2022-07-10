import React from 'react'
import style from '../../styles/Hero.module.css'


function Hero() {
  return (
    <div id="Hero" className="w-screen flex flex-col  items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem] mt-20">
        <span className="text-textMain w-[50vw] text-center">India’s first blockchain based escrow service for.
          <span className="text-main"> Freelance Payment Management</span>
        </span>
        <div className={style.Line}></div>


        <video loop autoPlay muted className={style.Video} >
                <source src='vid.mp4'/>Your browser does not support the video tag.
        </video> 

        <div className={style.Line}></div>
        <span className="text-secondary w-[55%] text-center text-[3.6rem] leading-[4.4rem]">Keep Track
          <span className="text-textMain"> and </span>
              Manage
          <span className="text-textMain"> your projects effortlessly. All with the power of 
              <span className="text-main"> web3</span>
          </span>
        </span>
        <div className={style.Line} style={{marginBottom:'0'}}></div>
    </div>
  )
}

export default Hero