import React from 'react'
import Image from 'next/Image'
import Button from '../components/Button'
import Logo from '../public/logo.png'
import '../pages/_document'
function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center w-screen p-10 font-Mada text-[1vw]">
          <h1 className="font-mada font-[700] text-main text-[2.4rem]">revere</h1>
          <div className="flex justify-between w-[35%] text-textMain text-[1rem]">
             <p>About Us</p>
             <p>Social</p>
             <p>Features</p>
             <p>Process</p>
             <p>Contact Us</p>
          </div>
          <Button Content={'Join Discord'} Link={''}/>
        </div>
    </>
  )
}

export default Navbar