import React, { useState } from 'react'

export default function TodoIn(props) {
  const {handletodos ,todoValue, setTodoValue} = props
  

  return (
    <header>
        <input type="text" placeholder='Enter todo.....' value = {todoValue} onChange={(e)=>{
          setTodoValue(e.target.value)

        }}/>
        <button onClick ={
          ()=>{
          handletodos(todoValue)
          setTodoValue('')
        }}>Add</button>
    </header>
  )
}
