import { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import { useDispatch } from 'react-redux'
import { login, logout } from './components/store/authSlice.js'
import { getUser } from './api/user'


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()  
  
  useEffect(()=>{
    getUser()
    .then((userData)=>{      
      if(userData){
        dispatch(login(userData.data.data))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
    
  },[])
  return !loading ? (
    <>
      <LandingPage/>
    </>
  ) : null
}

export default App
