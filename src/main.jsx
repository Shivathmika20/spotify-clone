import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './utils/ContextProvider.jsx'
import reducer,{initialState} from './utils/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
    </ContextProvider>
    
  </React.StrictMode>,
)
