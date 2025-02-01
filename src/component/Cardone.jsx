import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from '@fortawesome/free-solid-svg-icons'
function Cardone() {
    return (
        <div className='flex justify-center p-3'>
            <div className='rounded-xl border-2 border-cyan-500 bg-slate-900 text-center w-2/3'>
                <h3 className='text-slate-400 flex-1 text-sm pt-2'>Maximum funding</h3>
                <h1 className='text-white text-3xl font-bold'>Rp<span className='pl-1'>17.484.500</span></h1>
                <hr class="border-t border-gray-600 mt-3 mx-auto w-4/5"/>
                <div className='text-white flex justify-between p-3'>
                    <div className='flex flex-col items-start'>
                        <h1 className='font-bold text-sm'>Honda  ADV 150 CBS</h1>
                        <h3 className='text-slate-400 text-sm'>2022</h3>
                    </div>
                    <div>
                        <h1><FontAwesomeIcon icon={faSliders} /></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardone