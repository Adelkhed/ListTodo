import React,{useState} from 'react'

const TodoList = () => {
  const[todos,setTodos]=useState([]);
  const [newTodo,setNewTodo]=useState("")
  const handleAddTodo = () => {
        if (newTodo !== "") {
        setTodos([...todos,{text:newTodo,checked:false}]);
        setNewTodo("");
        }
  };
  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index,1)
    setTodos(newTodo)
  };
  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked =!newTodos[index].checked;
    setTodos(newTodos);
  }
    return (
    <div >
        <div>List of Todo</div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
        
        <ul >
            {todos.map((todo,index) => 
                (
                
                    <li key={index} >
                       <span style={{textDecoration:todo.checked ?"line-through" :"none"}}> {todo.text}</span>
                        <input type="checkbox" checked={todo.checked} onChange={() => handleToggle(index)}/>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                
            ))}
        </ul>
        
    </div>
  )
}

export default TodoList