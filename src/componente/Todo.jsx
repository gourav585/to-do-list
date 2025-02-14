import React from 'react'

function Todo({todo,index,deltodo}) {
  return (
    <div className='flex justify-between w-[500px] border-2 border-gray-500 text-xl  m-1 rounded-xl p-4 '>
    <p>{todo}</p>
    <div className=''>
        <input type="checkbox" />
        <button onClick={()=>deltodo(index)} className='border-2 bored-black rounded-xl p-1.5 mx-1  bg-[#f44336] text-white cursor-pointer  hover:bg-[#ff0000]'>Delete</button>
    </div>
</div>

  )
}

export default Todo
