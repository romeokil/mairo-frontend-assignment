import { useState } from 'react'
// import './App.css'
import MainCard from './component/MainCard.jsx'
import Slider from './component/Slider.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-white bg-slate-'>THis is maiora's assingment

      </h1> */}
      <MainCard/>
    </>
  )
}

export default App
