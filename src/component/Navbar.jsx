import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div className='flex justify-between bg-slate-800 p-3'>
        <div  className='text-white font-semibold'><FontAwesomeIcon icon={faChevronLeft} /></div>
        <h3 className='text-white font-semibold'>Loan Calculator</h3>
        <h4 className='text-white font-semibold'><FontAwesomeIcon icon={faEllipsisVertical} /></h4>
    </div>
  )
}

export default Navbar