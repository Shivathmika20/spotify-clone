import React, { useEffect } from 'react'
import Sidebar from './Sidebar'

import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import axios from 'axios'
import { useContextProvider } from '../utils/ContextProvider'
import { reducercase } from '../utils/cases'

const Spotify = () => {
  const [{token},dispatch]=useContextProvider();

 useEffect(()=>{
  const getUser=async ()=>{
    const result=await axios.get("https://api.spotify.com/v1/me",{
      headers:
              {
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
              },
    })
   // console.log(result.data);
    const userDetails={
      userId:result.data.id,
      userName:result.data.display_name,

    }
    console.log(userDetails);
    dispatch({type:reducercase.SET_USER,userDetails});
  }
  getUser()
  
 },[dispatch,token])
      
  return (

    
    <div className='container max-w-[100vw] max-h-[100vh] overflow-hidden grid grid-rows-[minmax(87vh,15vh)] h-full w-full m-0'>
       <div className='spotify-main grid  grid-cols-[200px_minmax(900px,_1fr)_100px] bg-gradient-to-b from-transparent to-black bg-[rgb(32,80,100)] h-full w-full '>
          <Sidebar/>
        <div className="spotify-nav h-full w-[87vw] overflow-auto ">
          <Navbar/>
          <div className="spotify-main h-full w-full">
            <Body/>
          </div>
        </div>
        
      </div>

      <div className="spotify-footer h-screen ">
        <Footer/>
      </div>
      
      
    </div>
  )
}

export default Spotify