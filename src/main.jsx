import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Style/index.css'
import Store from './Store/store.js'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={Store}>
            <App/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
