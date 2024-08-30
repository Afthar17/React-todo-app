import { useState ,useEffect} from "react"
import Todocard from "./components/Todocard"
import TodoIn from "./components/TodoIn"
import Todolist from "./components/Todolist"


function App() {
   

  const [todos,setTodos] = useState([])
  const [todoValue , setTodoValue] = useState('')
  
  function persist(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList
    }))
  }

  function handletodos(newtodos){
    const Addtodos = [...todos,newtodos]
    persist(Addtodos)
    setTodos(Addtodos)
  }
  function deletetodos(index){
    const Addtodos = todos.filter((todo , todoindex)=>{
      return todoindex !== index
    })
    persist(Addtodos)
    setTodos(Addtodos)
  }
  function edittodos(index){
    const valueTobeEdited = todos[index]
    setTodoValue(valueTobeEdited)
    deletetodos(index)
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }
    let localtodos = localStorage.getItem('todos')
    if (!localtodos){
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos)
  },[])


  return (
    <>
      <>
        <TodoIn todoValue = {todoValue} setTodoValue = {setTodoValue}  handletodos = {handletodos}/>
        <Todolist deletetodos ={deletetodos} todos = {todos} edittodos={edittodos}/>
      </>
    </>
  )
}

export default App
