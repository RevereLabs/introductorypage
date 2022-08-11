import React from 'react'
import Image from 'next/image'
function SocialCard({DiscordId, DiscordName, Review, ProfilePic}) {
  return (
    <div className="font-mada text-sm font-[500] bg-white shadow-lg flex flex-col p-5 w-[20rem] h-[10rem] rounded-lg mx-10 small:w-[10rem] small:my-5 mt-10">
        <div className="flex ">
            <Image src={ProfilePic} width='40' height='20' className="rounded-full"/>
            <div className="flex flex-col ml-2">
                <p className="text-textMain">{DiscordName}</p>
                <p className="text-textSecondary">{DiscordId}</p>
            </div>
        </div>

        <p className="mt-5 text-textSecondary">
            {Review}
        </p>
    </div>
  )
}

export default SocialCard