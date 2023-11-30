import React from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios';
const Volume = () => {
    const [{token}]=useContextProvider();
    const setVolume= async (e)=>{
            await axios.put("https://api.spotify.com/v1/me/player/volume",{},
            {
                headers:
                {
                  Authorization:"Bearer "+token,
                  "Content-Type":"application/json",
                },
            }
            );
    }
  return (
    <div className='flex items-center justify-end'>
            <div className="vol ">
            <input type="range" min={0} max={100} onMouseUp={(e)=>{setVolume(e)}} className='w-2/3 h-1'/>

                </div>        
    </div>
  )
}

export default Volume