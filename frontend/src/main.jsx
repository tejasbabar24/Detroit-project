import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider ,createBrowserRouter} from  'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'

import LandingPage from './LandingPage.jsx'
import ProductsPage from './components/Products/ProductsPage'
import DetailedProduct from './components/Products/DetailedProduct.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'
import store from './components/store/store.js'
import AuthLayout from './components/AuthLayout.jsx'
import BrandsPage from './components/Brands/BrandsPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>        
  },
  {
    path:"/category/:name",
    element:<ProductsPage/>
  },
  {
    path:"/product/:id",
    element:<DetailedProduct/>
  },
  {
    path:"/brands/:id",
    element:<BrandsPage/>
  },
  {
    path:"/AdminPanel",
    element:(
    <AuthLayout authentication>
      <AdminPage/>
    </AuthLayout>
  )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
