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

    
    <div className='overflow-hidden h-screen'>
      {/* <div className='w'> */}
            <div className="spotify-main grid  grid-cols-[200px_minmax(900px,_1fr)]  h-full w-full">
              <Sidebar/>
              <div className="spotify-nav h-full overflow-auto ">
                  <Navbar/>
                  <div className="spotify-body">
                    <Body/>
                  </div>
              </div>
            </div>
            <div className="foot h-fit w-full fixed bottom-0 ">
              <Footer/>
            </div>
      {/* </div> */}
    </div>
  )
}

export default Spotify