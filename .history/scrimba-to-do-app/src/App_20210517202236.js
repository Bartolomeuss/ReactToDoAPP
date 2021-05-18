import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
const tosti = {
  beer: "grolsch"
}

    return (
        <div className="todo-list">
            <TodoItem todo={{tosti}}/>
            
        </div>
    )
}

export default App