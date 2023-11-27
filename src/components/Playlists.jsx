import React from 'react'
import { useEffect } from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
import { reducercase } from '../utils/cases'
const Playlists = () => {
  const [{token,playlist},dispatch]=useContextProvider();

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
        dispatch({type:reducercase.SET_PLAYLIST,playlist});
      };
      getPlaylist();
    },[token,dispatch]);


    return (
      <div className='overflow-hidden h-full pb-2 '>
        {
          <ul className='flex flex-col pl-4 pb-4 gap-3 h-[50vh] overflow-auto max-h-full  '>
            {
              playlist.map(({name,id})=>{
                return(
                  <li className='flex flex-row gap-4 hover:text-white transition duration-300 ease-in-out cursor-pointer ' key={id}>{name}</li>
                )
              })
              
            }
          </ul>

        }
      </div>
    )

  }


  
  

export default Playlists