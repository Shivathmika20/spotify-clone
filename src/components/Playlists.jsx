import React from 'react'
import { useEffect } from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
const Playlists = () => {
    const [{token,dispatch}]=useContextProvider();
    useEffect(()=>{
      const getPlaylist=async ()=>{
        const res=await axios.get("https://api.spotify.com/v1/me/playlists",
            {
              headers:
              {
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
              },
            }
            
        );
        const{ items}=res.data
            console.log(items)
        const playlist=items.map(({name,id})=>{
          {return {name,id}};
        })
          console.log(playlist);
      };
      getPlaylist();
    },[token,dispatch]);


    return (
      <div>Playlists</div>
    )

  }


  
  

export default Playlists