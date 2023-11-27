import React  from 'react'
import Currenttrack from './Currenttrack'
import PlayerControls from './PlayerControls'
import Temp from './Temp'

const Footer = () => {
 

  return (
    <div className='foot bg-[#181818] h-fit text-white w-full grid  justify-center px-3 py-4'>
     
     <Currenttrack />
     <PlayerControls />
     <Temp/>
     
    </div>
  )
}

export default Footer