import React from 'react'
import { createContext } from 'react'
import { useContext,useReducer } from 'react'

export const store=createContext();

export const ContextProvider = ({children,initialState,reducer}) => {
   

  return (
    <store.Provider value={ useReducer(reducer, initialState)}>
      {children}
    </store.Provider>
  )

}
export const useContextProvider=()=>useContext(store);
  

export default ContextProvider