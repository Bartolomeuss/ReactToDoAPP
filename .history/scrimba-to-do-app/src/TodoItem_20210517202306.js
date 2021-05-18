import React from "react"

function TodoItem(props) {
    console.log(props.todo)
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p></p>
        </div>
    )
}

export default TodoItem