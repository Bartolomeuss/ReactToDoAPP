import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.thing}</p>
        </div>
    )
}

export default TodoItem