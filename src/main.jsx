import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Vercel Analytics
import { Analytics } from '@vercel/analytics'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />  {/* Add this line */}
  </React.StrictMode>
)