import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex flex-col justify-center items-center gap-5 text-red-200'>
        <div className=' bg-black w-12 h-12 '> box</div>
        <div className=' bg-black w-12 h-12 '> box</div>
        <div className=' bg-black w-12 h-12 '> box</div>
        <div className=' bg-black w-12 h-12 '> box</div>
        <div className=' bg-black w-12 h-12 '> box</div>
      </div>
    </>
  )
}

export default App
