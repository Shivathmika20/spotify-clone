import React  from 'react'
import Currenttrack from './Currenttrack'
import PlayerControls from './PlayerControls'

import Volume from './Volume'

const Footer = () => {
 

  return (
    <div className='foot bg-[#181818] h-full border-none text-white w-full grid  justify-center py-2  '>
     
     <Currenttrack />
     <PlayerControls />
      <Volume/>     
     
    </div>
  )
}

export default Footer