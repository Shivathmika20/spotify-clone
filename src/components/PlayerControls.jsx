import React from 'react'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from 'react-icons/bs'
import {CgPlayTrackNext,CgPlayTrackPrev,} from 'react-icons/cg'
import {FiRepeat} from 'react-icons/fi'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
import { reducercase } from '../utils/cases'
const PlayerControls = () => {
    const [{token,playerState},dispatch]=useContextProvider();
    const changeTrack=async (type)=>{
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers:
          {
            Authorization:"Bearer "+token,
            "Content-Type":"application/json",
          },
        }
      );

      const res=await axios.get("https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers:
        {
          Authorization:"Bearer "+token,
          "Content-Type":"application/json",
        },
      }
      );

      if(res.data !==""){
        const {item}=res.data;
        const currentPlaying={
            id:item.id,
            name:item.name,
            artists:item.artists.map((artist)=>(artist.name)),
            image:item.album.images[2].url,
      };
      dispatch({type:reducercase.SET_CURRENTPLAYING,currentPlaying});

    }
    else 
    {
      dispatch({type:reducercase.SET_CURRENTPLAYING,currentPlaying:null}); 
    } 
  };

  const changeState=async ()=>{
    const state=playerState ? "pause" :"play";
    const response=await axios.put(`https://api.spotify.com/v1/me/player/${state}`,{},
    {
      headers:
      {
        Authorization:"Bearer "+token,
        "Content-Type":"application/json",
      },
    }
    );
    dispatch({type:reducercase.SET_PLAYERSTATE,playerState: !playerState}); 


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
            {playerState? <BsFillPauseCircleFill onClick={changeState}/> :<BsFillPlayCircleFill onClick={changeState}/>}
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