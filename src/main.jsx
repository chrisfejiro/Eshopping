import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  BrowserRouter   } from 'react-router-dom';
import reducer,{initialState} from "./StateProvision/Reducer.jsx"
import { StateProvider} from './StateProvision/StateProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      </StateProvider>
  </React.StrictMode>
)
