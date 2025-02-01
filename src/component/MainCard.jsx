import React from 'react'
import Cardone from './Cardone.jsx'
import Cardtwo from './Cardtwo.jsx'
import Cardthree from './Cardthree.jsx'
import Cardfour from './Cardfour.jsx'
import Navbar from './Navbar.jsx'
function MainCard() {
  return (
    <div className='bg-slate-800 flex-col items-center h-full'>
        <Navbar/>
        <Cardone/>
        <Cardtwo/>
        <Cardthree/>
        <Cardfour/>
    </div>
  )
}

export default MainCard