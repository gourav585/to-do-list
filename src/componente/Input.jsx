import React from 'react'

function Input({ InputVal, writetodo, addtodo }) {
    return (
        <div className='flex justify-center items-center flex-col' >
            <h1 className='font-bold text-2xl py-4'>To Do list</h1>

            <input type="text" placeholder='enter you task' value={InputVal} onChange={writetodo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " />

            <button onClick={addtodo} className="bg-red-500 hover:bg-[#ff0000] hover:w-[40.5px]  hover:h-[40.5px] text-black rounded-full text-2xl w-[40px] h-[40px] text-center my-2 cursor-pointer ">+</button>
        </div>
    )
}

export default Input
