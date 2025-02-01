import React from 'react'
import Slider from './Slider'
function Cardthree() {
  return (
    <div className='flex justify-center p-3 m-1'>
    <div className='rounded-xl bg-slate-900 w-2/3'>
    <div className='flex-col p-2'>
        <h3 className='text-slate-400 text-sm'>Loan Amount</h3>
        <h1 className='text-white text-medium font-bold mb-3'>Rp<span className='pl-1'>14.500.000</span></h1>
        {/* <hr class="border-t border-white mx-auto w-4/5 mt-3"/>
         */}
         <Slider/>
    </div>
    <div className='text-white flex justify-between p-2 mb-1'>
            <div>
                <h4 className='font-bold text-sm text-slate-600'>1000.000</h4>
            </div>
            <div>
                <h4 className='font-bold text-sm text-slate-600'>17.400.000</h4>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cardthree