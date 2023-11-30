import React from 'react'

const Login = () => {

  const handle=()=>{
    const clientId="19bae18b54e64fec998d238d51a02d45";
    const redirect="http://localhost:5173/";
    const api="https://accounts.spotify.com/authorize";
    const scope=[
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    
    window.location.href=`${api}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
  }

  return (
    <div className='spotify-login flex flex-col justify-center items-center h-screen w-screen bg-[#1db954] gap-12'>
        <img 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
        alt="spotify" className='image h-[19vh]' />
        <button className='btn bg-black text-[#49f585] py-5 px-16 rounded-full text-xl' onClick={handle}>Connect Spotify</button>
         
    </div>
  )
}

export default Login