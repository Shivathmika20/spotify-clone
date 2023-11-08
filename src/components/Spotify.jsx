import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

const Spotify = () => {
  return (
    // <div className='container max-w-screen-2xl max-h-screen-2xl overflow-hidden'>
    //   <div className='spotify-main w-screen h-screen  '>
    //         <Sidebar/>
    //     <div className="spotify-nav ">
    //         <Navbar/>
    //       <div className="spotify-body fixed bottom-0 z-[999] w-full">
    //         <Body/>
    //       </div>  
    //       <div className="spotify-body">
    //         <Body/>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='foot '>
    //    <Footer />
    //   </div>
    // </div>
    <div className='container max-w-[100vw] max-h-[100vh] overflow-hidden grid grid-rows-[minmax(80vh,15vh)] h-full w-full'>
       <div className='spotify-main grid grid-cols-[200px_minmax(900px,_1fr)_100px] bg-gradient-to-b from-transparent to-black bg-[rgb(32,80,100)] h-full w-full '>
        <Sidebar/>
        <div className="spotify-nav h-full w-full overflow-auto ">
          <Navbar/>
          <div className="spotify-main">
            <Body/>
          </div>
        </div>
      </div>

      <div className="spotify-footer">
        <Footer/>
      </div>
      
    </div>
  )
}

export default Spotify