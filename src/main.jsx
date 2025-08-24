import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Vercel Analytics for React
import { Analytics } from '@vercel/analytics/react'

// Vercel Speed Insights for React
import { SpeedInsights } from '@vercel/speed-insights/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />       {/* Tracks page views automatically */}
    <SpeedInsights />   {/* Tracks performance metrics automatically */}
  </React.StrictMode>
)