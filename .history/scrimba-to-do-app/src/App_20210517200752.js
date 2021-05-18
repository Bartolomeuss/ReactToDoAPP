import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
const test ={
  thing: "wash",
  id: 0
}

    return (
        <div className="todo-list">
            <TodoItem test/>
            
        </div>
    )
}

export default App