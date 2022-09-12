import React, {useEffect, useState} from "react";
import SocialCard from '../components/SocialCard'
import axios from 'axios'



function Community() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://reverelabs.org/api/getData').then((d)=>(setData(d.data)));
  }, []);

  return (
    <>
        <div className=" h-screen flex flex-wrap">
            {data.map((item,i)=>(<SocialCard Name={item.name} Id={item.email} Review={item.comment} key={`${i} + 0`}/>))}
        </div>
    </>
  )
}

export default Community
