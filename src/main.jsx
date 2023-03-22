import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ElementsProvider } from './context/ElementsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ElementsProvider>
    <App />
    </ElementsProvider>
  </React.StrictMode>,
)
