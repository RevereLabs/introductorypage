import React from 'react'
import style from '../../styles/CTA.module.css'
import Button from '../../components/Button'

function CTA() {
  return (
    <div className="w-screen h-screen bg-textMain flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">
        <div className={style.Line} style={{marginTop:'0'}}></div>

        <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem]">Launching soon at your
          <span className="text-main"> nearest browser!</span>
        </span>
        
        <div>
            <Button Content={'Sign up for the news letter'} Link={''} />
        </div>

        <div >

        </div>

        <div className={style.LineHorizontal}></div>

    </div>
  )
}

export default CTA