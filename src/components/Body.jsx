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
          image1:res.data.images[0].url,
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
    <div className='text-white'>
      {
        selectedPlaylist &&(
          <>
             <div className="playlist mx-8  my-0 flex items-center gap-8">
                  <div className="image ">
                    <img src={selectedPlaylist.image1} alt="selectedplaylist" className='h-60 shadow-md' />
                  </div>
                  <div className="playlist_details flex flex-col gap-8 text-[#e0dede]">
                    <span className='text-xl font-semibold'>PLAYLIST</span>
                    <h1 className='title text-7xl font-bold text-white'>{selectedPlaylist.name}</h1>
                    <p className='description'>{selectedPlaylist.description}</p>
                  </div>
              </div>
              <div className="list mt-8 grid text-[#dddcdc] px-11 py-12 sticky top-[15vh] transition duration-300 ease-in-out ">
                  
                    <div className="col">
                      <span>#</span>
                    </div>
                    <div className="col">TITLE</div>
                 
                    <div className="col">ALBUM</div>
                    <div className="col">
                      <span>
                        <AiFillClockCircle />
                      </span>
                    </div>
              </div> 
              <div className="tracks mx-10 my-3 flex flex-col ">
                        {
                          selectedPlaylist.tracks.map(({id,name,artists,image,duration,album,uri,track_num},index)=>{
                            return(
                              <div className="rows hover:bg-[#000000cc] pb-6 px-2 mb-4" index={id}>
                                <div className="col flex items-center text-[#dddcdc] ">
                                  <span key={id}>{index+1}</span>
                                </div>
                                
                                <div className="col detail flex items-center text-[#dddcdc] gap-4 ">
                                  <div className="img h-10">
                                    <img src={image} alt="tracks" />
                                  </div>
                                  <div className="info flex flex-col ">
                                   <span className="name mt-2 ">
                                    {name}
                                   </span>
                                   <span>{artists}</span>
                                </div>
                                </div>
                                <div className="col album flex items-center text-[#dddcdc]">
                                  {album}
                                </div>
                                <div className="col  time flex items-center text-[#dddcdc]">
                                  {duration}
                                </div>
                               
                              </div>
                            )
                          })
                          
                        }
                </div>            
          </>
        )
      }
    </div>
  )
}

export default Body