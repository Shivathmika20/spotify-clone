import React,{useEffect} from 'react'
import axios from 'axios'
import { useContextProvider } from '../utils/ContextProvider'
import { reducercase } from '../utils/cases'
const Currenttrack = () => {
    const [{token,currentPlaying},dispatch]=useContextProvider();


    useEffect(()=>{
        const getCurrentTrack=async ()=>{
          const res=await axios.get("https://api.spotify.com/v1/me/player/currently-playing",
              {
                headers:
                {
                  Authorization:"Bearer "+token,
                  "Content-Type":"application/json",
                },
              }
              
          );
         console.log(res)
          if(res.data !==""){
            const {item}=res.data;
            const currentPlaying={
                id:item.id,
                name:item.name,
                artists:item.artists.map((artist)=>(artist.name)),
                image:item.album.images[2].url,

            };
            console.log(item)
            console.log(currentPlaying);
            dispatch({type:reducercase.SET_CURRENTPLAYING,currentPlaying});

          }
          
        };
        getCurrentTrack();
      },[token,dispatch]);
  return (
    <div className=''> 
      {currentPlaying && (
                <div className="track text-white flex items-center  gap-2 mx-2 my-1 ">
                    <div className="track-image ">
                        
                        <img src={currentPlaying.image} alt="currentplaying" className='w-[90%] rounded-[6px]' />
                    </div>
                    <div className="track-name flex flex-col gap-[0.2rem]">
                        <h4 className='text-[0.8rem] font-bold'>{currentPlaying.name}</h4>
                        <h6 className='text-[0.7rem] font-semibold text-[#b3b3b3]'>{currentPlaying.artists.join(", ")}</h6>
                    </div>
                   
                </div>
      )}
     
    </div>
  )
}

export default Currenttrack