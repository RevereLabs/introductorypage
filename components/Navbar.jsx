import React from 'react'
import Button from '../components/Button'
import Logo from '../public/logo.png'
import '../pages/_document'
function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center  p-10 font-Mada text-[1vw] ">
          <h1 className="font-mada font-[700] text-main text-[2.4rem]">revere</h1>
          <div className="flex justify-between w-[35%] text-textMain text-[1rem]">
             <a href="#Hero">About Us</a>
             <a href="#Social">Social</a>
             <a href="#Features">Features</a>
             <a href="#Process">Process</a>
             <a href="#CTA">Contact Us</a>
          </div>
          <Button Content={'Join Discord'} Link={''}/>
        </div>
    </>
  )
}

export default Navbar