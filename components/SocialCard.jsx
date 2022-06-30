import React from 'react'
import Image from 'next/Image'

function SocialCard({ProfilePic, DiscordId, DiscordName, Review}) {
  return (
    <div className="font-mada bg-white shadow-lg flex flex-col p-10 w-[10vw] rounded-lg">
        <div className="flex">
            <Image src={ProfilePic}/>
            <div className="flex flex-col">
                <p className="text-textMain">{DiscordName}</p>
                <p className="text-textSecondary">{DiscordId}</p>
            </div>
        </div>

        <p className="mt-10 text-textSecondary">
            {Review}
        </p>
    </div>
  )
}

export default SocialCard