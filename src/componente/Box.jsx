import React from 'react'
import Todo from './todo'

function Box({todos,deltodo}) {
    return (
        <div className='flex justify-center items-center flex-col mt-5'>
            {todos.map((todos,index)=>{
                return(
                   <Todo todo={todos} index={index} deltodo={deltodo} />
                )
            })}

            </div>
    )
}

export default Box
