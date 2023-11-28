import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  </QueryClientProvider>
)
