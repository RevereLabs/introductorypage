import React,{useState} from 'react'
import style from '../../styles/CTA.module.css'
import Button from '../../components/Button'
import Image from 'next/image'
import Discord from '../../public/Discord.png'
import Twitter from '../../public/Twitter.png'
import Insta from '../../public/Insta.png'
import emailjs from '@emailjs/browser'
function CTA() {
  const[email,setEmail] = useState('');
  const ClickHandler = () =>{
    console.log('poop')
    var templateParams = {
      to_name: email
    }
    emailjs.send('service_j68hmon', 'template_484nbkj', templateParams,'6HGQvyzipY4qgGkWm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  return (
    <div id='CTA' className="w-screen h-screen bg-textMain flex flex-col items-center font-mada font-[900] text-[4.8rem] w-[100%] leading-[4.8rem]">
        <div className={style.Line} style={{marginTop:'0'}}></div>

        <span className="text-accent w-[50%] text-center text-[3.6rem] leading-[4.4rem] mt-0">Launching soon at your
          <span className="text-main"> nearest browser!</span>
        </span>
        
        <input type="text" id="Mail" className='w-[20vw] h-[4vh] font-[500] text-[1.5rem] mt-10 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.25)]' placeholder='email Id' value={email} onChange={e => setEmail(e.target.value)}></input>
        <Button Content='Sign up for the news letter' onClick={ClickHandler} />

        <div className="mt-[20vh]">
            <a href="https://discord.gg/H5ucfBaG" className={style.SocialBtn}>
              <Image src={Discord} width="50" height="50"></Image>
            </a>
            <a href="https://twitter.com/LabsRevere" className={style.SocialBtn}>
              <Image src={Twitter} width="50" height="50"></Image>
            </a>
            <a href="https://www.instagram.com/labsrevere/" className={style.SocialBtn}>
              <Image src={Insta} width="50" height="50"></Image>
            </a>
        </div>

        <div className={style.LineHorizontal}></div>

    </div>
  )
}

export default CTA