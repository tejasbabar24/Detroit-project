import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider ,createBrowserRouter} from  'react-router-dom'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import ProductsPage from './components/ProductsPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>        
  },
  {
    path:"/category",
    element:<ProductsPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
