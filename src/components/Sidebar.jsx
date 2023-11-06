import React from 'react'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import {IoLibrary} from 'react-icons/io5'
import Playlists from './Playlists'

const Sidebar = () => {
  return (
    // <div className='' >
       
    //     <div className='links  bg-black text-white'>
    //            <div className="logo  ">
    //               <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" className='image w-1/2 ' />  
    //            </div>
    //            <div className='bar'>
    //             <ul className='list flex  justify-around py-2 text-[#b3b3b3]'>
    //               <li className='text-center  text-xl cursor-pointer hover:text-white transition duration-300 ease-in-out flex justify-center items-center flex-col w-1/5 '>
    //                 <MdHomeFilled size={40} />
    //                 <span>Home</span></li>
    //               <li className='text-center text-xl cursor-pointer hover:text-white transition duration-300 ease-in-out flex justify-center items-center flex-col w-1/5'>
    //                 <MdSearch size={40}/>
    //                 <span>Search</span></li>
    //               <li className='text-center text-xl cursor-pointer hover:text-white transition duration-300 ease-in-out flex justify-center items-center flex-col '>
    //                 <IoLibrary size={40}/>
    //                 <span>Your Library</span></li>
    //             </ul>
    //            </div>
    //     </div>

    // </div>
    
    <div className='side bg-black text-[#b3b3b3] flex flex-col h-full w-full'>
        <div className="links flex flex-col gap-6">
          
          <div className='logo m-4'>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify" className='image  w-[1/2] ' />
          </div>
          <div className='bar'>
            <ul className=' flex gap-4  flex-col p-4'>
              <li className='flex flex-row gap-4 hover:text-white transition duration-300 ease-in-out cursor-pointer'>
              <MdHomeFilled size={20} />
              <span>Home</span>
              </li>
              
              <li className='flex flex-row gap-4 hover:text-white transition duration-300 ease-in-out cursor-pointer'>
              <MdSearch size={20}/>
              <span>Search</span>
              </li>
              <li className='flex flex-row gap-4 hover:text-white transition duration-300 ease-in-out cursor-pointer'>
              <IoLibrary size={20}/>
              <span>Your Library</span>
              </li>
            </ul>
          </div>
        </div>
        <Playlists/>
    </div>
  )
}

export default Sidebar