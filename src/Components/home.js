import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import Bookmark from "./bookmark";
import {Link} from 'react-router-dom'
const Home=()=>{
const [input,setInput]=useState('');
const [pic,setPic]=useState('')


// const FetchApi = () => {
    // setInput(input);
    // const key = 'hnwjCvejHjbPxLnN6gcbaJs14TE8yeNnJ6t5yPiDAPA'
    // const url = `https://api.unsplash.com/search/photos?page=1&query=${input}`
    // const getPic = () => {
    //     axios.get(url,{params:{client_id:key}})
    //         .then((res) => setPic(res?.data?.results))
    //         .catch((err) => { console.log(err) })
           
    //     // console.log(input,cate);
        
    // }
    // getPic()

// }



// FetchApi()
console.log(pic)


useEffect(()=>{
    setInput(input);
    const key = 'hnwjCvejHjbPxLnN6gcbaJs14TE8yeNnJ6t5yPiDAPA'
    const url = `https://api.unsplash.com/search/photos?page=1&query=${input}`
    const getPic = () => {
            axios.get(url,{params:{client_id:key}})
            .then((res) => setPic(res?.data?.results))
            .catch((err) => { console.log(err) })
           
        // console.log(input,cate);
        
    }
    getPic()
},[input])

const Handler=()=>{
   
    console.log(pic)
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

{ pic.map((task, index) => {
                    return <div key={index} className='pic'>
                        <img className='image' key={task.id} src={task.urls.full} alt="pic" />
                        <Link to='/bookmark' prop={task.urls.full} element={<Bookmark/>}><p >Bookmark</p></Link>

                    </div>

                })}



            </div>
          
        </div>
        </>
       
    )
}
export default Home;