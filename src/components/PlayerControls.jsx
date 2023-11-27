import React from 'react'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from 'react-icons/bs'
import {CgPlayTrackNext,CgPlayTrackPrev,} from 'react-icons/cg'
import {FiRepeat} from 'react-icons/fi'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
const PlayerControls = () => {
    const [{token,playerState},dispatch]=useContextProvider();
    const changeTrack=async (type)=>{
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{},
        {
          headers:
          {
            Authorization:"Bearer "+ token,
            "Content-Type":"application/json",
          },
        }
      );
      
     
    }
  return (
    <div className='flex  gap-8 justify-center items-center'>
        <div className="shuff play">
            <BsShuffle/>
        </div>
        <div className="prev play">
            <CgPlayTrackPrev onClick={()=>{changeTrack("previous")}}/>
        </div>
        <div className="state play text-white">
            {playerState? <BsFillPauseCircleFill/> :<BsFillPlayCircleFill/>}
        </div>
        <div className="next play">
            <CgPlayTrackNext onClick={()=>{changeTrack("next")}}/>
        </div>

        <div className="repeat play">
            <FiRepeat/>
        </div>
    </div>
  )
}

export default PlayerControls