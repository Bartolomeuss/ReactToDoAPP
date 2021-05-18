import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {

todosData.map(item => console.log(item))



    return (
        <div className="todo-list">
            <TodoItem />
            
        </div>
    )
    }

export default App