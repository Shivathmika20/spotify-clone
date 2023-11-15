import React, { useEffect } from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import { useContextProvider } from '../utils/ContextProvider'
import { reducercase } from '../utils/cases'
import axios from 'axios';

const Body = () => {
  const [{token,selectedPlayId,selectedPlaylist},dispatch]=useContextProvider();
  useEffect(()=>{
      const getInitialPlaylist=async ()=>{
        const res=await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlayId}`,{
          headers:
              {
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
              },
        });
        
        
        const selectedPlaylist={
          id:res.data.id,
          name:res.data.name,
          description:res.data.description.startsWith("<a") ? " " :res.data.description,
          image:res.data.images[0].url,
          tracks:res.data.tracks.items.map(({track})=>({
            id:track.id,
            name:track.name,
            artists:track.artists.map((artist)=>(artist.name)),
            image:track.album.images[2].url,
            duration:track.duration_ms,
            album:track.album.name,
            uri:track.album.uri,
            track_num:track.track_number,

          }))
          
        }
       
        dispatch({type:reducercase.SET_INITIALPLAYLIST,selectedPlaylist});
        
      }
      getInitialPlaylist()
  },[token,dispatch,selectedPlayId])
  return (
    <div>
      {
        selectedPlaylist &&(
          <>
              <div className="playlist">
                  <div className="image">
                    <img src="{selectedPlaylist.image}" alt="selectedplaylist" />
                  </div>
                </div>         
          </>
        )
      }
    </div>
  )
}

export default Body