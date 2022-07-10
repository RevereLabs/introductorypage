import React from 'react'
import style from '../styles/Process.module.css'

function ProcessCard({Title,Content}) {
  return (
    <>
        <div className=" text-textMain font-mada font-[900] bg-[#E2EBF8] p-10 rounded-[1.5rem] w-[30rem] h-[20rem] mb-[10rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,10)]">
            <span className="text-main text-[3rem] ">{Title}
                <span className="text-textMain "> Step</span>
            </span>
            <p className="font-[400] text-[1rem] leading-[1.5em] mt-10">{Content}</p>
        </div>
    </>
  )
}

export default ProcessCard