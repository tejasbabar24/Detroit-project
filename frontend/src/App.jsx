import { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import { useDispatch, useSelector } from 'react-redux'
import { signin,  signout } from './components/store/authSlice.js'
import { getUser } from './api/user'
import { getProducts } from './api/products.js'
import { addProducts } from './components/store/productSlice.js'


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch() 
  useEffect(()=>{
    getUser()
    .then((userData)=>{      
      if(userData){
        dispatch(signin(userData.data.data))
      }
      else{
        dispatch(signout())
      }
    })
    .finally(()=> setLoading(false))

    getProducts()
    .then((data)=>{
      
      dispatch(addProducts(data.data.data.products))
    })
    .catch((err)=>{

    })
  },[])
  return !loading ? (
    <>
      <LandingPage/>
    </>
  ) : null
}

export default App
