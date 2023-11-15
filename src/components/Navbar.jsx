import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { useContextProvider } from '../utils/ContextProvider'

const Navbar = () => {
  const [{userDetails}]=useContextProvider();
  
  return (
    <div className='nav flex justify-between items-center p-8  h-[16vh] bg-none sticky top-0 transition ease-in-out duration-300'>
      <div className="search bg-white flex w-1/3 px-4 py-1 rounded-3xl gap-2 items-center ">
        <FaSearch/>
        <input type="text" placeholder='Artists,Songs,Albums..' className='border-none h-8 w-full focus:outline-none' />
      </div>
      
      <div className="profile bg-black text-white flex justify-center px-4 py-2 items-center rounded-3xl">
        <a href="#" className='flex justify-center items-center gap-2 decoration-none font-bold'>
          <CgProfile className='text-[1.5rem] bg-none text-[#c7c5c5]'/>
          <span>{userDetails?.userName}</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar