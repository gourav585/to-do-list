import React, { useState } from 'react'
import Input from './componente/input'
import Box from './componente/box'

function App() {
  const [InputVal, setInputVal] = useState('')
  const [todos, settodos] = useState([])
  function writetodo(e) {
    setInputVal(e.target.value)
  }
  function addtodo() {
    if (InputVal != '') {
      settodos((prevtodo) => [...prevtodo, InputVal])
      setInputVal('')
    }
  }
  function deltodo(todoindex) {
    settodos((prevtodo) => prevtodo.filter((prevtodos, prevtodosindex) => {
      return prevtodosindex != todoindex
    })



    );
  }

  console.log(todos)
  return (
    <>
      <Input InputVal={InputVal} writetodo={writetodo} addtodo={addtodo} />
      <Box todos={todos}  deltodo={deltodo} />

    </>
  )
}

export default App
