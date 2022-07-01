import React from 'react'
import style from '../../styles/Social.module.css'
import Button from '../../components/Button'


function Social() {
  return (
    <div className="w-screen h-screen flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">

        <div className={style.Line} style={{marginTop:'0'}}></div>
        <span className="text-textMain w-[30%] text-center text-[3.6rem] leading-[4.4rem]">So are they!
          <span className="text-main"> EveryDay!</span>
        </span>
        <div>
            <Button Content={'Checkout our Discord'} Link={''} />
        </div>


        <div className={style.Line} style={{marginBottom:'0'}}></div>
    </div>
  )
}

export default Social