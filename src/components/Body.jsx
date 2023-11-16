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
                  <div className="playlist_details flex flex-col gap-8">
                    <span className='text-xl font-semibold'>PLAYLIST</span>
                    <h2 className='title text-3xl font-bold text-black'>{selectedPlaylist.name}</h2>
                    <p className='description'>{selectedPlaylist.description}</p>
                  </div>
              </div>
              <div className="list">
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
              <div className="tracks">
                        {
                          selectedPlaylist.tracks.map(({id,name,artists,image,duration,album,uri,track_num},index)=>{
                            return(
                              <div className="rows " index={id}>
                                <div className="col">
                                  <span key={id}>{index+1}</span>
                                </div>
                                <div className="detail">
                                  <div className="img">
                                    <img src={image} alt="tracks" />
                                  </div>
                                  <div className="info">
                                   <span className="name">
                                    {name}
                                   </span>
                                   <span>{artists}</span>
                                  </div>
                                </div>
                                <div className="album">
                                  {album}
                                </div>
                                <div className="time">
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