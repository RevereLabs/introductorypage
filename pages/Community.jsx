import React from 'react'
import Navbar from '../components/Navbar'
import SocialCard from '../components/SocialCard'
import axios from 'axios'



function Community({data}) {
    
  return (
    <>
        <div className=" h-screen flex flex-wrap">
            {data.map((item,i)=>(<SocialCard Name={item.name} Id={item.email} Review={item.comment}/>))}
        </div>
    </>
  )
}

export async function getServerSideProps() {
    let data;
    let userComments = await axios.get('https://reverelabs.org/api/getData').then((d)=>(data=d.data));
    console.log(data)
    return {props: {data}};
}


export default Community