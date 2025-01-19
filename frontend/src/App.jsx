import { useState } from 'react'
import LandingPage from './LandingPage'
import ProductsPage from './components/ProductsPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
      {/* <ProductsPage/> */}
    </>
  )
}

export default App
