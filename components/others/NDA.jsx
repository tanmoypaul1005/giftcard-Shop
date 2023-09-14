import React from 'react';
import { TfiReload } from "react-icons/tfi";

export default function NoDataAvailable({ message = 'No Data Available!', onClick = () => { } }) {
  return (
    <div className='flex flex-col items-center justify-center space-y-10 w-full h-full'>
      <div className='text-center text-2xl font-bold'>{message}</div>
      <button onClick={onClick} type='button' className='mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow'>
       <div className="flex flex-row justify-center space-x-2 items-center">
       <TfiReload />
        <p>Reload</p>
       </div>
      </button>
    </div>
  )
}
