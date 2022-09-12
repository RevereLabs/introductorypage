import React from 'react'
import Button from './Button'
import '../pages/_document'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center  p-10 font-Mada text-[1vw]">
          {/* <h1 className="font-mada font-[700] text-main text-[2.4rem]">revere</h1> */}
          <Image src="/logo1.png" width={120} height={60} alt={"revere labs "}/>
          <div className="flex justify-between w-[40%] text-textMain text-[1rem] small:hidden">
             <Link href="/">About Us</Link>
             <Link href="#Social">Social</Link>
             <Link href="#Features">Features</Link>
             <Link href="#Process">Process</Link>
             <Link href="#Backing">Backing</Link>
             <Link href="/Community">Community</Link>
             <Link href="#CTA">Contact Us</Link>
          </div>
          <Button Content={'Join Discord'} Link={'https://discord.gg/8aA2Xuhm'}/>
        </div>
    </>
  )
}

export default Navbar
