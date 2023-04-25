import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
// import Bookmark from "./bookmark";
import {Link} from 'react-router-dom'
// import Bookmark from "./bookmark";
const Home=()=>{
    const [input, setInput] = useState('');
    const [pic, setPic] = useState([]);
  
    useEffect(() => {
      const key = 'hnwjCvejHjbPxLnN6gcbaJs14TE8yeNnJ6t5yPiDAPA'
      const url = `https://api.unsplash.com/search/photos?page=1&query=${input}`
      const getPic = () => {
        axios.get(url, { params: { client_id: key } })
          .then((res) => setPic(res?.data?.results || []))
          .catch((err) => { console.log(err) })
      }
      getPic()
    }, [input])

const Handler=()=>{
   
    console.log(pic)
}

const Bookmark=(img)=>{
console.log(img)
}


    return(
        <>
         <div className="header">
            <h3>Photo Search App</h3>
            <Link to='/bookmark'><p >Bookmark</p></Link>
        </div>
        <div className="input">
            <input placeholder="Search tour Image here" onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={Handler}>Search</button>
            <div className="img-card">

            {pic.map((picObj, index) => (
            <div key={index} className='pic'>
              <img className='image' key={picObj.id} src={picObj.urls.full} alt="pic" />
              
                <button className="bkm" onClick={Bookmark(picObj.urls.full)} element={<Bookmark/>}>Bookmark</button>
              
            </div>
          ))}



            </div>
          
        </div>
        </>
       
    )
}
export default Home;