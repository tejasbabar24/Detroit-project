import { useState } from 'react'
import LandingPage from './LandingPage'
import ProductsPage from './components/ProductsPage'
import DetailedProduct from './DetailedProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
