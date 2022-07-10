import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/duck.jpeg'
function SocialCard({DiscordId, DiscordName, Review}) {
  return (
    <div className="font-mada text-sm font-[500] bg-white shadow-lg flex flex-col p-5 w-[15rem] rounded-lg">
        <div className="flex ">
            <Image src={ProfilePic} width='40' height='20' className="rounded-full"/>
            <div className="flex flex-col ml-2">
                <p className="text-textMain">{DiscordName}Faizan Haider</p>
                <p className="text-textSecondary">{DiscordId} @faizan.lazy</p>
            </div>
        </div>

        <p className="mt-5 text-textSecondary">
            {Review}
            Lorem ipsum dolor sit amet
        </p>
    </div>
  )
}

export default SocialCard