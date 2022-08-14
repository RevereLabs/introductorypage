import React from 'react'
import Button from '../components/Button'
import Logo from '../public/logo.png'
import '../pages/_document'
import Image from 'next/image'
function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center  p-10 font-Mada text-[1vw]">
          {/* <h1 className="font-mada font-[700] text-main text-[2.4rem]">revere</h1> */}
          <Image src="/logo1.png" width={120} height={60} alt={"revere labs "}/>
          <div className="flex justify-between w-[35%] text-textMain text-[1rem] small:hidden">
             <a href="#Hero">About Us</a>
             <a href="#Social">Social</a>
             <a href="#Features">Features</a>
             <a href="#Process">Process</a>
             <a href="#Backing">Backing</a>
             <a href="#CTA">Contact Us</a>
          </div>
          <Button Content={'Join Discord'} Link={'https://discord.gg/8aA2Xuhm'}/>
        </div>
    </>
  )
}

export default Navbar