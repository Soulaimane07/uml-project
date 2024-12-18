import React from 'react'
import { IoClose } from 'react-icons/io5'

function AddAttribute({setAddAttribute}) {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-35 justify-center items-center flex w-full h-screen'>
        <div className='w-1/3 rounded-md  bg-white px-10 py-4'>
            <div className='flex items-start justify-between'>
                <h1 className=' font-bold text-3xl mb-6'> Add Attribute/Method </h1>
                <button onClick={()=> setAddAttribute(false)} className='mt-2 hover:bg-gray-600 hover:text-white rounded-md transition-all'> <IoClose size={28} /> </button>
            </div>

            <div>
                <select>
                    <option> Attribute </option>
                    <option> Method </option>
                </select>
                <div>
                    <input placeholder='Attribue' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAttribute