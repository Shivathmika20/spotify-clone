import React,{useEffect, useState} from 'react'
import Login from './components/Login'
import { useContextProvider } from './utils/ContextProvider';
import { reducercase } from './utils/cases';
import Spotify from './components/Spotify';
import './App.css';


const App = () => {
  const [{token},dispatch]=useContextProvider();

  useEffect(()=>{
    const hashtoken=window.location.hash;
    
    if(hashtoken)
    {
      const token=hashtoken.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({type:reducercase.SET_TOKEN,token})
    }
    
  },[token,dispatch]);
  return (
    
    <div className='main '>
      {token?<Spotify />:<Login/>}
       
      
    </div>
    
  )
}

export default App