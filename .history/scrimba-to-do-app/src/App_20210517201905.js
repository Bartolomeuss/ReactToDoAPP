import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
const test = {
  beer: "grolsch"
}

    return (
        <div className="todo-list">
            <TodoItem test.beer/>
            
        </div>
    )
}

export default App