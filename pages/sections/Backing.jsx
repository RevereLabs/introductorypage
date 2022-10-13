import Image from 'next/image'
import React from 'react'

function Backing() {
  return (
    <div id='Backing' className=" relative h-screen w-[100%] bg-textMain flex flex-col items-center justify-between font-mada font-[900] text-[4.8rem]  leading-[4.8rem] small:h-auto overflow-hidden">
      <div className="absolute right-0 small:hidden">
       <Image src={'/state.png'} width={400} height={450}/>
      </div>


      <div className="bg-[#494949] w-[1px] h-[1em] mb-[0.5em]"></div>

      <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem] mt-0  small:mb-10 small:text-[2rem] small:leading-[2.2rem]">Backed By The
          <span className="text-main"> Best!</span>
      </span>

      <span className="text-accent w-[30%] small:w-[50%] text-center text-[2rem] leading-[2rem] mt-[5rem] small:mt-0 small:mb-5 small:text-[1.5rem] small:leading-[2.2rem]">Founders & Builders Launch
          <span className="text-main"> Web3 Startup with  0xCamp</span>
      </span>

      <div className="large:hidden">
       <Image src={'/statesMobile.png'} width={150} height={150}/>
      </div>

      <span className="text-main w-[30%] small:w-[50%]  text-center text-[2rem] leading-[2rem] mt-[5rem] small:mt-0 small:mb-5 small:text-[1.5rem] small:leading-[2.2rem]"> Start your web3 journey
          <span className="text-accent"> with top mentors, grants, and opportunities from</span>
          <span className="text-main"> States DAO</span>
      </span>

      <div className="bg-[#494949] w-[1px] h-[1em] mt-[0.5em]"></div>

    </div>
  )
}

export default Backing