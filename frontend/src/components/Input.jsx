import React from 'react'

function Input({name, label,icon,change}) {
  return (
    <div className='flex flex-col'>
            <label className='text-md font-semibold '> {label} <span className='text-red-500'>*</span></label>
            <div className='flex items-center bg-gray-100 p-2 rounded-lg mt-1 gap-x-2'  >
           {icon}
            <input type="text" className='input-custom' name={name} required  onChange={change}/>
     </div>
 </div>
  )
}

export default Input