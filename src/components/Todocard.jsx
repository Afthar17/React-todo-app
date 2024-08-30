import React from 'react'

export default function Todocard(props) {
  const {children ,deletetodos,index,edittodos}= props
  return (
    <li className='todoItem' >
      {children}
        <div className="actionsContainer">
          <button onClick={()=>{
            edittodos(index)
          }}><i class="fa-regular fa-pen-to-square"></i></button>
          <button onClick={( )=>{
            deletetodos(index)
          }}><i class="fa-solid fa-trash"></i></button>
        </div>
    </li>
  )
}
